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
import SellerApiProductV1ResponseProductDeactivate from './SellerApiProductV1ResponseProductDeactivate';

/**
 * The SellerApiProductV1ResponseResultDeactivate model module.
 * @module model/SellerApiProductV1ResponseResultDeactivate
 * @version 2.1
 */
class SellerApiProductV1ResponseResultDeactivate {
    /**
     * Constructs a new <code>SellerApiProductV1ResponseResultDeactivate</code>.
     * Результаты запроса.
     * @alias module:model/SellerApiProductV1ResponseResultDeactivate
     */
    constructor() { 
        
        SellerApiProductV1ResponseResultDeactivate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SellerApiProductV1ResponseResultDeactivate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SellerApiProductV1ResponseResultDeactivate} obj Optional instance to populate.
     * @return {module:model/SellerApiProductV1ResponseResultDeactivate} The populated <code>SellerApiProductV1ResponseResultDeactivate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerApiProductV1ResponseResultDeactivate();

            if (data.hasOwnProperty('product_ids')) {
                obj['product_ids'] = ApiClient.convertToType(data['product_ids'], ['Number']);
            }
            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], [SellerApiProductV1ResponseProductDeactivate]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SellerApiProductV1ResponseResultDeactivate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SellerApiProductV1ResponseResultDeactivate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['product_ids'])) {
            throw new Error("Expected the field `product_ids` to be an array in the JSON data but got " + data['product_ids']);
        }
        if (data['rejected']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rejected'])) {
                throw new Error("Expected the field `rejected` to be an array in the JSON data but got " + data['rejected']);
            }
            // validate the optional field `rejected` (array)
            for (const item of data['rejected']) {
                SellerApiProductV1ResponseProductDeactivate.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Список идентификаторов товаров, которые удалены из акции.
 * @member {Array.<Number>} product_ids
 */
SellerApiProductV1ResponseResultDeactivate.prototype['product_ids'] = undefined;

/**
 * Список товаров, которые не удалось удалить из акции.
 * @member {Array.<module:model/SellerApiProductV1ResponseProductDeactivate>} rejected
 */
SellerApiProductV1ResponseResultDeactivate.prototype['rejected'] = undefined;






export default SellerApiProductV1ResponseResultDeactivate;

