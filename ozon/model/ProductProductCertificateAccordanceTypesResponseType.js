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
 * The ProductProductCertificateAccordanceTypesResponseType model module.
 * @module model/ProductProductCertificateAccordanceTypesResponseType
 * @version 2.1
 */
class ProductProductCertificateAccordanceTypesResponseType {
    /**
     * Constructs a new <code>ProductProductCertificateAccordanceTypesResponseType</code>.
     * @alias module:model/ProductProductCertificateAccordanceTypesResponseType
     */
    constructor() { 
        
        ProductProductCertificateAccordanceTypesResponseType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductProductCertificateAccordanceTypesResponseType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductProductCertificateAccordanceTypesResponseType} obj Optional instance to populate.
     * @return {module:model/ProductProductCertificateAccordanceTypesResponseType} The populated <code>ProductProductCertificateAccordanceTypesResponseType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductProductCertificateAccordanceTypesResponseType();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductProductCertificateAccordanceTypesResponseType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductProductCertificateAccordanceTypesResponseType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * Название документа.
 * @member {String} name
 */
ProductProductCertificateAccordanceTypesResponseType.prototype['name'] = undefined;

/**
 * Значение справочника.
 * @member {String} value
 */
ProductProductCertificateAccordanceTypesResponseType.prototype['value'] = undefined;






export default ProductProductCertificateAccordanceTypesResponseType;
