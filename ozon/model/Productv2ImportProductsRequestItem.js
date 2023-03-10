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
import ImportProductsRequestPdfList from './ImportProductsRequestPdfList';
import Productv2ImportProductsRequestAttribute from './Productv2ImportProductsRequestAttribute';
import Productv2ImportProductsRequestComplexAttribute from './Productv2ImportProductsRequestComplexAttribute';

/**
 * The Productv2ImportProductsRequestItem model module.
 * @module model/Productv2ImportProductsRequestItem
 * @version 2.1
 */
class Productv2ImportProductsRequestItem {
    /**
     * Constructs a new <code>Productv2ImportProductsRequestItem</code>.
     * @alias module:model/Productv2ImportProductsRequestItem
     * @param attributes {Array.<module:model/Productv2ImportProductsRequestAttribute>} Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/).
     * @param categoryId {Number} Идентификатор категории.
     * @param depth {Number} Глубина упаковки.
     * @param dimensionUnit {String} Единица измерения габаритов:   - `mm` — миллиметры,   - `cm` — сантиметры,   - `in` — дюймы. 
     * @param height {Number} Высота упаковки.
     * @param images {Array.<String>} Массив изображений. До 15 штук. Изображения показываются на сайте в таком же порядке, как в массиве.  Если не передать значение `primary_image`, первое изображение в массиве будет главным для товара.  Если вы передали значение `primary_image`, передайте до 14 изображений. Если параметр `primary_image` пустой, передайте до 15 изображений.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. 
     * @param name {String} Название товара. До 500 символов.
     * @param offerId {String} Идентификатор товара в системе продавца — артикул.
     * @param price {String} Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение `old_price` в этом параметре. 
     * @param vat {String} Ставка НДС для товара:   - `0` — не облагается НДС,   - `0.1` — 10%,   - `0.2` — 20%. 
     * @param weight {Number} Вес товара в упаковке. Предельное значение — 1000 килограммов или конвертированная величина в других единицах измерения. 
     * @param weightUnit {String} Единица измерения веса:   - `g` — граммы,   - `kg` — килограммы,   - `lb` — фунты. 
     * @param width {Number} Ширина упаковки.
     */
    constructor(attributes, categoryId, depth, dimensionUnit, height, images, name, offerId, price, vat, weight, weightUnit, width) { 
        
        Productv2ImportProductsRequestItem.initialize(this, attributes, categoryId, depth, dimensionUnit, height, images, name, offerId, price, vat, weight, weightUnit, width);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributes, categoryId, depth, dimensionUnit, height, images, name, offerId, price, vat, weight, weightUnit, width) { 
        obj['attributes'] = attributes;
        obj['category_id'] = categoryId;
        obj['depth'] = depth;
        obj['dimension_unit'] = dimensionUnit;
        obj['height'] = height;
        obj['images'] = images;
        obj['name'] = name;
        obj['offer_id'] = offerId;
        obj['price'] = price;
        obj['vat'] = vat;
        obj['weight'] = weight;
        obj['weight_unit'] = weightUnit;
        obj['width'] = width;
    }

