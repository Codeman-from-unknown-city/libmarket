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
 * The ReturnsGetReturnsCompanyFboRequestFilter model module.
 * @module model/ReturnsGetReturnsCompanyFboRequestFilter
 * @version 2.1
 */
class ReturnsGetReturnsCompanyFboRequestFilter {
    /**
     * Constructs a new <code>ReturnsGetReturnsCompanyFboRequestFilter</code>.
     * Фильтр.
     * @alias module:model/ReturnsGetReturnsCompanyFboRequestFilter
     */
    constructor() { 
        
        ReturnsGetReturnsCompanyFboRequestFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsGetReturnsCompanyFboRequestFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsGetReturnsCompanyFboRequestFilter} obj Optional instance to populate.
     * @return {module:model/ReturnsGetReturnsCompanyFboRequestFilter} The populated <code>ReturnsGetReturnsCompanyFboRequestFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsGetReturnsCompanyFboRequestFilter();

            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsGetReturnsCompanyFboRequestFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsGetReturnsCompanyFboRequestFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['status'])) {
            throw new Error("Expected the field `status` to be an array in the JSON data but got " + data['status']);
        }

        return true;
    }


}



/**
 * Идентификатор отправления.
 * @member {String} posting_number
 */
ReturnsGetReturnsCompanyFboRequestFilter.prototype['posting_number'] = undefined;

/**
 * Статус возврата:   - `Created` — возврат создан,   - `ReturnedToOzon` — возврат на складе Ozon. 
 * @member {Array.<String>} status
 */
ReturnsGetReturnsCompanyFboRequestFilter.prototype['status'] = undefined;






export default ReturnsGetReturnsCompanyFboRequestFilter;
