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
import V1RatingStatus from './V1RatingStatus';

/**
 * The RatingValue model module.
 * @module model/RatingValue
 * @version 2.1
 */
class RatingValue {
    /**
     * Constructs a new <code>RatingValue</code>.
     * @alias module:model/RatingValue
     */
    constructor() { 
        
        RatingValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RatingValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingValue} obj Optional instance to populate.
     * @return {module:model/RatingValue} The populated <code>RatingValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RatingValue();

            if (data.hasOwnProperty('date_from')) {
                obj['date_from'] = ApiClient.convertToType(data['date_from'], 'Date');
            }
            if (data.hasOwnProperty('date_to')) {
                obj['date_to'] = ApiClient.convertToType(data['date_to'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1RatingStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingValue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `status`
        if (data['status']) { // data not null
          V1RatingStatus.validateJSON(data['status']);
        }

        return true;
    }


}



/**
 * Дата начала подсчёта рейтинга.
 * @member {Date} date_from
 */
RatingValue.prototype['date_from'] = undefined;

/**
 * Дата конца подсчёта рейтинга.
 * @member {Date} date_to
 */
RatingValue.prototype['date_to'] = undefined;

/**
 * @member {module:model/V1RatingStatus} status
 */
RatingValue.prototype['status'] = undefined;

/**
 * Значение рейтинга.
 * @member {Number} value
 */
RatingValue.prototype['value'] = undefined;






export default RatingValue;
