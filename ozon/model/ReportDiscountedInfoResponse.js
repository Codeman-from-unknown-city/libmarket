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
 * The ReportDiscountedInfoResponse model module.
 * @module model/ReportDiscountedInfoResponse
 * @version 2.1
 */
class ReportDiscountedInfoResponse {
    /**
     * Constructs a new <code>ReportDiscountedInfoResponse</code>.
     * @alias module:model/ReportDiscountedInfoResponse
     */
    constructor() { 
        
        ReportDiscountedInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDiscountedInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportDiscountedInfoResponse} obj Optional instance to populate.
     * @return {module:model/ReportDiscountedInfoResponse} The populated <code>ReportDiscountedInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDiscountedInfoResponse();

            if (data.hasOwnProperty('report')) {
                obj['report'] = ReportDiscountedInfoResponseReport.constructFromObject(data['report']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportDiscountedInfoResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportDiscountedInfoResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `report`
        if (data['report']) { // data not null
          ReportDiscountedInfoResponseReport.validateJSON(data['report']);
        }

        return true;
    }


}



/**
 * @member {module:model/ReportDiscountedInfoResponseReport} report
 */
ReportDiscountedInfoResponse.prototype['report'] = undefined;






export default ReportDiscountedInfoResponse;

