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
import V3FbsPostingExemplarProductV3 from './V3FbsPostingExemplarProductV3';

/**
 * The V3FbsPostingProductExemplarsV3 model module.
 * @module model/V3FbsPostingProductExemplarsV3
 * @version 2.1
 */
class V3FbsPostingProductExemplarsV3 {
    /**
     * Constructs a new <code>V3FbsPostingProductExemplarsV3</code>.
     * Информация по продуктам и их экзмеплярам.  Ответ содержит поле &#x60;product_exemplars&#x60;, если в запросе передан признак &#x60;with.product_exemplars &#x3D; true&#x60;. 
     * @alias module:model/V3FbsPostingProductExemplarsV3
     */
    constructor() { 
        
        V3FbsPostingProductExemplarsV3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3FbsPostingProductExemplarsV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3FbsPostingProductExemplarsV3} obj Optional instance to populate.
     * @return {module:model/V3FbsPostingProductExemplarsV3} The populated <code>V3FbsPostingProductExemplarsV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3FbsPostingProductExemplarsV3();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [V3FbsPostingExemplarProductV3]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3FbsPostingProductExemplarsV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3FbsPostingProductExemplarsV3</code>.
     */
    static validateJSON(data) {
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                V3FbsPostingExemplarProductV3.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V3FbsPostingExemplarProductV3>} products
 */
V3FbsPostingProductExemplarsV3.prototype['products'] = undefined;






export default V3FbsPostingProductExemplarsV3;

