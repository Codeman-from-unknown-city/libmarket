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
import V2FboPosting from './V2FboPosting';

/**
 * The V2FboPostingListResponse model module.
 * @module model/V2FboPostingListResponse
 * @version 2.1
 */
class V2FboPostingListResponse {
    /**
     * Constructs a new <code>V2FboPostingListResponse</code>.
     * @alias module:model/V2FboPostingListResponse
     */
    constructor() { 
        
        V2FboPostingListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2FboPostingListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2FboPostingListResponse} obj Optional instance to populate.
     * @return {module:model/V2FboPostingListResponse} The populated <code>V2FboPostingListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2FboPostingListResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [V2FboPosting]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2FboPostingListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2FboPostingListResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                V2FboPosting.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Массив отправлений.
 * @member {Array.<module:model/V2FboPosting>} result
 */
V2FboPostingListResponse.prototype['result'] = undefined;






export default V2FboPostingListResponse;

