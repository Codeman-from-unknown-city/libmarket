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
 * The AutoModificationsListV1ResponseModification model module.
 * @module model/AutoModificationsListV1ResponseModification
 * @version 2.1
 */
class AutoModificationsListV1ResponseModification {
    /**
     * Constructs a new <code>AutoModificationsListV1ResponseModification</code>.
     * Модификации.
     * @alias module:model/AutoModificationsListV1ResponseModification
     */
    constructor() { 
        
        AutoModificationsListV1ResponseModification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoModificationsListV1ResponseModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoModificationsListV1ResponseModification} obj Optional instance to populate.
     * @return {module:model/AutoModificationsListV1ResponseModification} The populated <code>AutoModificationsListV1ResponseModification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoModificationsListV1ResponseModification();

            if (data.hasOwnProperty('modification_id')) {
                obj['modification_id'] = ApiClient.convertToType(data['modification_id'], 'Number');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('modification')) {
                obj['modification'] = ApiClient.convertToType(data['modification'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('years')) {
                obj['years'] = ApiClient.convertToType(data['years'], 'String');
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AutoModificationsListV1ResponseModification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoModificationsListV1ResponseModification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['modification'] && !(typeof data['modification'] === 'string' || data['modification'] instanceof String)) {
            throw new Error("Expected the field `modification` to be a primitive type in the JSON string but got " + data['modification']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['years'] && !(typeof data['years'] === 'string' || data['years'] instanceof String)) {
            throw new Error("Expected the field `years` to be a primitive type in the JSON string but got " + data['years']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
            throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }

        return true;
    }


}



/**
 * Идентификатор модификации.
 * @member {Number} modification_id
 */
AutoModificationsListV1ResponseModification.prototype['modification_id'] = undefined;

/**
 * Бренд.
 * @member {String} brand
 */
AutoModificationsListV1ResponseModification.prototype['brand'] = undefined;

/**
 * Модель и поколение.
 * @member {String} model
 */
AutoModificationsListV1ResponseModification.prototype['model'] = undefined;

/**
 * Модификация автомобиля.
 * @member {String} modification
 */
AutoModificationsListV1ResponseModification.prototype['modification'] = undefined;

/**
 * Кузов.
 * @member {String} body
 */
AutoModificationsListV1ResponseModification.prototype['body'] = undefined;

/**
 * Годы выпуска модификации.
 * @member {String} years
 */
AutoModificationsListV1ResponseModification.prototype['years'] = undefined;

/**
 * Комплектации.
 * @member {Array.<String>} lines
 */
AutoModificationsListV1ResponseModification.prototype['lines'] = undefined;






export default AutoModificationsListV1ResponseModification;
