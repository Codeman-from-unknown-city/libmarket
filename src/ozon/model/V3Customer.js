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
import V3Address from './V3Address';

/**
 * The V3Customer model module.
 * @module model/V3Customer
 * @version 2.1
 */
class V3Customer {
    /**
     * Constructs a new <code>V3Customer</code>.
     * Данные о покупателе.
     * @alias module:model/V3Customer
     */
    constructor() { 
        
        V3Customer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3Customer} obj Optional instance to populate.
     * @return {module:model/V3Customer} The populated <code>V3Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3Customer();

            if (data.hasOwnProperty('address')) {
                obj['address'] = V3Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('customer_email')) {
                obj['customer_email'] = ApiClient.convertToType(data['customer_email'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3Customer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3Customer</code>.
     */
    static validateJSON(data) {
        // validate the optional field `address`
        if (data['address']) { // data not null
          V3Address.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['customer_email'] && !(typeof data['customer_email'] === 'string' || data['customer_email'] instanceof String)) {
            throw new Error("Expected the field `customer_email` to be a primitive type in the JSON string but got " + data['customer_email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * @member {module:model/V3Address} address
 */
V3Customer.prototype['address'] = undefined;

/**
 * Email покупателя.
 * @member {String} customer_email
 */
V3Customer.prototype['customer_email'] = undefined;

/**
 * Идентификатор покупателя.
 * @member {Number} customer_id
 */
V3Customer.prototype['customer_id'] = undefined;

/**
 * Имя покупателя.
 * @member {String} name
 */
V3Customer.prototype['name'] = undefined;

/**
 * Контактный телефон.
 * @member {String} phone
 */
V3Customer.prototype['phone'] = undefined;






export default V3Customer;

