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
import CommonReturnsCompanyItemFbo from './CommonReturnsCompanyItemFbo';

/**
 * The V3GetReturnsCompanyFboV3Response model module.
 * @module model/V3GetReturnsCompanyFboV3Response
 * @version 2.1
 */
class V3GetReturnsCompanyFboV3Response {
    /**
     * Constructs a new <code>V3GetReturnsCompanyFboV3Response</code>.
     * @alias module:model/V3GetReturnsCompanyFboV3Response
     */
    constructor() { 
        
        V3GetReturnsCompanyFboV3Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3GetReturnsCompanyFboV3Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3GetReturnsCompanyFboV3Response} obj Optional instance to populate.
     * @return {module:model/V3GetReturnsCompanyFboV3Response} The populated <code>V3GetReturnsCompanyFboV3Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3GetReturnsCompanyFboV3Response();

            if (data.hasOwnProperty('last_id')) {
                obj['last_id'] = ApiClient.convertToType(data['last_id'], 'Number');
            }
            if (data.hasOwnProperty('returns')) {
                obj['returns'] = ApiClient.convertToType(data['returns'], [CommonReturnsCompanyItemFbo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V3GetReturnsCompanyFboV3Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V3GetReturnsCompanyFboV3Response</code>.
     */
    static validateJSON(data) {
        if (data['returns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['returns'])) {
                throw new Error("Expected the field `returns` to be an array in the JSON data but got " + data['returns']);
            }
            // validate the optional field `returns` (array)
            for (const item of data['returns']) {
                CommonReturnsCompanyItemFbo.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Идентификатор последнего значения на странице.
 * @member {Number} last_id
 */
V3GetReturnsCompanyFboV3Response.prototype['last_id'] = undefined;

/**
 * Информация о возвратах.
 * @member {Array.<module:model/CommonReturnsCompanyItemFbo>} returns
 */
V3GetReturnsCompanyFboV3Response.prototype['returns'] = undefined;






export default V3GetReturnsCompanyFboV3Response;

