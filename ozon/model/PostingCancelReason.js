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
 * The PostingCancelReason model module.
 * @module model/PostingCancelReason
 * @version 2.1
 */
class PostingCancelReason {
    /**
     * Constructs a new <code>PostingCancelReason</code>.
     * @alias module:model/PostingCancelReason
     */
    constructor() { 
        
        PostingCancelReason.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingCancelReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingCancelReason} obj Optional instance to populate.
     * @return {module:model/PostingCancelReason} The populated <code>PostingCancelReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingCancelReason();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_available_for_cancellation')) {
                obj['is_available_for_cancellation'] = ApiClient.convertToType(data['is_available_for_cancellation'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type_id')) {
                obj['type_id'] = ApiClient.convertToType(data['type_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingCancelReason</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingCancelReason</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type_id'] && !(typeof data['type_id'] === 'string' || data['type_id'] instanceof String)) {
            throw new Error("Expected the field `type_id` to be a primitive type in the JSON string but got " + data['type_id']);
        }

        return true;
    }


}



/**
 * Идентификатор причины отмены:  - `352` — товар закончился на складе продавца.  - `400` — остался только бракованный товар. - `401` — продавец отклонил арбитраж. - `402` — другое (вина продавца). - `665` — покупатель не забрал заказ. - `666` — возврат из службы доставки: нет доставки в указанный регион. - `667` — заказ утерян службой доставки. 
 * @member {Number} id
 */
PostingCancelReason.prototype['id'] = undefined;

/**
 * Результат отмены отправления. `true`, если запрос доступен для отмены.
 * @member {Boolean} is_available_for_cancellation
 */
PostingCancelReason.prototype['is_available_for_cancellation'] = undefined;

/**
 * Название категории.
 * @member {String} title
 */
PostingCancelReason.prototype['title'] = undefined;

/**
 * Инициатор отмены отправления: - `buyer` — покупатель, - `seller` — продавец. 
 * @member {String} type_id
 */
PostingCancelReason.prototype['type_id'] = undefined;






export default PostingCancelReason;

