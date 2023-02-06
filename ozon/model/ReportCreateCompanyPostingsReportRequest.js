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
import ReportCreateCompanyPostingsReportRequestFilter from './ReportCreateCompanyPostingsReportRequestFilter';

/**
 * The ReportCreateCompanyPostingsReportRequest model module.
 * @module model/ReportCreateCompanyPostingsReportRequest
 * @version 2.1
 */
class ReportCreateCompanyPostingsReportRequest {
    /**
     * Constructs a new <code>ReportCreateCompanyPostingsReportRequest</code>.
     * @alias module:model/ReportCreateCompanyPostingsReportRequest
     */
    constructor() { 
        
        ReportCreateCompanyPostingsReportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportCreateCompanyPostingsReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportCreateCompanyPostingsReportRequest} obj Optional instance to populate.
     * @return {module:model/ReportCreateCompanyPostingsReportRequest} The populated <code>ReportCreateCompanyPostingsReportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateCompanyPostingsReportRequest();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ReportCreateCompanyPostingsReportRequestFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateCompanyPostingsReportRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateCompanyPostingsReportRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          ReportCreateCompanyPostingsReportRequestFilter.validateJSON(data['filter']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }

        return true;
    }


}



/**
 * @member {module:model/ReportCreateCompanyPostingsReportRequestFilter} filter
 */
ReportCreateCompanyPostingsReportRequest.prototype['filter'] = undefined;

/**
 * Язык ответа:   - `RU` — русский,   - `EN` — английский. 
 * @member {String} language
 * @default 'DEFAULT'
 */
ReportCreateCompanyPostingsReportRequest.prototype['language'] = 'DEFAULT';






export default ReportCreateCompanyPostingsReportRequest;
