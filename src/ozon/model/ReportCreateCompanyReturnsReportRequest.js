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
import ReportCreateCompanyReturnsReportRequestFilter from './ReportCreateCompanyReturnsReportRequestFilter';

/**
 * The ReportCreateCompanyReturnsReportRequest model module.
 * @module model/ReportCreateCompanyReturnsReportRequest
 * @version 2.1
 */
class ReportCreateCompanyReturnsReportRequest {
    /**
     * Constructs a new <code>ReportCreateCompanyReturnsReportRequest</code>.
     * @alias module:model/ReportCreateCompanyReturnsReportRequest
     */
    constructor() { 
        
        ReportCreateCompanyReturnsReportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportCreateCompanyReturnsReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportCreateCompanyReturnsReportRequest} obj Optional instance to populate.
     * @return {module:model/ReportCreateCompanyReturnsReportRequest} The populated <code>ReportCreateCompanyReturnsReportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateCompanyReturnsReportRequest();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ReportCreateCompanyReturnsReportRequestFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateCompanyReturnsReportRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateCompanyReturnsReportRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          ReportCreateCompanyReturnsReportRequestFilter.validateJSON(data['filter']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }

        return true;
    }


}



/**
 * @member {module:model/ReportCreateCompanyReturnsReportRequestFilter} filter
 */
ReportCreateCompanyReturnsReportRequest.prototype['filter'] = undefined;

/**
 * Язык ответа:   - `RU` — русский,   - `EN` — английский. 
 * @member {String} language
 * @default 'DEFAULT'
 */
ReportCreateCompanyReturnsReportRequest.prototype['language'] = 'DEFAULT';






export default ReportCreateCompanyReturnsReportRequest;
