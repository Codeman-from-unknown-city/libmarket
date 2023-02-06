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
import ProductGetProductInfoDescriptionResponseProduct from './ProductGetProductInfoDescriptionResponseProduct';

/**
 * The ProductGetProductInfoDescriptionResponse model module.
 * @module model/ProductGetProductInfoDescriptionResponse
 * @version 2.1
 */
class ProductGetProductInfoDescriptionResponse {
    /**
     * Constructs a new <code>ProductGetProductInfoDescriptionResponse</code>.
     * @alias module:model/ProductGetProductInfoDescriptionResponse
     */
    constructor() { 
        
        ProductGetProductInfoDescriptionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductGetProductInfoDescriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductGetProductInfoDescriptionResponse} obj Optional instance to populate.
     * @return {module:model/ProductGetProductInfoDescriptionResponse} The populated <code>ProductGetProductInfoDescriptionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductGetProductInfoDescriptionResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ProductGetProductInfoDescriptionResponseProduct.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductGetProductInfoDescriptionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductGetProductInfoDescriptionResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          ProductGetProductInfoDescriptionResponseProduct.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductGetProductInfoDescriptionResponseProduct} result
 */
ProductGetProductInfoDescriptionResponse.prototype['result'] = undefined;






export default ProductGetProductInfoDescriptionResponse;

