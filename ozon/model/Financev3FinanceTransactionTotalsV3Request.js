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
import FinanceTransactionTotalsV3RequestDate from './FinanceTransactionTotalsV3RequestDate';

/**
 * The Financev3FinanceTransactionTotalsV3Request model module.
 * @module model/Financev3FinanceTransactionTotalsV3Request
 * @version 2.1
 */
class Financev3FinanceTransactionTotalsV3Request {
    /**
     * Constructs a new <code>Financev3FinanceTransactionTotalsV3Request</code>.
     * @alias module:model/Financev3FinanceTransactionTotalsV3Request
     */
    constructor() { 
        
        Financev3FinanceTransactionTotalsV3Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Financev3FinanceTransactionTotalsV3Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Financev3FinanceTransactionTotalsV3Request} obj Optional instance to populate.
     * @return {module:model/Financev3FinanceTransactionTotalsV3Request} The populated <code>Financev3FinanceTransactionTotalsV3Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Financev3FinanceTransactionTotalsV3Request();

            if (data.hasOwnProperty('date')) {
                obj['date'] = FinanceTransactionTotalsV3RequestDate.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('transaction_type')) {
                obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Financev3FinanceTransactionTotalsV3Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Financev3FinanceTransactionTotalsV3Request</code>.
     */
    static validateJSON(data) {
        // validate the optional field `date`
        if (data['date']) { // data not null
          FinanceTransactionTotalsV3RequestDate.validateJSON(data['date']);
        }
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }
        // ensure the json data is a string
        if (data['transaction_type'] && !(typeof data['transaction_type'] === 'string' || data['transaction_type'] instanceof String)) {
            throw new Error("Expected the field `transaction_type` to be a primitive type in the JSON string but got " + data['transaction_type']);
        }

        return true;
    }


}



/**
 * @member {module:model/FinanceTransactionTotalsV3RequestDate} date
 */
Financev3FinanceTransactionTotalsV3Request.prototype['date'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
Financev3FinanceTransactionTotalsV3Request.prototype['posting_number'] = undefined;

/**
 * Тип операции:  - `all` — все,  - `orders` — заказы,  - `returns` — возвраты и отмены,  - `services` — сервисные сборы,  - `compensation` — компенсация,  - `transferDelivery` — стоимость доставки,  - `other` — прочее. 
 * @member {String} transaction_type
 */
Financev3FinanceTransactionTotalsV3Request.prototype['transaction_type'] = undefined;






export default Financev3FinanceTransactionTotalsV3Request;
