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
 * The GetProductAttributesResponsePdf model module.
 * @module model/GetProductAttributesResponsePdf
 * @version 2.1
 */
class GetProductAttributesResponsePdf {
    /**
     * Constructs a new <code>GetProductAttributesResponsePdf</code>.
     * @alias module:model/GetProductAttributesResponsePdf
     */
    constructor() { 
        
        GetProductAttributesResponsePdf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductAttributesResponsePdf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductAttributesResponsePdf} obj Optional instance to populate.
     * @return {module:model/GetProductAttributesResponsePdf} The populated <code>GetProductAttributesResponsePdf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductAttributesResponsePdf();

            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProductAttributesResponsePdf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProductAttributesResponsePdf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Путь к PDF-файлу.
 * @member {String} file_name
 */
GetProductAttributesResponsePdf.prototype['file_name'] = undefined;

/**
 * Индекс документа в хранилище, который задаёт порядок.
 * @member {Number} index
 */
GetProductAttributesResponsePdf.prototype['index'] = undefined;

/**
 * Название файла.
 * @member {String} name
 */
GetProductAttributesResponsePdf.prototype['name'] = undefined;






export default GetProductAttributesResponsePdf;
