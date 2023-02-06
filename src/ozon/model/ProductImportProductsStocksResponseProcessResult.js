/**
 * Документация Ozon Seller API
 * По вопросам работы с Seller API, обращайтесь в поддержку через личный кабинет.  > [Инструкции по работе с маркетплейсом](https://seller-edu.ozon.ru) 
 *
 * The version of the OpenAPI document: 2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProductImportProductsStocksResponseError from './ProductImportProductsStocksResponseError';

/**
 * The ProductImportProductsStocksResponseProcessResult model module.
 * @module model/ProductImportProductsStocksResponseProcessResult
 * @version 2.1
 */
class ProductImportProductsStocksResponseProcessResult {
    /**
     * Constructs a new <code>ProductImportProductsStocksResponseProcessResult</code>.
     * @alias module:model/ProductImportProductsStocksResponseProcessResult
     */
    constructor() { 
        
        ProductImportProductsStocksResponseProcessResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImportProductsStocksResponseProcessResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductImportProductsStocksResponseProcessResult} obj Optional instance to populate.
     * @return {module:model/ProductImportProductsStocksResponseProcessResult} The populated <code>ProductImportProductsStocksResponseProcessResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImportProductsStocksResponseProcessResult();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ProductImportProductsStocksResponseError]);
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductImportProductsStocksResponseProcessResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductImportProductsStocksResponseProcessResult</code>.
     */
    static validateJSON(data) {
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                ProductImportProductsStocksResponseError.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }

        return true;
    }


}



/**
 * Массив ошибок, которые возникли при обработке запроса.
 * @member {Array.<module:model/ProductImportProductsStocksResponseError>} errors
 */
ProductImportProductsStocksResponseProcessResult.prototype['errors'] = undefined;

/**
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
ProductImportProductsStocksResponseProcessResult.prototype['offer_id'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
ProductImportProductsStocksResponseProcessResult.prototype['product_id'] = undefined;

/**
 * Если информации о товаре успешно обновлена — `true`.
 * @member {Boolean} updated
 */
ProductImportProductsStocksResponseProcessResult.prototype['updated'] = undefined;






export default ProductImportProductsStocksResponseProcessResult;

