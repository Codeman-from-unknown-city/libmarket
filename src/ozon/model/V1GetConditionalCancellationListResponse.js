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
import GetConditionalCancellationListResponseCounters from './GetConditionalCancellationListResponseCounters';
import V1ConditionalCancellation from './V1ConditionalCancellation';

/**
 * The V1GetConditionalCancellationListResponse model module.
 * @module model/V1GetConditionalCancellationListResponse
 * @version 2.1
 */
class V1GetConditionalCancellationListResponse {
    /**
     * Constructs a new <code>V1GetConditionalCancellationListResponse</code>.
     * @alias module:model/V1GetConditionalCancellationListResponse
     */
    constructor() { 
        
        V1GetConditionalCancellationListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1GetConditionalCancellationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GetConditionalCancellationListResponse} obj Optional instance to populate.
     * @return {module:model/V1GetConditionalCancellationListResponse} The populated <code>V1GetConditionalCancellationListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GetConditionalCancellationListResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [V1ConditionalCancellation]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('counters')) {
                obj['counters'] = GetConditionalCancellationListResponseCounters.constructFromObject(data['counters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GetConditionalCancellationListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GetConditionalCancellationListResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                V1ConditionalCancellation.validateJsonObject(item);
            };
        }
        // validate the optional field `counters`
        if (data['counters']) { // data not null
          GetConditionalCancellationListResponseCounters.validateJSON(data['counters']);
        }

        return true;
    }


}



/**
 * Список заявок на отмену.
 * @member {Array.<module:model/V1ConditionalCancellation>} result
 */
V1GetConditionalCancellationListResponse.prototype['result'] = undefined;

/**
 * Общее количество заявок по заданным фильтрам.
 * @member {Number} total
 */
V1GetConditionalCancellationListResponse.prototype['total'] = undefined;

/**
 * @member {module:model/GetConditionalCancellationListResponseCounters} counters
 */
V1GetConditionalCancellationListResponse.prototype['counters'] = undefined;






export default V1GetConditionalCancellationListResponse;
