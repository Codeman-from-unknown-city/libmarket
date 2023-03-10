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
import PostingFbsPostingSentbysellerResponseItem from './PostingFbsPostingSentbysellerResponseItem';

/**
 * The PostingFbsPostingSentbysellerResponse model module.
 * @module model/PostingFbsPostingSentbysellerResponse
 * @version 2.1
 */
class PostingFbsPostingSentbysellerResponse {
    /**
     * Constructs a new <code>PostingFbsPostingSentbysellerResponse</code>.
     * @alias module:model/PostingFbsPostingSentbysellerResponse
     */
    constructor() { 
        
        PostingFbsPostingSentbysellerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingFbsPostingSentbysellerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingFbsPostingSentbysellerResponse} obj Optional instance to populate.
     * @return {module:model/PostingFbsPostingSentbysellerResponse} The populated <code>PostingFbsPostingSentbysellerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingFbsPostingSentbysellerResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [PostingFbsPostingSentbysellerResponseItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingFbsPostingSentbysellerResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingFbsPostingSentbysellerResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                PostingFbsPostingSentbysellerResponseItem.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Результат работы метода.
 * @member {Array.<module:model/PostingFbsPostingSentbysellerResponseItem>} result
 */
PostingFbsPostingSentbysellerResponse.prototype['result'] = undefined;






export default PostingFbsPostingSentbysellerResponse;

