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
 * The Financev3Period model module.
 * @module model/Financev3Period
 * @version 2.1
 */
class Financev3Period {
    /**
     * Constructs a new <code>Financev3Period</code>.
     * Период формирования отчёта.
     * @alias module:model/Financev3Period
     * @param from {Date} Дата, с ĸоторой рассчитывается отчёт.
     * @param to {Date} Дата, по ĸоторую рассчитывается отчёт.
     */
    constructor(from, to) { 
        
        Financev3Period.initialize(this, from, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from, to) { 
        obj['from'] = from;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>Financev3Period</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Financev3Period} obj Optional instance to populate.
     * @return {module:model/Financev3Period} The populated <code>Financev3Period</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Financev3Period();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Financev3Period</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Financev3Period</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Financev3Period.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

Financev3Period.RequiredProperties = ["from", "to"];

/**
 * Дата, с ĸоторой рассчитывается отчёт.
 * @member {Date} from
 */
Financev3Period.prototype['from'] = undefined;

/**
 * Дата, по ĸоторую рассчитывается отчёт.
 * @member {Date} to
 */
Financev3Period.prototype['to'] = undefined;






export default Financev3Period;

