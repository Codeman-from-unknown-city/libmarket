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
 * The V1InvoiceCreateOrUpdateResponse model module.
 * @module model/V1InvoiceCreateOrUpdateResponse
 * @version 2.1
 */
class V1InvoiceCreateOrUpdateResponse {
    /**
     * Constructs a new <code>V1InvoiceCreateOrUpdateResponse</code>.
     * @alias module:model/V1InvoiceCreateOrUpdateResponse
     */
    constructor() { 
        
        V1InvoiceCreateOrUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1InvoiceCreateOrUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1InvoiceCreateOrUpdateResponse} obj Optional instance to populate.
     * @return {module:model/V1InvoiceCreateOrUpdateResponse} The populated <code>V1InvoiceCreateOrUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1InvoiceCreateOrUpdateResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1InvoiceCreateOrUpdateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1InvoiceCreateOrUpdateResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Результат работы метода.
 * @member {Boolean} result
 */
V1InvoiceCreateOrUpdateResponse.prototype['result'] = undefined;






export default V1InvoiceCreateOrUpdateResponse;

