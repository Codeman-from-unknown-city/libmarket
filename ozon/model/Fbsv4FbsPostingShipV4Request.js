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
import FbsPostingShipV4RequestPackage from './FbsPostingShipV4RequestPackage';
import FbsPostingShipV4RequestWith from './FbsPostingShipV4RequestWith';

/**
 * The Fbsv4FbsPostingShipV4Request model module.
 * @module model/Fbsv4FbsPostingShipV4Request
 * @version 2.1
 */
class Fbsv4FbsPostingShipV4Request {
    /**
     * Constructs a new <code>Fbsv4FbsPostingShipV4Request</code>.
     * @alias module:model/Fbsv4FbsPostingShipV4Request
     */
    constructor() { 
        
        Fbsv4FbsPostingShipV4Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fbsv4FbsPostingShipV4Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fbsv4FbsPostingShipV4Request} obj Optional instance to populate.
     * @return {module:model/Fbsv4FbsPostingShipV4Request} The populated <code>Fbsv4FbsPostingShipV4Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fbsv4FbsPostingShipV4Request();

            if (data.hasOwnProperty('packages')) {
                obj['packages'] = ApiClient.convertToType(data['packages'], [FbsPostingShipV4RequestPackage]);
            }
            if (data.hasOwnProperty('posting_number')) {
                obj['posting_number'] = ApiClient.convertToType(data['posting_number'], 'String');
            }
            if (data.hasOwnProperty('with')) {
                obj['with'] = FbsPostingShipV4RequestWith.constructFromObject(data['with']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Fbsv4FbsPostingShipV4Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Fbsv4FbsPostingShipV4Request</code>.
     */
    static validateJSON(data) {
        if (data['packages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['packages'])) {
                throw new Error("Expected the field `packages` to be an array in the JSON data but got " + data['packages']);
            }
            // validate the optional field `packages` (array)
            for (const item of data['packages']) {
                FbsPostingShipV4RequestPackage.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['posting_number'] && !(typeof data['posting_number'] === 'string' || data['posting_number'] instanceof String)) {
            throw new Error("Expected the field `posting_number` to be a primitive type in the JSON string but got " + data['posting_number']);
        }
        // validate the optional field `with`
        if (data['with']) { // data not null
          FbsPostingShipV4RequestWith.validateJSON(data['with']);
        }

        return true;
    }


}



/**
 * Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ.
 * @member {Array.<module:model/FbsPostingShipV4RequestPackage>} packages
 */
Fbsv4FbsPostingShipV4Request.prototype['packages'] = undefined;

/**
 * Номер отправления.
 * @member {String} posting_number
 */
Fbsv4FbsPostingShipV4Request.prototype['posting_number'] = undefined;

/**
 * @member {module:model/FbsPostingShipV4RequestWith} with
 */
Fbsv4FbsPostingShipV4Request.prototype['with'] = undefined;






export default Fbsv4FbsPostingShipV4Request;

