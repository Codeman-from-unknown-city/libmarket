import _ from 'lodash';
import OzonApiClient from './ApiClient'
import { CategoryAPIApi, CategoryGetCategoryTreeRequest } from './index'
import Categoryv3CategoryAttributesRequest from './model/Categoryv3CategoryAttributesRequest';

export default class OzonApiAdapter {
    static name = 'Ozon';

    constructor(args) {
        this.args = args;
        this.categories = null;
        const apiClient = new OzonApiClient();
        this.categoryApi = new CategoryAPIApi(apiClient);
        this.name = OzonApiAdapter.name;
    }

    static #doExtractCategories(category) {
        return category.children.length == 0
               ? category
               : category.children.map(OzonApiAdapter.#doExtractCategories);
    }

    static #extractCategories(categories) {
        return _.flattenDeep(
            categories.map(OzonApiAdapter.#doExtractCategories)
        );
    }

    async #doFetchCategories(progressListener) {
        const { apiKey, clientId } = this.args;
        const req = new CategoryGetCategoryTreeRequest();
        req.category_id = 0; // fetch all categories
        req.language = 'RU';
        try {
            const ans = await this.categoryApi.categoryAPIGetCategoryTree(
                clientId,
                apiKey,
                req,
                progressListener
            );
            const { result: allCategories } = ans;
            return OzonApiAdapter.#extractCategories(allCategories);
        } catch {
            return [];
        }
    }

    /**
    * Fetch list of categories by substring.
    * @param {String} substr category name substring.
    * @param {String} cnt max count of categories to return
    * @returns {Array.<String>} list of category names.
    */
    async fetchCategories(substr, cnt, progressListener) {
        if (!this.categories)
            this.categories = await this.#doFetchCategories(progressListener);
        const filter = c => c.title.toLowerCase().indexOf(substr) != -1;
        return _.take(
            this.categories.filter(filter)
                           .map(c => c.title),
            cnt
        );
    }

    /**
    * Fetch list of characteristics for category.
    * @param {String} name category name.
    * @returns {Promise.<Array.<Object>>}
    */
    async fetchCharacteristics(name, progressListener) {
        if (!this.categories)
            this.categories = await this.#doFetchCategories(progressListener);
        const { apiKey, clientId } = this.args;
        const req = new Categoryv3CategoryAttributesRequest();
        req.language = 'RU';
        req.attribute_type = 'ALL';
        req.category_id = [this.categories.find(c => c.title === name)
                                          .category_id];
        try {
            const ans = await this.categoryApi.categoryAPIGetCategoryAttributesV3(
                clientId,
                apiKey,
                req,
                progressListener
            );
            return ans.result[0].attributes.map(o => ({
                title: o.name,
                required: o.is_required,
                type: o.type,
            }));
        } catch (e) {
            console.error(e);
            return [];
        };
    }
}
