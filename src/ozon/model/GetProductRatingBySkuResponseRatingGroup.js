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
import GetProductRatingBySkuResponseRatingCondition from './GetProductRatingBySkuResponseRatingCondition';
import GetProductRatingBySkuResponseRatingImproveAttribute from './GetProductRatingBySkuResponseRatingImproveAttribute';

/**
 * The GetProductRatingBySkuResponseRatingGroup model module.
 * @module model/GetProductRatingBySkuResponseRatingGroup
 * @version 2.1
 */
class GetProductRatingBySkuResponseRatingGroup {
    /**
     * Constructs a new <code>GetProductRatingBySkuResponseRatingGroup</code>.
     * @alias module:model/GetProductRatingBySkuResponseRatingGroup
     */
    constructor() { 
        
        GetProductRatingBySkuResponseRatingGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductRatingBySkuResponseRatingGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductRatingBySkuResponseRatingGroup} obj Optional instance to populate.
     * @return {module:model/GetProductRatingBySkuResponseRatingGroup} The populated <code>GetProductRatingBySkuResponseRatingGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductRatingBySkuResponseRatingGroup();

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [GetProductRatingBySkuResponseRatingCondition]);
            }
            if (data.hasOwnProperty('improve_at_least')) {
                obj['improve_at_least'] = ApiClient.convertToType(data['improve_at_least'], 'Number');
            }
            if (data.hasOwnProperty('improve_attributes')) {
                obj['improve_attributes'] = ApiClient.convertToType(data['improve_attributes'], [GetProductRatingBySkuResponseRatingImproveAttribute]);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProductRatingBySkuResponseRatingGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProductRatingBySkuResponseRatingGroup</code>.
     */
    static validateJSON(data) {
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                GetProductRatingBySkuResponseRatingCondition.validateJsonObject(item);
            };
        }
        if (data['improve_attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['improve_attributes'])) {
                throw new Error("Expected the field `improve_attributes` to be an array in the JSON data but got " + data['improve_attributes']);
            }
            // validate the optional field `improve_attributes` (array)
            for (const item of data['improve_attributes']) {
                GetProductRatingBySkuResponseRatingImproveAttribute.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Список условий, увеличивающих контент-рейтинг товара.
 * @member {Array.<module:model/GetProductRatingBySkuResponseRatingCondition>} conditions
 */
GetProductRatingBySkuResponseRatingGroup.prototype['conditions'] = undefined;

/**
 * Количество атрибутов, которые нужно заполнить для получения максимального балла в этой группе характеристик.
 * @member {Number} improve_at_least
 */
GetProductRatingBySkuResponseRatingGroup.prototype['improve_at_least'] = undefined;

/**
 * Cписок атрибутов, заполнение которых может увеличить контент-рейтинг товара.
 * @member {Array.<module:model/GetProductRatingBySkuResponseRatingImproveAttribute>} improve_attributes
 */
GetProductRatingBySkuResponseRatingGroup.prototype['improve_attributes'] = undefined;

/**
 * Идентификатор группы.
 * @member {String} key
 */
GetProductRatingBySkuResponseRatingGroup.prototype['key'] = undefined;

/**
 * Название группы.
 * @member {String} name
 */
GetProductRatingBySkuResponseRatingGroup.prototype['name'] = undefined;

/**
 * Рейтинг в группе.
 * @member {Number} rating
 */
GetProductRatingBySkuResponseRatingGroup.prototype['rating'] = undefined;

/**
 * Процент влияния характеристик группы на контент-рейтинг.
 * @member {Number} weight
 */
GetProductRatingBySkuResponseRatingGroup.prototype['weight'] = undefined;






export default GetProductRatingBySkuResponseRatingGroup;

