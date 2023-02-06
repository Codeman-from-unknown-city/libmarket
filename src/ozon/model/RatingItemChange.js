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
 * The RatingItemChange model module.
 * @module model/RatingItemChange
 * @version 2.1
 */
class RatingItemChange {
    /**
     * Constructs a new <code>RatingItemChange</code>.
     * Изменение рейтинга: отношение предыдущего значения к текущему. 
     * @alias module:model/RatingItemChange
     */
    constructor() { 
        
        RatingItemChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RatingItemChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingItemChange} obj Optional instance to populate.
     * @return {module:model/RatingItemChange} The populated <code>RatingItemChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RatingItemChange();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('meaning')) {
                obj['meaning'] = ApiClient.convertToType(data['meaning'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingItemChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingItemChange</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // ensure the json data is a string
        if (data['meaning'] && !(typeof data['meaning'] === 'string' || data['meaning'] instanceof String)) {
            throw new Error("Expected the field `meaning` to be a primitive type in the JSON string but got " + data['meaning']);
        }

        return true;
    }


}



/**
 * Как изменилось значение рейтинга: - `DIRECTION_UNKNOWN` — не определено. - `DIRECTION_NONE` — не изменилось. - `DIRECTION_RISE` — выросло. - `DIRECTION_FALL` — упало. 
 * @member {String} direction
 */
RatingItemChange.prototype['direction'] = undefined;

/**
 * Что означает изменение: - `MEANING_UNKNOWN` — неизвестно. - `MEANING_NONE` — нейтрально. - `MEANING_GOOD` — показатель улучшается, всё хорошо. - `MEANING_BAD` — показатель падает, нужно что-то сделать. 
 * @member {String} meaning
 */
RatingItemChange.prototype['meaning'] = undefined;






export default RatingItemChange;

