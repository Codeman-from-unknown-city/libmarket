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
import ProductUpdateOfferIdRequestUpdateOfferId from './ProductUpdateOfferIdRequestUpdateOfferId';

/**
 * The V1ProductUpdateOfferIdRequest model module.
 * @module model/V1ProductUpdateOfferIdRequest
 * @version 2.1
 */
class V1ProductUpdateOfferIdRequest {
    /**
     * Constructs a new <code>V1ProductUpdateOfferIdRequest</code>.
     * @alias module:model/V1ProductUpdateOfferIdRequest
     */
    constructor() { 
        
        V1ProductUpdateOfferIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ProductUpdateOfferIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ProductUpdateOfferIdRequest} obj Optional instance to populate.
     * @return {module:model/V1ProductUpdateOfferIdRequest} The populated <code>V1ProductUpdateOfferIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ProductUpdateOfferIdRequest();

            if (data.hasOwnProperty('update_offer_id')) {
                obj['update_offer_id'] = ApiClient.convertToType(data['update_offer_id'], [ProductUpdateOfferIdRequestUpdateOfferId]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ProductUpdateOfferIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ProductUpdateOfferIdRequest</code>.
     */
    static validateJSON(data) {
        if (data['update_offer_id']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['update_offer_id'])) {
                throw new Error("Expected the field `update_offer_id` to be an array in the JSON data but got " + data['update_offer_id']);
            }
            // validate the optional field `update_offer_id` (array)
            for (const item of data['update_offer_id']) {
                ProductUpdateOfferIdRequestUpdateOfferId.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список пар с новыми и старыми значениями артикулов.
 * @member {Array.<module:model/ProductUpdateOfferIdRequestUpdateOfferId>} update_offer_id
 */
V1ProductUpdateOfferIdRequest.prototype['update_offer_id'] = undefined;






export default V1ProductUpdateOfferIdRequest;
