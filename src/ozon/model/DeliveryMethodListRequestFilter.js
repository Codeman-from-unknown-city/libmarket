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
 * The DeliveryMethodListRequestFilter model module.
 * @module model/DeliveryMethodListRequestFilter
 * @version 2.1
 */
class DeliveryMethodListRequestFilter {
    /**
     * Constructs a new <code>DeliveryMethodListRequestFilter</code>.
     * Фильтр для поиска методов доставки.
     * @alias module:model/DeliveryMethodListRequestFilter
     */
    constructor() { 
        
        DeliveryMethodListRequestFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeliveryMethodListRequestFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryMethodListRequestFilter} obj Optional instance to populate.
     * @return {module:model/DeliveryMethodListRequestFilter} The populated <code>DeliveryMethodListRequestFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryMethodListRequestFilter();

            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('warehouse_id')) {
                obj['warehouse_id'] = ApiClient.convertToType(data['warehouse_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeliveryMethodListRequestFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeliveryMethodListRequestFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Идентификатор службы доставки.
 * @member {Number} provider_id
 */
DeliveryMethodListRequestFilter.prototype['provider_id'] = undefined;

/**
 * Статус метода доставки:   - `NEW` — создан,   - `EDITED` — редактируется,   - `ACTIVE` — активный,   - `DISABLED` — неактивный. 
 * @member {String} status
 */
DeliveryMethodListRequestFilter.prototype['status'] = undefined;

/**
 * Идентификатор склада.
 * @member {Number} warehouse_id
 */
DeliveryMethodListRequestFilter.prototype['warehouse_id'] = undefined;






export default DeliveryMethodListRequestFilter;
