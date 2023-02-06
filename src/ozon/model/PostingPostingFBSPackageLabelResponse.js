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
 * The PostingPostingFBSPackageLabelResponse model module.
 * @module model/PostingPostingFBSPackageLabelResponse
 * @version 2.1
 */
class PostingPostingFBSPackageLabelResponse {
    /**
     * Constructs a new <code>PostingPostingFBSPackageLabelResponse</code>.
     * @alias module:model/PostingPostingFBSPackageLabelResponse
     */
    constructor() { 
        
        PostingPostingFBSPackageLabelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingPostingFBSPackageLabelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingPostingFBSPackageLabelResponse} obj Optional instance to populate.
     * @return {module:model/PostingPostingFBSPackageLabelResponse} The populated <code>PostingPostingFBSPackageLabelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingPostingFBSPackageLabelResponse();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'Blob');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingPostingFBSPackageLabelResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingPostingFBSPackageLabelResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Содержимое заказа.
 * @member {Blob} content
 */
PostingPostingFBSPackageLabelResponse.prototype['content'] = undefined;






export default PostingPostingFBSPackageLabelResponse;

