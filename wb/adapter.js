import WbApiClient from './apiClient'
import { MarketplaceApi, DefaultApi } from './index'

export default class WbApiAdapter {
    static name = 'Wildberries';

    constructor(args) {
        const { apiKey } = args;
        const apiClient = new WbApiClient(apiKey);
        this.name = WbApiAdapter.name;
        this.marketApi = new MarketplaceApi(apiClient);
        this.defaultApi = new DefaultApi(apiClient);
    }

    /**
    * Fetch list of categories by substring.
    * @param {String} substr category name substring.
    * @param {String} cnt max count of categories to return
    * @returns {Array.<String>} list of category names.
    */
    async fetchCategories(substr, cnt, progressListener) {
        try {
            const ans = await this.defaultApi.contentV1ObjectAllGet(
                { name: substr, top: cnt },
                progressListener
            );
            return ans.data.map(obj => obj.objectName);
        }
        catch {
            return [];
        }
    }

    /**
    * Fetch list of characteristics for category.
    * @param {String} name category name.
    * @returns {Promise.<Array.<Object>>}
    */
    async fetchCharacteristics(name, progressListener) {
        try {
            const ans = await this.defaultApi.contentV1ObjectCharacteristicsObjectNameGet(
                name, {}, progressListener
            );
            return ans.data.map(o => ({
                title: o.name,
                required: o.required,
                type: o.charcType,
            }));
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    async fetchOrders() {
        return this.marketApi.apiV3OrdersGet(50, 0, {}, null);
    }
}
