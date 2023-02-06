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
 * The ProductGetImportProductsInfoRequest model module.
 * @module model/ProductGetImportProductsInfoRequest
 * @version 2.1
 */
class ProductGetImportProductsInfoRequest {
    /**
     * Constructs a new <code>ProductGetImportProductsInfoRequest</code>.
     * @alias module:model/ProductGetImportProductsInfoRequest
     */
    constructor() { 
        
        ProductGetImportProductsInfoRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductGetImportProductsInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductGetImportProductsInfoRequest} obj Optional instance to populate.
     * @return {module:model/ProductGetImportProductsInfoRequest} The populated <code>ProductGetImportProductsInfoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductGetImportProductsInfoRequest();

            if (data.hasOwnProperty('task_id')) {
                obj['task_id'] = ApiClient.convertToType(data['task_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductGetImportProductsInfoRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductGetImportProductsInfoRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Код задачи на импорт товаров.
 * @member {Number} task_id
 */
ProductGetImportProductsInfoRequest.prototype['task_id'] = undefined;






export default ProductGetImportProductsInfoRequest;

