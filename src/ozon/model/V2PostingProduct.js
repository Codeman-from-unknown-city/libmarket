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
 * The V2PostingProduct model module.
 * @module model/V2PostingProduct
 * @version 2.1
 */
class V2PostingProduct {
    /**
     * Constructs a new <code>V2PostingProduct</code>.
     * @alias module:model/V2PostingProduct
     */
    constructor() { 
        
        V2PostingProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2PostingProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingProduct} obj Optional instance to populate.
     * @return {module:model/V2PostingProduct} The populated <code>V2PostingProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingProduct();

            if (data.hasOwnProperty('digital_codes')) {
                obj['digital_codes'] = ApiClient.convertToType(data['digital_codes'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2PostingProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['digital_codes'])) {
            throw new Error("Expected the field `digital_codes` to be an array in the JSON data but got " + data['digital_codes']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }

        return true;
    }


}



/**
 * Коды активации для услуг и цифровых товаров.
 * @member {Array.<String>} digital_codes
 */
V2PostingProduct.prototype['digital_codes'] = undefined;

/**
 * Название товара.
 * @member {String} name
 */
V2PostingProduct.prototype['name'] = undefined;

/**
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
V2PostingProduct.prototype['offer_id'] = undefined;

/**
 * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
V2PostingProduct.prototype['currency_code'] = undefined;

/**
 * Цена товара.
 * @member {String} price
 */
V2PostingProduct.prototype['price'] = undefined;

/**
 * Количество товара в отправлении.
 * @member {Number} quantity
 */
V2PostingProduct.prototype['quantity'] = undefined;

/**
 * Идентификатор товара в системе Ozon — SKU.
 * @member {Number} sku
 */
V2PostingProduct.prototype['sku'] = undefined;






export default V2PostingProduct;
