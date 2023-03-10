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
 * The PostingPostingFBSGetActResponse model module.
 * @module model/PostingPostingFBSGetActResponse
 * @version 2.1
 */
class PostingPostingFBSGetActResponse {
    /**
     * Constructs a new <code>PostingPostingFBSGetActResponse</code>.
     * @alias module:model/PostingPostingFBSGetActResponse
     */
    constructor() { 
        
        PostingPostingFBSGetActResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingPostingFBSGetActResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingPostingFBSGetActResponse} obj Optional instance to populate.
     * @return {module:model/PostingPostingFBSGetActResponse} The populated <code>PostingPostingFBSGetActResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingPostingFBSGetActResponse();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'Blob');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingPostingFBSGetActResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingPostingFBSGetActResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Содержимое.
 * @member {Blob} content
 */
PostingPostingFBSGetActResponse.prototype['content'] = undefined;

/**
 * Название.
 * @member {String} name
 */
PostingPostingFBSGetActResponse.prototype['name'] = undefined;

/**
 * Тип.
 * @member {String} type
 */
PostingPostingFBSGetActResponse.prototype['type'] = undefined;






export default PostingPostingFBSGetActResponse;

