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
import ReportDiscountedInfoResponseReport from './ReportDiscountedInfoResponseReport';

/**
 * The ReportDiscountedListResponse model module.
 * @module model/ReportDiscountedListResponse
 * @version 2.1
 */
class ReportDiscountedListResponse {
    /**
     * Constructs a new <code>ReportDiscountedListResponse</code>.
     * @alias module:model/ReportDiscountedListResponse
     */
    constructor() { 
        
        ReportDiscountedListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDiscountedListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportDiscountedListResponse} obj Optional instance to populate.
     * @return {module:model/ReportDiscountedListResponse} The populated <code>ReportDiscountedListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDiscountedListResponse();

            if (data.hasOwnProperty('reports')) {
                obj['reports'] = ApiClient.convertToType(data['reports'], [ReportDiscountedInfoResponseReport]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportDiscountedListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportDiscountedListResponse</code>.
     */
    static validateJSON(data) {
        if (data['reports']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reports'])) {
                throw new Error("Expected the field `reports` to be an array in the JSON data but got " + data['reports']);
            }
            // validate the optional field `reports` (array)
            for (const item of data['reports']) {
                ReportDiscountedInfoResponseReport.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список отчётов и данные по ним.
 * @member {Array.<module:model/ReportDiscountedInfoResponseReport>} reports
 */
ReportDiscountedListResponse.prototype['reports'] = undefined;






export default ReportDiscountedListResponse;

