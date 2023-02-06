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
import ReportReport from './ReportReport';

/**
 * The ReportListResponseResult model module.
 * @module model/ReportListResponseResult
 * @version 2.1
 */
class ReportListResponseResult {
    /**
     * Constructs a new <code>ReportListResponseResult</code>.
     * Результаты запроса.
     * @alias module:model/ReportListResponseResult
     */
    constructor() { 
        
        ReportListResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportListResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportListResponseResult} obj Optional instance to populate.
     * @return {module:model/ReportListResponseResult} The populated <code>ReportListResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportListResponseResult();

            if (data.hasOwnProperty('reports')) {
                obj['reports'] = ApiClient.convertToType(data['reports'], [ReportReport]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportListResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportListResponseResult</code>.
     */
    static validateJSON(data) {
        if (data['reports']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reports'])) {
                throw new Error("Expected the field `reports` to be an array in the JSON data but got " + data['reports']);
            }
            // validate the optional field `reports` (array)
            for (const item of data['reports']) {
                ReportReport.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Массив со всеми сгенерированными отчётами.
 * @member {Array.<module:model/ReportReport>} reports
 */
ReportListResponseResult.prototype['reports'] = undefined;

/**
 * Суммарное количество отчётов.
 * @member {Number} total
 */
ReportListResponseResult.prototype['total'] = undefined;






export default ReportListResponseResult;

