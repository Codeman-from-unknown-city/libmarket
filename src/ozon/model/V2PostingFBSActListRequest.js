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
import V2PostingFBSActListFilter from './V2PostingFBSActListFilter';

/**
 * The V2PostingFBSActListRequest model module.
 * @module model/V2PostingFBSActListRequest
 * @version 2.1
 */
class V2PostingFBSActListRequest {
    /**
     * Constructs a new <code>V2PostingFBSActListRequest</code>.
     * @alias module:model/V2PostingFBSActListRequest
     * @param limit {Number} Максимальное количество актов в ответе.
     */
    constructor(limit) { 
        
        V2PostingFBSActListRequest.initialize(this, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit) { 
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>V2PostingFBSActListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V2PostingFBSActListRequest} obj Optional instance to populate.
     * @return {module:model/V2PostingFBSActListRequest} The populated <code>V2PostingFBSActListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2PostingFBSActListRequest();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = V2PostingFBSActListFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V2PostingFBSActListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V2PostingFBSActListRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V2PostingFBSActListRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          V2PostingFBSActListFilter.validateJSON(data['filter']);
        }

        return true;
    }


}

V2PostingFBSActListRequest.RequiredProperties = ["limit"];

/**
 * @member {module:model/V2PostingFBSActListFilter} filter
 */
V2PostingFBSActListRequest.prototype['filter'] = undefined;

/**
 * Максимальное количество актов в ответе.
 * @member {Number} limit
 */
V2PostingFBSActListRequest.prototype['limit'] = undefined;






export default V2PostingFBSActListRequest;
