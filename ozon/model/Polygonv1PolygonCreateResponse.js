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
 * The Polygonv1PolygonCreateResponse model module.
 * @module model/Polygonv1PolygonCreateResponse
 * @version 2.1
 */
class Polygonv1PolygonCreateResponse {
    /**
     * Constructs a new <code>Polygonv1PolygonCreateResponse</code>.
     * @alias module:model/Polygonv1PolygonCreateResponse
     */
    constructor() { 
        
        Polygonv1PolygonCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Polygonv1PolygonCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Polygonv1PolygonCreateResponse} obj Optional instance to populate.
     * @return {module:model/Polygonv1PolygonCreateResponse} The populated <code>Polygonv1PolygonCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Polygonv1PolygonCreateResponse();

            if (data.hasOwnProperty('polygon_id')) {
                obj['polygon_id'] = ApiClient.convertToType(data['polygon_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Polygonv1PolygonCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Polygonv1PolygonCreateResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Идентификатор полигона.
 * @member {Number} polygon_id
 */
Polygonv1PolygonCreateResponse.prototype['polygon_id'] = undefined;






export default Polygonv1PolygonCreateResponse;

