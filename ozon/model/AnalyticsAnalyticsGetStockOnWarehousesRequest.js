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
 * The AnalyticsAnalyticsGetStockOnWarehousesRequest model module.
 * @module model/AnalyticsAnalyticsGetStockOnWarehousesRequest
 * @version 2.1
 */
class AnalyticsAnalyticsGetStockOnWarehousesRequest {
    /**
     * Constructs a new <code>AnalyticsAnalyticsGetStockOnWarehousesRequest</code>.
     * @alias module:model/AnalyticsAnalyticsGetStockOnWarehousesRequest
     */
    constructor() { 
        
        AnalyticsAnalyticsGetStockOnWarehousesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsAnalyticsGetStockOnWarehousesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsAnalyticsGetStockOnWarehousesRequest} obj Optional instance to populate.
     * @return {module:model/AnalyticsAnalyticsGetStockOnWarehousesRequest} The populated <code>AnalyticsAnalyticsGetStockOnWarehousesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsAnalyticsGetStockOnWarehousesRequest();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsAnalyticsGetStockOnWarehousesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsAnalyticsGetStockOnWarehousesRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Количество ответов на странице. По умолчанию — 100.
 * @member {Number} limit
 */
AnalyticsAnalyticsGetStockOnWarehousesRequest.prototype['limit'] = undefined;

/**
 * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
 * @member {Number} offset
 */
AnalyticsAnalyticsGetStockOnWarehousesRequest.prototype['offset'] = undefined;






export default AnalyticsAnalyticsGetStockOnWarehousesRequest;

