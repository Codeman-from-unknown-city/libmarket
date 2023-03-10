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
 * The V2FbsPostingProductCountryListRequest model module.
 * @module model/V2FbsPostingProductCountryListRequest
 * @version 2.1
 */
class V2FbsPostingProductCountryListRequest {
    /**
     * Constructs a new <code>V2FbsPostingProductCountryListRequest</code>.
     * @alias module:model/V2FbsPostingProductCountryListRequest
     */
    constructor() { 
        
        V2FbsPostingProductCountryListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2FbsPostingProductCountryListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2FbsPostingProductCountryListRequest} obj Optional instance to populate.
     * @return {module:model/V2FbsPostingProductCountryListRequest} The populated <code>V2FbsPostingProductCountryListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2FbsPostingProductCountryListRequest();

            if (data.hasOwnProperty('name_search')) {
                obj['name_search'] = ApiClient.convertToType(data['name_search'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2FbsPostingProductCountryListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2FbsPostingProductCountryListRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name_search'] && !(typeof data['name_search'] === 'string' || data['name_search'] instanceof String)) {
            throw new Error("Expected the field `name_search` to be a primitive type in the JSON string but got " + data['name_search']);
        }

        return true;
    }


}



/**
 * Фильтрация по строке.
 * @member {String} name_search
 */
V2FbsPostingProductCountryListRequest.prototype['name_search'] = undefined;






export default V2FbsPostingProductCountryListRequest;

