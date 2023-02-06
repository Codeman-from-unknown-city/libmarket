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
 * The ItemPrice model module.
 * @module model/ItemPrice
 * @version 2.1
 */
class ItemPrice {
    /**
     * Constructs a new <code>ItemPrice</code>.
     * Цена товара.
     * @alias module:model/ItemPrice
     */
    constructor() { 
        
        ItemPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemPrice} obj Optional instance to populate.
     * @return {module:model/ItemPrice} The populated <code>ItemPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPrice();

            if (data.hasOwnProperty('auto_action_enabled')) {
                obj['auto_action_enabled'] = ApiClient.convertToType(data['auto_action_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('marketing_price')) {
                obj['marketing_price'] = ApiClient.convertToType(data['marketing_price'], 'String');
            }
            if (data.hasOwnProperty('marketing_seller_price')) {
                obj['marketing_seller_price'] = ApiClient.convertToType(data['marketing_seller_price'], 'String');
            }
            if (data.hasOwnProperty('min_ozon_price')) {
                obj['min_ozon_price'] = ApiClient.convertToType(data['min_ozon_price'], 'String');
            }
            if (data.hasOwnProperty('min_price')) {
                obj['min_price'] = ApiClient.convertToType(data['min_price'], 'String');
            }
            if (data.hasOwnProperty('old_price')) {
                obj['old_price'] = ApiClient.convertToType(data['old_price'], 'String');
            }
            if (data.hasOwnProperty('premium_price')) {
                obj['premium_price'] = ApiClient.convertToType(data['premium_price'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('recommended_price')) {
                obj['recommended_price'] = ApiClient.convertToType(data['recommended_price'], 'String');
            }
            if (data.hasOwnProperty('retail_price')) {
                obj['retail_price'] = ApiClient.convertToType(data['retail_price'], 'String');
            }
            if (data.hasOwnProperty('vat')) {
                obj['vat'] = ApiClient.convertToType(data['vat'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemPrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemPrice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['marketing_price'] && !(typeof data['marketing_price'] === 'string' || data['marketing_price'] instanceof String)) {
            throw new Error("Expected the field `marketing_price` to be a primitive type in the JSON string but got " + data['marketing_price']);
        }
        // ensure the json data is a string
        if (data['marketing_seller_price'] && !(typeof data['marketing_seller_price'] === 'string' || data['marketing_seller_price'] instanceof String)) {
            throw new Error("Expected the field `marketing_seller_price` to be a primitive type in the JSON string but got " + data['marketing_seller_price']);
        }
        // ensure the json data is a string
        if (data['min_ozon_price'] && !(typeof data['min_ozon_price'] === 'string' || data['min_ozon_price'] instanceof String)) {
            throw new Error("Expected the field `min_ozon_price` to be a primitive type in the JSON string but got " + data['min_ozon_price']);
        }
        // ensure the json data is a string
        if (data['min_price'] && !(typeof data['min_price'] === 'string' || data['min_price'] instanceof String)) {
            throw new Error("Expected the field `min_price` to be a primitive type in the JSON string but got " + data['min_price']);
        }
        // ensure the json data is a string
        if (data['old_price'] && !(typeof data['old_price'] === 'string' || data['old_price'] instanceof String)) {
            throw new Error("Expected the field `old_price` to be a primitive type in the JSON string but got " + data['old_price']);
        }
        // ensure the json data is a string
        if (data['premium_price'] && !(typeof data['premium_price'] === 'string' || data['premium_price'] instanceof String)) {
            throw new Error("Expected the field `premium_price` to be a primitive type in the JSON string but got " + data['premium_price']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['recommended_price'] && !(typeof data['recommended_price'] === 'string' || data['recommended_price'] instanceof String)) {
            throw new Error("Expected the field `recommended_price` to be a primitive type in the JSON string but got " + data['recommended_price']);
        }
        // ensure the json data is a string
        if (data['retail_price'] && !(typeof data['retail_price'] === 'string' || data['retail_price'] instanceof String)) {
            throw new Error("Expected the field `retail_price` to be a primitive type in the JSON string but got " + data['retail_price']);
        }
        // ensure the json data is a string
        if (data['vat'] && !(typeof data['vat'] === 'string' || data['vat'] instanceof String)) {
            throw new Error("Expected the field `vat` to be a primitive type in the JSON string but got " + data['vat']);
        }

        return true;
    }


}



/**
 * Если автоприменение акций у товара включено — `true`.
 * @member {Boolean} auto_action_enabled
 */
ItemPrice.prototype['auto_action_enabled'] = undefined;

/**
 * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
ItemPrice.prototype['currency_code'] = undefined;

/**
 * Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon.
 * @member {String} marketing_price
 */
ItemPrice.prototype['marketing_price'] = undefined;

/**
 * Цена на товар с учетом акций продавца.
 * @member {String} marketing_seller_price
 */
ItemPrice.prototype['marketing_seller_price'] = undefined;

/**
 * Минимальная цена на аналогичный товар на Ozon.
 * @member {String} min_ozon_price
 */
ItemPrice.prototype['min_ozon_price'] = undefined;

/**
 * Минимальная цена товара после применения всех скидок.
 * @member {String} min_price
 */
ItemPrice.prototype['min_price'] = undefined;

/**
 * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
 * @member {String} old_price
 */
ItemPrice.prototype['old_price'] = undefined;

/**
 * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
 * @member {String} premium_price
 */
ItemPrice.prototype['premium_price'] = undefined;

/**
 * Цена товара с учётом скидок — это значение показывается на карточке товара.
 * @member {String} price
 */
ItemPrice.prototype['price'] = undefined;

/**
 * Цена на товар, рекомендованная системой на основании схожих предложений.
 * @member {String} recommended_price
 */
ItemPrice.prototype['recommended_price'] = undefined;

/**
 * Цена поставщика.
 * @member {String} retail_price
 */
ItemPrice.prototype['retail_price'] = undefined;

/**
 * Ставка НДС для товара.
 * @member {String} vat
 */
ItemPrice.prototype['vat'] = undefined;






export default ItemPrice;

