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
import V2ItemError from './V2ItemError';

/**
 * The Productv2Status model module.
 * @module model/Productv2Status
 * @version 2.1
 */
class Productv2Status {
    /**
     * Constructs a new <code>Productv2Status</code>.
     * Описание состояния товара.
     * @alias module:model/Productv2Status
     */
    constructor() { 
        
        Productv2Status.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2Status} obj Optional instance to populate.
     * @return {module:model/Productv2Status} The populated <code>Productv2Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2Status();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('state_failed')) {
                obj['state_failed'] = ApiClient.convertToType(data['state_failed'], 'String');
            }
            if (data.hasOwnProperty('moderate_status')) {
                obj['moderate_status'] = ApiClient.convertToType(data['moderate_status'], 'String');
            }
            if (data.hasOwnProperty('decline_reasons')) {
                obj['decline_reasons'] = ApiClient.convertToType(data['decline_reasons'], ['String']);
            }
            if (data.hasOwnProperty('validation_state')) {
                obj['validation_state'] = ApiClient.convertToType(data['validation_state'], 'String');
            }
            if (data.hasOwnProperty('state_name')) {
                obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
            }
            if (data.hasOwnProperty('state_description')) {
                obj['state_description'] = ApiClient.convertToType(data['state_description'], 'String');
            }
            if (data.hasOwnProperty('is_failed')) {
                obj['is_failed'] = ApiClient.convertToType(data['is_failed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_created')) {
                obj['is_created'] = ApiClient.convertToType(data['is_created'], 'Boolean');
            }
            if (data.hasOwnProperty('state_tooltip')) {
                obj['state_tooltip'] = ApiClient.convertToType(data['state_tooltip'], 'String');
            }
            if (data.hasOwnProperty('item_errors')) {
                obj['item_errors'] = ApiClient.convertToType(data['item_errors'], [V2ItemError]);
            }
            if (data.hasOwnProperty('state_updated_at')) {
                obj['state_updated_at'] = ApiClient.convertToType(data['state_updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2Status</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2Status</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['state_failed'] && !(typeof data['state_failed'] === 'string' || data['state_failed'] instanceof String)) {
            throw new Error("Expected the field `state_failed` to be a primitive type in the JSON string but got " + data['state_failed']);
        }
        // ensure the json data is a string
        if (data['moderate_status'] && !(typeof data['moderate_status'] === 'string' || data['moderate_status'] instanceof String)) {
            throw new Error("Expected the field `moderate_status` to be a primitive type in the JSON string but got " + data['moderate_status']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['decline_reasons'])) {
            throw new Error("Expected the field `decline_reasons` to be an array in the JSON data but got " + data['decline_reasons']);
        }
        // ensure the json data is a string
        if (data['validation_state'] && !(typeof data['validation_state'] === 'string' || data['validation_state'] instanceof String)) {
            throw new Error("Expected the field `validation_state` to be a primitive type in the JSON string but got " + data['validation_state']);
        }
        // ensure the json data is a string
        if (data['state_name'] && !(typeof data['state_name'] === 'string' || data['state_name'] instanceof String)) {
            throw new Error("Expected the field `state_name` to be a primitive type in the JSON string but got " + data['state_name']);
        }
        // ensure the json data is a string
        if (data['state_description'] && !(typeof data['state_description'] === 'string' || data['state_description'] instanceof String)) {
            throw new Error("Expected the field `state_description` to be a primitive type in the JSON string but got " + data['state_description']);
        }
        // ensure the json data is a string
        if (data['state_tooltip'] && !(typeof data['state_tooltip'] === 'string' || data['state_tooltip'] instanceof String)) {
            throw new Error("Expected the field `state_tooltip` to be a primitive type in the JSON string but got " + data['state_tooltip']);
        }
        if (data['item_errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['item_errors'])) {
                throw new Error("Expected the field `item_errors` to be an array in the JSON data but got " + data['item_errors']);
            }
            // validate the optional field `item_errors` (array)
            for (const item of data['item_errors']) {
                V2ItemError.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Состояние товара.
 * @member {String} state
 */
Productv2Status.prototype['state'] = undefined;

/**
 * Состояние товара, на переходе в которое произошла ошибка.
 * @member {String} state_failed
 */
Productv2Status.prototype['state_failed'] = undefined;

/**
 * Статус модерации.
 * @member {String} moderate_status
 */
Productv2Status.prototype['moderate_status'] = undefined;

/**
 * Причины отклонения товара.
 * @member {Array.<String>} decline_reasons
 */
Productv2Status.prototype['decline_reasons'] = undefined;

/**
 * Статус валидации.
 * @member {String} validation_state
 */
Productv2Status.prototype['validation_state'] = undefined;

/**
 * Название состояния товара.
 * @member {String} state_name
 */
Productv2Status.prototype['state_name'] = undefined;

/**
 * Описание состояния товара.
 * @member {String} state_description
 */
Productv2Status.prototype['state_description'] = undefined;

/**
 * Признак, что при создании товара возникли ошибки.
 * @member {Boolean} is_failed
 */
Productv2Status.prototype['is_failed'] = undefined;

/**
 * Признак, что товар создан.
 * @member {Boolean} is_created
 */
Productv2Status.prototype['is_created'] = undefined;

/**
 * Подсказки для текущего состояния товара.
 * @member {String} state_tooltip
 */
Productv2Status.prototype['state_tooltip'] = undefined;

/**
 * Ошибки при загрузке товаров.
 * @member {Array.<module:model/V2ItemError>} item_errors
 */
Productv2Status.prototype['item_errors'] = undefined;

/**
 * Время последнего изменения состояния товара.
 * @member {Date} state_updated_at
 */
Productv2Status.prototype['state_updated_at'] = undefined;






export default Productv2Status;

