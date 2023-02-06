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
import DeliveryMethodListResponseDeliveryMethod from './DeliveryMethodListResponseDeliveryMethod';

/**
 * The WarehouseDeliveryMethodListResponse model module.
 * @module model/WarehouseDeliveryMethodListResponse
 * @version 2.1
 */
class WarehouseDeliveryMethodListResponse {
    /**
     * Constructs a new <code>WarehouseDeliveryMethodListResponse</code>.
     * @alias module:model/WarehouseDeliveryMethodListResponse
     */
    constructor() { 
        
        WarehouseDeliveryMethodListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WarehouseDeliveryMethodListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WarehouseDeliveryMethodListResponse} obj Optional instance to populate.
     * @return {module:model/WarehouseDeliveryMethodListResponse} The populated <code>WarehouseDeliveryMethodListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WarehouseDeliveryMethodListResponse();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [DeliveryMethodListResponseDeliveryMethod]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WarehouseDeliveryMethodListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WarehouseDeliveryMethodListResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                DeliveryMethodListResponseDeliveryMethod.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Признак, что в запросе вернулась только часть методов доставки: - `true` — сделайте повторный запрос с новым параметром `offset` для получения остальных методов; - `false` — ответ содержит все методы доставки по запросу. 
 * @member {Boolean} has_next
 */
WarehouseDeliveryMethodListResponse.prototype['has_next'] = undefined;

/**
 * Результат запроса.
 * @member {Array.<module:model/DeliveryMethodListResponseDeliveryMethod>} result
 */
WarehouseDeliveryMethodListResponse.prototype['result'] = undefined;






export default WarehouseDeliveryMethodListResponse;

