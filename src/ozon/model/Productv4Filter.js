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
import Productv2GetProductListRequestFilterFilterVisibility from './Productv2GetProductListRequestFilterFilterVisibility';

/**
 * The Productv4Filter model module.
 * @module model/Productv4Filter
 * @version 2.1
 */
class Productv4Filter {
    /**
     * Constructs a new <code>Productv4Filter</code>.
     * Фильтр по товарам.
     * @alias module:model/Productv4Filter
     */
    constructor() { 
        
        Productv4Filter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv4Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv4Filter} obj Optional instance to populate.
     * @return {module:model/Productv4Filter} The populated <code>Productv4Filter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv4Filter();

            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], ['String']);
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], ['String']);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = Productv2GetProductListRequestFilterFilterVisibility.constructFromObject(data['visibility']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv4Filter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv4Filter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['offer_id'])) {
            throw new Error("Expected the field `offer_id` to be an array in the JSON data but got " + data['offer_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_id'])) {
            throw new Error("Expected the field `product_id` to be an array in the JSON data but got " + data['product_id']);
        }

        return true;
    }


}



/**
 * Фильтр по параметру `offer_id`. Можно передавать список значений.
 * @member {Array.<String>} offer_id
 */
Productv4Filter.prototype['offer_id'] = undefined;

/**
 * Фильтр по параметру `product_id`. Можно передавать до 1000 значений.
 * @member {Array.<String>} product_id
 */
Productv4Filter.prototype['product_id'] = undefined;

/**
 * @member {module:model/Productv2GetProductListRequestFilterFilterVisibility} visibility
 */
Productv4Filter.prototype['visibility'] = undefined;






export default Productv4Filter;

