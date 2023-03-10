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
 * The V1AutoBookingsListV1ResponseBookingUser model module.
 * @module model/V1AutoBookingsListV1ResponseBookingUser
 * @version 2.1
 */
class V1AutoBookingsListV1ResponseBookingUser {
    /**
     * Constructs a new <code>V1AutoBookingsListV1ResponseBookingUser</code>.
     * Информация о клиенте.
     * @alias module:model/V1AutoBookingsListV1ResponseBookingUser
     */
    constructor() { 
        
        V1AutoBookingsListV1ResponseBookingUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoBookingsListV1ResponseBookingUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoBookingsListV1ResponseBookingUser} obj Optional instance to populate.
     * @return {module:model/V1AutoBookingsListV1ResponseBookingUser} The populated <code>V1AutoBookingsListV1ResponseBookingUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoBookingsListV1ResponseBookingUser();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoBookingsListV1ResponseBookingUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoBookingsListV1ResponseBookingUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['middle_name'] && !(typeof data['middle_name'] === 'string' || data['middle_name'] instanceof String)) {
            throw new Error("Expected the field `middle_name` to be a primitive type in the JSON string but got " + data['middle_name']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * Имя.
 * @member {String} first_name
 */
V1AutoBookingsListV1ResponseBookingUser.prototype['first_name'] = undefined;

/**
 * Фамилия.
 * @member {String} last_name
 */
V1AutoBookingsListV1ResponseBookingUser.prototype['last_name'] = undefined;

/**
 * Отчество.
 * @member {String} middle_name
 */
V1AutoBookingsListV1ResponseBookingUser.prototype['middle_name'] = undefined;

/**
 * Номер телефона.
 * @member {String} phone
 */
V1AutoBookingsListV1ResponseBookingUser.prototype['phone'] = undefined;






export default V1AutoBookingsListV1ResponseBookingUser;

