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
 * The AnalyticsGetStockOnWarehousesResponseTotalStock model module.
 * @module model/AnalyticsGetStockOnWarehousesResponseTotalStock
 * @version 2.1
 */
class AnalyticsGetStockOnWarehousesResponseTotalStock {
    /**
     * Constructs a new <code>AnalyticsGetStockOnWarehousesResponseTotalStock</code>.
     * Информация об остатках товаров.
     * @alias module:model/AnalyticsGetStockOnWarehousesResponseTotalStock
     */
    constructor() { 
        
        AnalyticsGetStockOnWarehousesResponseTotalStock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalyticsGetStockOnWarehousesResponseTotalStock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsGetStockOnWarehousesResponseTotalStock} obj Optional instance to populate.
     * @return {module:model/AnalyticsGetStockOnWarehousesResponseTotalStock} The populated <code>AnalyticsGetStockOnWarehousesResponseTotalStock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsGetStockOnWarehousesResponseTotalStock();

            if (data.hasOwnProperty('between_warehouses')) {
                obj['between_warehouses'] = ApiClient.convertToType(data['between_warehouses'], 'Number');
            }
            if (data.hasOwnProperty('for_sale')) {
                obj['for_sale'] = ApiClient.convertToType(data['for_sale'], 'Number');
            }
            if (data.hasOwnProperty('loss')) {
                obj['loss'] = ApiClient.convertToType(data['loss'], 'Number');
            }
            if (data.hasOwnProperty('not_for_sale')) {
                obj['not_for_sale'] = ApiClient.convertToType(data['not_for_sale'], 'Number');
            }
            if (data.hasOwnProperty('shipped')) {
                obj['shipped'] = ApiClient.convertToType(data['shipped'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyticsGetStockOnWarehousesResponseTotalStock</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyticsGetStockOnWarehousesResponseTotalStock</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Количество товаров, которое перемещается между фулфилмент-центрами.
 * @member {Number} between_warehouses
 */
AnalyticsGetStockOnWarehousesResponseTotalStock.prototype['between_warehouses'] = undefined;

/**
 * Количество доступных для продажи товаров.
 * @member {Number} for_sale
 */
AnalyticsGetStockOnWarehousesResponseTotalStock.prototype['for_sale'] = undefined;

/**
 * Количество не найденных при подборе товаров.
 * @member {Number} loss
 */
AnalyticsGetStockOnWarehousesResponseTotalStock.prototype['loss'] = undefined;

/**
 * Количество не подлежащих реализации товаров.
 * @member {Number} not_for_sale
 */
AnalyticsGetStockOnWarehousesResponseTotalStock.prototype['not_for_sale'] = undefined;

/**
 * Количество товаров в доставке.
 * @member {Number} shipped
 */
AnalyticsGetStockOnWarehousesResponseTotalStock.prototype['shipped'] = undefined;






export default AnalyticsGetStockOnWarehousesResponseTotalStock;

