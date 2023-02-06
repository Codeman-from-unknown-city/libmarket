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
import Financev3Period from './Financev3Period';

/**
 * The V3FinanceCashFlowStatementListRequest model module.
 * @module model/V3FinanceCashFlowStatementListRequest
 * @version 2.1
 */
class V3FinanceCashFlowStatementListRequest {
    /**
     * Constructs a new <code>V3FinanceCashFlowStatementListRequest</code>.
     * @alias module:model/V3FinanceCashFlowStatementListRequest
     * @param date {module:model/Financev3Period} 
     * @param page {Number} Номер страницы, возвращаемой в запросе.
     * @param pageSize {Number} Количество элементов на странице.
     */
    constructor(date, page, pageSize) { 
        
        V3FinanceCashFlowStatementListRequest.initialize(this, date, page, pageSize);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, page, pageSize) { 
        obj['date'] = date;
        obj['page'] = page;
        obj['page_size'] = pageSize;
    }

    /**
     * Constructs a <code>V3FinanceCashFlowStatementListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FinanceCashFlowStatementListRequest} obj Optional instance to populate.
     * @return {module:model/V3FinanceCashFlowStatementListRequest} The populated <code>V3FinanceCashFlowStatementListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FinanceCashFlowStatementListRequest();

            if (data.hasOwnProperty('date')) {
                obj['date'] = Financev3Period.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FinanceCashFlowStatementListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FinanceCashFlowStatementListRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V3FinanceCashFlowStatementListRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `date`
        if (data['date']) { // data not null
          Financev3Period.validateJSON(data['date']);
        }

        return true;
    }


}

V3FinanceCashFlowStatementListRequest.RequiredProperties = ["date", "page", "page_size"];

/**
 * @member {module:model/Financev3Period} date
 */
V3FinanceCashFlowStatementListRequest.prototype['date'] = undefined;

/**
 * Номер страницы, возвращаемой в запросе.
 * @member {Number} page
 */
V3FinanceCashFlowStatementListRequest.prototype['page'] = undefined;

/**
 * Количество элементов на странице.
 * @member {Number} page_size
 */
V3FinanceCashFlowStatementListRequest.prototype['page_size'] = undefined;






export default V3FinanceCashFlowStatementListRequest;

