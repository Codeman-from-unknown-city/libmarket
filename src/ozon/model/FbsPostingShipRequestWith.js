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
 * The FbsPostingShipRequestWith model module.
 * @module model/FbsPostingShipRequestWith
 * @version 2.1
 */
class FbsPostingShipRequestWith {
    /**
     * Constructs a new <code>FbsPostingShipRequestWith</code>.
     * Параметр для выдачи дополнительных полей в ответе.
     * @alias module:model/FbsPostingShipRequestWith
     */
    constructor() { 
        
        FbsPostingShipRequestWith.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FbsPostingShipRequestWith</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FbsPostingShipRequestWith} obj Optional instance to populate.
     * @return {module:model/FbsPostingShipRequestWith} The populated <code>FbsPostingShipRequestWith</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FbsPostingShipRequestWith();

            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FbsPostingShipRequestWith</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FbsPostingShipRequestWith</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Выдать дополнительные поля в ответе. Передайте `true`, чтобы получить дополнительную информацию об отправлении.
 * @member {Boolean} additional_data
 */
FbsPostingShipRequestWith.prototype['additional_data'] = undefined;






export default FbsPostingShipRequestWith;

