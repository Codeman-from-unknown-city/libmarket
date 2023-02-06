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
import FbsPostingBarcodes from './FbsPostingBarcodes';
import FbsPostingFbsPostingAnalyticsData from './FbsPostingFbsPostingAnalyticsData';
import V2FbsPostingProduct from './V2FbsPostingProduct';
import V2PostingFinancialData from './V2PostingFinancialData';

/**
 * The V2FbsPosting model module.
 * @module model/V2FbsPosting
 * @version 2.1
 */
class V2FbsPosting {
    /**
     * Constructs a new <code>V2FbsPosting</code>.
     * Результаты запроса.
     * @alias module:model/V2FbsPosting
     */
    constructor() { 
        
        V2FbsPosting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2FbsPosting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2FbsPosting} obj Optional instance to populate.
     * @return {module:model/V2FbsPosting} The populated <code>V2FbsPosting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2FbsPosting();

            if (data.hasOwnProperty('analytics_data')) {
                obj['analytics_data'] = FbsPostingFbsPostingAnalyticsData.constructFromObject(data['analytics_data']);
            }
            if (data.hasOwnProperty('barcodes')) {
                obj['barcodes'] = FbsPostingBarcodes.constructFromObject(data['barcodes']);
            }
            if (data.hasOwnProperty('cancel_reason_id')) {
                obj['cancel_reason_id'] = ApiClient.convertToType(data['cancel_reason_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('financial_data')) {
                obj['financial_data'] = V2PostingFinancialData.constructFromObject(data['financial_data']);
            }
            if (data.hasOwnProperty('in_process_at')) {
                obj['in_process_at'] = ApiClient.convertToType(data['in_process_at'], 'Date');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('order_number')) {
                obj['order_number'] = ApiClient.convertToType(data['order_number'], 'String');
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [V2FbsPostingProduct]);
            }
            if (data.hasOwnProperty('shipment_date')) {
                obj['shipment_date'] = ApiClient.convertToType(data['shipment_date'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2FbsPosting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2FbsPosting</code>.
     */
    static validateJSON(data) {
        // validate the optional field `analytics_data`
        if (data['analytics_data']) { // data not null
          FbsPostingFbsPostingAnalyticsData.validateJSON(data['analytics_data']);
        }
        // validate the optional field `barcodes`
        if (data['barcodes']) { // data not null
          FbsPostingBarcodes.validateJSON(data['barcodes']);
        }
        // validate the optional field `financial_data`
        if (data['financial_data']) { // data not null
          V2PostingFinancialData.validateJSON(data['financial_data']);
        }
        // ensure the json data is a string
        if (data['order_number'] && !(typeof data['order_number'] === 'string' || data['order_number'] instanceof String)) {
            throw new Error("Expected the field `order_number` to be a primitive type in the JSON string but got " + data['order_number']);
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
                V2FbsPostingProduct.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {module:model/FbsPostingFbsPostingAnalyticsData} analytics_data
 */
V2FbsPosting.prototype['analytics_data'] = undefined;

/**
 * @member {module:model/FbsPostingBarcodes} barcodes
 */
V2FbsPosting.prototype['barcodes'] = undefined;

/**
 * Идентификатор причины отмены отправления.
 * @member {Number} cancel_reason_id
 */
V2FbsPosting.prototype['cancel_reason_id'] = undefined;

/**
 * Дата и время создания отправления.
 * @member {Date} created_at
 */
V2FbsPosting.prototype['created_at'] = undefined;

/**
 * @member {module:model/V2PostingFinancialData} financial_data
 */
V2FbsPosting.prototype['financial_data'] = undefined;

/**
 * Дата и время начала обработки отправления.
 * @member {Date} in_process_at
 */
V2FbsPosting.prototype['in_process_at'] = undefined;

/**
 * Идентификатор заказа, к которому относится отправление.
 * @member {Number} order_id
 */
V2FbsPosting.prototype['order_id'] = undefined;

/**
 * Номер заказа, к которому относится отправление.
 * @member {String} order_number
 */
V2FbsPosting.prototype['order_number'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
V2FbsPosting.prototype['posting_number'] = undefined;

/**
 * Список товаров в отправлении.
 * @member {Array.<module:model/V2FbsPostingProduct>} products
 */
V2FbsPosting.prototype['products'] = undefined;

/**
 * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
 * @member {Date} shipment_date
 */
V2FbsPosting.prototype['shipment_date'] = undefined;

/**
 * Статус отправления.
 * @member {String} status
 */
V2FbsPosting.prototype['status'] = undefined;






export default V2FbsPosting;
