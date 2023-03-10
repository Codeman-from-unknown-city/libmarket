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
import FbsPostingDetailCourier from './FbsPostingDetailCourier';
import V3AdditionalDataItem from './V3AdditionalDataItem';
import V3Addressee from './V3Addressee';
import V3Barcodes from './V3Barcodes';
import V3Cancellation from './V3Cancellation';
import V3Customer from './V3Customer';
import V3DeliveryMethod from './V3DeliveryMethod';
import V3FbsPostingAnalyticsData from './V3FbsPostingAnalyticsData';
import V3FbsPostingDetailRelatedPostings from './V3FbsPostingDetailRelatedPostings';
import V3FbsPostingProductExemplarsV3 from './V3FbsPostingProductExemplarsV3';
import V3FbsPostingRequirementsV3 from './V3FbsPostingRequirementsV3';
import V3PostingFinancialData from './V3PostingFinancialData';
import V3PostingProductDetail from './V3PostingProductDetail';

/**
 * The V3FbsPostingDetail model module.
 * @module model/V3FbsPostingDetail
 * @version 2.1
 */
class V3FbsPostingDetail {
    /**
     * Constructs a new <code>V3FbsPostingDetail</code>.
     * Информация об отправлении.
     * @alias module:model/V3FbsPostingDetail
     */
    constructor() { 
        
        V3FbsPostingDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FbsPostingDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FbsPostingDetail} obj Optional instance to populate.
     * @return {module:model/V3FbsPostingDetail} The populated <code>V3FbsPostingDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FbsPostingDetail();

            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], [V3AdditionalDataItem]);
            }
            if (data.hasOwnProperty('addressee')) {
                obj['addressee'] = V3Addressee.constructFromObject(data['addressee']);
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
            if (data.hasOwnProperty('courier')) {
                obj['courier'] = FbsPostingDetailCourier.constructFromObject(data['courier']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = V3Customer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('delivering_date')) {
                obj['delivering_date'] = ApiClient.convertToType(data['delivering_date'], 'Date');
            }
            if (data.hasOwnProperty('delivery_method')) {
                obj['delivery_method'] = V3DeliveryMethod.constructFromObject(data['delivery_method']);
            }
            if (data.hasOwnProperty('delivery_price')) {
                obj['delivery_price'] = ApiClient.convertToType(data['delivery_price'], 'String');
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
            if (data.hasOwnProperty('product_exemplars')) {
                obj['product_exemplars'] = V3FbsPostingProductExemplarsV3.constructFromObject(data['product_exemplars']);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [V3PostingProductDetail]);
            }
            if (data.hasOwnProperty('provider_status')) {
                obj['provider_status'] = ApiClient.convertToType(data['provider_status'], 'String');
            }
            if (data.hasOwnProperty('related_postings')) {
                obj['related_postings'] = V3FbsPostingDetailRelatedPostings.constructFromObject(data['related_postings']);
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
     * Validates the JSON data with respect to <code>V3FbsPostingDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FbsPostingDetail</code>.
     */
    static validateJSON(data) {
        if (data['additional_data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additional_data'])) {
                throw new Error("Expected the field `additional_data` to be an array in the JSON data but got " + data['additional_data']);
            }
            // validate the optional field `additional_data` (array)
            for (const item of data['additional_data']) {
                V3AdditionalDataItem.validateJsonObject(item);
            };
        }
        // validate the optional field `addressee`
        if (data['addressee']) { // data not null
          V3Addressee.validateJSON(data['addressee']);
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
        // validate the optional field `courier`
        if (data['courier']) { // data not null
          FbsPostingDetailCourier.validateJSON(data['courier']);
        }
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          V3Customer.validateJSON(data['customer']);
        }
        // validate the optional field `delivery_method`
        if (data['delivery_method']) { // data not null
          V3DeliveryMethod.validateJSON(data['delivery_method']);
        }
        // ensure the json data is a string
        if (data['delivery_price'] && !(typeof data['delivery_price'] === 'string' || data['delivery_price'] instanceof String)) {
            throw new Error("Expected the field `delivery_price` to be a primitive type in the JSON string but got " + data['delivery_price']);
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
        // validate the optional field `product_exemplars`
        if (data['product_exemplars']) { // data not null
          V3FbsPostingProductExemplarsV3.validateJSON(data['product_exemplars']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                V3PostingProductDetail.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['provider_status'] && !(typeof data['provider_status'] === 'string' || data['provider_status'] instanceof String)) {
            throw new Error("Expected the field `provider_status` to be a primitive type in the JSON string but got " + data['provider_status']);
        }
        // validate the optional field `related_postings`
        if (data['related_postings']) { // data not null
          V3FbsPostingDetailRelatedPostings.validateJSON(data['related_postings']);
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
 * @member {Array.<module:model/V3AdditionalDataItem>} additional_data
 */
V3FbsPostingDetail.prototype['additional_data'] = undefined;

/**
 * @member {module:model/V3Addressee} addressee
 */
V3FbsPostingDetail.prototype['addressee'] = undefined;

/**
 * @member {module:model/V3FbsPostingAnalyticsData} analytics_data
 */
V3FbsPostingDetail.prototype['analytics_data'] = undefined;

/**
 * @member {module:model/V3Barcodes} barcodes
 */
V3FbsPostingDetail.prototype['barcodes'] = undefined;

/**
 * @member {module:model/V3Cancellation} cancellation
 */
V3FbsPostingDetail.prototype['cancellation'] = undefined;

/**
 * @member {module:model/FbsPostingDetailCourier} courier
 */
V3FbsPostingDetail.prototype['courier'] = undefined;

/**
 * @member {module:model/V3Customer} customer
 */
V3FbsPostingDetail.prototype['customer'] = undefined;

/**
 * Дата передачи отправления в доставку.
 * @member {Date} delivering_date
 */
V3FbsPostingDetail.prototype['delivering_date'] = undefined;

/**
 * @member {module:model/V3DeliveryMethod} delivery_method
 */
V3FbsPostingDetail.prototype['delivery_method'] = undefined;

/**
 * Стоимость доставки.
 * @member {String} delivery_price
 */
V3FbsPostingDetail.prototype['delivery_price'] = undefined;

/**
 * @member {module:model/V3PostingFinancialData} financial_data
 */
V3FbsPostingDetail.prototype['financial_data'] = undefined;

/**
 * Дата и время начала обработки отправления.
 * @member {Date} in_process_at
 */
V3FbsPostingDetail.prototype['in_process_at'] = undefined;

/**
 * Если использовалась быстрая доставка Ozon Express — `true`.
 * @member {Boolean} is_express
 */
V3FbsPostingDetail.prototype['is_express'] = undefined;

/**
 * Идентификатор заказа, к которому относится отправление.
 * @member {Number} order_id
 */
V3FbsPostingDetail.prototype['order_id'] = undefined;

/**
 * Номер заказа, к которому относится отправление.
 * @member {String} order_number
 */
V3FbsPostingDetail.prototype['order_number'] = undefined;

/**
 * Номер родительского отправления, в результате разделения которого появилось текущее.
 * @member {String} parent_posting_number
 */
V3FbsPostingDetail.prototype['parent_posting_number'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
V3FbsPostingDetail.prototype['posting_number'] = undefined;

/**
 * @member {module:model/V3FbsPostingProductExemplarsV3} product_exemplars
 */
V3FbsPostingDetail.prototype['product_exemplars'] = undefined;

/**
 * Массив товаров в отправлении.
 * @member {Array.<module:model/V3PostingProductDetail>} products
 */
V3FbsPostingDetail.prototype['products'] = undefined;

/**
 * Статус службы доставки.
 * @member {String} provider_status
 */
V3FbsPostingDetail.prototype['provider_status'] = undefined;

/**
 * @member {module:model/V3FbsPostingDetailRelatedPostings} related_postings
 */
V3FbsPostingDetail.prototype['related_postings'] = undefined;

/**
 * @member {module:model/V3FbsPostingRequirementsV3} requirements
 */
V3FbsPostingDetail.prototype['requirements'] = undefined;

/**
 * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
 * @member {Date} shipment_date
 */
V3FbsPostingDetail.prototype['shipment_date'] = undefined;

/**
 * Статус отправления: - `awaiting_registration` — ожидает регистрации, - `acceptance_in_progress` — идёт приёмка, - `awaiting_approve` — ожидает подтверждения, - `awaiting_packaging` — ожидает упаковки, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, - `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, - `driver_pickup` — у водителя, - `delivered` — доставлено, - `cancelled` — отменено, - `not_accepted` — не принят на сортировочном центре, - `sent_by_seller` – отправлено продавцом. 
 * @member {String} status
 */
V3FbsPostingDetail.prototype['status'] = undefined;

/**
 * Тип интеграции со службой доставки:   - `ozon` — доставка через Ozon логистику.   - `aggregator` — доставка внешней службой, Ozon регистрирует заказ.   - `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ.   - `non_integrated` — доставка силами продавца. 
 * @member {String} tpl_integration_type
 */
V3FbsPostingDetail.prototype['tpl_integration_type'] = undefined;

/**
 * Трек-номер отправления.
 * @member {String} tracking_number
 */
V3FbsPostingDetail.prototype['tracking_number'] = undefined;






export default V3FbsPostingDetail;

