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
 * The Productv2GetProductInfoRequest model module.
 * @module model/Productv2GetProductInfoRequest
 * @version 2.1
 */
class Productv2GetProductInfoRequest {
    /**
     * Constructs a new <code>Productv2GetProductInfoRequest</code>.
     * @alias module:model/Productv2GetProductInfoRequest
     */
    constructor() { 
        
        Productv2GetProductInfoRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2GetProductInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2GetProductInfoRequest} obj Optional instance to populate.
     * @return {module:model/Productv2GetProductInfoRequest} The populated <code>Productv2GetProductInfoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2GetProductInfoRequest();

            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2GetProductInfoRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2GetProductInfoRequest</code>.
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
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
Productv2GetProductInfoRequest.prototype['offer_id'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
Productv2GetProductInfoRequest.prototype['product_id'] = undefined;

/**
 * Идентификатор товара в системе Ozon — SKU.
 * @member {Number} sku
 */
Productv2GetProductInfoRequest.prototype['sku'] = undefined;






export default Productv2GetProductInfoRequest;

