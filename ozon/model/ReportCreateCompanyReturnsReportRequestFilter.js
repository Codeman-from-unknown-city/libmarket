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
 * The ReportCreateCompanyReturnsReportRequestFilter model module.
 * @module model/ReportCreateCompanyReturnsReportRequestFilter
 * @version 2.1
 */
class ReportCreateCompanyReturnsReportRequestFilter {
    /**
     * Constructs a new <code>ReportCreateCompanyReturnsReportRequestFilter</code>.
     * Фильтр.
     * @alias module:model/ReportCreateCompanyReturnsReportRequestFilter
     */
    constructor() { 
        
        ReportCreateCompanyReturnsReportRequestFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportCreateCompanyReturnsReportRequestFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportCreateCompanyReturnsReportRequestFilter} obj Optional instance to populate.
     * @return {module:model/ReportCreateCompanyReturnsReportRequestFilter} The populated <code>ReportCreateCompanyReturnsReportRequestFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateCompanyReturnsReportRequestFilter();

            if (data.hasOwnProperty('delivery_schema')) {
                obj['delivery_schema'] = ApiClient.convertToType(data['delivery_schema'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateCompanyReturnsReportRequestFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateCompanyReturnsReportRequestFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['delivery_schema'] && !(typeof data['delivery_schema'] === 'string' || data['delivery_schema'] instanceof String)) {
            throw new Error("Expected the field `delivery_schema` to be a primitive type in the JSON string but got " + data['delivery_schema']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Схема доставĸи заĸаза: `fbs` — доставка со своего склада. 
 * @member {String} delivery_schema
 */
ReportCreateCompanyReturnsReportRequestFilter.prototype['delivery_schema'] = undefined;

/**
 * Идентифиĸатор заĸаза.
 * @member {Number} order_id
 */
ReportCreateCompanyReturnsReportRequestFilter.prototype['order_id'] = undefined;

/**
 * Статус заĸаза.
 * @member {String} status
 */
ReportCreateCompanyReturnsReportRequestFilter.prototype['status'] = undefined;






export default ReportCreateCompanyReturnsReportRequestFilter;