    /**
     * Constructs a <code>Productv2ImportProductsRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productv2ImportProductsRequestItem} obj Optional instance to populate.
     * @return {module:model/Productv2ImportProductsRequestItem} The populated <code>Productv2ImportProductsRequestItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productv2ImportProductsRequestItem();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Productv2ImportProductsRequestAttribute]);
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('color_image')) {
                obj['color_image'] = ApiClient.convertToType(data['color_image'], 'String');
            }
            if (data.hasOwnProperty('complex_attributes')) {
                obj['complex_attributes'] = ApiClient.convertToType(data['complex_attributes'], [Productv2ImportProductsRequestComplexAttribute]);
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('dimension_unit')) {
                obj['dimension_unit'] = ApiClient.convertToType(data['dimension_unit'], 'String');
            }
            if (data.hasOwnProperty('geo_names')) {
                obj['geo_names'] = ApiClient.convertToType(data['geo_names'], ['String']);
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('primary_image')) {
                obj['primary_image'] = ApiClient.convertToType(data['primary_image'], 'String');
            }
            if (data.hasOwnProperty('service_type')) {
                obj['service_type'] = ApiClient.convertToType(data['service_type'], 'String');
            }
            if (data.hasOwnProperty('images360')) {
                obj['images360'] = ApiClient.convertToType(data['images360'], ['String']);
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
            if (data.hasOwnProperty('pdf_list')) {
                obj['pdf_list'] = ApiClient.convertToType(data['pdf_list'], [ImportProductsRequestPdfList]);
            }
            if (data.hasOwnProperty('premium_price')) {
                obj['premium_price'] = ApiClient.convertToType(data['premium_price'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('vat')) {
                obj['vat'] = ApiClient.convertToType(data['vat'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('weight_unit')) {
                obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Productv2ImportProductsRequestItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Productv2ImportProductsRequestItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Productv2ImportProductsRequestItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                Productv2ImportProductsRequestAttribute.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is a string
        if (data['color_image'] && !(typeof data['color_image'] === 'string' || data['color_image'] instanceof String)) {
            throw new Error("Expected the field `color_image` to be a primitive type in the JSON string but got " + data['color_image']);
        }
        if (data['complex_attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['complex_attributes'])) {
                throw new Error("Expected the field `complex_attributes` to be an array in the JSON data but got " + data['complex_attributes']);
            }
            // validate the optional field `complex_attributes` (array)
            for (const item of data['complex_attributes']) {
                Productv2ImportProductsRequestComplexAttribute.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['dimension_unit'] && !(typeof data['dimension_unit'] === 'string' || data['dimension_unit'] instanceof String)) {
            throw new Error("Expected the field `dimension_unit` to be a primitive type in the JSON string but got " + data['dimension_unit']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['geo_names'])) {
            throw new Error("Expected the field `geo_names` to be an array in the JSON data but got " + data['geo_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
            throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // ensure the json data is a string
        if (data['primary_image'] && !(typeof data['primary_image'] === 'string' || data['primary_image'] instanceof String)) {
            throw new Error("Expected the field `primary_image` to be a primitive type in the JSON string but got " + data['primary_image']);
        }
        // ensure the json data is a string
        if (data['service_type'] && !(typeof data['service_type'] === 'string' || data['service_type'] instanceof String)) {
            throw new Error("Expected the field `service_type` to be a primitive type in the JSON string but got " + data['service_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images360'])) {
            throw new Error("Expected the field `images360` to be an array in the JSON data but got " + data['images360']);
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
        if (data['pdf_list']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['pdf_list'])) {
                throw new Error("Expected the field `pdf_list` to be an array in the JSON data but got " + data['pdf_list']);
            }
            // validate the optional field `pdf_list` (array)
            for (const item of data['pdf_list']) {
                ImportProductsRequestPdfList.validateJsonObject(item);
            };
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
        if (data['vat'] && !(typeof data['vat'] === 'string' || data['vat'] instanceof String)) {
            throw new Error("Expected the field `vat` to be a primitive type in the JSON string but got " + data['vat']);
        }
        // ensure the json data is a string
        if (data['weight_unit'] && !(typeof data['weight_unit'] === 'string' || data['weight_unit'] instanceof String)) {
            throw new Error("Expected the field `weight_unit` to be a primitive type in the JSON string but got " + data['weight_unit']);
        }

        return true;
    }


}

Productv2ImportProductsRequestItem.RequiredProperties = ["attributes", "category_id", "depth", "dimension_unit", "height", "images", "name", "offer_id", "price", "vat", "weight", "weight_unit", "width"];

/**
 * Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/).
 * @member {Array.<module:model/Productv2ImportProductsRequestAttribute>} attributes
 */
Productv2ImportProductsRequestItem.prototype['attributes'] = undefined;

/**
 * Штрихкод товара.
 * @member {String} barcode
 */
Productv2ImportProductsRequestItem.prototype['barcode'] = undefined;

/**
 * Идентификатор категории.
 * @member {Number} category_id
 */
Productv2ImportProductsRequestItem.prototype['category_id'] = undefined;

/**
 * Маркетинговый цвет.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG. 
 * @member {String} color_image
 */
Productv2ImportProductsRequestItem.prototype['color_image'] = undefined;

/**
 * Массив характеристик, у которых есть вложенные атрибуты.
 * @member {Array.<module:model/Productv2ImportProductsRequestComplexAttribute>} complex_attributes
 */
Productv2ImportProductsRequestItem.prototype['complex_attributes'] = undefined;

/**
 * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.  Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.  Возможные значения:    - `RUB` — российский рубль,   - `BYN` — белорусский рубль,   - `KZT` — тенге,   - `EUR` — евро,   - `USD` — доллар США,   - `CNY` — юань. 
 * @member {String} currency_code
 */
Productv2ImportProductsRequestItem.prototype['currency_code'] = undefined;

/**
 * Глубина упаковки.
 * @member {Number} depth
 */
Productv2ImportProductsRequestItem.prototype['depth'] = undefined;

/**
 * Единица измерения габаритов:   - `mm` — миллиметры,   - `cm` — сантиметры,   - `in` — дюймы. 
 * @member {String} dimension_unit
 */
Productv2ImportProductsRequestItem.prototype['dimension_unit'] = undefined;

/**
 * Геоограничения. Передайте список, состоящий из `name`, полученных в ответе метода [/v1/products/geo-restrictions-catalog-by-filter](#operations/ProductAPI_GetGeoRestrictionsV1).
 * @member {Array.<String>} geo_names
 */
Productv2ImportProductsRequestItem.prototype['geo_names'] = undefined;

/**
 * Высота упаковки.
 * @member {Number} height
 */
Productv2ImportProductsRequestItem.prototype['height'] = undefined;

/**
 * Массив изображений. До 15 штук. Изображения показываются на сайте в таком же порядке, как в массиве.  Если не передать значение `primary_image`, первое изображение в массиве будет главным для товара.  Если вы передали значение `primary_image`, передайте до 14 изображений. Если параметр `primary_image` пустой, передайте до 15 изображений.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. 
 * @member {Array.<String>} images
 */
Productv2ImportProductsRequestItem.prototype['images'] = undefined;

/**
 * Ссылка на главное изображение товара.
 * @member {String} primary_image
 */
Productv2ImportProductsRequestItem.prototype['primary_image'] = undefined;

/**
 * Тип сервиса. Передайте одно из значений в верхнем регистре:   - `IS_CODE_SERVICE`,   - `IS_NO_CODE_SERVICE`. 
 * @member {String} service_type
 * @default 'IS_CODE_SERVICE'
 */
Productv2ImportProductsRequestItem.prototype['service_type'] = 'IS_CODE_SERVICE';

/**
 * Массив изображений 360. До 70 штук.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG. 
 * @member {Array.<String>} images360
 */
Productv2ImportProductsRequestItem.prototype['images360'] = undefined;

/**
 * Название товара. До 500 символов.
 * @member {String} name
 */
Productv2ImportProductsRequestItem.prototype['name'] = undefined;

/**
 * Идентификатор товара в системе продавца — артикул.
 * @member {String} offer_id
 */
Productv2ImportProductsRequestItem.prototype['offer_id'] = undefined;

/**
 * Цена до скидок (будет зачёркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.  Если вы раньше передавали `old_price`, то при обновлении `price` также обновите `old_price`. 
 * @member {String} old_price
 */
Productv2ImportProductsRequestItem.prototype['old_price'] = undefined;

/**
 * Список PDF-файлов.
 * @member {Array.<module:model/ImportProductsRequestPdfList>} pdf_list
 */
Productv2ImportProductsRequestItem.prototype['pdf_list'] = undefined;

/**
 * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
 * @member {String} premium_price
 */
Productv2ImportProductsRequestItem.prototype['premium_price'] = undefined;

/**
 * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение `old_price` в этом параметре. 
 * @member {String} price
 */
Productv2ImportProductsRequestItem.prototype['price'] = undefined;

/**
 * Ставка НДС для товара:   - `0` — не облагается НДС,   - `0.1` — 10%,   - `0.2` — 20%. 
 * @member {String} vat
 */
Productv2ImportProductsRequestItem.prototype['vat'] = undefined;

/**
 * Вес товара в упаковке. Предельное значение — 1000 килограммов или конвертированная величина в других единицах измерения. 
 * @member {Number} weight
 */
Productv2ImportProductsRequestItem.prototype['weight'] = undefined;

/**
 * Единица измерения веса:   - `g` — граммы,   - `kg` — килограммы,   - `lb` — фунты. 
 * @member {String} weight_unit
 */
Productv2ImportProductsRequestItem.prototype['weight_unit'] = undefined;

/**
 * Ширина упаковки.
 * @member {Number} width
 */
Productv2ImportProductsRequestItem.prototype['width'] = undefined;






export default Productv2ImportProductsRequestItem;

