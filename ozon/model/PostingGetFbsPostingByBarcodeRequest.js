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
 * The PostingGetFbsPostingByBarcodeRequest model module.
 * @module model/PostingGetFbsPostingByBarcodeRequest
 * @version 2.1
 */
class PostingGetFbsPostingByBarcodeRequest {
    /**
     * Constructs a new <code>PostingGetFbsPostingByBarcodeRequest</code>.
     * @alias module:model/PostingGetFbsPostingByBarcodeRequest
     */
    constructor() { 
        
        PostingGetFbsPostingByBarcodeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingGetFbsPostingByBarcodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingGetFbsPostingByBarcodeRequest} obj Optional instance to populate.
     * @return {module:model/PostingGetFbsPostingByBarcodeRequest} The populated <code>PostingGetFbsPostingByBarcodeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingGetFbsPostingByBarcodeRequest();

            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingGetFbsPostingByBarcodeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingGetFbsPostingByBarcodeRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }

        return true;
    }


}



/**
 * Штрихкод отправления.
 * @member {String} barcode
 */
PostingGetFbsPostingByBarcodeRequest.prototype['barcode'] = undefined;






export default PostingGetFbsPostingByBarcodeRequest;

