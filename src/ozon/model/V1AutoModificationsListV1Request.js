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
 * The V1AutoModificationsListV1Request model module.
 * @module model/V1AutoModificationsListV1Request
 * @version 2.1
 */
class V1AutoModificationsListV1Request {
    /**
     * Constructs a new <code>V1AutoModificationsListV1Request</code>.
     * @alias module:model/V1AutoModificationsListV1Request
     * @param modificationIdGtOrEq {Number} Идентификатор модификации, с которого начинается список.  Минимальное значение — 1. 
     * @param perPage {Number} Количество модификаций на странице.  Минимальное значение — 1, максимальное — 500. 
     */
    constructor(modificationIdGtOrEq, perPage) { 
        
        V1AutoModificationsListV1Request.initialize(this, modificationIdGtOrEq, perPage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modificationIdGtOrEq, perPage) { 
        obj['modification_id_gt_or_eq'] = modificationIdGtOrEq;
        obj['per_page'] = perPage;
    }

    /**
     * Constructs a <code>V1AutoModificationsListV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoModificationsListV1Request} obj Optional instance to populate.
     * @return {module:model/V1AutoModificationsListV1Request} The populated <code>V1AutoModificationsListV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoModificationsListV1Request();

            if (data.hasOwnProperty('modification_id_gt_or_eq')) {
                obj['modification_id_gt_or_eq'] = ApiClient.convertToType(data['modification_id_gt_or_eq'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoModificationsListV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoModificationsListV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of V1AutoModificationsListV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

V1AutoModificationsListV1Request.RequiredProperties = ["modification_id_gt_or_eq", "per_page"];

/**
 * Идентификатор модификации, с которого начинается список.  Минимальное значение — 1. 
 * @member {Number} modification_id_gt_or_eq
 */
V1AutoModificationsListV1Request.prototype['modification_id_gt_or_eq'] = undefined;

/**
 * Количество модификаций на странице.  Минимальное значение — 1, максимальное — 500. 
 * @member {Number} per_page
 */
V1AutoModificationsListV1Request.prototype['per_page'] = undefined;






export default V1AutoModificationsListV1Request;
