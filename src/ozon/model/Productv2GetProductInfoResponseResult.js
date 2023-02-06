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
import Productv2GetProductInfoDiscountedStocks from './Productv2GetProductInfoDiscountedStocks';
import Productv2GetProductInfoResponseCommissions from './Productv2GetProductInfoResponseCommissions';
import Productv2GetProductInfoResponseSource from './Productv2GetProductInfoResponseSource';
import Productv2GetProductInfoResponseStock from './Productv2GetProductInfoResponseStock';
import Productv2GetProductInfoResponseVisibilityDetails from './Productv2GetProductInfoResponseVisibilityDetails';
import Productv2Status from './Productv2Status';

/**
 * The Productv2GetProductInfoResponseResult model module.
 * @module model/Productv2GetProductInfoResponseResult
 * @version 2.1
 */
class Productv2GetProductInfoResponseResult {
    /**
     * Constructs a new <code>Productv2GetProductInfoResponseResult</code>.
     * Результаты запроса.
     * @alias module:model/Productv2GetProductInfoResponseResult
     */
    constructor() { 
        
        Productv2GetProductInfoResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productv2GetProductInfoResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2GetProductInfoResponseResult} obj Optional instance to populate.
     * @return {module:model/Productv2GetProductInfoResponseResult} The populated <code>Productv2GetProductInfoResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2GetProductInfoResponseResult();

            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('barcodes')) {
                obj['barcodes'] = ApiClient.convertToType(data['barcodes'], ['String']);
            }
            if (data.hasOwnProperty('buybox_price')) {
                obj['buybox_price'] = ApiClient.convertToType(data['buybox_price'], 'String');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('color_image')) {
                obj['color_image'] = ApiClient.convertToType(data['color_image'], 'String');
            }
            if (data.hasOwnProperty('commissions')) {
                obj['commissions'] = ApiClient.convertToType(data['commissions'], [Productv2GetProductInfoResponseCommissions]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('fbo_sku')) {
                obj['fbo_sku'] = ApiClient.convertToType(data['fbo_sku'], 'Number');
            }
            if (data.hasOwnProperty('fbs_sku')) {
                obj['fbs_sku'] = ApiClient.convertToType(data['fbs_sku'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('primary_image')) {
                obj['primary_image'] = ApiClient.convertToType(data['primary_image'], 'String');
            }
            if (data.hasOwnProperty('images360')) {
                obj['images360'] = ApiClient.convertToType(data['images360'], ['String']);
            }
            if (data.hasOwnProperty('has_discounted_item')) {
                obj['has_discounted_item'] = ApiClient.convertToType(data['has_discounted_item'], 'Boolean');
            }
            if (data.hasOwnProperty('is_discounted')) {
                obj['is_discounted'] = ApiClient.convertToType(data['is_discounted'], 'Boolean');
            }
            if (data.hasOwnProperty('discounted_stocks')) {
                obj['discounted_stocks'] = Productv2GetProductInfoDiscountedStocks.constructFromObject(data['discounted_stocks']);
            }
            if (data.hasOwnProperty('is_kgt')) {
                obj['is_kgt'] = ApiClient.convertToType(data['is_kgt'], 'Boolean');
            }
            if (data.hasOwnProperty('is_prepayment')) {
                obj['is_prepayment'] = ApiClient.convertToType(data['is_prepayment'], 'Boolean');
            }
            if (data.hasOwnProperty('is_prepayment_allowed')) {
                obj['is_prepayment_allowed'] = ApiClient.convertToType(data['is_prepayment_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('marketing_price')) {
                obj['marketing_price'] = ApiClient.convertToType(data['marketing_price'], 'String');
            }
            if (data.hasOwnProperty('min_ozon_price')) {
                obj['min_ozon_price'] = ApiClient.convertToType(data['min_ozon_price'], 'String');
            }
            if (data.hasOwnProperty('min_price')) {
                obj['min_price'] = ApiClient.convertToType(data['min_price'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('old_price')) {
                obj['old_price'] = ApiClient.convertToType(data['old_price'], 'String');
            }
            if (data.hasOwnProperty('premium_price')) {
                obj['premium_price'] = ApiClient.convertToType(data['premium_price'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('price_index')) {
                obj['price_index'] = ApiClient.convertToType(data['price_index'], 'String');
            }
            if (data.hasOwnProperty('recommended_price')) {
                obj['recommended_price'] = ApiClient.convertToType(data['recommended_price'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Productv2Status.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], [Productv2GetProductInfoResponseSource]);
            }
            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = Productv2GetProductInfoResponseStock.constructFromObject(data['stocks']);
            }
            if (data.hasOwnProperty('vat')) {
                obj['vat'] = ApiClient.convertToType(data['vat'], 'String');
            }
            if (data.hasOwnProperty('visibility_details')) {
                obj['visibility_details'] = Productv2GetProductInfoResponseVisibilityDetails.constructFromObject(data['visibility_details']);
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('volume_weight')) {
                obj['volume_weight'] = ApiClient.convertToType(data['volume_weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2GetProductInfoResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2GetProductInfoResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['barcodes'])) {
            throw new Error("Expected the field `barcodes` to be an array in the JSON data but got " + data['barcodes']);
        }
        // ensure the json data is a string
        if (data['buybox_price'] && !(typeof data['buybox_price'] === 'string' || data['buybox_price'] instanceof String)) {
            throw new Error("Expected the field `buybox_price` to be a primitive type in the JSON string but got " + data['buybox_price']);
        }
        // ensure the json data is a string
        if (data['color_image'] && !(typeof data['color_image'] === 'string' || data['color_image'] instanceof String)) {
            throw new Error("Expected the field `color_image` to be a primitive type in the JSON string but got " + data['color_image']);
        }
        if (data['commissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['commissions'])) {
                throw new Error("Expected the field `commissions` to be an array in the JSON data but got " + data['commissions']);
            }
            // validate the optional field `commissions` (array)
            for (const item of data['commissions']) {
                Productv2GetProductInfoResponseCommissions.validateJsonObject(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
            throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // ensure the json data is a string
        if (data['primary_image'] && !(typeof data['primary_image'] === 'string' || data['primary_image'] instanceof String)) {
            throw new Error("Expected the field `primary_image` to be a primitive type in the JSON string but got " + data['primary_image']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images360'])) {
            throw new Error("Expected the field `images360` to be an array in the JSON data but got " + data['images360']);
        }
        // validate the optional field `discounted_stocks`
        if (data['discounted_stocks']) { // data not null
          Productv2GetProductInfoDiscountedStocks.validateJSON(data['discounted_stocks']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['marketing_price'] && !(typeof data['marketing_price'] === 'string' || data['marketing_price'] instanceof String)) {
            throw new Error("Expected the field `marketing_price` to be a primitive type in the JSON string but got " + data['marketing_price']);
        }
        // ensure the json data is a string
        if (data['min_ozon_price'] && !(typeof data['min_ozon_price'] === 'string' || data['min_ozon_price'] instanceof String)) {
            throw new Error("Expected the field `min_ozon_price` to be a primitive type in the JSON string but got " + data['min_ozon_price']);
        }
        // ensure the json data is a string
        if (data['min_price'] && !(typeof data['min_price'] === 'string' || data['min_price'] instanceof String)) {
            throw new Error("Expected the field `min_price` to be a primitive type in the JSON string but got " + data['min_price']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }
        // ensure the json data is a string
        if (data['old_price'] && !(typeof data['old_price'] === 'string' || data['old_price'] instanceof String)) {
            throw new Error("Expected the field `old_price` to be a primitive type in the JSON string but got " + data['old_price']);
        }
        // ensure the json data is a string
        if (data['premium_price'] && !(typeof data['premium_price'] === 'string' || data['premium_price'] instanceof String)) {
            throw new Error("Expected the field `premium_price` to be a primitive type in the JSON string but got " + data['premium_price']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['price_index'] && !(typeof data['price_index'] === 'string' || data['price_index'] instanceof String)) {
            throw new Error("Expected the field `price_index` to be a primitive type in the JSON string but got " + data['price_index']);
        }
        // ensure the json data is a string
        if (data['recommended_price'] && !(typeof data['recommended_price'] === 'string' || data['recommended_price'] instanceof String)) {
            throw new Error("Expected the field `recommended_price` to be a primitive type in the JSON string but got " + data['recommended_price']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          Productv2Status.validateJSON(data['status']);
        }
        if (data['sources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sources'])) {
                throw new Error("Expected the field `sources` to be an array in the JSON data but got " + data['sources']);
            }
            // validate the optional field `sources` (array)
            for (const item of data['sources']) {
                Productv2GetProductInfoResponseSource.validateJsonObject(item);
            };
        }
        // validate the optional field `stocks`
        if (data['stocks']) { // data not null
          Productv2GetProductInfoResponseStock.validateJSON(data['stocks']);
        }
        // ensure the json data is a string
        if (data['vat'] && !(typeof data['vat'] === 'string' || data['vat'] instanceof String)) {
            throw new Error("Expected the field `vat` to be a primitive type in the JSON string but got " + data['vat']);
        }
        // validate the optional field `visibility_details`
        if (data['visibility_details']) { // data not null
          Productv2GetProductInfoResponseVisibilityDetails.validateJSON(data['visibility_details']);
        }

        return true;
    }


}



/**
 * Штрихкод.
 * @member {String} barcode
 */
Productv2GetProductInfoResponseResult.prototype['barcode'] = undefined;

/**
 * Все штрихкоды товара.
 * @member {Array.<String>} barcodes
 */
Productv2GetProductInfoResponseResult.prototype['barcodes'] = undefined;

/**
 * Цена главного предложения на Ozon.   Устаревший параметр, больше не используется. Всегда возвращает пустую строку `\"\"`. 
 * @member {String} buybox_price
 */
Productv2GetProductInfoResponseResult.prototype['buybox_price'] = undefined;

/**
 * Идентификатор категории.
 * @member {Number} category_id
 */
Productv2GetProductInfoResponseResult.prototype['category_id'] = undefined;

/**
 * Маркетинговый цвет.
 * @member {String} color_image
 */
Productv2GetProductInfoResponseResult.prototype['color_image'] = undefined;

/**
 * Информация о комиссиях.
 * @member {Array.<module:model/Productv2GetProductInfoResponseCommissions>} commissions
 */
Productv2GetProductInfoResponseResult.prototype['commissions'] = undefined;

/**
 * Дата и время создания товара.
 * @member {Date} created_at
 */
Productv2GetProductInfoResponseResult.prototype['created_at'] = undefined;

/**
 * SKU товара, который продаётся со склада Ozon (FBO).
 * @member {Number} fbo_sku
 */
Productv2GetProductInfoResponseResult.prototype['fbo_sku'] = undefined;

/**
 * SKU товара, который продаётся со склада продавца (FBS и rFBS).
 * @member {Number} fbs_sku
 */
Productv2GetProductInfoResponseResult.prototype['fbs_sku'] = undefined;

/**
 * Номер задания на формирование документов.
 * @member {Number} id
 */
Productv2GetProductInfoResponseResult.prototype['id'] = undefined;

/**
 * Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр `primary_image` не указан, первое изображение в массиве главное для товара.
 * @member {Array.<String>} images
 */
Productv2GetProductInfoResponseResult.prototype['images'] = undefined;

/**
 * Главное изображение товара.
 * @member {String} primary_image
 */
Productv2GetProductInfoResponseResult.prototype['primary_image'] = undefined;

/**
 * Массив изображений 360.
 * @member {Array.<String>} images360
 */
Productv2GetProductInfoResponseResult.prototype['images360'] = undefined;

/**
 * Признак, что у товара есть уценённые аналоги на складе Ozon.
 * @member {Boolean} has_discounted_item
 */
Productv2GetProductInfoResponseResult.prototype['has_discounted_item'] = undefined;

/**
 * Признак, является ли товар уценённым:   - Если товар создавался продавцом как уценённый — `true`.    - Если товар не уценённый или был уценён Ozon — `false`. 
 * @member {Boolean} is_discounted
 */
Productv2GetProductInfoResponseResult.prototype['is_discounted'] = undefined;

/**
 * @member {module:model/Productv2GetProductInfoDiscountedStocks} discounted_stocks
 */
Productv2GetProductInfoResponseResult.prototype['discounted_stocks'] = undefined;

/**
 * Признак крупногабаритного товара.
 * @member {Boolean} is_kgt
 */
Productv2GetProductInfoResponseResult.prototype['is_kgt'] = undefined;

/**
 * Флаг обязательной предоплаты для товара:   `true` — чтобы купить товар, нужно внести предоплату.   `false` — предоплата необязательна. 
 * @member {Boolean} is_prepayment
 */
Productv2GetProductInfoResponseResult.prototype['is_prepayment'] = undefined;

/**
 * Если возможна предоплата — `true`.
 * @member {Boolean} is_prepayment_allowed
 */
Productv2GetProductInfoResponseResult.prototype['is_prepayment_allowed'] = undefined;

/**
 * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
Productv2GetProductInfoResponseResult.prototype['currency_code'] = undefined;

/**
 * Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon.
 * @member {String} marketing_price
 */
Productv2GetProductInfoResponseResult.prototype['marketing_price'] = undefined;

/**
 * Минимальная цена на аналогичный товар на Ozon.  Устаревший параметр, больше не используется. Всегда возвращает пустую строку `\"\"`. 
 * @member {String} min_ozon_price
 */
Productv2GetProductInfoResponseResult.prototype['min_ozon_price'] = undefined;

/**
 * Минимальная цена товара после применения акций.
 * @member {String} min_price
 */
Productv2GetProductInfoResponseResult.prototype['min_price'] = undefined;

/**
 * Название.
 * @member {String} name
 */
Productv2GetProductInfoResponseResult.prototype['name'] = undefined;

/**
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
Productv2GetProductInfoResponseResult.prototype['offer_id'] = undefined;

/**
 * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
 * @member {String} old_price
 */
Productv2GetProductInfoResponseResult.prototype['old_price'] = undefined;

/**
 * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
 * @member {String} premium_price
 */
Productv2GetProductInfoResponseResult.prototype['premium_price'] = undefined;

/**
 * Цена товара с учётом скидок — это значение показывается на карточке товара.
 * @member {String} price
 */
Productv2GetProductInfoResponseResult.prototype['price'] = undefined;

/**
 * Ценовой индекс. Подробнее в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/kontrol-kachestva/kak-my-kontroliruem-kachestvo-raboty-partnera.html).
 * @member {String} price_index
 */
Productv2GetProductInfoResponseResult.prototype['price_index'] = undefined;

/**
 * Цена на товар, рекомендованная системой на основании схожих предложений.
 * @member {String} recommended_price
 */
Productv2GetProductInfoResponseResult.prototype['recommended_price'] = undefined;

/**
 * @member {module:model/Productv2Status} status
 */
Productv2GetProductInfoResponseResult.prototype['status'] = undefined;

/**
 * Информация об источниках схожих предложений. Подробнее в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/prices/market-prices.html#если-рыночная-цена-на-комплект-отображается-неверно).
 * @member {Array.<module:model/Productv2GetProductInfoResponseSource>} sources
 */
Productv2GetProductInfoResponseResult.prototype['sources'] = undefined;

/**
 * @member {module:model/Productv2GetProductInfoResponseStock} stocks
 */
Productv2GetProductInfoResponseResult.prototype['stocks'] = undefined;

/**
 * Ставка НДС для товара.
 * @member {String} vat
 */
Productv2GetProductInfoResponseResult.prototype['vat'] = undefined;

/**
 * @member {module:model/Productv2GetProductInfoResponseVisibilityDetails} visibility_details
 */
Productv2GetProductInfoResponseResult.prototype['visibility_details'] = undefined;

/**
 * Если товар выставлен на продажу — `true`.
 * @member {Boolean} visible
 */
Productv2GetProductInfoResponseResult.prototype['visible'] = undefined;

/**
 * Объёмный вес товара.
 * @member {Number} volume_weight
 */
Productv2GetProductInfoResponseResult.prototype['volume_weight'] = undefined;






export default Productv2GetProductInfoResponseResult;

