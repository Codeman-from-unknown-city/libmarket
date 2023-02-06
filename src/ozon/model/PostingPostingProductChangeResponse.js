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
 * The PostingPostingProductChangeResponse model module.
 * @module model/PostingPostingProductChangeResponse
 * @version 2.1
 */
class PostingPostingProductChangeResponse {
    /**
     * Constructs a new <code>PostingPostingProductChangeResponse</code>.
     * @alias module:model/PostingPostingProductChangeResponse
     */
    constructor() { 
        
        PostingPostingProductChangeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingPostingProductChangeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingPostingProductChangeResponse} obj Optional instance to populate.
     * @return {module:model/PostingPostingProductChangeResponse} The populated <code>PostingPostingProductChangeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingPostingProductChangeResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingPostingProductChangeResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingPostingProductChangeResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['result'] && !(typeof data['result'] === 'string' || data['result'] instanceof String)) {
            throw new Error("Expected the field `result` to be a primitive type in the JSON string but got " + data['result']);
        }

        return true;
    }


}



/**
 * Идентификатор отправления.
 * @member {String} result
 */
PostingPostingProductChangeResponse.prototype['result'] = undefined;






export default PostingPostingProductChangeResponse;
