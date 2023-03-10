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
import Financev3FinanceTransactionListV3ResponseResult from './Financev3FinanceTransactionListV3ResponseResult';

/**
 * The Financev3FinanceTransactionListV3Response model module.
 * @module model/Financev3FinanceTransactionListV3Response
 * @version 2.1
 */
class Financev3FinanceTransactionListV3Response {
    /**
     * Constructs a new <code>Financev3FinanceTransactionListV3Response</code>.
     * @alias module:model/Financev3FinanceTransactionListV3Response
     */
    constructor() { 
        
        Financev3FinanceTransactionListV3Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Financev3FinanceTransactionListV3Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Financev3FinanceTransactionListV3Response} obj Optional instance to populate.
     * @return {module:model/Financev3FinanceTransactionListV3Response} The populated <code>Financev3FinanceTransactionListV3Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Financev3FinanceTransactionListV3Response();

            if (data.hasOwnProperty('result')) {
                obj['result'] = Financev3FinanceTransactionListV3ResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Financev3FinanceTransactionListV3Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Financev3FinanceTransactionListV3Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          Financev3FinanceTransactionListV3ResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/Financev3FinanceTransactionListV3ResponseResult} result
 */
Financev3FinanceTransactionListV3Response.prototype['result'] = undefined;






export default Financev3FinanceTransactionListV3Response;

