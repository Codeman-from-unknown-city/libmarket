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
import V2PostingFBSActListRelatedDocsActOfAcceptance from './V2PostingFBSActListRelatedDocsActOfAcceptance';
import V2PostingFBSActListRelatedDocsActOfExcess from './V2PostingFBSActListRelatedDocsActOfExcess';
import V2PostingFBSActListRelatedDocsActOfMismatch from './V2PostingFBSActListRelatedDocsActOfMismatch';

/**
 * The V2PostingFBSActListRelatedDocs model module.
 * @module model/V2PostingFBSActListRelatedDocs
 * @version 2.1
 */
class V2PostingFBSActListRelatedDocs {
    /**
     * Constructs a new <code>V2PostingFBSActListRelatedDocs</code>.
     * Информация про акты перевозки.
     * @alias module:model/V2PostingFBSActListRelatedDocs
     */
    constructor() { 
        
        V2PostingFBSActListRelatedDocs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V2PostingFBSActListRelatedDocs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingFBSActListRelatedDocs} obj Optional instance to populate.
     * @return {module:model/V2PostingFBSActListRelatedDocs} The populated <code>V2PostingFBSActListRelatedDocs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingFBSActListRelatedDocs();

            if (data.hasOwnProperty('act_of_acceptance')) {
                obj['act_of_acceptance'] = V2PostingFBSActListRelatedDocsActOfAcceptance.constructFromObject(data['act_of_acceptance']);
            }
            if (data.hasOwnProperty('act_of_mismatch')) {
                obj['act_of_mismatch'] = V2PostingFBSActListRelatedDocsActOfMismatch.constructFromObject(data['act_of_mismatch']);
            }
            if (data.hasOwnProperty('act_of_excess')) {
                obj['act_of_excess'] = V2PostingFBSActListRelatedDocsActOfExcess.constructFromObject(data['act_of_excess']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2PostingFBSActListRelatedDocs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingFBSActListRelatedDocs</code>.
     */
    static validateJSON(data) {
        // validate the optional field `act_of_acceptance`
        if (data['act_of_acceptance']) { // data not null
          V2PostingFBSActListRelatedDocsActOfAcceptance.validateJSON(data['act_of_acceptance']);
        }
        // validate the optional field `act_of_mismatch`
        if (data['act_of_mismatch']) { // data not null
          V2PostingFBSActListRelatedDocsActOfMismatch.validateJSON(data['act_of_mismatch']);
        }
        // validate the optional field `act_of_excess`
        if (data['act_of_excess']) { // data not null
          V2PostingFBSActListRelatedDocsActOfExcess.validateJSON(data['act_of_excess']);
        }

        return true;
    }


}



/**
 * @member {module:model/V2PostingFBSActListRelatedDocsActOfAcceptance} act_of_acceptance
 */
V2PostingFBSActListRelatedDocs.prototype['act_of_acceptance'] = undefined;

/**
 * @member {module:model/V2PostingFBSActListRelatedDocsActOfMismatch} act_of_mismatch
 */
V2PostingFBSActListRelatedDocs.prototype['act_of_mismatch'] = undefined;

/**
 * @member {module:model/V2PostingFBSActListRelatedDocsActOfExcess} act_of_excess
 */
V2PostingFBSActListRelatedDocs.prototype['act_of_excess'] = undefined;






export default V2PostingFBSActListRelatedDocs;
