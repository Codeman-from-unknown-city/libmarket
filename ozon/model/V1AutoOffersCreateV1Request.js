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
import V1AutoOffersCreateV1RequestOffer from './V1AutoOffersCreateV1RequestOffer';

/**
 * The V1AutoOffersCreateV1Request model module.
 * @module model/V1AutoOffersCreateV1Request
 * @version 2.1
 */
class V1AutoOffersCreateV1Request {
    /**
     * Constructs a new <code>V1AutoOffersCreateV1Request</code>.
     * @alias module:model/V1AutoOffersCreateV1Request
     * @param offers {Array.<module:model/V1AutoOffersCreateV1RequestOffer>} Предложения.
     */
    constructor(offers) { 
        
        V1AutoOffersCreateV1Request.initialize(this, offers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, offers) { 
        obj['offers'] = offers;
    }

    /**
     * Constructs a <code>V1AutoOffersCreateV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoOffersCreateV1Request} obj Optional instance to populate.
     * @return {module:model/V1AutoOffersCreateV1Request} The populated <code>V1AutoOffersCreateV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoOffersCreateV1Request();

            if (data.hasOwnProperty('offers')) {
                obj['offers'] = ApiClient.convertToType(data['offers'], [V1AutoOffersCreateV1RequestOffer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoOffersCreateV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoOffersCreateV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V1AutoOffersCreateV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['offers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['offers'])) {
                throw new Error("Expected the field `offers` to be an array in the JSON data but got " + data['offers']);
            }
            // validate the optional field `offers` (array)
            for (const item of data['offers']) {
                V1AutoOffersCreateV1RequestOffer.validateJsonObject(item);
            };
        }

        return true;
    }


}

V1AutoOffersCreateV1Request.RequiredProperties = ["offers"];

/**
 * Предложения.
 * @member {Array.<module:model/V1AutoOffersCreateV1RequestOffer>} offers
 */
V1AutoOffersCreateV1Request.prototype['offers'] = undefined;






export default V1AutoOffersCreateV1Request;

