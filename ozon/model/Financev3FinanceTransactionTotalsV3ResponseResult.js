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
 * The Financev3FinanceTransactionTotalsV3ResponseResult model module.
 * @module model/Financev3FinanceTransactionTotalsV3ResponseResult
 * @version 2.1
 */
class Financev3FinanceTransactionTotalsV3ResponseResult {
    /**
     * Constructs a new <code>Financev3FinanceTransactionTotalsV3ResponseResult</code>.
     * Результаты запроса.
     * @alias module:model/Financev3FinanceTransactionTotalsV3ResponseResult
     */
    constructor() { 
        
        Financev3FinanceTransactionTotalsV3ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Financev3FinanceTransactionTotalsV3ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Financev3FinanceTransactionTotalsV3ResponseResult} obj Optional instance to populate.
     * @return {module:model/Financev3FinanceTransactionTotalsV3ResponseResult} The populated <code>Financev3FinanceTransactionTotalsV3ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Financev3FinanceTransactionTotalsV3ResponseResult();

            if (data.hasOwnProperty('accruals_for_sale')) {
                obj['accruals_for_sale'] = ApiClient.convertToType(data['accruals_for_sale'], 'Number');
            }
            if (data.hasOwnProperty('compensation_amount')) {
                obj['compensation_amount'] = ApiClient.convertToType(data['compensation_amount'], 'Number');
            }
            if (data.hasOwnProperty('money_transfer')) {
                obj['money_transfer'] = ApiClient.convertToType(data['money_transfer'], 'Number');
            }
            if (data.hasOwnProperty('others_amount')) {
                obj['others_amount'] = ApiClient.convertToType(data['others_amount'], 'Number');
            }
            if (data.hasOwnProperty('processing_and_delivery')) {
                obj['processing_and_delivery'] = ApiClient.convertToType(data['processing_and_delivery'], 'Number');
            }
            if (data.hasOwnProperty('refunds_and_cancellations')) {
                obj['refunds_and_cancellations'] = ApiClient.convertToType(data['refunds_and_cancellations'], 'Number');
            }
            if (data.hasOwnProperty('sale_commission')) {
                obj['sale_commission'] = ApiClient.convertToType(data['sale_commission'], 'Number');
            }
            if (data.hasOwnProperty('services_amount')) {
                obj['services_amount'] = ApiClient.convertToType(data['services_amount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Financev3FinanceTransactionTotalsV3ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Financev3FinanceTransactionTotalsV3ResponseResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Общая стоимость товаров и возвратов в заданный период.
 * @member {Number} accruals_for_sale
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['accruals_for_sale'] = undefined;

/**
 * Компенсации.
 * @member {Number} compensation_amount
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['compensation_amount'] = undefined;

/**
 * Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца».
 * @member {Number} money_transfer
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['money_transfer'] = undefined;

/**
 * Прочие начисления.
 * @member {Number} others_amount
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['others_amount'] = undefined;

/**
 * Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили, а также доставки до введения новых комиссий и тарифов с 1 февраля 2021 года.  Магистраль — доставка товаров между кластерами.  Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером. 
 * @member {Number} processing_and_delivery
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['processing_and_delivery'] = undefined;

/**
 * Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара, а также возвратов до введения новых комиссий и тарифов с 1 февраля 2021 года.  Магистраль — доставка товаров между кластерами.  Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером. 
 * @member {Number} refunds_and_cancellations
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['refunds_and_cancellations'] = undefined;

/**
 * Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате.
 * @member {Number} sale_commission
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['sale_commission'] = undefined;

/**
 * Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров. Например, продвижения или размещения товаров.
 * @member {Number} services_amount
 */
Financev3FinanceTransactionTotalsV3ResponseResult.prototype['services_amount'] = undefined;






export default Financev3FinanceTransactionTotalsV3ResponseResult;

