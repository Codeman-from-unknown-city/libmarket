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
 * The V2PostingFBSActListRelatedDocsActOfMismatch model module.
 * @module model/V2PostingFBSActListRelatedDocsActOfMismatch
 * @version 2.1
 */
class V2PostingFBSActListRelatedDocsActOfMismatch {
    /**
     * Constructs a new <code>V2PostingFBSActListRelatedDocsActOfMismatch</code>.
     * Информация про акт о расхождениях.
     * @alias module:model/V2PostingFBSActListRelatedDocsActOfMismatch
     */
    constructor() { 
        
        V2PostingFBSActListRelatedDocsActOfMismatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2PostingFBSActListRelatedDocsActOfMismatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingFBSActListRelatedDocsActOfMismatch} obj Optional instance to populate.
     * @return {module:model/V2PostingFBSActListRelatedDocsActOfMismatch} The populated <code>V2PostingFBSActListRelatedDocsActOfMismatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingFBSActListRelatedDocsActOfMismatch();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('document_status')) {
                obj['document_status'] = ApiClient.convertToType(data['document_status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2PostingFBSActListRelatedDocsActOfMismatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingFBSActListRelatedDocsActOfMismatch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['document_status'] && !(typeof data['document_status'] === 'string' || data['document_status'] instanceof String)) {
            throw new Error("Expected the field `document_status` to be a primitive type in the JSON string but got " + data['document_status']);
        }

        return true;
    }


}



/**
 * Дата создания акта.
 * @member {Date} created_at
 */
V2PostingFBSActListRelatedDocsActOfMismatch.prototype['created_at'] = undefined;

/**
 * Статус акта:   - `NEED_TO_SIGN` — требуется подпись,   - `ON_CONFIRMATION` — на подписании Ozon,   - `CONFIRMED` — подписан Ozon,   - `DISPUTE_OPENED` — принят по грузовым местам,   - `PRINTED_CARRIAGE` — электронная подпись не нужна,   - `UNKNOWN_ERROR` — ошибка. 
 * @member {String} document_status
 */
V2PostingFBSActListRelatedDocsActOfMismatch.prototype['document_status'] = undefined;






export default V2PostingFBSActListRelatedDocsActOfMismatch;

