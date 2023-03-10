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
 * The DeliveryMethodListResponseDeliveryMethod model module.
 * @module model/DeliveryMethodListResponseDeliveryMethod
 * @version 2.1
 */
class DeliveryMethodListResponseDeliveryMethod {
    /**
     * Constructs a new <code>DeliveryMethodListResponseDeliveryMethod</code>.
     * @alias module:model/DeliveryMethodListResponseDeliveryMethod
     */
    constructor() { 
        
        DeliveryMethodListResponseDeliveryMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeliveryMethodListResponseDeliveryMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryMethodListResponseDeliveryMethod} obj Optional instance to populate.
     * @return {module:model/DeliveryMethodListResponseDeliveryMethod} The populated <code>DeliveryMethodListResponseDeliveryMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryMethodListResponseDeliveryMethod();

            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('cutoff')) {
                obj['cutoff'] = ApiClient.convertToType(data['cutoff'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('warehouse_id')) {
                obj['warehouse_id'] = ApiClient.convertToType(data['warehouse_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeliveryMethodListResponseDeliveryMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeliveryMethodListResponseDeliveryMethod</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cutoff'] && !(typeof data['cutoff'] === 'string' || data['cutoff'] instanceof String)) {
            throw new Error("Expected the field `cutoff` to be a primitive type in the JSON string but got " + data['cutoff']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Идентификатор продавца.
 * @member {Number} company_id
 */
DeliveryMethodListResponseDeliveryMethod.prototype['company_id'] = undefined;

/**
 * Дата и время создания метода доставки.
 * @member {Date} created_at
 */
DeliveryMethodListResponseDeliveryMethod.prototype['created_at'] = undefined;

/**
 * Время до которого продавцу нужно собрать заказ.
 * @member {String} cutoff
 */
DeliveryMethodListResponseDeliveryMethod.prototype['cutoff'] = undefined;

/**
 * Идентификатор метода доставки.
 * @member {Number} id
 */
DeliveryMethodListResponseDeliveryMethod.prototype['id'] = undefined;

/**
 * Название метода доставки.
 * @member {String} name
 */
DeliveryMethodListResponseDeliveryMethod.prototype['name'] = undefined;

/**
 * Идентификатор службы доставки.
 * @member {Number} provider_id
 */
DeliveryMethodListResponseDeliveryMethod.prototype['provider_id'] = undefined;

/**
 * Статус метода доставки:   - `NEW` — создан,   - `EDITED` — редактируется,   - `ACTIVE` — активный,   - `DISABLED` — неактивный. 
 * @member {String} status
 */
DeliveryMethodListResponseDeliveryMethod.prototype['status'] = undefined;

/**
 * Идентификатор услуги по доставке заказа.
 * @member {Number} template_id
 */
DeliveryMethodListResponseDeliveryMethod.prototype['template_id'] = undefined;

/**
 * Дата и время последнего обновления метода метода доставки.
 * @member {Date} updated_at
 */
DeliveryMethodListResponseDeliveryMethod.prototype['updated_at'] = undefined;

/**
 * Идентификатор склада.
 * @member {Number} warehouse_id
 */
DeliveryMethodListResponseDeliveryMethod.prototype['warehouse_id'] = undefined;






export default DeliveryMethodListResponseDeliveryMethod;

