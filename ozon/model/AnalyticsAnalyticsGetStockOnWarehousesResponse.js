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
import AnalyticsGetStockOnWarehousesResponseTotalItem from './AnalyticsGetStockOnWarehousesResponseTotalItem';
import AnalyticsGetStockOnWarehousesResponseWHItem from './AnalyticsGetStockOnWarehousesResponseWHItem';

/**
 * The AnalyticsAnalyticsGetStockOnWarehousesResponse model module.
 * @module model/AnalyticsAnalyticsGetStockOnWarehousesResponse
 * @version 2.1
 */
class AnalyticsAnalyticsGetStockOnWarehousesResponse {
    /**
     * Constructs a new <code>AnalyticsAnalyticsGetStockOnWarehousesResponse</code>.
     * @alias module:model/AnalyticsAnalyticsGetStockOnWarehousesResponse
     */
    constructor() { 
        
        AnalyticsAnalyticsGetStockOnWarehousesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsAnalyticsGetStockOnWarehousesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsAnalyticsGetStockOnWarehousesResponse} obj Optional instance to populate.
     * @return {module:model/AnalyticsAnalyticsGetStockOnWarehousesResponse} The populated <code>AnalyticsAnalyticsGetStockOnWarehousesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsAnalyticsGetStockOnWarehousesResponse();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('total_items')) {
                obj['total_items'] = ApiClient.convertToType(data['total_items'], [AnalyticsGetStockOnWarehousesResponseTotalItem]);
            }
            if (data.hasOwnProperty('wh_items')) {
                obj['wh_items'] = ApiClient.convertToType(data['wh_items'], [AnalyticsGetStockOnWarehousesResponseWHItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsAnalyticsGetStockOnWarehousesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsAnalyticsGetStockOnWarehousesResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['timestamp'] && !(typeof data['timestamp'] === 'string' || data['timestamp'] instanceof String)) {
            throw new Error("Expected the field `timestamp` to be a primitive type in the JSON string but got " + data['timestamp']);
        }
        if (data['total_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['total_items'])) {
                throw new Error("Expected the field `total_items` to be an array in the JSON data but got " + data['total_items']);
            }
            // validate the optional field `total_items` (array)
            for (const item of data['total_items']) {
                AnalyticsGetStockOnWarehousesResponseTotalItem.validateJsonObject(item);
            };
        }
        if (data['wh_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['wh_items'])) {
                throw new Error("Expected the field `wh_items` to be an array in the JSON data but got " + data['wh_items']);
            }
            // validate the optional field `wh_items` (array)
            for (const item of data['wh_items']) {
                AnalyticsGetStockOnWarehousesResponseWHItem.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Время создания отчёта.
 * @member {String} timestamp
 */
AnalyticsAnalyticsGetStockOnWarehousesResponse.prototype['timestamp'] = undefined;

/**
 * Данные по остаткам на всех складах.
 * @member {Array.<module:model/AnalyticsGetStockOnWarehousesResponseTotalItem>} total_items
 */
AnalyticsAnalyticsGetStockOnWarehousesResponse.prototype['total_items'] = undefined;

/**
 * Данные остатков по определённым складам.
 * @member {Array.<module:model/AnalyticsGetStockOnWarehousesResponseWHItem>} wh_items
 */
AnalyticsAnalyticsGetStockOnWarehousesResponse.prototype['wh_items'] = undefined;






export default AnalyticsAnalyticsGetStockOnWarehousesResponse;

