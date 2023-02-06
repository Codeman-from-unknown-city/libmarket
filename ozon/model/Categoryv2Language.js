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
* Enum class Categoryv2Language.
* @enum {}
* @readonly
*/
export default class Categoryv2Language {
    
        /**
         * value: "DEFAULT"
         * @const
         */
        "DEFAULT" = "DEFAULT";

    
        /**
         * value: "RU"
         * @const
         */
        "RU" = "RU";

    
        /**
         * value: "EN"
         * @const
         */
        "EN" = "EN";

    

    /**
    * Returns a <code>Categoryv2Language</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Categoryv2Language} The enum <code>Categoryv2Language</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
