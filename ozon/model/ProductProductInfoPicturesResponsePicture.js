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
 * The ProductProductInfoPicturesResponsePicture model module.
 * @module model/ProductProductInfoPicturesResponsePicture
 * @version 2.1
 */
class ProductProductInfoPicturesResponsePicture {
    /**
     * Constructs a new <code>ProductProductInfoPicturesResponsePicture</code>.
     * @alias module:model/ProductProductInfoPicturesResponsePicture
     */
    constructor() { 
        
        ProductProductInfoPicturesResponsePicture.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductProductInfoPicturesResponsePicture</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductProductInfoPicturesResponsePicture} obj Optional instance to populate.
     * @return {module:model/ProductProductInfoPicturesResponsePicture} The populated <code>ProductProductInfoPicturesResponsePicture</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductProductInfoPicturesResponsePicture();

            if (data.hasOwnProperty('is_360')) {
                obj['is_360'] = ApiClient.convertToType(data['is_360'], 'Boolean');
            }
            if (data.hasOwnProperty('is_color')) {
                obj['is_color'] = ApiClient.convertToType(data['is_color'], 'Boolean');
            }
            if (data.hasOwnProperty('is_primary')) {
                obj['is_primary'] = ApiClient.convertToType(data['is_primary'], 'Boolean');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductProductInfoPicturesResponsePicture</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductProductInfoPicturesResponsePicture</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * Признак, что картинка — изображение 360.
 * @member {Boolean} is_360
 */
ProductProductInfoPicturesResponsePicture.prototype['is_360'] = undefined;

/**
 * Признак, что картинка — образец цвета.
 * @member {Boolean} is_color
 */
ProductProductInfoPicturesResponsePicture.prototype['is_color'] = undefined;

/**
 * Признак, что картинка — главное изображение.
 * @member {Boolean} is_primary
 */
ProductProductInfoPicturesResponsePicture.prototype['is_primary'] = undefined;

/**
 * Идентификатор товара.
 * @member {Number} product_id
 */
ProductProductInfoPicturesResponsePicture.prototype['product_id'] = undefined;

/**
 * Статус загрузки изображения.   Если вызывали метод [/v1/product/pictures/import](#operation/ProductAPI_ProductImportPictures), то в ответе метода всегда будет `imported` — картинка не обработана. Чтобы посмотреть финальный статус, примерно через 10 секунд вызовите метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures).  Если вызывали метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures), вы увидите один из статусов: - `uploaded` — изображение загружено; - `failed` — не получилось загрузить изображение. 
 * @member {String} state
 */
ProductProductInfoPicturesResponsePicture.prototype['state'] = undefined;

/**
 * Адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.
 * @member {String} url
 */
ProductProductInfoPicturesResponsePicture.prototype['url'] = undefined;






export default ProductProductInfoPicturesResponsePicture;
