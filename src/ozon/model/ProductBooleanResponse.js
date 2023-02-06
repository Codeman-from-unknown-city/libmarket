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
 * The ProductBooleanResponse model module.
 * @module model/ProductBooleanResponse
 * @version 2.1
 */
class ProductBooleanResponse {
    /**
     * Constructs a new <code>ProductBooleanResponse</code>.
     * @alias module:model/ProductBooleanResponse
     */
    constructor() { 
        
        ProductBooleanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductBooleanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductBooleanResponse} obj Optional instance to populate.
     * @return {module:model/ProductBooleanResponse} The populated <code>ProductBooleanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductBooleanResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductBooleanResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductBooleanResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Результат обработки запроса. `true`, если запрос выполнен без ошибок.
 * @member {Boolean} result
 */
ProductBooleanResponse.prototype['result'] = undefined;






export default ProductBooleanResponse;

