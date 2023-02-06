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
 * The ProductProductCertificateBindRequest model module.
 * @module model/ProductProductCertificateBindRequest
 * @version 2.1
 */
class ProductProductCertificateBindRequest {
    /**
     * Constructs a new <code>ProductProductCertificateBindRequest</code>.
     * @alias module:model/ProductProductCertificateBindRequest
     */
    constructor() { 
        
        ProductProductCertificateBindRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductProductCertificateBindRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductProductCertificateBindRequest} obj Optional instance to populate.
     * @return {module:model/ProductProductCertificateBindRequest} The populated <code>ProductProductCertificateBindRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductProductCertificateBindRequest();

            if (data.hasOwnProperty('certificate_id')) {
                obj['certificate_id'] = ApiClient.convertToType(data['certificate_id'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductProductCertificateBindRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductProductCertificateBindRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['product_id'])) {
            throw new Error("Expected the field `product_id` to be an array in the JSON data but got " + data['product_id']);
        }

        return true;
    }


}



/**
 * Идентификатор сертификата, который был присвоен при его загрузке.
 * @member {Number} certificate_id
 */
ProductProductCertificateBindRequest.prototype['certificate_id'] = undefined;

/**
 * Массив идентификаторов товаров, к которым относится этот сертификат.
 * @member {Array.<Number>} product_id
 */
ProductProductCertificateBindRequest.prototype['product_id'] = undefined;






export default ProductProductCertificateBindRequest;

