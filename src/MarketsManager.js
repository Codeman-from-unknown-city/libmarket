import WbApiAdapter from './wb/adapter'
import OzonApiAdapter from './ozon/adapter'

const _ = require('lodash');

const adapters = [WbApiAdapter, OzonApiAdapter];
const adaptersByName = {};
adapters.forEach(a => adaptersByName[a.name] = a);

const DEFAULT_SETTINGS = {
    'Wildberries': {
        apiKey: process.env['WB_API_KEY']
    },
    'Ozon': {
        apiKey: process.env['OZON_API_KEY'],
        clientId: process.env['OZON_CLIENT_ID']
    },
};

/**
 * Manages marketplace APIs calls by common way.
 * @class
*/
export default class MarketsManager {
    #supported = Object.getOwnPropertyNames(adaptersByName);
    #adapterPool = {};
    #inUse = {};

    /**
     * @param {Object.<string, Object>=} marketplacesData marketplaces settings
     */
    constructor(marketplacesData = DEFAULT_SETTINGS) {
        for (const name in marketplacesData) {
            if (this.#marketplaceNotSupported(name))
                throw Error(`'${name}' markeplace not supported`);
            const adapter = new adaptersByName[name](marketplacesData[name]);
            this.#inUse[name] = adapter;
            this.#adapterPool[name] = adapter;
        }
    }

    /**
    * Map of in use marketplaces adapters.
    * @type {Object}
    */
    get inUse() {
        return this.#inUse;
    }

    /**
     * Remove marketplace adapter from in use set.
     * @param {String} marketplace name.
     */
    inUseRemove(name) {
        if (name in this.#inUse)
            delete this.#inUse[name];
    }

    /**
     * Restore marketplace adapter to in use set.
     * @param {String} marketplace name.
     */
    inUseRestore(name) {
        if (this.#marketplaceNotSupported(name))
            throw Error(`'${name}' markeplace not supported`);
        if (!(name in this.#inUse))
            this.#inUse[name] = this.#adapterPool[name];
    }

    /**
    * Reset in use marketplace adapters set.
    */
    reset() {
        for (const name in this.#adapterPool)
            this.inUseRestore(name);
    }

    /**
    * List of names of supported markets.
    * @type {Array.<String>}
    */
    get supported() {
        return this.#supported;
    }

    #marketplaceNotSupported(name) {
        return this.#supported.indexOf(name) == -1;
    }

    /**
    * Fetch list of categories by substring.
    * @param {String} substr substring.
    * @param {String} cnt max count of categories to return
    * @returns {Promise.<Array.<{{name: string, marketplace: string}}>>}
    */
    async fetchCategories(substr, cnt, progressListener) {
        const promises = Object.values(this.#inUse).map(
            adapter => adapter.fetchCategories(substr, cnt, progressListener)
        );
        const results = await Promise.all(promises);
        return results;
    }

    /**
    * Fetch list of characteristics for category.
    * @param {Object[]} selected - The selected categories.
    * @param {string} selected[].title - The name of category.
    * @param {string} selected[].marketplace - The name of marketplace.
    * @returns {Promise.<Array.<Object>>}
    */
    async fetchCharacteristics(selected, progressListener) {
        const promises = selected.map(
            s => this.#inUse[s.marketplace].fetchCharacteristics(
                s.title,
                progressListener
            )
        );
        const results = await Promise.all(promises);
        //return _.concat(...results);
        return results;
    }
}
