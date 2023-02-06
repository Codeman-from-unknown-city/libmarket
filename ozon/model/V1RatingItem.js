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
import RatingItemChange from './RatingItemChange';

/**
 * The V1RatingItem model module.
 * @module model/V1RatingItem
 * @version 2.1
 */
class V1RatingItem {
    /**
     * Constructs a new <code>V1RatingItem</code>.
     * @alias module:model/V1RatingItem
     */
    constructor() { 
        
        V1RatingItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RatingItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RatingItem} obj Optional instance to populate.
     * @return {module:model/V1RatingItem} The populated <code>V1RatingItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RatingItem();

            if (data.hasOwnProperty('change')) {
                obj['change'] = RatingItemChange.constructFromObject(data['change']);
            }
            if (data.hasOwnProperty('current_value')) {
                obj['current_value'] = ApiClient.convertToType(data['current_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('past_value')) {
                obj['past_value'] = ApiClient.convertToType(data['past_value'], 'Number');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'String');
            }
            if (data.hasOwnProperty('rating_direction')) {
                obj['rating_direction'] = ApiClient.convertToType(data['rating_direction'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('value_type')) {
                obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1RatingItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1RatingItem</code>.
     */
    static validateJSON(data) {
        // validate the optional field `change`
        if (data['change']) { // data not null
          RatingItemChange.validateJSON(data['change']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['rating'] && !(typeof data['rating'] === 'string' || data['rating'] instanceof String)) {
            throw new Error("Expected the field `rating` to be a primitive type in the JSON string but got " + data['rating']);
        }
        // ensure the json data is a string
        if (data['rating_direction'] && !(typeof data['rating_direction'] === 'string' || data['rating_direction'] instanceof String)) {
            throw new Error("Expected the field `rating_direction` to be a primitive type in the JSON string but got " + data['rating_direction']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['value_type'] && !(typeof data['value_type'] === 'string' || data['value_type'] instanceof String)) {
            throw new Error("Expected the field `value_type` to be a primitive type in the JSON string but got " + data['value_type']);
        }

        return true;
    }


}



/**
 * @member {module:model/RatingItemChange} change
 */
V1RatingItem.prototype['change'] = undefined;

/**
 * Текущее значение рейтинга.
 * @member {Number} current_value
 */
V1RatingItem.prototype['current_value'] = undefined;

/**
 * Название рейтинга.
 * @member {String} name
 */
V1RatingItem.prototype['name'] = undefined;

/**
 * Предыдущее значение рейтинга.
 * @member {Number} past_value
 */
V1RatingItem.prototype['past_value'] = undefined;

/**
 * Название рейтинга в системе.
 * @member {String} rating
 */
V1RatingItem.prototype['rating'] = undefined;

/**
 * Каким должно быть значение рейтинга, чтобы оно считалось хорошим: - `UNKNOWN_DIRECTION` — не определено. - `NEUTRAL` — неважно. - `HIGHER_IS_BETTER` — чем выше, тем лучше. - `LOWER_IS_BETTER` — чем ниже, тем лучше. 
 * @member {String} rating_direction
 */
V1RatingItem.prototype['rating_direction'] = undefined;

/**
 * Статус рейтинга: - `UNKNOWN_STATUS` — не определён. - `OK` — все хорошо. - `WARNING` — показатели требуют внимания. - `CRITICAL` — критичный рейтинг. 
 * @member {String} status
 */
V1RatingItem.prototype['status'] = undefined;

/**
 * Тип значения: - `UNKNOWN_VALUE` — не определён. - `INDEX` — индекс. - `PERCENT` — процент. - `TIME` — время. - `RATIO` — коэффициент. - `REVIEW_SCORE` — оценка. - `COUNT` — счёт. 
 * @member {String} value_type
 */
V1RatingItem.prototype['value_type'] = undefined;






export default V1RatingItem;
