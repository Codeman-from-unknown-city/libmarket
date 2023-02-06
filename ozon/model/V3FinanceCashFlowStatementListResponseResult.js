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
import FinanceCashFlowStatementListResponseCashFlow from './FinanceCashFlowStatementListResponseCashFlow';

/**
 * The V3FinanceCashFlowStatementListResponseResult model module.
 * @module model/V3FinanceCashFlowStatementListResponseResult
 * @version 2.1
 */
class V3FinanceCashFlowStatementListResponseResult {
    /**
     * Constructs a new <code>V3FinanceCashFlowStatementListResponseResult</code>.
     * Результат работы метода.
     * @alias module:model/V3FinanceCashFlowStatementListResponseResult
     */
    constructor() { 
        
        V3FinanceCashFlowStatementListResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FinanceCashFlowStatementListResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FinanceCashFlowStatementListResponseResult} obj Optional instance to populate.
     * @return {module:model/V3FinanceCashFlowStatementListResponseResult} The populated <code>V3FinanceCashFlowStatementListResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FinanceCashFlowStatementListResponseResult();

            if (data.hasOwnProperty('cash_flows')) {
                obj['cash_flows'] = ApiClient.convertToType(data['cash_flows'], [FinanceCashFlowStatementListResponseCashFlow]);
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FinanceCashFlowStatementListResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FinanceCashFlowStatementListResponseResult</code>.
     */
    static validateJSON(data) {
        if (data['cash_flows']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cash_flows'])) {
                throw new Error("Expected the field `cash_flows` to be an array in the JSON data but got " + data['cash_flows']);
            }
            // validate the optional field `cash_flows` (array)
            for (const item of data['cash_flows']) {
                FinanceCashFlowStatementListResponseCashFlow.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список отчётов.
 * @member {Array.<module:model/FinanceCashFlowStatementListResponseCashFlow>} cash_flows
 */
V3FinanceCashFlowStatementListResponseResult.prototype['cash_flows'] = undefined;

/**
 * Количество страниц с отчётами.
 * @member {Number} page_count
 */
V3FinanceCashFlowStatementListResponseResult.prototype['page_count'] = undefined;






export default V3FinanceCashFlowStatementListResponseResult;
