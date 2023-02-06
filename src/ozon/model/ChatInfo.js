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
 * The ChatInfo model module.
 * @module model/ChatInfo
 * @version 2.1
 */
class ChatInfo {
    /**
     * Constructs a new <code>ChatInfo</code>.
     * Данные чата.
     * @alias module:model/ChatInfo
     */
    constructor() { 
        
        ChatInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChatInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChatInfo} obj Optional instance to populate.
     * @return {module:model/ChatInfo} The populated <code>ChatInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatInfo();

            if (data.hasOwnProperty('chat_id')) {
                obj['chat_id'] = ApiClient.convertToType(data['chat_id'], 'String');
            }
            if (data.hasOwnProperty('chat_status')) {
                obj['chat_status'] = ApiClient.convertToType(data['chat_status'], 'String');
            }
            if (data.hasOwnProperty('chat_type')) {
                obj['chat_type'] = ApiClient.convertToType(data['chat_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('first_unread_message_id')) {
                obj['first_unread_message_id'] = ApiClient.convertToType(data['first_unread_message_id'], 'Number');
            }
            if (data.hasOwnProperty('last_message_id')) {
                obj['last_message_id'] = ApiClient.convertToType(data['last_message_id'], 'Number');
            }
            if (data.hasOwnProperty('unread_count')) {
                obj['unread_count'] = ApiClient.convertToType(data['unread_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChatInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChatInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['chat_id'] && !(typeof data['chat_id'] === 'string' || data['chat_id'] instanceof String)) {
            throw new Error("Expected the field `chat_id` to be a primitive type in the JSON string but got " + data['chat_id']);
        }
        // ensure the json data is a string
        if (data['chat_status'] && !(typeof data['chat_status'] === 'string' || data['chat_status'] instanceof String)) {
            throw new Error("Expected the field `chat_status` to be a primitive type in the JSON string but got " + data['chat_status']);
        }
        // ensure the json data is a string
        if (data['chat_type'] && !(typeof data['chat_type'] === 'string' || data['chat_type'] instanceof String)) {
            throw new Error("Expected the field `chat_type` to be a primitive type in the JSON string but got " + data['chat_type']);
        }

        return true;
    }


}



/**
 * Идентификатор чата.
 * @member {String} chat_id
 */
ChatInfo.prototype['chat_id'] = undefined;

/**
 * Статус чата: - `All` — все чаты. - `Opened` — открытые чаты. - `Closed` — закрытые чаты. 
 * @member {String} chat_status
 */
ChatInfo.prototype['chat_status'] = undefined;

/**
 * Тип чата: - `Seller_Support` — чат с поддержкой. - `Buyer_Seller` — чат с покупателем. 
 * @member {String} chat_type
 */
ChatInfo.prototype['chat_type'] = undefined;

/**
 * Дата создания чата.
 * @member {Date} created_at
 */
ChatInfo.prototype['created_at'] = undefined;

/**
 * Идентификатор первого непрочитанного сообщения в чате.
 * @member {Number} first_unread_message_id
 */
ChatInfo.prototype['first_unread_message_id'] = undefined;

/**
 * Идентификатор последнего сообщения в чате.
 * @member {Number} last_message_id
 */
ChatInfo.prototype['last_message_id'] = undefined;

/**
 * Количество непрочитанных сообщений в чате.
 * @member {Number} unread_count
 */
ChatInfo.prototype['unread_count'] = undefined;






export default ChatInfo;

