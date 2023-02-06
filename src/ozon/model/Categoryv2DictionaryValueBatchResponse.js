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
import Categoryv2DictionaryValueBatchResponseDictionaryValue from './Categoryv2DictionaryValueBatchResponseDictionaryValue';

/**
 * The Categoryv2DictionaryValueBatchResponse model module.
 * @module model/Categoryv2DictionaryValueBatchResponse
 * @version 2.1
 */
class Categoryv2DictionaryValueBatchResponse {
    /**
     * Constructs a new <code>Categoryv2DictionaryValueBatchResponse</code>.
     * @alias module:model/Categoryv2DictionaryValueBatchResponse
     */
    constructor() { 
        
        Categoryv2DictionaryValueBatchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Categoryv2DictionaryValueBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Categoryv2DictionaryValueBatchResponse} obj Optional instance to populate.
     * @return {module:model/Categoryv2DictionaryValueBatchResponse} The populated <code>Categoryv2DictionaryValueBatchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Categoryv2DictionaryValueBatchResponse();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [Categoryv2DictionaryValueBatchResponseDictionaryValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Categoryv2DictionaryValueBatchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Categoryv2DictionaryValueBatchResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                Categoryv2DictionaryValueBatchResponseDictionaryValue.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} has_next
 */
Categoryv2DictionaryValueBatchResponse.prototype['has_next'] = undefined;

/**
 * @member {Array.<module:model/Categoryv2DictionaryValueBatchResponseDictionaryValue>} result
 */
Categoryv2DictionaryValueBatchResponse.prototype['result'] = undefined;






export default Categoryv2DictionaryValueBatchResponse;

