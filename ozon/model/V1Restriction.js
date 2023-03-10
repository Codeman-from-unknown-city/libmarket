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
 * The V1Restriction model module.
 * @module model/V1Restriction
 * @version 2.1
 */
class V1Restriction {
    /**
     * Constructs a new <code>V1Restriction</code>.
     * @alias module:model/V1Restriction
     */
    constructor() { 
        
        V1Restriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Restriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Restriction} obj Optional instance to populate.
     * @return {module:model/V1Restriction} The populated <code>V1Restriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Restriction();

            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('max_posting_weight')) {
                obj['max_posting_weight'] = ApiClient.convertToType(data['max_posting_weight'], 'Number');
            }
            if (data.hasOwnProperty('min_posting_weight')) {
                obj['min_posting_weight'] = ApiClient.convertToType(data['min_posting_weight'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('max_posting_price')) {
                obj['max_posting_price'] = ApiClient.convertToType(data['max_posting_price'], 'Number');
            }
            if (data.hasOwnProperty('min_posting_price')) {
                obj['min_posting_price'] = ApiClient.convertToType(data['min_posting_price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Restriction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Restriction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }

        return true;
    }


}



/**
 * Номер отправления.
 * @member {String} posting_number
 */
V1Restriction.prototype['posting_number'] = undefined;

/**
 * Ограничение по максимальному весу в граммах.
 * @member {Number} max_posting_weight
 */
V1Restriction.prototype['max_posting_weight'] = undefined;

/**
 * Ограничение по минимальному весу в граммах.
 * @member {Number} min_posting_weight
 */
V1Restriction.prototype['min_posting_weight'] = undefined;

/**
 * Ограничение по ширине в сантиметрах.
 * @member {Number} width
 */
V1Restriction.prototype['width'] = undefined;

/**
 * Ограничение по длине в сантиметрах.
 * @member {Number} length
 */
V1Restriction.prototype['length'] = undefined;

/**
 * Ограничение по высоте в сантиметрах.
 * @member {Number} height
 */
V1Restriction.prototype['height'] = undefined;

/**
 * Ограничение по максимальной стоимости отправления в рублях.
 * @member {Number} max_posting_price
 */
V1Restriction.prototype['max_posting_price'] = undefined;

/**
 * Ограничение по минимальной стоимости отправления в рублях.
 * @member {Number} min_posting_price
 */
V1Restriction.prototype['min_posting_price'] = undefined;






export default V1Restriction;

