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
import V3AddresseeFbsLists from './V3AddresseeFbsLists';
import V3Barcodes from './V3Barcodes';
import V3Cancellation from './V3Cancellation';
import V3CustomerFbsLists from './V3CustomerFbsLists';
import V3DeliveryMethod from './V3DeliveryMethod';
import V3FbsPostingAnalyticsData from './V3FbsPostingAnalyticsData';
import V3FbsPostingProduct from './V3FbsPostingProduct';
import V3FbsPostingRequirementsV3 from './V3FbsPostingRequirementsV3';
import V3PostingFinancialData from './V3PostingFinancialData';

/**
 * The V3FbsPosting model module.
 * @module model/V3FbsPosting
 * @version 2.1
 */
class V3FbsPosting {
    /**
     * Constructs a new <code>V3FbsPosting</code>.
     * @alias module:model/V3FbsPosting
     */
    constructor() { 
        
        V3FbsPosting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FbsPosting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FbsPosting} obj Optional instance to populate.
     * @return {module:model/V3FbsPosting} The populated <code>V3FbsPosting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FbsPosting();

            if (data.hasOwnProperty('addressee')) {
                obj['addressee'] = V3AddresseeFbsLists.constructFromObject(data['addressee']);
            }
            if (data.hasOwnProperty('analytics_data')) {
                obj['analytics_data'] = V3FbsPostingAnalyticsData.constructFromObject(data['analytics_data']);
            }
            if (data.hasOwnProperty('barcodes')) {
                obj['barcodes'] = V3Barcodes.constructFromObject(data['barcodes']);
            }
            if (data.hasOwnProperty('cancellation')) {
                obj['cancellation'] = V3Cancellation.constructFromObject(data['cancellation']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = V3CustomerFbsLists.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('delivering_date')) {
                obj['delivering_date'] = ApiClient.convertToType(data['delivering_date'], 'Date');
            }
            if (data.hasOwnProperty('delivery_method')) {
                obj['delivery_method'] = V3DeliveryMethod.constructFromObject(data['delivery_method']);
            }
            if (data.hasOwnProperty('financial_data')) {
                obj['financial_data'] = V3PostingFinancialData.constructFromObject(data['financial_data']);
            }
            if (data.hasOwnProperty('in_process_at')) {
                obj['in_process_at'] = ApiClient.convertToType(data['in_process_at'], 'Date');
            }
            if (data.hasOwnProperty('is_express')) {
                obj['is_express'] = ApiClient.convertToType(data['is_express'], 'Boolean');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('order_number')) {
                obj['order_number'] = ApiClient.convertToType(data['order_number'], 'String');
            }
            if (data.hasOwnProperty('parent_posting_number')) {
                obj['parent_posting_number'] = ApiClient.convertToType(data['parent_posting_number'], 'String');
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [V3FbsPostingProduct]);
            }
            if (data.hasOwnProperty('requirements')) {
                obj['requirements'] = V3FbsPostingRequirementsV3.constructFromObject(data['requirements']);
            }
            if (data.hasOwnProperty('shipment_date')) {
                obj['shipment_date'] = ApiClient.convertToType(data['shipment_date'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tpl_integration_type')) {
                obj['tpl_integration_type'] = ApiClient.convertToType(data['tpl_integration_type'], 'String');
            }
            if (data.hasOwnProperty('tracking_number')) {
                obj['tracking_number'] = ApiClient.convertToType(data['tracking_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FbsPosting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FbsPosting</code>.
     */
    static validateJSON(data) {
        // validate the optional field `addressee`
        if (data['addressee']) { // data not null
          V3AddresseeFbsLists.validateJSON(data['addressee']);
        }
        // validate the optional field `analytics_data`
        if (data['analytics_data']) { // data not null
          V3FbsPostingAnalyticsData.validateJSON(data['analytics_data']);
        }
        // validate the optional field `barcodes`
        if (data['barcodes']) { // data not null
          V3Barcodes.validateJSON(data['barcodes']);
        }
        // validate the optional field `cancellation`
        if (data['cancellation']) { // data not null
          V3Cancellation.validateJSON(data['cancellation']);
        }
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          V3CustomerFbsLists.validateJSON(data['customer']);
        }
        // validate the optional field `delivery_method`
        if (data['delivery_method']) { // data not null
          V3DeliveryMethod.validateJSON(data['delivery_method']);
        }
        // validate the optional field `financial_data`
        if (data['financial_data']) { // data not null
          V3PostingFinancialData.validateJSON(data['financial_data']);
        }
        // ensure the json data is a string
        if (data['order_number'] && !(typeof data['order_number'] === 'string' || data['order_number'] instanceof String)) {
            throw new Error("Expected the field `order_number` to be a primitive type in the JSON string but got " + data['order_number']);
        }
        // ensure the json data is a string
        if (data['parent_posting_number'] && !(typeof data['parent_posting_number'] === 'string' || data['parent_posting_number'] instanceof String)) {
            throw new Error("Expected the field `parent_posting_number` to be a primitive type in the JSON string but got " + data['parent_posting_number']);
        }
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                V3FbsPostingProduct.validateJsonObject(item);
            };
        }
        // validate the optional field `requirements`
        if (data['requirements']) { // data not null
          V3FbsPostingRequirementsV3.validateJSON(data['requirements']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['tpl_integration_type'] && !(typeof data['tpl_integration_type'] === 'string' || data['tpl_integration_type'] instanceof String)) {
            throw new Error("Expected the field `tpl_integration_type` to be a primitive type in the JSON string but got " + data['tpl_integration_type']);
        }
        // ensure the json data is a string
        if (data['tracking_number'] && !(typeof data['tracking_number'] === 'string' || data['tracking_number'] instanceof String)) {
            throw new Error("Expected the field `tracking_number` to be a primitive type in the JSON string but got " + data['tracking_number']);
        }

        return true;
    }


}



/**
 * @member {module:model/V3AddresseeFbsLists} addressee
 */
V3FbsPosting.prototype['addressee'] = undefined;

/**
 * @member {module:model/V3FbsPostingAnalyticsData} analytics_data
 */
V3FbsPosting.prototype['analytics_data'] = undefined;

/**
 * @member {module:model/V3Barcodes} barcodes
 */
V3FbsPosting.prototype['barcodes'] = undefined;

/**
 * @member {module:model/V3Cancellation} cancellation
 */
V3FbsPosting.prototype['cancellation'] = undefined;

/**
 * @member {module:model/V3CustomerFbsLists} customer
 */
V3FbsPosting.prototype['customer'] = undefined;

/**
 * Дата передачи отправления в доставку.
 * @member {Date} delivering_date
 */
V3FbsPosting.prototype['delivering_date'] = undefined;

/**
 * @member {module:model/V3DeliveryMethod} delivery_method
 */
V3FbsPosting.prototype['delivery_method'] = undefined;

/**
 * @member {module:model/V3PostingFinancialData} financial_data
 */
V3FbsPosting.prototype['financial_data'] = undefined;

/**
 * Дата и время начала обработки отправления.
 * @member {Date} in_process_at
 */
V3FbsPosting.prototype['in_process_at'] = undefined;

/**
 * Если использовалась быстрая доставка Ozon Express — `true`.
 * @member {Boolean} is_express
 */
V3FbsPosting.prototype['is_express'] = undefined;

/**
 * Идентификатор заказа, к которому относится отправление.
 * @member {Number} order_id
 */
V3FbsPosting.prototype['order_id'] = undefined;

/**
 * Номер заказа, к которому относится отправление.
 * @member {String} order_number
 */
V3FbsPosting.prototype['order_number'] = undefined;

/**
 * Номер родительского отправления, в результате разделения которого появилось текущее.
 * @member {String} parent_posting_number
 */
V3FbsPosting.prototype['parent_posting_number'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
V3FbsPosting.prototype['posting_number'] = undefined;

/**
 * Список товаров в отправлении.
 * @member {Array.<module:model/V3FbsPostingProduct>} products
 */
V3FbsPosting.prototype['products'] = undefined;

/**
 * @member {module:model/V3FbsPostingRequirementsV3} requirements
 */
V3FbsPosting.prototype['requirements'] = undefined;

/**
 * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
 * @member {Date} shipment_date
 */
V3FbsPosting.prototype['shipment_date'] = undefined;

/**
 * Статус отправления.
 * @member {String} status
 */
V3FbsPosting.prototype['status'] = undefined;

/**
 * Тип интеграции со службой доставки:   - `ozon` — доставка службой Ozon.   - `3pl_tracking` — доставка интегрированной службой.   - `non_integrated` — доставка сторонней службой.   - `aggregator` — доставка через партнёрскую доставку Ozon. 
 * @member {String} tpl_integration_type
 */
V3FbsPosting.prototype['tpl_integration_type'] = undefined;

/**
 * Трек-номер отправления.
 * @member {String} tracking_number
 */
V3FbsPosting.prototype['tracking_number'] = undefined;






export default V3FbsPosting;

