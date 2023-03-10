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
 * The V3FinanceCashFlowStatementListResponsePeriod model module.
 * @module model/V3FinanceCashFlowStatementListResponsePeriod
 * @version 2.1
 */
class V3FinanceCashFlowStatementListResponsePeriod {
    /**
     * Constructs a new <code>V3FinanceCashFlowStatementListResponsePeriod</code>.
     * Данные о периоде.
     * @alias module:model/V3FinanceCashFlowStatementListResponsePeriod
     */
    constructor() { 
        
        V3FinanceCashFlowStatementListResponsePeriod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FinanceCashFlowStatementListResponsePeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FinanceCashFlowStatementListResponsePeriod} obj Optional instance to populate.
     * @return {module:model/V3FinanceCashFlowStatementListResponsePeriod} The populated <code>V3FinanceCashFlowStatementListResponsePeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FinanceCashFlowStatementListResponsePeriod();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('begin')) {
                obj['begin'] = ApiClient.convertToType(data['begin'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FinanceCashFlowStatementListResponsePeriod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FinanceCashFlowStatementListResponsePeriod</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Идентификатор периода.
 * @member {Number} id
 */
V3FinanceCashFlowStatementListResponsePeriod.prototype['id'] = undefined;

/**
 * Начало периода.
 * @member {Date} begin
 */
V3FinanceCashFlowStatementListResponsePeriod.prototype['begin'] = undefined;

/**
 * Конец периода.
 * @member {Date} end
 */
V3FinanceCashFlowStatementListResponsePeriod.prototype['end'] = undefined;






export default V3FinanceCashFlowStatementListResponsePeriod;

