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
import V1SetActivateHotSaleProductsResultProduct from './V1SetActivateHotSaleProductsResultProduct';

/**
 * The V1SetActivateHotSaleProductsResultResult model module.
 * @module model/V1SetActivateHotSaleProductsResultResult
 * @version 2.1
 */
class V1SetActivateHotSaleProductsResultResult {
    /**
     * Constructs a new <code>V1SetActivateHotSaleProductsResultResult</code>.
     * Результат работы метода.
     * @alias module:model/V1SetActivateHotSaleProductsResultResult
     */
    constructor() { 
        
        V1SetActivateHotSaleProductsResultResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1SetActivateHotSaleProductsResultResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SetActivateHotSaleProductsResultResult} obj Optional instance to populate.
     * @return {module:model/V1SetActivateHotSaleProductsResultResult} The populated <code>V1SetActivateHotSaleProductsResultResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SetActivateHotSaleProductsResultResult();

            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], [V1SetActivateHotSaleProductsResultProduct]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1SetActivateHotSaleProductsResultResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1SetActivateHotSaleProductsResultResult</code>.
     */
    static validateJSON(data) {
        if (data['rejected']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rejected'])) {
                throw new Error("Expected the field `rejected` to be an array in the JSON data but got " + data['rejected']);
            }
            // validate the optional field `rejected` (array)
            for (const item of data['rejected']) {
                V1SetActivateHotSaleProductsResultProduct.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список товаров, которые не удалось добавить в акцию.
 * @member {Array.<module:model/V1SetActivateHotSaleProductsResultProduct>} rejected
 */
V1SetActivateHotSaleProductsResultResult.prototype['rejected'] = undefined;






export default V1SetActivateHotSaleProductsResultResult;

