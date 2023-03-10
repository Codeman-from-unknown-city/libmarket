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
import ProtobufAny from './ProtobufAny';

/**
 * The RpcStatus model module.
 * @module model/RpcStatus
 * @version 2.1
 */
class RpcStatus {
    /**
     * Constructs a new <code>RpcStatus</code>.
     * @alias module:model/RpcStatus
     */
    constructor() { 
        
        RpcStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RpcStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RpcStatus} obj Optional instance to populate.
     * @return {module:model/RpcStatus} The populated <code>RpcStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RpcStatus();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [ProtobufAny]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RpcStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RpcStatus</code>.
     */
    static validateJSON(data) {
        if (data['details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['details'])) {
                throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
            }
            // validate the optional field `details` (array)
            for (const item of data['details']) {
                ProtobufAny.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Код ошибки.
 * @member {Number} code
 */
RpcStatus.prototype['code'] = undefined;

/**
 * Дополнительная информация об ошибке.
 * @member {Array.<module:model/ProtobufAny>} details
 */
RpcStatus.prototype['details'] = undefined;

/**
 * Описание ошибки.
 * @member {String} message
 */
RpcStatus.prototype['message'] = undefined;






export default RpcStatus;

