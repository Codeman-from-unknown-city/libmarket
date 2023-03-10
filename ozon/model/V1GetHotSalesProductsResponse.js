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
import V1GetHotSalesProductsResponseResult from './V1GetHotSalesProductsResponseResult';

/**
 * The V1GetHotSalesProductsResponse model module.
 * @module model/V1GetHotSalesProductsResponse
 * @version 2.1
 */
class V1GetHotSalesProductsResponse {
    /**
     * Constructs a new <code>V1GetHotSalesProductsResponse</code>.
     * @alias module:model/V1GetHotSalesProductsResponse
     */
    constructor() { 
        
        V1GetHotSalesProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1GetHotSalesProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GetHotSalesProductsResponse} obj Optional instance to populate.
     * @return {module:model/V1GetHotSalesProductsResponse} The populated <code>V1GetHotSalesProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GetHotSalesProductsResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = V1GetHotSalesProductsResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GetHotSalesProductsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GetHotSalesProductsResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          V1GetHotSalesProductsResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1GetHotSalesProductsResponseResult} result
 */
V1GetHotSalesProductsResponse.prototype['result'] = undefined;






export default V1GetHotSalesProductsResponse;

