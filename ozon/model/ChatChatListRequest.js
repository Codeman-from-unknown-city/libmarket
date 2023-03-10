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
import ChatListRequestWith from './ChatListRequestWith';

/**
 * The ChatChatListRequest model module.
 * @module model/ChatChatListRequest
 * @version 2.1
 */
class ChatChatListRequest {
    /**
     * Constructs a new <code>ChatChatListRequest</code>.
     * @alias module:model/ChatChatListRequest
     */
    constructor() { 
        
        ChatChatListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChatChatListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChatChatListRequest} obj Optional instance to populate.
     * @return {module:model/ChatChatListRequest} The populated <code>ChatChatListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatChatListRequest();

            if (data.hasOwnProperty('chat_id_list')) {
                obj['chat_id_list'] = ApiClient.convertToType(data['chat_id_list'], ['String']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('with')) {
                obj['with'] = ChatListRequestWith.constructFromObject(data['with']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChatChatListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChatChatListRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['chat_id_list'])) {
            throw new Error("Expected the field `chat_id_list` to be an array in the JSON data but got " + data['chat_id_list']);
        }
        // validate the optional field `with`
        if (data['with']) { // data not null
          ChatListRequestWith.validateJSON(data['with']);
        }

        return true;
    }


}



/**
 * Массив с идентификаторами чатов, для которых нужно вывести информацию.
 * @member {Array.<String>} chat_id_list
 */
ChatChatListRequest.prototype['chat_id_list'] = undefined;

/**
 * Количество страниц в ответе.
 * @member {Number} page
 */
ChatChatListRequest.prototype['page'] = undefined;

/**
 * Количество чатов на странице. Значение по умолчанию — 100. Максимальное значение — 1000.
 * @member {Number} page_size
 */
ChatChatListRequest.prototype['page_size'] = undefined;

/**
 * @member {module:model/ChatListRequestWith} with
 */
ChatChatListRequest.prototype['with'] = undefined;






export default ChatChatListRequest;

