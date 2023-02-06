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
import PolygonBindRequestpolygon from './PolygonBindRequestpolygon';
import PolygonBindRequestwhLocation from './PolygonBindRequestwhLocation';

/**
 * The Polygonv1PolygonBindRequest model module.
 * @module model/Polygonv1PolygonBindRequest
 * @version 2.1
 */
class Polygonv1PolygonBindRequest {
    /**
     * Constructs a new <code>Polygonv1PolygonBindRequest</code>.
     * @alias module:model/Polygonv1PolygonBindRequest
     */
    constructor() { 
        
        Polygonv1PolygonBindRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Polygonv1PolygonBindRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Polygonv1PolygonBindRequest} obj Optional instance to populate.
     * @return {module:model/Polygonv1PolygonBindRequest} The populated <code>Polygonv1PolygonBindRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Polygonv1PolygonBindRequest();

            if (data.hasOwnProperty('delivery_method_id')) {
                obj['delivery_method_id'] = ApiClient.convertToType(data['delivery_method_id'], 'Number');
            }
            if (data.hasOwnProperty('polygons')) {
                obj['polygons'] = ApiClient.convertToType(data['polygons'], [PolygonBindRequestpolygon]);
            }
            if (data.hasOwnProperty('warehouse_location')) {
                obj['warehouse_location'] = PolygonBindRequestwhLocation.constructFromObject(data['warehouse_location']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Polygonv1PolygonBindRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Polygonv1PolygonBindRequest</code>.
     */
    static validateJSON(data) {
        if (data['polygons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['polygons'])) {
                throw new Error("Expected the field `polygons` to be an array in the JSON data but got " + data['polygons']);
            }
            // validate the optional field `polygons` (array)
            for (const item of data['polygons']) {
                PolygonBindRequestpolygon.validateJsonObject(item);
            };
        }
        // validate the optional field `warehouse_location`
        if (data['warehouse_location']) { // data not null
          PolygonBindRequestwhLocation.validateJSON(data['warehouse_location']);
        }

        return true;
    }


}



/**
 * Идентификатор метода доставки.
 * @member {Number} delivery_method_id
 */
Polygonv1PolygonBindRequest.prototype['delivery_method_id'] = undefined;

/**
 * Список полигонов.
 * @member {Array.<module:model/PolygonBindRequestpolygon>} polygons
 */
Polygonv1PolygonBindRequest.prototype['polygons'] = undefined;

/**
 * @member {module:model/PolygonBindRequestwhLocation} warehouse_location
 */
Polygonv1PolygonBindRequest.prototype['warehouse_location'] = undefined;






export default Polygonv1PolygonBindRequest;
