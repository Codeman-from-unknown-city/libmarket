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
 * The V3Dimensions model module.
 * @module model/V3Dimensions
 * @version 2.1
 */
class V3Dimensions {
    /**
     * Constructs a new <code>V3Dimensions</code>.
     * Размеры товара.
     * @alias module:model/V3Dimensions
     */
    constructor() { 
        
        V3Dimensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3Dimensions} obj Optional instance to populate.
     * @return {module:model/V3Dimensions} The populated <code>V3Dimensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3Dimensions();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3Dimensions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3Dimensions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['height'] && !(typeof data['height'] === 'string' || data['height'] instanceof String)) {
            throw new Error("Expected the field `height` to be a primitive type in the JSON string but got " + data['height']);
        }
        // ensure the json data is a string
        if (data['length'] && !(typeof data['length'] === 'string' || data['length'] instanceof String)) {
            throw new Error("Expected the field `length` to be a primitive type in the JSON string but got " + data['length']);
        }
        // ensure the json data is a string
        if (data['weight'] && !(typeof data['weight'] === 'string' || data['weight'] instanceof String)) {
            throw new Error("Expected the field `weight` to be a primitive type in the JSON string but got " + data['weight']);
        }
        // ensure the json data is a string
        if (data['width'] && !(typeof data['width'] === 'string' || data['width'] instanceof String)) {
            throw new Error("Expected the field `width` to be a primitive type in the JSON string but got " + data['width']);
        }

        return true;
    }


}



/**
 * Высота упаковки.
 * @member {String} height
 */
V3Dimensions.prototype['height'] = undefined;

/**
 * Длина товара.
 * @member {String} length
 */
V3Dimensions.prototype['length'] = undefined;

/**
 * Вес товара в упаковке.
 * @member {String} weight
 */
V3Dimensions.prototype['weight'] = undefined;

/**
 * Ширина упаковки.
 * @member {String} width
 */
V3Dimensions.prototype['width'] = undefined;






export default V3Dimensions;
