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
 * The V2PostingFBSActListRelatedDocsActOfAcceptance model module.
 * @module model/V2PostingFBSActListRelatedDocsActOfAcceptance
 * @version 2.1
 */
class V2PostingFBSActListRelatedDocsActOfAcceptance {
    /**
     * Constructs a new <code>V2PostingFBSActListRelatedDocsActOfAcceptance</code>.
     * Информация про акт приёма-передачи.
     * @alias module:model/V2PostingFBSActListRelatedDocsActOfAcceptance
     */
    constructor() { 
        
        V2PostingFBSActListRelatedDocsActOfAcceptance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2PostingFBSActListRelatedDocsActOfAcceptance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingFBSActListRelatedDocsActOfAcceptance} obj Optional instance to populate.
     * @return {module:model/V2PostingFBSActListRelatedDocsActOfAcceptance} The populated <code>V2PostingFBSActListRelatedDocsActOfAcceptance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingFBSActListRelatedDocsActOfAcceptance();

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
     * Validates the JSON data with respect to <code>V2PostingFBSActListRelatedDocsActOfAcceptance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingFBSActListRelatedDocsActOfAcceptance</code>.
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
V2PostingFBSActListRelatedDocsActOfAcceptance.prototype['created_at'] = undefined;

/**
 * Статус акта:   - `FORMING` — ещё не готов,   - `FORMED` — сформирован,   - `CONFIRMED` — подписан Ozon,   - `CONFIRMED_WITH_MISMATCH` — подписан Ozon с расхождениями,   - `ACCEPTED_BY_CARGO_PLACES` — принят по грузовым местам,   - `PRINTED_CARRIAGE` — электронная подпись не нужна,   - `ERROR`, `UNKNOWN_ERROR` — ошибка. 
 * @member {String} document_status
 */
V2PostingFBSActListRelatedDocsActOfAcceptance.prototype['document_status'] = undefined;






export default V2PostingFBSActListRelatedDocsActOfAcceptance;

