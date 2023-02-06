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
import GetProductInfoLimitResponseDailyQuota from './GetProductInfoLimitResponseDailyQuota';
import GetProductInfoLimitResponseTotalQuota from './GetProductInfoLimitResponseTotalQuota';

/**
 * The V3GetProductInfoLimitResponseResult model module.
 * @module model/V3GetProductInfoLimitResponseResult
 * @version 2.1
 */
class V3GetProductInfoLimitResponseResult {
    /**
     * Constructs a new <code>V3GetProductInfoLimitResponseResult</code>.
     * Результат работы метода.
     * @alias module:model/V3GetProductInfoLimitResponseResult
     */
    constructor() { 
        
        V3GetProductInfoLimitResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3GetProductInfoLimitResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3GetProductInfoLimitResponseResult} obj Optional instance to populate.
     * @return {module:model/V3GetProductInfoLimitResponseResult} The populated <code>V3GetProductInfoLimitResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3GetProductInfoLimitResponseResult();

            if (data.hasOwnProperty('daily_quota')) {
                obj['daily_quota'] = GetProductInfoLimitResponseDailyQuota.constructFromObject(data['daily_quota']);
            }
            if (data.hasOwnProperty('total_quota')) {
                obj['total_quota'] = GetProductInfoLimitResponseTotalQuota.constructFromObject(data['total_quota']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3GetProductInfoLimitResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3GetProductInfoLimitResponseResult</code>.
     */
    static validateJSON(data) {
        // validate the optional field `daily_quota`
        if (data['daily_quota']) { // data not null
          GetProductInfoLimitResponseDailyQuota.validateJSON(data['daily_quota']);
        }
        // validate the optional field `total_quota`
        if (data['total_quota']) { // data not null
          GetProductInfoLimitResponseTotalQuota.validateJSON(data['total_quota']);
        }

        return true;
    }


}



/**
 * @member {module:model/GetProductInfoLimitResponseDailyQuota} daily_quota
 */
V3GetProductInfoLimitResponseResult.prototype['daily_quota'] = undefined;

/**
 * @member {module:model/GetProductInfoLimitResponseTotalQuota} total_quota
 */
V3GetProductInfoLimitResponseResult.prototype['total_quota'] = undefined;






export default V3GetProductInfoLimitResponseResult;
