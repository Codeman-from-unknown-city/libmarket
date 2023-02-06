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
 * The OrderPosting model module.
 * @module model/OrderPosting
 * @version 2.1
 */
class OrderPosting {
    /**
     * Constructs a new <code>OrderPosting</code>.
     * @alias module:model/OrderPosting
     */
    constructor() { 
        
        OrderPosting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPosting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderPosting} obj Optional instance to populate.
     * @return {module:model/OrderPosting} The populated <code>OrderPosting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPosting();

            if (data.hasOwnProperty('delivery_schema')) {
                obj['delivery_schema'] = ApiClient.convertToType(data['delivery_schema'], 'String');
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('sku_list')) {
                obj['sku_list'] = ApiClient.convertToType(data['sku_list'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderPosting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderPosting</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['delivery_schema'] && !(typeof data['delivery_schema'] === 'string' || data['delivery_schema'] instanceof String)) {
            throw new Error("Expected the field `delivery_schema` to be a primitive type in the JSON string but got " + data['delivery_schema']);
        }
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sku_list'])) {
            throw new Error("Expected the field `sku_list` to be an array in the JSON data but got " + data['sku_list']);
        }

        return true;
    }


}



/**
 * Схема доставки:   - `FBO`,   - `FBS`,   - `RFBS`,   - `Crossborder`. 
 * @member {String} delivery_schema
 */
OrderPosting.prototype['delivery_schema'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
OrderPosting.prototype['posting_number'] = undefined;

/**
 * Список идентификаторов товаров в отправлении.
 * @member {Array.<Number>} sku_list
 */
OrderPosting.prototype['sku_list'] = undefined;






export default OrderPosting;
