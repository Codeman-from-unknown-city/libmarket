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
import Productv2ImportProductsRequestItem from './Productv2ImportProductsRequestItem';

/**
 * The Productv2ImportProductsRequest model module.
 * @module model/Productv2ImportProductsRequest
 * @version 2.1
 */
class Productv2ImportProductsRequest {
    /**
     * Constructs a new <code>Productv2ImportProductsRequest</code>.
     * @alias module:model/Productv2ImportProductsRequest
     */
    constructor() { 
        
        Productv2ImportProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2ImportProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2ImportProductsRequest} obj Optional instance to populate.
     * @return {module:model/Productv2ImportProductsRequest} The populated <code>Productv2ImportProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2ImportProductsRequest();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Productv2ImportProductsRequestItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2ImportProductsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2ImportProductsRequest</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Productv2ImportProductsRequestItem.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Массив данных.
 * @member {Array.<module:model/Productv2ImportProductsRequestItem>} items
 */
Productv2ImportProductsRequest.prototype['items'] = undefined;






export default Productv2ImportProductsRequest;

