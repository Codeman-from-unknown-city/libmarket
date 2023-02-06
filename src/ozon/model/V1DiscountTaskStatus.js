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
* Enum class V1DiscountTaskStatus.
* @enum {}
* @readonly
*/
export default class V1DiscountTaskStatus {
    
        /**
         * value: "NEW"
         * @const
         */
        "NEW" = "NEW";

    
        /**
         * value: "SEEN"
         * @const
         */
        "SEEN" = "SEEN";

    
        /**
         * value: "APPROVED"
         * @const
         */
        "APPROVED" = "APPROVED";

    
        /**
         * value: "PARTLY_APPROVED"
         * @const
         */
        "PARTLY_APPROVED" = "PARTLY_APPROVED";

    
        /**
         * value: "DECLINED"
         * @const
         */
        "DECLINED" = "DECLINED";

    
        /**
         * value: "AUTO_DECLINED"
         * @const
         */
        "AUTO_DECLINED" = "AUTO_DECLINED";

    
        /**
         * value: "DECLINED_BY_USER"
         * @const
         */
        "DECLINED_BY_USER" = "DECLINED_BY_USER";

    
        /**
         * value: "COUPON"
         * @const
         */
        "COUPON" = "COUPON";

    
        /**
         * value: "PURCHASED"
         * @const
         */
        "PURCHASED" = "PURCHASED";

    

    /**
    * Returns a <code>V1DiscountTaskStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1DiscountTaskStatus} The enum <code>V1DiscountTaskStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

