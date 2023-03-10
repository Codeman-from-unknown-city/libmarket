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
import PostingFinancialDataServices from './PostingFinancialDataServices';
import ProductPicking from './ProductPicking';

/**
 * The PostingFinancialDataProduct model module.
 * @module model/PostingFinancialDataProduct
 * @version 2.1
 */
class PostingFinancialDataProduct {
    /**
     * Constructs a new <code>PostingFinancialDataProduct</code>.
     * @alias module:model/PostingFinancialDataProduct
     */
    constructor() { 
        
        PostingFinancialDataProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingFinancialDataProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingFinancialDataProduct} obj Optional instance to populate.
     * @return {module:model/PostingFinancialDataProduct} The populated <code>PostingFinancialDataProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingFinancialDataProduct();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('client_price')) {
                obj['client_price'] = ApiClient.convertToType(data['client_price'], 'String');
            }
            if (data.hasOwnProperty('commission_amount')) {
                obj['commission_amount'] = ApiClient.convertToType(data['commission_amount'], 'Number');
            }
            if (data.hasOwnProperty('commission_percent')) {
                obj['commission_percent'] = ApiClient.convertToType(data['commission_percent'], 'Number');
            }
            if (data.hasOwnProperty('commissions_currency_code')) {
                obj['commissions_currency_code'] = ApiClient.convertToType(data['commissions_currency_code'], 'String');
            }
            if (data.hasOwnProperty('item_services')) {
                obj['item_services'] = PostingFinancialDataServices.constructFromObject(data['item_services']);
            }
            if (data.hasOwnProperty('old_price')) {
                obj['old_price'] = ApiClient.convertToType(data['old_price'], 'Number');
            }
            if (data.hasOwnProperty('payout')) {
                obj['payout'] = ApiClient.convertToType(data['payout'], 'Number');
            }
            if (data.hasOwnProperty('picking')) {
                obj['picking'] = ProductPicking.constructFromObject(data['picking']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('total_discount_percent')) {
                obj['total_discount_percent'] = ApiClient.convertToType(data['total_discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('total_discount_value')) {
                obj['total_discount_value'] = ApiClient.convertToType(data['total_discount_value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingFinancialDataProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingFinancialDataProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['actions'])) {
            throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['client_price'] && !(typeof data['client_price'] === 'string' || data['client_price'] instanceof String)) {
            throw new Error("Expected the field `client_price` to be a primitive type in the JSON string but got " + data['client_price']);
        }
        // ensure the json data is a string
        if (data['commissions_currency_code'] && !(typeof data['commissions_currency_code'] === 'string' || data['commissions_currency_code'] instanceof String)) {
            throw new Error("Expected the field `commissions_currency_code` to be a primitive type in the JSON string but got " + data['commissions_currency_code']);
        }
        // validate the optional field `item_services`
        if (data['item_services']) { // data not null
          PostingFinancialDataServices.validateJSON(data['item_services']);
        }
        // validate the optional field `picking`
        if (data['picking']) { // data not null
          ProductPicking.validateJSON(data['picking']);
        }

        return true;
    }


}



/**
 * Действия.
 * @member {Array.<String>} actions
 */
PostingFinancialDataProduct.prototype['actions'] = undefined;

/**
 * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
PostingFinancialDataProduct.prototype['currency_code'] = undefined;

/**
 * Цена для клиента.
 * @member {String} client_price
 */
PostingFinancialDataProduct.prototype['client_price'] = undefined;

/**
 * Размер комиссии за товар.
 * @member {Number} commission_amount
 */
PostingFinancialDataProduct.prototype['commission_amount'] = undefined;

/**
 * Процент комиссии.
 * @member {Number} commission_percent
 */
PostingFinancialDataProduct.prototype['commission_percent'] = undefined;

/**
 * Код валюты, в которой рассчитывались комиссии.
 * @member {String} commissions_currency_code
 */
PostingFinancialDataProduct.prototype['commissions_currency_code'] = undefined;

/**
 * @member {module:model/PostingFinancialDataServices} item_services
 */
PostingFinancialDataProduct.prototype['item_services'] = undefined;

/**
 * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
 * @member {Number} old_price
 */
PostingFinancialDataProduct.prototype['old_price'] = undefined;

/**
 * Выплата продавцу.
 * @member {Number} payout
 */
PostingFinancialDataProduct.prototype['payout'] = undefined;

/**
 * @member {module:model/ProductPicking} picking
 */
PostingFinancialDataProduct.prototype['picking'] = undefined;

/**
 * Цена товара с учётом скидок — это значение показывается на карточке товара.
 * @member {Number} price
 */
PostingFinancialDataProduct.prototype['price'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
PostingFinancialDataProduct.prototype['product_id'] = undefined;

/**
 * Количество товара в отправлении.
 * @member {Number} quantity
 */
PostingFinancialDataProduct.prototype['quantity'] = undefined;

/**
 * Процент скидки.
 * @member {Number} total_discount_percent
 */
PostingFinancialDataProduct.prototype['total_discount_percent'] = undefined;

/**
 * Сумма скидки.
 * @member {Number} total_discount_value
 */
PostingFinancialDataProduct.prototype['total_discount_value'] = undefined;






export default PostingFinancialDataProduct;

