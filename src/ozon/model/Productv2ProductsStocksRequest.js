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
import Productv2ProductsStocksRequestStock from './Productv2ProductsStocksRequestStock';

/**
 * The Productv2ProductsStocksRequest model module.
 * @module model/Productv2ProductsStocksRequest
 * @version 2.1
 */
class Productv2ProductsStocksRequest {
    /**
     * Constructs a new <code>Productv2ProductsStocksRequest</code>.
     * @alias module:model/Productv2ProductsStocksRequest
     */
    constructor() { 
        
        Productv2ProductsStocksRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2ProductsStocksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2ProductsStocksRequest} obj Optional instance to populate.
     * @return {module:model/Productv2ProductsStocksRequest} The populated <code>Productv2ProductsStocksRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2ProductsStocksRequest();

            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = ApiClient.convertToType(data['stocks'], [Productv2ProductsStocksRequestStock]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2ProductsStocksRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2ProductsStocksRequest</code>.
     */
    static validateJSON(data) {
        if (data['stocks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stocks'])) {
                throw new Error("Expected the field `stocks` to be an array in the JSON data but got " + data['stocks']);
            }
            // validate the optional field `stocks` (array)
            for (const item of data['stocks']) {
                Productv2ProductsStocksRequestStock.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Информация о товарах на складах.
 * @member {Array.<module:model/Productv2ProductsStocksRequestStock>} stocks
 */
Productv2ProductsStocksRequest.prototype['stocks'] = undefined;






export default Productv2ProductsStocksRequest;

