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
import Productv3Filter from './Productv3Filter';

/**
 * The Productv3GetProductAttributesV3Request model module.
 * @module model/Productv3GetProductAttributesV3Request
 * @version 2.1
 */
class Productv3GetProductAttributesV3Request {
    /**
     * Constructs a new <code>Productv3GetProductAttributesV3Request</code>.
     * @alias module:model/Productv3GetProductAttributesV3Request
     */
    constructor() { 
        
        Productv3GetProductAttributesV3Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv3GetProductAttributesV3Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv3GetProductAttributesV3Request} obj Optional instance to populate.
     * @return {module:model/Productv3GetProductAttributesV3Request} The populated <code>Productv3GetProductAttributesV3Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv3GetProductAttributesV3Request();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = Productv3Filter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('last_id')) {
                obj['last_id'] = ApiClient.convertToType(data['last_id'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('sort_by')) {
                obj['sort_by'] = ApiClient.convertToType(data['sort_by'], 'String');
            }
            if (data.hasOwnProperty('sort_dir')) {
                obj['sort_dir'] = ApiClient.convertToType(data['sort_dir'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv3GetProductAttributesV3Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv3GetProductAttributesV3Request</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          Productv3Filter.validateJSON(data['filter']);
        }
        // ensure the json data is a string
        if (data['last_id'] && !(typeof data['last_id'] === 'string' || data['last_id'] instanceof String)) {
            throw new Error("Expected the field `last_id` to be a primitive type in the JSON string but got " + data['last_id']);
        }
        // ensure the json data is a string
        if (data['sort_by'] && !(typeof data['sort_by'] === 'string' || data['sort_by'] instanceof String)) {
            throw new Error("Expected the field `sort_by` to be a primitive type in the JSON string but got " + data['sort_by']);
        }
        // ensure the json data is a string
        if (data['sort_dir'] && !(typeof data['sort_dir'] === 'string' || data['sort_dir'] instanceof String)) {
            throw new Error("Expected the field `sort_dir` to be a primitive type in the JSON string but got " + data['sort_dir']);
        }

        return true;
    }


}



/**
 * @member {module:model/Productv3Filter} filter
 */
Productv3GetProductAttributesV3Request.prototype['filter'] = undefined;

/**
 * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.  Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса. 
 * @member {String} last_id
 */
Productv3GetProductAttributesV3Request.prototype['last_id'] = undefined;

/**
 * Количество значений на странице. Минимум — 1, максимум — 1000.
 * @member {Number} limit
 */
Productv3GetProductAttributesV3Request.prototype['limit'] = undefined;

/**
 * Параметр, по которому товары будут отсортированы.
 * @member {String} sort_by
 */
Productv3GetProductAttributesV3Request.prototype['sort_by'] = undefined;

/**
 * Направление сортировки.
 * @member {String} sort_dir
 */
Productv3GetProductAttributesV3Request.prototype['sort_dir'] = undefined;






export default Productv3GetProductAttributesV3Request;

