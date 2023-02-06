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
import Postingv4FbsPostingProductExemplarValidateRequestProductExemplar from './Postingv4FbsPostingProductExemplarValidateRequestProductExemplar';

/**
 * The Postingv4FbsPostingProductExemplarValidateRequestProduct model module.
 * @module model/Postingv4FbsPostingProductExemplarValidateRequestProduct
 * @version 2.1
 */
class Postingv4FbsPostingProductExemplarValidateRequestProduct {
    /**
     * Constructs a new <code>Postingv4FbsPostingProductExemplarValidateRequestProduct</code>.
     * @alias module:model/Postingv4FbsPostingProductExemplarValidateRequestProduct
     */
    constructor() { 
        
        Postingv4FbsPostingProductExemplarValidateRequestProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Postingv4FbsPostingProductExemplarValidateRequestProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Postingv4FbsPostingProductExemplarValidateRequestProduct} obj Optional instance to populate.
     * @return {module:model/Postingv4FbsPostingProductExemplarValidateRequestProduct} The populated <code>Postingv4FbsPostingProductExemplarValidateRequestProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Postingv4FbsPostingProductExemplarValidateRequestProduct();

            if (data.hasOwnProperty('exemplars')) {
                obj['exemplars'] = ApiClient.convertToType(data['exemplars'], [Postingv4FbsPostingProductExemplarValidateRequestProductExemplar]);
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Postingv4FbsPostingProductExemplarValidateRequestProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Postingv4FbsPostingProductExemplarValidateRequestProduct</code>.
     */
    static validateJSON(data) {
        if (data['exemplars']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['exemplars'])) {
                throw new Error("Expected the field `exemplars` to be an array in the JSON data but got " + data['exemplars']);
            }
            // validate the optional field `exemplars` (array)
            for (const item of data['exemplars']) {
                Postingv4FbsPostingProductExemplarValidateRequestProductExemplar.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Информация об экземплярах.
 * @member {Array.<module:model/Postingv4FbsPostingProductExemplarValidateRequestProductExemplar>} exemplars
 */
Postingv4FbsPostingProductExemplarValidateRequestProduct.prototype['exemplars'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
Postingv4FbsPostingProductExemplarValidateRequestProduct.prototype['product_id'] = undefined;






export default Postingv4FbsPostingProductExemplarValidateRequestProduct;

