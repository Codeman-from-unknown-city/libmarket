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
 * The V1AutoBookingsGetV1ResponseBookingOffer model module.
 * @module model/V1AutoBookingsGetV1ResponseBookingOffer
 * @version 2.1
 */
class V1AutoBookingsGetV1ResponseBookingOffer {
    /**
     * Constructs a new <code>V1AutoBookingsGetV1ResponseBookingOffer</code>.
     * Информация о предложении.
     * @alias module:model/V1AutoBookingsGetV1ResponseBookingOffer
     */
    constructor() { 
        
        V1AutoBookingsGetV1ResponseBookingOffer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoBookingsGetV1ResponseBookingOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoBookingsGetV1ResponseBookingOffer} obj Optional instance to populate.
     * @return {module:model/V1AutoBookingsGetV1ResponseBookingOffer} The populated <code>V1AutoBookingsGetV1ResponseBookingOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoBookingsGetV1ResponseBookingOffer();

            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('trade_in_discount')) {
                obj['trade_in_discount'] = ApiClient.convertToType(data['trade_in_discount'], 'String');
            }
            if (data.hasOwnProperty('credit_discount')) {
                obj['credit_discount'] = ApiClient.convertToType(data['credit_discount'], 'String');
            }
            if (data.hasOwnProperty('maximal_discount')) {
                obj['maximal_discount'] = ApiClient.convertToType(data['maximal_discount'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoBookingsGetV1ResponseBookingOffer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoBookingsGetV1ResponseBookingOffer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['item_id'] && !(typeof data['item_id'] === 'string' || data['item_id'] instanceof String)) {
            throw new Error("Expected the field `item_id` to be a primitive type in the JSON string but got " + data['item_id']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['trade_in_discount'] && !(typeof data['trade_in_discount'] === 'string' || data['trade_in_discount'] instanceof String)) {
            throw new Error("Expected the field `trade_in_discount` to be a primitive type in the JSON string but got " + data['trade_in_discount']);
        }
        // ensure the json data is a string
        if (data['credit_discount'] && !(typeof data['credit_discount'] === 'string' || data['credit_discount'] instanceof String)) {
            throw new Error("Expected the field `credit_discount` to be a primitive type in the JSON string but got " + data['credit_discount']);
        }
        // ensure the json data is a string
        if (data['maximal_discount'] && !(typeof data['maximal_discount'] === 'string' || data['maximal_discount'] instanceof String)) {
            throw new Error("Expected the field `maximal_discount` to be a primitive type in the JSON string but got " + data['maximal_discount']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
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
        if (data['vin'] && !(typeof data['vin'] === 'string' || data['vin'] instanceof String)) {
            throw new Error("Expected the field `vin` to be a primitive type in the JSON string but got " + data['vin']);
        }

        return true;
    }


}



/**
 * Идентификатор предложения в системе Ozon.
 * @member {String} item_id
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['item_id'] = undefined;

/**
 * Цена автомобиля без учёта скидок.
 * @member {String} price
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['price'] = undefined;

/**
 * Скидка при покупке в трейд-ин.
 * @member {String} trade_in_discount
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['trade_in_discount'] = undefined;

/**
 * Скидка при покупке в кредит.
 * @member {String} credit_discount
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['credit_discount'] = undefined;

/**
 * Максимальная скидка, возможная при выполнении условий всех действующих в этот момент акций.
 * @member {String} maximal_discount
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['maximal_discount'] = undefined;

/**
 * Полное наименование предложения.
 * @member {String} name
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['name'] = undefined;

/**
 * Тип предложения.
 * @member {module:model/V1AutoBookingsGetV1ResponseBookingOffer.TypeEnum} type
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['type'] = undefined;

/**
 * Бренд автомобиля.
 * @member {String} brand
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['brand'] = undefined;

/**
 * Модель и поколение автомобиля.
 * @member {String} model
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['model'] = undefined;

/**
 * Модификация автомобиля.
 * @member {String} modification
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['modification'] = undefined;

/**
 * VIN автомобиля.
 * @member {String} vin
 */
V1AutoBookingsGetV1ResponseBookingOffer.prototype['vin'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoBookingsGetV1ResponseBookingOffer['TypeEnum'] = {

    /**
     * value: "С пробегом"
     * @const
     */
    "С пробегом": "С пробегом",

    /**
     * value: "Новый"
     * @const
     */
    "Новый": "Новый"
};



export default V1AutoBookingsGetV1ResponseBookingOffer;

