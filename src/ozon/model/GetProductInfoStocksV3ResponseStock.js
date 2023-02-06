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
 * The GetProductInfoStocksV3ResponseStock model module.
 * @module model/GetProductInfoStocksV3ResponseStock
 * @version 2.1
 */
class GetProductInfoStocksV3ResponseStock {
    /**
     * Constructs a new <code>GetProductInfoStocksV3ResponseStock</code>.
     * Остатки.
     * @alias module:model/GetProductInfoStocksV3ResponseStock
     */
    constructor() { 
        
        GetProductInfoStocksV3ResponseStock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductInfoStocksV3ResponseStock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductInfoStocksV3ResponseStock} obj Optional instance to populate.
     * @return {module:model/GetProductInfoStocksV3ResponseStock} The populated <code>GetProductInfoStocksV3ResponseStock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductInfoStocksV3ResponseStock();

            if (data.hasOwnProperty('present')) {
                obj['present'] = ApiClient.convertToType(data['present'], 'Number');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProductInfoStocksV3ResponseStock</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProductInfoStocksV3ResponseStock</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Сейчас на складе.
 * @member {Number} present
 */
GetProductInfoStocksV3ResponseStock.prototype['present'] = undefined;

/**
 * Зарезервировано.
 * @member {Number} reserved
 */
GetProductInfoStocksV3ResponseStock.prototype['reserved'] = undefined;

/**
 * Тип склада.
 * @member {String} type
 */
GetProductInfoStocksV3ResponseStock.prototype['type'] = undefined;






export default GetProductInfoStocksV3ResponseStock;

