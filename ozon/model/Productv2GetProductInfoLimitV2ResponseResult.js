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
 * The Productv2GetProductInfoLimitV2ResponseResult model module.
 * @module model/Productv2GetProductInfoLimitV2ResponseResult
 * @version 2.1
 */
class Productv2GetProductInfoLimitV2ResponseResult {
    /**
     * Constructs a new <code>Productv2GetProductInfoLimitV2ResponseResult</code>.
     * @alias module:model/Productv2GetProductInfoLimitV2ResponseResult
     */
    constructor() { 
        
        Productv2GetProductInfoLimitV2ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2GetProductInfoLimitV2ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2GetProductInfoLimitV2ResponseResult} obj Optional instance to populate.
     * @return {module:model/Productv2GetProductInfoLimitV2ResponseResult} The populated <code>Productv2GetProductInfoLimitV2ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2GetProductInfoLimitV2ResponseResult();

            if (data.hasOwnProperty('remaining')) {
                obj['remaining'] = ApiClient.convertToType(data['remaining'], 'Number');
            }
            if (data.hasOwnProperty('reset_at')) {
                obj['reset_at'] = ApiClient.convertToType(data['reset_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2GetProductInfoLimitV2ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2GetProductInfoLimitV2ResponseResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Сколько изменений можно внести до сброса счётчика за текущие сутки.
 * @member {Number} remaining
 */
Productv2GetProductInfoLimitV2ResponseResult.prototype['remaining'] = undefined;

/**
 * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
 * @member {Date} reset_at
 */
Productv2GetProductInfoLimitV2ResponseResult.prototype['reset_at'] = undefined;

/**
 * Значение лимита на загрузку и обновление товаров.
 * @member {Number} value
 */
Productv2GetProductInfoLimitV2ResponseResult.prototype['value'] = undefined;






export default Productv2GetProductInfoLimitV2ResponseResult;

