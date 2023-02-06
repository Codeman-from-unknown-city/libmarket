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
 * The V1AutoCBOsListV1Request model module.
 * @module model/V1AutoCBOsListV1Request
 * @version 2.1
 */
class V1AutoCBOsListV1Request {
    /**
     * Constructs a new <code>V1AutoCBOsListV1Request</code>.
     * @alias module:model/V1AutoCBOsListV1Request
     * @param page {Number} Номер страницы.  Минимальное значение — 1. 
     * @param perPage {Number} Количество автосалонов на странице.  Минимальное значение — 1, максимальное — 100. 
     */
    constructor(page, perPage) { 
        
        V1AutoCBOsListV1Request.initialize(this, page, perPage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, page, perPage) { 
        obj['page'] = page;
        obj['per_page'] = perPage;
    }

    /**
     * Constructs a <code>V1AutoCBOsListV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoCBOsListV1Request} obj Optional instance to populate.
     * @return {module:model/V1AutoCBOsListV1Request} The populated <code>V1AutoCBOsListV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoCBOsListV1Request();

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoCBOsListV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoCBOsListV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V1AutoCBOsListV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

V1AutoCBOsListV1Request.RequiredProperties = ["page", "per_page"];

/**
 * Номер страницы.  Минимальное значение — 1. 
 * @member {Number} page
 */
V1AutoCBOsListV1Request.prototype['page'] = undefined;

/**
 * Количество автосалонов на странице.  Минимальное значение — 1, максимальное — 100. 
 * @member {Number} per_page
 */
V1AutoCBOsListV1Request.prototype['per_page'] = undefined;






export default V1AutoCBOsListV1Request;

