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
 * The Fbsv4SetProductExemplarRequestProductExemplar model module.
 * @module model/Fbsv4SetProductExemplarRequestProductExemplar
 * @version 2.1
 */
class Fbsv4SetProductExemplarRequestProductExemplar {
    /**
     * Constructs a new <code>Fbsv4SetProductExemplarRequestProductExemplar</code>.
     * @alias module:model/Fbsv4SetProductExemplarRequestProductExemplar
     */
    constructor() { 
        
        Fbsv4SetProductExemplarRequestProductExemplar.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fbsv4SetProductExemplarRequestProductExemplar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fbsv4SetProductExemplarRequestProductExemplar} obj Optional instance to populate.
     * @return {module:model/Fbsv4SetProductExemplarRequestProductExemplar} The populated <code>Fbsv4SetProductExemplarRequestProductExemplar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fbsv4SetProductExemplarRequestProductExemplar();

            if (data.hasOwnProperty('gtd')) {
                obj['gtd'] = ApiClient.convertToType(data['gtd'], 'String');
            }
            if (data.hasOwnProperty('is_gtd_absent')) {
                obj['is_gtd_absent'] = ApiClient.convertToType(data['is_gtd_absent'], 'Boolean');
            }
            if (data.hasOwnProperty('mandatory_mark')) {
                obj['mandatory_mark'] = ApiClient.convertToType(data['mandatory_mark'], 'String');
            }
            if (data.hasOwnProperty('rnpt')) {
                obj['rnpt'] = ApiClient.convertToType(data['rnpt'], 'String');
            }
            if (data.hasOwnProperty('is_rnpt_absent')) {
                obj['is_rnpt_absent'] = ApiClient.convertToType(data['is_rnpt_absent'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Fbsv4SetProductExemplarRequestProductExemplar</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Fbsv4SetProductExemplarRequestProductExemplar</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gtd'] && !(typeof data['gtd'] === 'string' || data['gtd'] instanceof String)) {
            throw new Error("Expected the field `gtd` to be a primitive type in the JSON string but got " + data['gtd']);
        }
        // ensure the json data is a string
        if (data['mandatory_mark'] && !(typeof data['mandatory_mark'] === 'string' || data['mandatory_mark'] instanceof String)) {
            throw new Error("Expected the field `mandatory_mark` to be a primitive type in the JSON string but got " + data['mandatory_mark']);
        }
        // ensure the json data is a string
        if (data['rnpt'] && !(typeof data['rnpt'] === 'string' || data['rnpt'] instanceof String)) {
            throw new Error("Expected the field `rnpt` to be a primitive type in the JSON string but got " + data['rnpt']);
        }

        return true;
    }


}



/**
 * Номер грузовой таможенной декларации (ГТД).
 * @member {String} gtd
 */
Fbsv4SetProductExemplarRequestProductExemplar.prototype['gtd'] = undefined;

/**
 * Признак того, что не указан номер таможенной декларации.
 * @member {Boolean} is_gtd_absent
 */
Fbsv4SetProductExemplarRequestProductExemplar.prototype['is_gtd_absent'] = undefined;

/**
 * Обязательная маркировка «Честный ЗНАК».
 * @member {String} mandatory_mark
 */
Fbsv4SetProductExemplarRequestProductExemplar.prototype['mandatory_mark'] = undefined;

/**
 * Регистрационный номер партии товара (РНПТ).
 * @member {String} rnpt
 */
Fbsv4SetProductExemplarRequestProductExemplar.prototype['rnpt'] = undefined;

/**
 * Признак того, что не указан регистрационный номер партии товара (РНПТ).
 * @member {Boolean} is_rnpt_absent
 */
Fbsv4SetProductExemplarRequestProductExemplar.prototype['is_rnpt_absent'] = undefined;






export default Fbsv4SetProductExemplarRequestProductExemplar;

