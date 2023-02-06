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
import V2FbsPostingProductCountryListResponseResult from './V2FbsPostingProductCountryListResponseResult';

/**
 * The V2FbsPostingProductCountryListResponse model module.
 * @module model/V2FbsPostingProductCountryListResponse
 * @version 2.1
 */
class V2FbsPostingProductCountryListResponse {
    /**
     * Constructs a new <code>V2FbsPostingProductCountryListResponse</code>.
     * @alias module:model/V2FbsPostingProductCountryListResponse
     */
    constructor() { 
        
        V2FbsPostingProductCountryListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2FbsPostingProductCountryListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2FbsPostingProductCountryListResponse} obj Optional instance to populate.
     * @return {module:model/V2FbsPostingProductCountryListResponse} The populated <code>V2FbsPostingProductCountryListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2FbsPostingProductCountryListResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [V2FbsPostingProductCountryListResponseResult]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2FbsPostingProductCountryListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2FbsPostingProductCountryListResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                V2FbsPostingProductCountryListResponseResult.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список стран-изготовителей и ISO коды.
 * @member {Array.<module:model/V2FbsPostingProductCountryListResponseResult>} result
 */
V2FbsPostingProductCountryListResponse.prototype['result'] = undefined;






export default V2FbsPostingProductCountryListResponse;

