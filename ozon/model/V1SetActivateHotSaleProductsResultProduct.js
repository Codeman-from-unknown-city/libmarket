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
 * The V1SetActivateHotSaleProductsResultProduct model module.
 * @module model/V1SetActivateHotSaleProductsResultProduct
 * @version 2.1
 */
class V1SetActivateHotSaleProductsResultProduct {
    /**
     * Constructs a new <code>V1SetActivateHotSaleProductsResultProduct</code>.
     * Товары, которые не получилось добавить в акцию.
     * @alias module:model/V1SetActivateHotSaleProductsResultProduct
     */
    constructor() { 
        
        V1SetActivateHotSaleProductsResultProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1SetActivateHotSaleProductsResultProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SetActivateHotSaleProductsResultProduct} obj Optional instance to populate.
     * @return {module:model/V1SetActivateHotSaleProductsResultProduct} The populated <code>V1SetActivateHotSaleProductsResultProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SetActivateHotSaleProductsResultProduct();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1SetActivateHotSaleProductsResultProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1SetActivateHotSaleProductsResultProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}



/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
V1SetActivateHotSaleProductsResultProduct.prototype['product_id'] = undefined;

/**
 * Причина, почему товар не добавлен в акцию.
 * @member {String} reason
 */
V1SetActivateHotSaleProductsResultProduct.prototype['reason'] = undefined;






export default V1SetActivateHotSaleProductsResultProduct;

