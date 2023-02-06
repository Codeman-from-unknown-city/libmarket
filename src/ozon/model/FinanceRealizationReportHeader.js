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
 * The FinanceRealizationReportHeader model module.
 * @module model/FinanceRealizationReportHeader
 * @version 2.1
 */
class FinanceRealizationReportHeader {
    /**
     * Constructs a new <code>FinanceRealizationReportHeader</code>.
     * @alias module:model/FinanceRealizationReportHeader
     */
    constructor() { 
        
        FinanceRealizationReportHeader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinanceRealizationReportHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinanceRealizationReportHeader} obj Optional instance to populate.
     * @return {module:model/FinanceRealizationReportHeader} The populated <code>FinanceRealizationReportHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinanceRealizationReportHeader();

            if (data.hasOwnProperty('num')) {
                obj['num'] = ApiClient.convertToType(data['num'], 'String');
            }
            if (data.hasOwnProperty('doc_date')) {
                obj['doc_date'] = ApiClient.convertToType(data['doc_date'], 'String');
            }
            if (data.hasOwnProperty('contract_date')) {
                obj['contract_date'] = ApiClient.convertToType(data['contract_date'], 'String');
            }
            if (data.hasOwnProperty('contract_num')) {
                obj['contract_num'] = ApiClient.convertToType(data['contract_num'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('doc_amount')) {
                obj['doc_amount'] = ApiClient.convertToType(data['doc_amount'], 'Number');
            }
            if (data.hasOwnProperty('vat_amount')) {
                obj['vat_amount'] = ApiClient.convertToType(data['vat_amount'], 'Number');
            }
            if (data.hasOwnProperty('payer_inn')) {
                obj['payer_inn'] = ApiClient.convertToType(data['payer_inn'], 'String');
            }
            if (data.hasOwnProperty('payer_kpp')) {
                obj['payer_kpp'] = ApiClient.convertToType(data['payer_kpp'], 'String');
            }
            if (data.hasOwnProperty('payer_name')) {
                obj['payer_name'] = ApiClient.convertToType(data['payer_name'], 'String');
            }
            if (data.hasOwnProperty('rcv_inn')) {
                obj['rcv_inn'] = ApiClient.convertToType(data['rcv_inn'], 'String');
            }
            if (data.hasOwnProperty('rcv_kpp')) {
                obj['rcv_kpp'] = ApiClient.convertToType(data['rcv_kpp'], 'String');
            }
            if (data.hasOwnProperty('rcv_name')) {
                obj['rcv_name'] = ApiClient.convertToType(data['rcv_name'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
            }
            if (data.hasOwnProperty('stop_date')) {
                obj['stop_date'] = ApiClient.convertToType(data['stop_date'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FinanceRealizationReportHeader</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FinanceRealizationReportHeader</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['num'] && !(typeof data['num'] === 'string' || data['num'] instanceof String)) {
            throw new Error("Expected the field `num` to be a primitive type in the JSON string but got " + data['num']);
        }
        // ensure the json data is a string
        if (data['doc_date'] && !(typeof data['doc_date'] === 'string' || data['doc_date'] instanceof String)) {
            throw new Error("Expected the field `doc_date` to be a primitive type in the JSON string but got " + data['doc_date']);
        }
        // ensure the json data is a string
        if (data['contract_date'] && !(typeof data['contract_date'] === 'string' || data['contract_date'] instanceof String)) {
            throw new Error("Expected the field `contract_date` to be a primitive type in the JSON string but got " + data['contract_date']);
        }
        // ensure the json data is a string
        if (data['contract_num'] && !(typeof data['contract_num'] === 'string' || data['contract_num'] instanceof String)) {
            throw new Error("Expected the field `contract_num` to be a primitive type in the JSON string but got " + data['contract_num']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['payer_inn'] && !(typeof data['payer_inn'] === 'string' || data['payer_inn'] instanceof String)) {
            throw new Error("Expected the field `payer_inn` to be a primitive type in the JSON string but got " + data['payer_inn']);
        }
        // ensure the json data is a string
        if (data['payer_kpp'] && !(typeof data['payer_kpp'] === 'string' || data['payer_kpp'] instanceof String)) {
            throw new Error("Expected the field `payer_kpp` to be a primitive type in the JSON string but got " + data['payer_kpp']);
        }
        // ensure the json data is a string
        if (data['payer_name'] && !(typeof data['payer_name'] === 'string' || data['payer_name'] instanceof String)) {
            throw new Error("Expected the field `payer_name` to be a primitive type in the JSON string but got " + data['payer_name']);
        }
        // ensure the json data is a string
        if (data['rcv_inn'] && !(typeof data['rcv_inn'] === 'string' || data['rcv_inn'] instanceof String)) {
            throw new Error("Expected the field `rcv_inn` to be a primitive type in the JSON string but got " + data['rcv_inn']);
        }
        // ensure the json data is a string
        if (data['rcv_kpp'] && !(typeof data['rcv_kpp'] === 'string' || data['rcv_kpp'] instanceof String)) {
            throw new Error("Expected the field `rcv_kpp` to be a primitive type in the JSON string but got " + data['rcv_kpp']);
        }
        // ensure the json data is a string
        if (data['rcv_name'] && !(typeof data['rcv_name'] === 'string' || data['rcv_name'] instanceof String)) {
            throw new Error("Expected the field `rcv_name` to be a primitive type in the JSON string but got " + data['rcv_name']);
        }
        // ensure the json data is a string
        if (data['start_date'] && !(typeof data['start_date'] === 'string' || data['start_date'] instanceof String)) {
            throw new Error("Expected the field `start_date` to be a primitive type in the JSON string but got " + data['start_date']);
        }
        // ensure the json data is a string
        if (data['stop_date'] && !(typeof data['stop_date'] === 'string' || data['stop_date'] instanceof String)) {
            throw new Error("Expected the field `stop_date` to be a primitive type in the JSON string but got " + data['stop_date']);
        }

        return true;
    }


}



/**
 * Номер отчёта о реализации.
 * @member {String} num
 */
FinanceRealizationReportHeader.prototype['num'] = undefined;

/**
 * Дата формирования отчёта.
 * @member {String} doc_date
 */
FinanceRealizationReportHeader.prototype['doc_date'] = undefined;

/**
 * Дата заключения договора оферты.
 * @member {String} contract_date
 */
FinanceRealizationReportHeader.prototype['contract_date'] = undefined;

/**
 * Номер договора оферты.
 * @member {String} contract_num
 */
FinanceRealizationReportHeader.prototype['contract_num'] = undefined;

/**
 * Валюта ваших цен.
 * @member {String} currency_code
 */
FinanceRealizationReportHeader.prototype['currency_code'] = undefined;

/**
 * Сумма к начислению.
 * @member {Number} doc_amount
 */
FinanceRealizationReportHeader.prototype['doc_amount'] = undefined;

/**
 * Сумма к начислению с НДС.
 * @member {Number} vat_amount
 */
FinanceRealizationReportHeader.prototype['vat_amount'] = undefined;

/**
 * ИНН плательщика.
 * @member {String} payer_inn
 */
FinanceRealizationReportHeader.prototype['payer_inn'] = undefined;

/**
 * КПП плательщика.
 * @member {String} payer_kpp
 */
FinanceRealizationReportHeader.prototype['payer_kpp'] = undefined;

/**
 * Название плательщика.
 * @member {String} payer_name
 */
FinanceRealizationReportHeader.prototype['payer_name'] = undefined;

/**
 * ИНН получателя.
 * @member {String} rcv_inn
 */
FinanceRealizationReportHeader.prototype['rcv_inn'] = undefined;

/**
 * КПП получателя.
 * @member {String} rcv_kpp
 */
FinanceRealizationReportHeader.prototype['rcv_kpp'] = undefined;

/**
 * Название получателя.
 * @member {String} rcv_name
 */
FinanceRealizationReportHeader.prototype['rcv_name'] = undefined;

/**
 * Начало периода в отчёте.
 * @member {String} start_date
 */
FinanceRealizationReportHeader.prototype['start_date'] = undefined;

/**
 * Конец периода в отчёте.
 * @member {String} stop_date
 */
FinanceRealizationReportHeader.prototype['stop_date'] = undefined;






export default FinanceRealizationReportHeader;

