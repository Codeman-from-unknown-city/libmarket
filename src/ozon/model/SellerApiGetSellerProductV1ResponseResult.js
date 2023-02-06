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
import SellerApiProduct from './SellerApiProduct';

/**
 * The SellerApiGetSellerProductV1ResponseResult model module.
 * @module model/SellerApiGetSellerProductV1ResponseResult
 * @version 2.1
 */
class SellerApiGetSellerProductV1ResponseResult {
    /**
     * Constructs a new <code>SellerApiGetSellerProductV1ResponseResult</code>.
     * Результаты запроса.
     * @alias module:model/SellerApiGetSellerProductV1ResponseResult
     */
    constructor() { 
        
        SellerApiGetSellerProductV1ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SellerApiGetSellerProductV1ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SellerApiGetSellerProductV1ResponseResult} obj Optional instance to populate.
     * @return {module:model/SellerApiGetSellerProductV1ResponseResult} The populated <code>SellerApiGetSellerProductV1ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerApiGetSellerProductV1ResponseResult();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [SellerApiProduct]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SellerApiGetSellerProductV1ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SellerApiGetSellerProductV1ResponseResult</code>.
     */
    static validateJSON(data) {
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                SellerApiProduct.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список товаров.
 * @member {Array.<module:model/SellerApiProduct>} products
 */
SellerApiGetSellerProductV1ResponseResult.prototype['products'] = undefined;

/**
 * Общее количество товаров, которое доступно для акции.
 * @member {Number} total
 */
SellerApiGetSellerProductV1ResponseResult.prototype['total'] = undefined;






export default SellerApiGetSellerProductV1ResponseResult;

