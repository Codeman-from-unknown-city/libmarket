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
import SellerApiProductPrice from './SellerApiProductPrice';

/**
 * The SellerApiActivateProductV1Request model module.
 * @module model/SellerApiActivateProductV1Request
 * @version 2.1
 */
class SellerApiActivateProductV1Request {
    /**
     * Constructs a new <code>SellerApiActivateProductV1Request</code>.
     * @alias module:model/SellerApiActivateProductV1Request
     */
    constructor() { 
        
        SellerApiActivateProductV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SellerApiActivateProductV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SellerApiActivateProductV1Request} obj Optional instance to populate.
     * @return {module:model/SellerApiActivateProductV1Request} The populated <code>SellerApiActivateProductV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerApiActivateProductV1Request();

            if (data.hasOwnProperty('action_id')) {
                obj['action_id'] = ApiClient.convertToType(data['action_id'], 'Number');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [SellerApiProductPrice]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SellerApiActivateProductV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SellerApiActivateProductV1Request</code>.
     */
    static validateJSON(data) {
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                SellerApiProductPrice.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Идентификатор акции.
 * @member {Number} action_id
 */
SellerApiActivateProductV1Request.prototype['action_id'] = undefined;

/**
 * Список товаров.
 * @member {Array.<module:model/SellerApiProductPrice>} products
 */
SellerApiActivateProductV1Request.prototype['products'] = undefined;






export default SellerApiActivateProductV1Request;

