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
 * The V1AutoOffersCreateV1ResponseOffer model module.
 * @module model/V1AutoOffersCreateV1ResponseOffer
 * @version 2.1
 */
class V1AutoOffersCreateV1ResponseOffer {
    /**
     * Constructs a new <code>V1AutoOffersCreateV1ResponseOffer</code>.
     * @alias module:model/V1AutoOffersCreateV1ResponseOffer
     */
    constructor() { 
        
        V1AutoOffersCreateV1ResponseOffer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoOffersCreateV1ResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoOffersCreateV1ResponseOffer} obj Optional instance to populate.
     * @return {module:model/V1AutoOffersCreateV1ResponseOffer} The populated <code>V1AutoOffersCreateV1ResponseOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoOffersCreateV1ResponseOffer();

            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoOffersCreateV1ResponseOffer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoOffersCreateV1ResponseOffer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }

        return true;
    }


}



/**
 * Идентификатор предложения в системе Ozon.
 * @member {Number} item_id
 */
V1AutoOffersCreateV1ResponseOffer.prototype['item_id'] = undefined;

/**
 * Идентификатор предложения в системе автодилера.
 * @member {String} offer_id
 */
V1AutoOffersCreateV1ResponseOffer.prototype['offer_id'] = undefined;






export default V1AutoOffersCreateV1ResponseOffer;

