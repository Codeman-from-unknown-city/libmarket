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
import Postingv3GetFbsPostingUnfulfilledListResponseResult from './Postingv3GetFbsPostingUnfulfilledListResponseResult';

/**
 * The Postingv3GetFbsPostingUnfulfilledListResponse model module.
 * @module model/Postingv3GetFbsPostingUnfulfilledListResponse
 * @version 2.1
 */
class Postingv3GetFbsPostingUnfulfilledListResponse {
    /**
     * Constructs a new <code>Postingv3GetFbsPostingUnfulfilledListResponse</code>.
     * @alias module:model/Postingv3GetFbsPostingUnfulfilledListResponse
     */
    constructor() { 
        
        Postingv3GetFbsPostingUnfulfilledListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Postingv3GetFbsPostingUnfulfilledListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Postingv3GetFbsPostingUnfulfilledListResponse} obj Optional instance to populate.
     * @return {module:model/Postingv3GetFbsPostingUnfulfilledListResponse} The populated <code>Postingv3GetFbsPostingUnfulfilledListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Postingv3GetFbsPostingUnfulfilledListResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = Postingv3GetFbsPostingUnfulfilledListResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Postingv3GetFbsPostingUnfulfilledListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Postingv3GetFbsPostingUnfulfilledListResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          Postingv3GetFbsPostingUnfulfilledListResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/Postingv3GetFbsPostingUnfulfilledListResponseResult} result
 */
Postingv3GetFbsPostingUnfulfilledListResponse.prototype['result'] = undefined;






export default Postingv3GetFbsPostingUnfulfilledListResponse;

