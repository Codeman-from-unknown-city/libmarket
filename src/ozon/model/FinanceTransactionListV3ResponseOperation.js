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
import OperationItem from './OperationItem';
import OperationPosting from './OperationPosting';
import OperationService from './OperationService';

/**
 * The FinanceTransactionListV3ResponseOperation model module.
 * @module model/FinanceTransactionListV3ResponseOperation
 * @version 2.1
 */
class FinanceTransactionListV3ResponseOperation {
    /**
     * Constructs a new <code>FinanceTransactionListV3ResponseOperation</code>.
     * @alias module:model/FinanceTransactionListV3ResponseOperation
     */
    constructor() { 
        
        FinanceTransactionListV3ResponseOperation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinanceTransactionListV3ResponseOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinanceTransactionListV3ResponseOperation} obj Optional instance to populate.
     * @return {module:model/FinanceTransactionListV3ResponseOperation} The populated <code>FinanceTransactionListV3ResponseOperation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinanceTransactionListV3ResponseOperation();

            if (data.hasOwnProperty('accruals_for_sale')) {
                obj['accruals_for_sale'] = ApiClient.convertToType(data['accruals_for_sale'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('delivery_charge')) {
                obj['delivery_charge'] = ApiClient.convertToType(data['delivery_charge'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OperationItem]);
            }
            if (data.hasOwnProperty('operation_date')) {
                obj['operation_date'] = ApiClient.convertToType(data['operation_date'], 'String');
            }
            if (data.hasOwnProperty('operation_id')) {
                obj['operation_id'] = ApiClient.convertToType(data['operation_id'], 'Number');
            }
            if (data.hasOwnProperty('operation_type')) {
                obj['operation_type'] = ApiClient.convertToType(data['operation_type'], 'String');
            }
            if (data.hasOwnProperty('operation_type_name')) {
                obj['operation_type_name'] = ApiClient.convertToType(data['operation_type_name'], 'String');
            }
            if (data.hasOwnProperty('posting')) {
                obj['posting'] = OperationPosting.constructFromObject(data['posting']);
            }
            if (data.hasOwnProperty('return_delivery_charge')) {
                obj['return_delivery_charge'] = ApiClient.convertToType(data['return_delivery_charge'], 'Number');
            }
            if (data.hasOwnProperty('sale_commission')) {
                obj['sale_commission'] = ApiClient.convertToType(data['sale_commission'], 'Number');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], [OperationService]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FinanceTransactionListV3ResponseOperation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FinanceTransactionListV3ResponseOperation</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                OperationItem.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['operation_date'] && !(typeof data['operation_date'] === 'string' || data['operation_date'] instanceof String)) {
            throw new Error("Expected the field `operation_date` to be a primitive type in the JSON string but got " + data['operation_date']);
        }
        // ensure the json data is a string
        if (data['operation_type'] && !(typeof data['operation_type'] === 'string' || data['operation_type'] instanceof String)) {
            throw new Error("Expected the field `operation_type` to be a primitive type in the JSON string but got " + data['operation_type']);
        }
        // ensure the json data is a string
        if (data['operation_type_name'] && !(typeof data['operation_type_name'] === 'string' || data['operation_type_name'] instanceof String)) {
            throw new Error("Expected the field `operation_type_name` to be a primitive type in the JSON string but got " + data['operation_type_name']);
        }
        // validate the optional field `posting`
        if (data['posting']) { // data not null
          OperationPosting.validateJSON(data['posting']);
        }
        if (data['services']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['services'])) {
                throw new Error("Expected the field `services` to be an array in the JSON data but got " + data['services']);
            }
            // validate the optional field `services` (array)
            for (const item of data['services']) {
                OperationService.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Стоимость товаров с учётом скидок продавца.
 * @member {Number} accruals_for_sale
 */
FinanceTransactionListV3ResponseOperation.prototype['accruals_for_sale'] = undefined;

/**
 * Итоговая сумма операции.
 * @member {Number} amount
 */
FinanceTransactionListV3ResponseOperation.prototype['amount'] = undefined;

/**
 * Стоимость доставки для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
 * @member {Number} delivery_charge
 */
FinanceTransactionListV3ResponseOperation.prototype['delivery_charge'] = undefined;

/**
 * Информация о товаре.
 * @member {Array.<module:model/OperationItem>} items
 */
FinanceTransactionListV3ResponseOperation.prototype['items'] = undefined;

/**
 * Дата операции.
 * @member {String} operation_date
 */
FinanceTransactionListV3ResponseOperation.prototype['operation_date'] = undefined;

/**
 * Идентификатор операции.
 * @member {Number} operation_id
 */
FinanceTransactionListV3ResponseOperation.prototype['operation_id'] = undefined;

/**
 * Тип операции.
 * @member {String} operation_type
 */
FinanceTransactionListV3ResponseOperation.prototype['operation_type'] = undefined;

/**
 * Название типа операции.
 * @member {String} operation_type_name
 */
FinanceTransactionListV3ResponseOperation.prototype['operation_type_name'] = undefined;

/**
 * @member {module:model/OperationPosting} posting
 */
FinanceTransactionListV3ResponseOperation.prototype['posting'] = undefined;

/**
 * Плата за возвраты и отмены для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
 * @member {Number} return_delivery_charge
 */
FinanceTransactionListV3ResponseOperation.prototype['return_delivery_charge'] = undefined;

/**
 * Комиссия за продажу или возврат комиссии за продажу.
 * @member {Number} sale_commission
 */
FinanceTransactionListV3ResponseOperation.prototype['sale_commission'] = undefined;

/**
 * Дополнительные услуги.
 * @member {Array.<module:model/OperationService>} services
 */
FinanceTransactionListV3ResponseOperation.prototype['services'] = undefined;

/**
 * Тип начисления: - `all` — все, - `orders` — заказы, - `returns` — возвраты и отмены, - `services` — сервисные сборы, - `compensation` — компенсация, - `transferDelivery` — стоимость доставки, - `other` — прочее. 
 * @member {String} type
 */
FinanceTransactionListV3ResponseOperation.prototype['type'] = undefined;






export default FinanceTransactionListV3ResponseOperation;
