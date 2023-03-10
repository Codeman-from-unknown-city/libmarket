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
import V2GetGeoRestrictionsByFilterRequestFilter from './V2GetGeoRestrictionsByFilterRequestFilter';

/**
 * The Productv2GetGeoRestrictionsByFilterRequest model module.
 * @module model/Productv2GetGeoRestrictionsByFilterRequest
 * @version 2.1
 */
class Productv2GetGeoRestrictionsByFilterRequest {
    /**
     * Constructs a new <code>Productv2GetGeoRestrictionsByFilterRequest</code>.
     * @alias module:model/Productv2GetGeoRestrictionsByFilterRequest
     */
    constructor() { 
        
        Productv2GetGeoRestrictionsByFilterRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2GetGeoRestrictionsByFilterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2GetGeoRestrictionsByFilterRequest} obj Optional instance to populate.
     * @return {module:model/Productv2GetGeoRestrictionsByFilterRequest} The populated <code>Productv2GetGeoRestrictionsByFilterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2GetGeoRestrictionsByFilterRequest();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = V2GetGeoRestrictionsByFilterRequestFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('last_order_number')) {
                obj['last_order_number'] = ApiClient.convertToType(data['last_order_number'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2GetGeoRestrictionsByFilterRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2GetGeoRestrictionsByFilterRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          V2GetGeoRestrictionsByFilterRequestFilter.validateJSON(data['filter']);
        }

        return true;
    }


}



/**
 * @member {module:model/V2GetGeoRestrictionsByFilterRequestFilter} filter
 */
Productv2GetGeoRestrictionsByFilterRequest.prototype['filter'] = undefined;

/**
 * Порядок геоограничения, с которого выводим данные в ответе.  Если указать `23`, то на выходе у первого элемента списка `restrictions` будет `order_number = 24`. Если вы хотите получить все геоограничения, укажите `0` в этом параметре. 
 * @member {Number} last_order_number
 */
Productv2GetGeoRestrictionsByFilterRequest.prototype['last_order_number'] = undefined;

/**
 * Количество результатов в ответе.
 * @member {Number} limit
 */
Productv2GetGeoRestrictionsByFilterRequest.prototype['limit'] = undefined;






export default Productv2GetGeoRestrictionsByFilterRequest;

