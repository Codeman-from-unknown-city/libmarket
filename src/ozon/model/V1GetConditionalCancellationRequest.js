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
 * The V1GetConditionalCancellationRequest model module.
 * @module model/V1GetConditionalCancellationRequest
 * @version 2.1
 */
class V1GetConditionalCancellationRequest {
    /**
     * Constructs a new <code>V1GetConditionalCancellationRequest</code>.
     * @alias module:model/V1GetConditionalCancellationRequest
     * @param cancellationId {Number} Идентификатор заявки на отмену.
     */
    constructor(cancellationId) { 
        
        V1GetConditionalCancellationRequest.initialize(this, cancellationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cancellationId) { 
        obj['cancellation_id'] = cancellationId;
    }

    /**
     * Constructs a <code>V1GetConditionalCancellationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GetConditionalCancellationRequest} obj Optional instance to populate.
     * @return {module:model/V1GetConditionalCancellationRequest} The populated <code>V1GetConditionalCancellationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GetConditionalCancellationRequest();

            if (data.hasOwnProperty('cancellation_id')) {
                obj['cancellation_id'] = ApiClient.convertToType(data['cancellation_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1GetConditionalCancellationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1GetConditionalCancellationRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V1GetConditionalCancellationRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

V1GetConditionalCancellationRequest.RequiredProperties = ["cancellation_id"];

/**
 * Идентификатор заявки на отмену.
 * @member {Number} cancellation_id
 */
V1GetConditionalCancellationRequest.prototype['cancellation_id'] = undefined;






export default V1GetConditionalCancellationRequest;
