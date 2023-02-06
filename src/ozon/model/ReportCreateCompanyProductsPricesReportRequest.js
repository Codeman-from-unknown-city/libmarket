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
 * The ReportCreateCompanyProductsPricesReportRequest model module.
 * @module model/ReportCreateCompanyProductsPricesReportRequest
 * @version 2.1
 */
class ReportCreateCompanyProductsPricesReportRequest {
    /**
     * Constructs a new <code>ReportCreateCompanyProductsPricesReportRequest</code>.
     * @alias module:model/ReportCreateCompanyProductsPricesReportRequest
     */
    constructor() { 
        
        ReportCreateCompanyProductsPricesReportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportCreateCompanyProductsPricesReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportCreateCompanyProductsPricesReportRequest} obj Optional instance to populate.
     * @return {module:model/ReportCreateCompanyProductsPricesReportRequest} The populated <code>ReportCreateCompanyProductsPricesReportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateCompanyProductsPricesReportRequest();

            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], ['String']);
            }
            if (data.hasOwnProperty('search')) {
                obj['search'] = ApiClient.convertToType(data['search'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], ['Number']);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateCompanyProductsPricesReportRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateCompanyProductsPricesReportRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['offer_id'])) {
            throw new Error("Expected the field `offer_id` to be an array in the JSON data but got " + data['offer_id']);
        }
        // ensure the json data is a string
        if (data['search'] && !(typeof data['search'] === 'string' || data['search'] instanceof String)) {
            throw new Error("Expected the field `search` to be a primitive type in the JSON string but got " + data['search']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sku'])) {
            throw new Error("Expected the field `sku` to be an array in the JSON data but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }

        return true;
    }


}



/**
 * Язык ответа:   - `RU` — русский,   - `EN` — английский. 
 * @member {String} language
 * @default 'DEFAULT'
 */
ReportCreateCompanyProductsPricesReportRequest.prototype['language'] = 'DEFAULT';

/**
 * Идентифиĸатор товара в системе продавца — артиĸул.
 * @member {Array.<String>} offer_id
 */
ReportCreateCompanyProductsPricesReportRequest.prototype['offer_id'] = undefined;

/**
 * Поисĸ по содержанию записи, проверяет наличие.
 * @member {String} search
 */
ReportCreateCompanyProductsPricesReportRequest.prototype['search'] = undefined;

/**
 * Идентифиĸатор товара в системе Ozon — SKU.
 * @member {Array.<Number>} sku
 */
ReportCreateCompanyProductsPricesReportRequest.prototype['sku'] = undefined;

/**
 * Фильтр по видимости товара:   - `ALL` — все товары, кроме архивных.   - `VISIBLE` — товары, которые видны покупателям.   - `INVISIBLE` — товары, которые не видны покупателям.   - `EMPTY_STOCK` — товары, у которых не указано наличие.   - `NOT_MODERATED` — товары, которые не прошли модерацию.   - `MODERATED` — товары, которые прошли модерацию.   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.   - `READY_TO_SUPPLY` — товары, готовые к поставке.   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.   - `TO_SUPPLY` — товары, готовые к продаже.   - `IN_SALE` — товары в продаже.   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.   - `BANNED` — заблокированные товары.   - `OVERPRICED` — товары с завышенной ценой.   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.   - `EMPTY_BARCODE` — товары без штрихкода.   - `BARCODE_EXISTS` — товары со штрихкодом.   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%. 
 * @member {String} visibility
 * @default 'ALL'
 */
ReportCreateCompanyProductsPricesReportRequest.prototype['visibility'] = 'ALL';






export default ReportCreateCompanyProductsPricesReportRequest;

