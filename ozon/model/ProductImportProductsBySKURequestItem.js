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
 * The ProductImportProductsBySKURequestItem model module.
 * @module model/ProductImportProductsBySKURequestItem
 * @version 2.1
 */
class ProductImportProductsBySKURequestItem {
    /**
     * Constructs a new <code>ProductImportProductsBySKURequestItem</code>.
     * @alias module:model/ProductImportProductsBySKURequestItem
     */
    constructor() { 
        
        ProductImportProductsBySKURequestItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImportProductsBySKURequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductImportProductsBySKURequestItem} obj Optional instance to populate.
     * @return {module:model/ProductImportProductsBySKURequestItem} The populated <code>ProductImportProductsBySKURequestItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImportProductsBySKURequestItem();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
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
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'Number');
            }
            if (data.hasOwnProperty('vat')) {
                obj['vat'] = ApiClient.convertToType(data['vat'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductImportProductsBySKURequestItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductImportProductsBySKURequestItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
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
        if (data['vat'] && !(typeof data['vat'] === 'string' || data['vat'] instanceof String)) {
            throw new Error("Expected the field `vat` to be a primitive type in the JSON string but got " + data['vat']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }

        return true;
    }


}



/**
 * Название товара. До 500 символов.
 * @member {String} name
 */
ProductImportProductsBySKURequestItem.prototype['name'] = undefined;

/**
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
ProductImportProductsBySKURequestItem.prototype['offer_id'] = undefined;

/**
 * Цена до скидок (будет зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.
 * @member {String} old_price
 */
ProductImportProductsBySKURequestItem.prototype['old_price'] = undefined;

/**
 * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
 * @member {String} premium_price
 */
ProductImportProductsBySKURequestItem.prototype['premium_price'] = undefined;

/**
 * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение `old_price` в этом параметре.
 * @member {String} price
 */
ProductImportProductsBySKURequestItem.prototype['price'] = undefined;

/**
 * Идентификатор товара в системе Ozon — SKU.
 * @member {Number} sku
 */
ProductImportProductsBySKURequestItem.prototype['sku'] = undefined;

/**
 * Ставка НДС для товара:   - `0` — не облагается НДС,   - `0.1` — 10%,   - `0.2` — 20%. 
 * @member {String} vat
 */
ProductImportProductsBySKURequestItem.prototype['vat'] = undefined;

/**
 * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.  Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
ProductImportProductsBySKURequestItem.prototype['currency_code'] = undefined;






export default ProductImportProductsBySKURequestItem;

