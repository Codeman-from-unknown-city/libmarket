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
import V3FinanceCashFlowStatementListResponseResult from './V3FinanceCashFlowStatementListResponseResult';

/**
 * The V3FinanceCashFlowStatementListResponse model module.
 * @module model/V3FinanceCashFlowStatementListResponse
 * @version 2.1
 */
class V3FinanceCashFlowStatementListResponse {
    /**
     * Constructs a new <code>V3FinanceCashFlowStatementListResponse</code>.
     * @alias module:model/V3FinanceCashFlowStatementListResponse
     */
    constructor() { 
        
        V3FinanceCashFlowStatementListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FinanceCashFlowStatementListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FinanceCashFlowStatementListResponse} obj Optional instance to populate.
     * @return {module:model/V3FinanceCashFlowStatementListResponse} The populated <code>V3FinanceCashFlowStatementListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FinanceCashFlowStatementListResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = V3FinanceCashFlowStatementListResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FinanceCashFlowStatementListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FinanceCashFlowStatementListResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          V3FinanceCashFlowStatementListResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/V3FinanceCashFlowStatementListResponseResult} result
 */
V3FinanceCashFlowStatementListResponse.prototype['result'] = undefined;






export default V3FinanceCashFlowStatementListResponse;

