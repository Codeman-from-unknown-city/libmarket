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
import V3FbsPosting from './V3FbsPosting';

/**
 * The V3GetFbsPostingListResponseV3Result model module.
 * @module model/V3GetFbsPostingListResponseV3Result
 * @version 2.1
 */
class V3GetFbsPostingListResponseV3Result {
    /**
     * Constructs a new <code>V3GetFbsPostingListResponseV3Result</code>.
     * Массив отправлений.
     * @alias module:model/V3GetFbsPostingListResponseV3Result
     */
    constructor() { 
        
        V3GetFbsPostingListResponseV3Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3GetFbsPostingListResponseV3Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3GetFbsPostingListResponseV3Result} obj Optional instance to populate.
     * @return {module:model/V3GetFbsPostingListResponseV3Result} The populated <code>V3GetFbsPostingListResponseV3Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3GetFbsPostingListResponseV3Result();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('postings')) {
                obj['postings'] = ApiClient.convertToType(data['postings'], [V3FbsPosting]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3GetFbsPostingListResponseV3Result</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3GetFbsPostingListResponseV3Result</code>.
     */
    static validateJSON(data) {
        if (data['postings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['postings'])) {
                throw new Error("Expected the field `postings` to be an array in the JSON data but got " + data['postings']);
            }
            // validate the optional field `postings` (array)
            for (const item of data['postings']) {
                V3FbsPosting.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Признак, что в ответе вернули не весь массив отправлений: - `true` — необходимо сделать новый запрос с другим значением `offset`, чтобы получить информацию об остальных отправлениях; - `false` — в ответе вернули весь массив отправлений для фильтра, который был задан в запросе. 
 * @member {Boolean} has_next
 */
V3GetFbsPostingListResponseV3Result.prototype['has_next'] = undefined;

/**
 * Информация об отправлении.
 * @member {Array.<module:model/V3FbsPosting>} postings
 */
V3GetFbsPostingListResponseV3Result.prototype['postings'] = undefined;






export default V3GetFbsPostingListResponseV3Result;

