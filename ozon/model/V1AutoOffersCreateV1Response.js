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
import V1AutoOffersCreateV1ResponseError from './V1AutoOffersCreateV1ResponseError';
import V1AutoOffersCreateV1ResponseOffer from './V1AutoOffersCreateV1ResponseOffer';

/**
 * The V1AutoOffersCreateV1Response model module.
 * @module model/V1AutoOffersCreateV1Response
 * @version 2.1
 */
class V1AutoOffersCreateV1Response {
    /**
     * Constructs a new <code>V1AutoOffersCreateV1Response</code>.
     * @alias module:model/V1AutoOffersCreateV1Response
     */
    constructor() { 
        
        V1AutoOffersCreateV1Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoOffersCreateV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoOffersCreateV1Response} obj Optional instance to populate.
     * @return {module:model/V1AutoOffersCreateV1Response} The populated <code>V1AutoOffersCreateV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoOffersCreateV1Response();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [V1AutoOffersCreateV1ResponseError]);
            }
            if (data.hasOwnProperty('offers')) {
                obj['offers'] = ApiClient.convertToType(data['offers'], [V1AutoOffersCreateV1ResponseOffer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoOffersCreateV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoOffersCreateV1Response</code>.
     */
    static validateJSON(data) {
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                V1AutoOffersCreateV1ResponseError.validateJsonObject(item);
            };
        }
        if (data['offers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['offers'])) {
                throw new Error("Expected the field `offers` to be an array in the JSON data but got " + data['offers']);
            }
            // validate the optional field `offers` (array)
            for (const item of data['offers']) {
                V1AutoOffersCreateV1ResponseOffer.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Предложения с ошибками.
 * @member {Array.<module:model/V1AutoOffersCreateV1ResponseError>} errors
 */
V1AutoOffersCreateV1Response.prototype['errors'] = undefined;

/**
 * Созданные предложения.
 * @member {Array.<module:model/V1AutoOffersCreateV1ResponseOffer>} offers
 */
V1AutoOffersCreateV1Response.prototype['offers'] = undefined;






export default V1AutoOffersCreateV1Response;
