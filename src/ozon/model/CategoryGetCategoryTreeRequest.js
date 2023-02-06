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
import CategoryLanguage from './CategoryLanguage';

/**
 * The CategoryGetCategoryTreeRequest model module.
 * @module model/CategoryGetCategoryTreeRequest
 * @version 2.1
 */
class CategoryGetCategoryTreeRequest {
    /**
     * Constructs a new <code>CategoryGetCategoryTreeRequest</code>.
     * @alias module:model/CategoryGetCategoryTreeRequest
     */
    constructor() { 
        
        CategoryGetCategoryTreeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CategoryGetCategoryTreeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryGetCategoryTreeRequest} obj Optional instance to populate.
     * @return {module:model/CategoryGetCategoryTreeRequest} The populated <code>CategoryGetCategoryTreeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryGetCategoryTreeRequest();

            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = CategoryLanguage.constructFromObject(data['language']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CategoryGetCategoryTreeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CategoryGetCategoryTreeRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Идентификатор категории.
 * @member {Number} category_id
 */
CategoryGetCategoryTreeRequest.prototype['category_id'] = undefined;

/**
 * @member {module:model/CategoryLanguage} language
 */
CategoryGetCategoryTreeRequest.prototype['language'] = undefined;






export default CategoryGetCategoryTreeRequest;

