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

/**
 * The ProductImportProductsStocksResponseError model module.
 * @module model/ProductImportProductsStocksResponseError
 * @version 2.1
 */
class ProductImportProductsStocksResponseError {
    /**
     * Constructs a new <code>ProductImportProductsStocksResponseError</code>.
     * @alias module:model/ProductImportProductsStocksResponseError
     */
    constructor() { 
        
        ProductImportProductsStocksResponseError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImportProductsStocksResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductImportProductsStocksResponseError} obj Optional instance to populate.
     * @return {module:model/ProductImportProductsStocksResponseError} The populated <code>ProductImportProductsStocksResponseError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImportProductsStocksResponseError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductImportProductsStocksResponseError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductImportProductsStocksResponseError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Код ошибки: - `OVER_MAX_OVH_KGT` — вес или габариты товара больше максимальных. Обновить количество не получится. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков). - `OVER_MAX_OVH_NON_KGT` — вы не можете продавать крупногабаритные товары с этого склада. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков). - `NON_KGT_ON_KGT_WAREHOUSE` — все ваши товары продаются как крупногабаритные, а вы хотите продавать обычный. Он попадёт под условия продажи крупногабаритных. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков). - `STOCK_TOO_BIG` — указано слишком большое количество, попробуйте уменьшить его. - `INVALID_STATE` — товар не прошёл все этапы создания, проверьте его статус. - `CANNOT_CREATE_FBS_SKU` — произошла внутренняя ошибка при обновлении наличия, попробуйте ещё раз. - `NOT_FOUND` — не удалось найти указанный товар. - `PRODUCT_HAS_NOT_BEEN_TAGGED_YET` — товар ещё не пометили тегами «КГТ» или «неКГТ», так как не указаны габариты товара или система для расстановки тегов ещё не обработала его. 
 * @member {String} code
 */
ProductImportProductsStocksResponseError.prototype['code'] = undefined;

/**
 * Причина ошибки.
 * @member {String} message
 */
ProductImportProductsStocksResponseError.prototype['message'] = undefined;






export default ProductImportProductsStocksResponseError;

