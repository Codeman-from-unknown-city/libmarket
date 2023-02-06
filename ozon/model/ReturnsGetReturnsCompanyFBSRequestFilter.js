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
import FilterTimeRange from './FilterTimeRange';

/**
 * The ReturnsGetReturnsCompanyFBSRequestFilter model module.
 * @module model/ReturnsGetReturnsCompanyFBSRequestFilter
 * @version 2.1
 */
class ReturnsGetReturnsCompanyFBSRequestFilter {
    /**
     * Constructs a new <code>ReturnsGetReturnsCompanyFBSRequestFilter</code>.
     * Фильтр.
     * @alias module:model/ReturnsGetReturnsCompanyFBSRequestFilter
     */
    constructor() { 
        
        ReturnsGetReturnsCompanyFBSRequestFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsGetReturnsCompanyFBSRequestFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsGetReturnsCompanyFBSRequestFilter} obj Optional instance to populate.
     * @return {module:model/ReturnsGetReturnsCompanyFBSRequestFilter} The populated <code>ReturnsGetReturnsCompanyFBSRequestFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsGetReturnsCompanyFBSRequestFilter();

            if (data.hasOwnProperty('accepted_from_customer_moment')) {
                obj['accepted_from_customer_moment'] = ApiClient.convertToType(data['accepted_from_customer_moment'], [FilterTimeRange]);
            }
            if (data.hasOwnProperty('last_free_waiting_day')) {
                obj['last_free_waiting_day'] = ApiClient.convertToType(data['last_free_waiting_day'], [FilterTimeRange]);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], ['String']);
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('product_offer_id')) {
                obj['product_offer_id'] = ApiClient.convertToType(data['product_offer_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsGetReturnsCompanyFBSRequestFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsGetReturnsCompanyFBSRequestFilter</code>.
     */
    static validateJSON(data) {
        if (data['accepted_from_customer_moment']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accepted_from_customer_moment'])) {
                throw new Error("Expected the field `accepted_from_customer_moment` to be an array in the JSON data but got " + data['accepted_from_customer_moment']);
            }
            // validate the optional field `accepted_from_customer_moment` (array)
            for (const item of data['accepted_from_customer_moment']) {
                FilterTimeRange.validateJsonObject(item);
            };
        }
        if (data['last_free_waiting_day']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['last_free_waiting_day'])) {
                throw new Error("Expected the field `last_free_waiting_day` to be an array in the JSON data but got " + data['last_free_waiting_day']);
            }
            // validate the optional field `last_free_waiting_day` (array)
            for (const item of data['last_free_waiting_day']) {
                FilterTimeRange.validateJsonObject(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['posting_number'])) {
            throw new Error("Expected the field `posting_number` to be an array in the JSON data but got " + data['posting_number']);
        }
        // ensure the json data is a string
        if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
            throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
        }
        // ensure the json data is a string
        if (data['product_offer_id'] && !(typeof data['product_offer_id'] === 'string' || data['product_offer_id'] instanceof String)) {
            throw new Error("Expected the field `product_offer_id` to be a primitive type in the JSON string but got " + data['product_offer_id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Время приёма возврата от поĸупателя.
 * @member {Array.<module:model/FilterTimeRange>} accepted_from_customer_moment
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['accepted_from_customer_moment'] = undefined;

/**
 * Последний день бесплатного хранения.
 * @member {Array.<module:model/FilterTimeRange>} last_free_waiting_day
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['last_free_waiting_day'] = undefined;

/**
 * Идентификатор заказа.
 * @member {Number} order_id
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['order_id'] = undefined;

/**
 * Идентификатор отправления.
 * @member {Array.<String>} posting_number
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['posting_number'] = undefined;

/**
 * Название товара.
 * @member {String} product_name
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['product_name'] = undefined;

/**
 * Артикул товара.
 * @member {String} product_offer_id
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['product_offer_id'] = undefined;

/**
 * Статус возврата:   - `returned_to_seller` — возвращён продавцу,   - `waiting_for_seller` — в ожидании продавца,   - `accepted_from_customer` — принят от покупателя,   - `cancelled_with_compensation` — отменено с компенсацией,   - `ready_for_shipment` — готов к отправке. 
 * @member {String} status
 */
ReturnsGetReturnsCompanyFBSRequestFilter.prototype['status'] = undefined;






export default ReturnsGetReturnsCompanyFBSRequestFilter;
