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
 * The PremiumScoresScore model module.
 * @module model/PremiumScoresScore
 * @version 2.1
 */
class PremiumScoresScore {
    /**
     * Constructs a new <code>PremiumScoresScore</code>.
     * @alias module:model/PremiumScoresScore
     */
    constructor() { 
        
        PremiumScoresScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PremiumScoresScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PremiumScoresScore} obj Optional instance to populate.
     * @return {module:model/PremiumScoresScore} The populated <code>PremiumScoresScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PremiumScoresScore();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('rating_value')) {
                obj['rating_value'] = ApiClient.convertToType(data['rating_value'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PremiumScoresScore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PremiumScoresScore</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Дата, когда были начислены штрафные баллы.
 * @member {Date} date
 */
PremiumScoresScore.prototype['date'] = undefined;

/**
 * Значение рейтинга, за которое были начислены штрафные баллы.
 * @member {Number} rating_value
 */
PremiumScoresScore.prototype['rating_value'] = undefined;

/**
 * Количество начисленных штрафных баллов.
 * @member {Number} value
 */
PremiumScoresScore.prototype['value'] = undefined;






export default PremiumScoresScore;
