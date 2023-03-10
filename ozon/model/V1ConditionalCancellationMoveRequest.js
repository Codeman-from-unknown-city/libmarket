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
 * The V1ConditionalCancellationMoveRequest model module.
 * @module model/V1ConditionalCancellationMoveRequest
 * @version 2.1
 */
class V1ConditionalCancellationMoveRequest {
    /**
     * Constructs a new <code>V1ConditionalCancellationMoveRequest</code>.
     * @alias module:model/V1ConditionalCancellationMoveRequest
     * @param cancellationId {Number} Идентификатор заявки на отмену.
     */
    constructor(cancellationId) { 
        
        V1ConditionalCancellationMoveRequest.initialize(this, cancellationId);
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
     * Constructs a <code>V1ConditionalCancellationMoveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ConditionalCancellationMoveRequest} obj Optional instance to populate.
     * @return {module:model/V1ConditionalCancellationMoveRequest} The populated <code>V1ConditionalCancellationMoveRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ConditionalCancellationMoveRequest();

            if (data.hasOwnProperty('cancellation_id')) {
                obj['cancellation_id'] = ApiClient.convertToType(data['cancellation_id'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ConditionalCancellationMoveRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ConditionalCancellationMoveRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V1ConditionalCancellationMoveRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}

V1ConditionalCancellationMoveRequest.RequiredProperties = ["cancellation_id"];

/**
 * Идентификатор заявки на отмену.
 * @member {Number} cancellation_id
 */
V1ConditionalCancellationMoveRequest.prototype['cancellation_id'] = undefined;

/**
 * Комментарий.
 * @member {String} comment
 */
V1ConditionalCancellationMoveRequest.prototype['comment'] = undefined;






export default V1ConditionalCancellationMoveRequest;

