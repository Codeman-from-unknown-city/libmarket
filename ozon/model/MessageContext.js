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
import ContextItem from './ContextItem';
import ContextOrder from './ContextOrder';

/**
 * The MessageContext model module.
 * @module model/MessageContext
 * @version 2.1
 */
class MessageContext {
    /**
     * Constructs a new <code>MessageContext</code>.
     * Заказ или отдельный товар, о котором пользователь написал в чат.
     * @alias module:model/MessageContext
     */
    constructor() { 
        
        MessageContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageContext} obj Optional instance to populate.
     * @return {module:model/MessageContext} The populated <code>MessageContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageContext();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ContextItem.constructFromObject(data['item']);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ContextOrder.constructFromObject(data['order']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MessageContext</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageContext</code>.
     */
    static validateJSON(data) {
        // validate the optional field `item`
        if (data['item']) { // data not null
          ContextItem.validateJSON(data['item']);
        }
        // validate the optional field `order`
        if (data['order']) { // data not null
          ContextOrder.validateJSON(data['order']);
        }

        return true;
    }


}



/**
 * @member {module:model/ContextItem} item
 */
MessageContext.prototype['item'] = undefined;

/**
 * @member {module:model/ContextOrder} order
 */
MessageContext.prototype['order'] = undefined;






export default MessageContext;

