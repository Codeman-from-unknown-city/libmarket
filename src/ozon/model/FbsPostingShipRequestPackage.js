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
import V3FbsPackageProduct from './V3FbsPackageProduct';

/**
 * The FbsPostingShipRequestPackage model module.
 * @module model/FbsPostingShipRequestPackage
 * @version 2.1
 */
class FbsPostingShipRequestPackage {
    /**
     * Constructs a new <code>FbsPostingShipRequestPackage</code>.
     * @alias module:model/FbsPostingShipRequestPackage
     */
    constructor() { 
        
        FbsPostingShipRequestPackage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FbsPostingShipRequestPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FbsPostingShipRequestPackage} obj Optional instance to populate.
     * @return {module:model/FbsPostingShipRequestPackage} The populated <code>FbsPostingShipRequestPackage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FbsPostingShipRequestPackage();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [V3FbsPackageProduct]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FbsPostingShipRequestPackage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FbsPostingShipRequestPackage</code>.
     */
    static validateJSON(data) {
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                V3FbsPackageProduct.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список товаров в отправлении.
 * @member {Array.<module:model/V3FbsPackageProduct>} products
 */
FbsPostingShipRequestPackage.prototype['products'] = undefined;






export default FbsPostingShipRequestPackage;
