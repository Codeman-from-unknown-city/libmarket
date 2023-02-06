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
import AnalyticsGetStockOnWarehousesResponseTotalStock from './AnalyticsGetStockOnWarehousesResponseTotalStock';

/**
 * The AnalyticsGetStockOnWarehousesResponseTotalItem model module.
 * @module model/AnalyticsGetStockOnWarehousesResponseTotalItem
 * @version 2.1
 */
class AnalyticsGetStockOnWarehousesResponseTotalItem {
    /**
     * Constructs a new <code>AnalyticsGetStockOnWarehousesResponseTotalItem</code>.
     * @alias module:model/AnalyticsGetStockOnWarehousesResponseTotalItem
     */
    constructor() { 
        
        AnalyticsGetStockOnWarehousesResponseTotalItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsGetStockOnWarehousesResponseTotalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsGetStockOnWarehousesResponseTotalItem} obj Optional instance to populate.
     * @return {module:model/AnalyticsGetStockOnWarehousesResponseTotalItem} The populated <code>AnalyticsGetStockOnWarehousesResponseTotalItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsGetStockOnWarehousesResponseTotalItem();

            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('discounted')) {
                obj['discounted'] = ApiClient.convertToType(data['discounted'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = AnalyticsGetStockOnWarehousesResponseTotalStock.constructFromObject(data['stock']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsGetStockOnWarehousesResponseTotalItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsGetStockOnWarehousesResponseTotalItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['discounted'] && !(typeof data['discounted'] === 'string' || data['discounted'] instanceof String)) {
            throw new Error("Expected the field `discounted` to be a primitive type in the JSON string but got " + data['discounted']);
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // validate the optional field `stock`
        if (data['stock']) { // data not null
          AnalyticsGetStockOnWarehousesResponseTotalStock.validateJSON(data['stock']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * Штрихкод.
 * @member {String} barcode
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['barcode'] = undefined;

/**
 * Категория.
 * @member {String} category
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['category'] = undefined;

/**
 * Уценённый товар (Да/Нет).
 * @member {String} discounted
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['discounted'] = undefined;

/**
 * Высота упаковки.
 * @member {Number} height
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['height'] = undefined;

/**
 * Длина товара.
 * @member {Number} length
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['length'] = undefined;

/**
 * Идентификатор товара в системе продавца.
 * @member {String} offer_id
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['offer_id'] = undefined;

/**
 * Идентификатор товара в системе Ozon — SKU.
 * @member {String} sku
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['sku'] = undefined;

/**
 * @member {module:model/AnalyticsGetStockOnWarehousesResponseTotalStock} stock
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['stock'] = undefined;

/**
 * Название товара.
 * @member {String} title
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['title'] = undefined;

/**
 * Объём товара.
 * @member {Number} volume
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['volume'] = undefined;

/**
 * Вес товара в упаковке.
 * @member {Number} weight
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['weight'] = undefined;

/**
 * Ширина упаковки.
 * @member {Number} width
 */
AnalyticsGetStockOnWarehousesResponseTotalItem.prototype['width'] = undefined;






export default AnalyticsGetStockOnWarehousesResponseTotalItem;
