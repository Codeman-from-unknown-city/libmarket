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
 * The V2PostingFBSDigitalActDocumentSignRequest model module.
 * @module model/V2PostingFBSDigitalActDocumentSignRequest
 * @version 2.1
 */
class V2PostingFBSDigitalActDocumentSignRequest {
    /**
     * Constructs a new <code>V2PostingFBSDigitalActDocumentSignRequest</code>.
     * @alias module:model/V2PostingFBSDigitalActDocumentSignRequest
     */
    constructor() { 
        
        V2PostingFBSDigitalActDocumentSignRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2PostingFBSDigitalActDocumentSignRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingFBSDigitalActDocumentSignRequest} obj Optional instance to populate.
     * @return {module:model/V2PostingFBSDigitalActDocumentSignRequest} The populated <code>V2PostingFBSDigitalActDocumentSignRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingFBSDigitalActDocumentSignRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('doc_type')) {
                obj['doc_type'] = ApiClient.convertToType(data['doc_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2PostingFBSDigitalActDocumentSignRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingFBSDigitalActDocumentSignRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['doc_type'] && !(typeof data['doc_type'] === 'string' || data['doc_type'] instanceof String)) {
            throw new Error("Expected the field `doc_type` to be a primitive type in the JSON string but got " + data['doc_type']);
        }

        return true;
    }


}



/**
 * Идентификатор отгрузки.
 * @member {Number} id
 */
V2PostingFBSDigitalActDocumentSignRequest.prototype['id'] = undefined;

/**
 * Тип электронного документа:   - `act_of_mismatch` — акт о расхождениях,   - `act_of_excess` — акт об излишках. 
 * @member {String} doc_type
 */
V2PostingFBSDigitalActDocumentSignRequest.prototype['doc_type'] = undefined;






export default V2PostingFBSDigitalActDocumentSignRequest;
