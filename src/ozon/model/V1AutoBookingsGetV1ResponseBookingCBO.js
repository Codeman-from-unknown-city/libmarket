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
 * The V1AutoBookingsGetV1ResponseBookingCBO model module.
 * @module model/V1AutoBookingsGetV1ResponseBookingCBO
 * @version 2.1
 */
class V1AutoBookingsGetV1ResponseBookingCBO {
    /**
     * Constructs a new <code>V1AutoBookingsGetV1ResponseBookingCBO</code>.
     * Информация об автосалоне.
     * @alias module:model/V1AutoBookingsGetV1ResponseBookingCBO
     */
    constructor() { 
        
        V1AutoBookingsGetV1ResponseBookingCBO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoBookingsGetV1ResponseBookingCBO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoBookingsGetV1ResponseBookingCBO} obj Optional instance to populate.
     * @return {module:model/V1AutoBookingsGetV1ResponseBookingCBO} The populated <code>V1AutoBookingsGetV1ResponseBookingCBO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoBookingsGetV1ResponseBookingCBO();

            if (data.hasOwnProperty('cbo_id')) {
                obj['cbo_id'] = ApiClient.convertToType(data['cbo_id'], 'String');
            }
            if (data.hasOwnProperty('cbo_address')) {
                obj['cbo_address'] = ApiClient.convertToType(data['cbo_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoBookingsGetV1ResponseBookingCBO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoBookingsGetV1ResponseBookingCBO</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cbo_id'] && !(typeof data['cbo_id'] === 'string' || data['cbo_id'] instanceof String)) {
            throw new Error("Expected the field `cbo_id` to be a primitive type in the JSON string but got " + data['cbo_id']);
        }
        // ensure the json data is a string
        if (data['cbo_address'] && !(typeof data['cbo_address'] === 'string' || data['cbo_address'] instanceof String)) {
            throw new Error("Expected the field `cbo_address` to be a primitive type in the JSON string but got " + data['cbo_address']);
        }

        return true;
    }


}



/**
 * Идентификатор автосалона в системе Ozon.
 * @member {String} cbo_id
 */
V1AutoBookingsGetV1ResponseBookingCBO.prototype['cbo_id'] = undefined;

/**
 * Адрес автосалона.
 * @member {String} cbo_address
 */
V1AutoBookingsGetV1ResponseBookingCBO.prototype['cbo_address'] = undefined;






export default V1AutoBookingsGetV1ResponseBookingCBO;

