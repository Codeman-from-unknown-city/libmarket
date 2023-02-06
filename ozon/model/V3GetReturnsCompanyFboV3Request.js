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
import V3ReturnsCompanyFilterFbo from './V3ReturnsCompanyFilterFbo';

/**
 * The V3GetReturnsCompanyFboV3Request model module.
 * @module model/V3GetReturnsCompanyFboV3Request
 * @version 2.1
 */
class V3GetReturnsCompanyFboV3Request {
    /**
     * Constructs a new <code>V3GetReturnsCompanyFboV3Request</code>.
     * @alias module:model/V3GetReturnsCompanyFboV3Request
     */
    constructor() { 
        
        V3GetReturnsCompanyFboV3Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3GetReturnsCompanyFboV3Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3GetReturnsCompanyFboV3Request} obj Optional instance to populate.
     * @return {module:model/V3GetReturnsCompanyFboV3Request} The populated <code>V3GetReturnsCompanyFboV3Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3GetReturnsCompanyFboV3Request();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = V3ReturnsCompanyFilterFbo.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('last_id')) {
                obj['last_id'] = ApiClient.convertToType(data['last_id'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3GetReturnsCompanyFboV3Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3GetReturnsCompanyFboV3Request</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          V3ReturnsCompanyFilterFbo.validateJSON(data['filter']);
        }

        return true;
    }


}



/**
 * @member {module:model/V3ReturnsCompanyFilterFbo} filter
 */
V3GetReturnsCompanyFboV3Request.prototype['filter'] = undefined;

/**
 * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.  Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса. 
 * @member {Number} last_id
 */
V3GetReturnsCompanyFboV3Request.prototype['last_id'] = undefined;

/**
 * Количество значений в ответе.
 * @member {Number} limit
 */
V3GetReturnsCompanyFboV3Request.prototype['limit'] = undefined;






export default V3GetReturnsCompanyFboV3Request;
