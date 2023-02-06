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
import ItemCommissions from './ItemCommissions';
import ItemMarketingActions from './ItemMarketingActions';
import ItemPrice from './ItemPrice';

/**
 * The ProductGetProductInfoPricesV4ResponseItem model module.
 * @module model/ProductGetProductInfoPricesV4ResponseItem
 * @version 2.1
 */
class ProductGetProductInfoPricesV4ResponseItem {
    /**
     * Constructs a new <code>ProductGetProductInfoPricesV4ResponseItem</code>.
     * @alias module:model/ProductGetProductInfoPricesV4ResponseItem
     */
    constructor() { 
        
        ProductGetProductInfoPricesV4ResponseItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductGetProductInfoPricesV4ResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductGetProductInfoPricesV4ResponseItem} obj Optional instance to populate.
     * @return {module:model/ProductGetProductInfoPricesV4ResponseItem} The populated <code>ProductGetProductInfoPricesV4ResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductGetProductInfoPricesV4ResponseItem();

            if (data.hasOwnProperty('commissions')) {
                obj['commissions'] = ItemCommissions.constructFromObject(data['commissions']);
            }
            if (data.hasOwnProperty('marketing_actions')) {
                obj['marketing_actions'] = ItemMarketingActions.constructFromObject(data['marketing_actions']);
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ItemPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('price_index')) {
                obj['price_index'] = ApiClient.convertToType(data['price_index'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('volume_weight')) {
                obj['volume_weight'] = ApiClient.convertToType(data['volume_weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductGetProductInfoPricesV4ResponseItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductGetProductInfoPricesV4ResponseItem</code>.
     */
    static validateJSON(data) {
        // validate the optional field `commissions`
        if (data['commissions']) { // data not null
          ItemCommissions.validateJSON(data['commissions']);
        }
        // validate the optional field `marketing_actions`
        if (data['marketing_actions']) { // data not null
          ItemMarketingActions.validateJSON(data['marketing_actions']);
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          ItemPrice.validateJSON(data['price']);
        }
        // ensure the json data is a string
        if (data['price_index'] && !(typeof data['price_index'] === 'string' || data['price_index'] instanceof String)) {
            throw new Error("Expected the field `price_index` to be a primitive type in the JSON string but got " + data['price_index']);
        }

        return true;
    }


}



/**
 * @member {module:model/ItemCommissions} commissions
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['commissions'] = undefined;

/**
 * @member {module:model/ItemMarketingActions} marketing_actions
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['marketing_actions'] = undefined;

/**
 * Идентификатор товара в системе продавца.
 * @member {String} offer_id
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['offer_id'] = undefined;

/**
 * @member {module:model/ItemPrice} price
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['price'] = undefined;

/**
 * Ценовой индекс.
 * @member {String} price_index
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['price_index'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['product_id'] = undefined;

/**
 * Объёмный вес товара.
 * @member {Number} volume_weight
 */
ProductGetProductInfoPricesV4ResponseItem.prototype['volume_weight'] = undefined;






export default ProductGetProductInfoPricesV4ResponseItem;

