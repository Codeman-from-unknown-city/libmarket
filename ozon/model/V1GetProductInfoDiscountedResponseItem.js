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
 * The V1GetProductInfoDiscountedResponseItem model module.
 * @module model/V1GetProductInfoDiscountedResponseItem
 * @version 2.1
 */
class V1GetProductInfoDiscountedResponseItem {
    /**
     * Constructs a new <code>V1GetProductInfoDiscountedResponseItem</code>.
     * @alias module:model/V1GetProductInfoDiscountedResponseItem
     */
    constructor() { 
        
        V1GetProductInfoDiscountedResponseItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1GetProductInfoDiscountedResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GetProductInfoDiscountedResponseItem} obj Optional instance to populate.
     * @return {module:model/V1GetProductInfoDiscountedResponseItem} The populated <code>V1GetProductInfoDiscountedResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GetProductInfoDiscountedResponseItem();

            if (data.hasOwnProperty('comment_reason_damaged')) {
                obj['comment_reason_damaged'] = ApiClient.convertToType(data['comment_reason_damaged'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
            }
            if (data.hasOwnProperty('condition_estimation')) {
                obj['condition_estimation'] = ApiClient.convertToType(data['condition_estimation'], 'String');
            }
            if (data.hasOwnProperty('defects')) {
                obj['defects'] = ApiClient.convertToType(data['defects'], 'String');
            }
            if (data.hasOwnProperty('discounted_sku')) {
                obj['discounted_sku'] = ApiClient.convertToType(data['discounted_sku'], 'Number');
            }
            if (data.hasOwnProperty('mechanical_damage')) {
                obj['mechanical_damage'] = ApiClient.convertToType(data['mechanical_damage'], 'String');
            }
            if (data.hasOwnProperty('package_damage')) {
                obj['package_damage'] = ApiClient.convertToType(data['package_damage'], 'String');
            }
            if (data.hasOwnProperty('packaging_violation')) {
                obj['packaging_violation'] = ApiClient.convertToType(data['packaging_violation'], 'String');
            }
            if (data.hasOwnProperty('reason_damaged')) {
                obj['reason_damaged'] = ApiClient.convertToType(data['reason_damaged'], 'String');
            }
            if (data.hasOwnProperty('repair')) {
                obj['repair'] = ApiClient.convertToType(data['repair'], 'String');
            }
            if (data.hasOwnProperty('shortage')) {
                obj['shortage'] = ApiClient.convertToType(data['shortage'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'Number');
            }
            if (data.hasOwnProperty('warranty_type')) {
                obj['warranty_type'] = ApiClient.convertToType(data['warranty_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GetProductInfoDiscountedResponseItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GetProductInfoDiscountedResponseItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['comment_reason_damaged'] && !(typeof data['comment_reason_damaged'] === 'string' || data['comment_reason_damaged'] instanceof String)) {
            throw new Error("Expected the field `comment_reason_damaged` to be a primitive type in the JSON string but got " + data['comment_reason_damaged']);
        }
        // ensure the json data is a string
        if (data['condition'] && !(typeof data['condition'] === 'string' || data['condition'] instanceof String)) {
            throw new Error("Expected the field `condition` to be a primitive type in the JSON string but got " + data['condition']);
        }
        // ensure the json data is a string
        if (data['condition_estimation'] && !(typeof data['condition_estimation'] === 'string' || data['condition_estimation'] instanceof String)) {
            throw new Error("Expected the field `condition_estimation` to be a primitive type in the JSON string but got " + data['condition_estimation']);
        }
        // ensure the json data is a string
        if (data['defects'] && !(typeof data['defects'] === 'string' || data['defects'] instanceof String)) {
            throw new Error("Expected the field `defects` to be a primitive type in the JSON string but got " + data['defects']);
        }
        // ensure the json data is a string
        if (data['mechanical_damage'] && !(typeof data['mechanical_damage'] === 'string' || data['mechanical_damage'] instanceof String)) {
            throw new Error("Expected the field `mechanical_damage` to be a primitive type in the JSON string but got " + data['mechanical_damage']);
        }
        // ensure the json data is a string
        if (data['package_damage'] && !(typeof data['package_damage'] === 'string' || data['package_damage'] instanceof String)) {
            throw new Error("Expected the field `package_damage` to be a primitive type in the JSON string but got " + data['package_damage']);
        }
        // ensure the json data is a string
        if (data['packaging_violation'] && !(typeof data['packaging_violation'] === 'string' || data['packaging_violation'] instanceof String)) {
            throw new Error("Expected the field `packaging_violation` to be a primitive type in the JSON string but got " + data['packaging_violation']);
        }
        // ensure the json data is a string
        if (data['reason_damaged'] && !(typeof data['reason_damaged'] === 'string' || data['reason_damaged'] instanceof String)) {
            throw new Error("Expected the field `reason_damaged` to be a primitive type in the JSON string but got " + data['reason_damaged']);
        }
        // ensure the json data is a string
        if (data['repair'] && !(typeof data['repair'] === 'string' || data['repair'] instanceof String)) {
            throw new Error("Expected the field `repair` to be a primitive type in the JSON string but got " + data['repair']);
        }
        // ensure the json data is a string
        if (data['shortage'] && !(typeof data['shortage'] === 'string' || data['shortage'] instanceof String)) {
            throw new Error("Expected the field `shortage` to be a primitive type in the JSON string but got " + data['shortage']);
        }
        // ensure the json data is a string
        if (data['warranty_type'] && !(typeof data['warranty_type'] === 'string' || data['warranty_type'] instanceof String)) {
            throw new Error("Expected the field `warranty_type` to be a primitive type in the JSON string but got " + data['warranty_type']);
        }

        return true;
    }


}



/**
 * Комментарий к причине повреждения.
 * @member {String} comment_reason_damaged
 */
V1GetProductInfoDiscountedResponseItem.prototype['comment_reason_damaged'] = undefined;

/**
 * Состояние товара — новый или Б/У.
 * @member {String} condition
 */
V1GetProductInfoDiscountedResponseItem.prototype['condition'] = undefined;

/**
 * Состояние товара по шкале от 1 до 7: - 1 — удовлетворительное, - 2 — хорошее, - 3 — очень хорошее, - 4 — отличное, - 5–7 — как новый. 
 * @member {String} condition_estimation
 */
V1GetProductInfoDiscountedResponseItem.prototype['condition_estimation'] = undefined;

/**
 * Дефекты товара.
 * @member {String} defects
 */
V1GetProductInfoDiscountedResponseItem.prototype['defects'] = undefined;

/**
 * SKU уценённого товара.
 * @member {Number} discounted_sku
 */
V1GetProductInfoDiscountedResponseItem.prototype['discounted_sku'] = undefined;

/**
 * Описание механического повреждения.
 * @member {String} mechanical_damage
 */
V1GetProductInfoDiscountedResponseItem.prototype['mechanical_damage'] = undefined;

/**
 * Описание повреждения упаковки.
 * @member {String} package_damage
 */
V1GetProductInfoDiscountedResponseItem.prototype['package_damage'] = undefined;

/**
 * Признак нарушения целостности упаковки.
 * @member {String} packaging_violation
 */
V1GetProductInfoDiscountedResponseItem.prototype['packaging_violation'] = undefined;

/**
 * Причина повреждения.
 * @member {String} reason_damaged
 */
V1GetProductInfoDiscountedResponseItem.prototype['reason_damaged'] = undefined;

/**
 * Признак, что товар отремонтирован.
 * @member {String} repair
 */
V1GetProductInfoDiscountedResponseItem.prototype['repair'] = undefined;

/**
 * Признак, что товар некомплектный.
 * @member {String} shortage
 */
V1GetProductInfoDiscountedResponseItem.prototype['shortage'] = undefined;

/**
 * SKU основного товара.
 * @member {Number} sku
 */
V1GetProductInfoDiscountedResponseItem.prototype['sku'] = undefined;

/**
 * Наличие у товара действующей гарантии.
 * @member {String} warranty_type
 */
V1GetProductInfoDiscountedResponseItem.prototype['warranty_type'] = undefined;






export default V1GetProductInfoDiscountedResponseItem;

