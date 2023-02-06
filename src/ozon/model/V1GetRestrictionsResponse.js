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
import V1Restriction from './V1Restriction';

/**
 * The V1GetRestrictionsResponse model module.
 * @module model/V1GetRestrictionsResponse
 * @version 2.1
 */
class V1GetRestrictionsResponse {
    /**
     * Constructs a new <code>V1GetRestrictionsResponse</code>.
     * @alias module:model/V1GetRestrictionsResponse
     */
    constructor() { 
        
        V1GetRestrictionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1GetRestrictionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GetRestrictionsResponse} obj Optional instance to populate.
     * @return {module:model/V1GetRestrictionsResponse} The populated <code>V1GetRestrictionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GetRestrictionsResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = V1Restriction.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GetRestrictionsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GetRestrictionsResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          V1Restriction.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1Restriction} result
 */
V1GetRestrictionsResponse.prototype['result'] = undefined;






export default V1GetRestrictionsResponse;

