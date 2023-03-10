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
 * The ReportDiscountedInfoRequest model module.
 * @module model/ReportDiscountedInfoRequest
 * @version 2.1
 */
class ReportDiscountedInfoRequest {
    /**
     * Constructs a new <code>ReportDiscountedInfoRequest</code>.
     * @alias module:model/ReportDiscountedInfoRequest
     */
    constructor() { 
        
        ReportDiscountedInfoRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDiscountedInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportDiscountedInfoRequest} obj Optional instance to populate.
     * @return {module:model/ReportDiscountedInfoRequest} The populated <code>ReportDiscountedInfoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDiscountedInfoRequest();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportDiscountedInfoRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportDiscountedInfoRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}



/**
 * Уникальный идентификатор отчёта.
 * @member {String} code
 */
ReportDiscountedInfoRequest.prototype['code'] = undefined;






export default ReportDiscountedInfoRequest;

