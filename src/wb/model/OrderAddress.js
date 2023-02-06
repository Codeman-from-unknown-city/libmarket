/**
 * API продавца
 * # Общее описание <style> .version {   border: 0.1rem #b3b3b3 solid;   background-color: #F9F9F9;   color: #32329FE6;   height: 25px;   width: 150px;   text-align: center }, </style> <style> .warning {   border: 1.6rem #b3b3b3 solid;   background-color: #F9F9F9;   color: #247706;   text-align: center } </style>  Wildberries API предоставляет продавцам возможность управления магазином и получения оперативной и статистической информации по протоколу HTTP RestAPI. <br> Описание API предоставляется в формате [Swagger](https://swagger.io/) (Open API) и может быть использовано для импорта в другие инструменты (такие как PostMan) или генерации клиентского кода на различных языках программирования с помощью [Swagger CodeGen](https://swagger.io/tools/swagger-codegen/)  <ul> <li> Описание в оригинальном swagger-формате <a href=\"/swagger\">swagger</a> <li> OpenAPI-файл <a href=\"/swagger.yaml\">swagger.yaml</a> </ul>  <br> Для ручной проверки API вы можете использовать: <ul> <li> Под ОС Windows - [PostMan](https://www.postman.com/) <li> Под ОС Linux - [curl](https://curl.se/)  </ul>  ## Поддержка <br> Техническая поддержка осуществляется через обращения в личном кабинете продавца. При создании нового обращения в техподдержку используйте категорию API. <br> Новости и изменения, касающиеся API, публикуются в [новостной ленте Wildberries](https://seller.wildberries.ru/news). <br> Также готовятся к публикации Release Notes по API на сайте.  После их выхода будет сделан соответствующий анонс.   ## Авторизация Авторизация осуществляется по ключам API, которые  владелец личного кабинета (главный пользователь) самостоятельно  генерирует в разделе   [Профиль --> Настройки --> Доступ к новому API](https://seller.wildberries.ru/supplier-settings/access-to-new-api). <br>Обратите внимание, что ключ отображается ТОЛЬКО в момент создания. Его надо сохранить, потому что больше его отобразить будет нельзя. <br>Созданный ключ следует добавлять в каждый запрос, прибавляя к запросу заголовок (http-header) формата `Authorization: .........`. <br> <br>Внимание! Изменился домен для методов статистики, актуальный: https://statistics-api.wildberries.ru ## Форматы ### Дата и время Во всех методах API статистики дата и время передаются в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).  <br> В большинстве случаев вы можете передать дату или дату со временем. Если время не указано, оно принимается равным 00:00:00. Время можно указывать с точностью до секунд или миллисекунд.  Литера `Z` в конце строки означает часовой пояс UTC. При ее отсутствии время считается в часовом поясе МСК (UTC+3). <br> Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T00:00:00Z` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345Z` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul> ## Release Notes #### 2022.12.21 v1.6 Добавлена инструкция по загрузке статистики в Excel #### 2022.12.15 v1.5  Новая авторизация для методов API статистики 2022.12.15 в v1.5: #### 2022.10.31 v1.4  Метод будет отключен 2022.10.31 в v1.4: <ul> <li> `/content/v1/cards/list` </ul>  #### 2022.09.20 v1.2  В связи с переходом на новое API Контента старые методы будут отключены. К их числу относятся: <ul> <li> `/card/_*` <li> `/api/v1/config/_*` <li> `/api/v1/directory/_*` </ul> Данные методы теперь возвращают код 404.  Новое API Контента описано в данном документе в разделах Контент / * 
 *
 * The version of the OpenAPI document: 1.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../../ApiClient';

/**
 * The OrderAddress model module.
 * @module model/OrderAddress
 * @version 1.6
 */
class OrderAddress {
    /**
     * Constructs a new <code>OrderAddress</code>.
     * Детализованный адрес клиента для доставки (если применимо). Некоторые из полей могут прийти пустыми из-за специфики адреса.
     * @alias module:model/OrderAddress
     */
    constructor() { 
        
        OrderAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderAddress} obj Optional instance to populate.
     * @return {module:model/OrderAddress} The populated <code>OrderAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAddress();

            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
            if (data.hasOwnProperty('area')) {
                obj['area'] = ApiClient.convertToType(data['area'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('home')) {
                obj['home'] = ApiClient.convertToType(data['home'], 'String');
            }
            if (data.hasOwnProperty('flat')) {
                obj['flat'] = ApiClient.convertToType(data['flat'], 'String');
            }
            if (data.hasOwnProperty('entrance')) {
                obj['entrance'] = ApiClient.convertToType(data['entrance'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderAddress</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['province'] && !(typeof data['province'] === 'string' || data['province'] instanceof String)) {
            throw new Error("Expected the field `province` to be a primitive type in the JSON string but got " + data['province']);
        }
        // ensure the json data is a string
        if (data['area'] && !(typeof data['area'] === 'string' || data['area'] instanceof String)) {
            throw new Error("Expected the field `area` to be a primitive type in the JSON string but got " + data['area']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['street'] && !(typeof data['street'] === 'string' || data['street'] instanceof String)) {
            throw new Error("Expected the field `street` to be a primitive type in the JSON string but got " + data['street']);
        }
        // ensure the json data is a string
        if (data['home'] && !(typeof data['home'] === 'string' || data['home'] instanceof String)) {
            throw new Error("Expected the field `home` to be a primitive type in the JSON string but got " + data['home']);
        }
        // ensure the json data is a string
        if (data['flat'] && !(typeof data['flat'] === 'string' || data['flat'] instanceof String)) {
            throw new Error("Expected the field `flat` to be a primitive type in the JSON string but got " + data['flat']);
        }
        // ensure the json data is a string
        if (data['entrance'] && !(typeof data['entrance'] === 'string' || data['entrance'] instanceof String)) {
            throw new Error("Expected the field `entrance` to be a primitive type in the JSON string but got " + data['entrance']);
        }

        return true;
    }


}



/**
 * Область
 * @member {String} province
 */
OrderAddress.prototype['province'] = undefined;

/**
 * Район
 * @member {String} area
 */
OrderAddress.prototype['area'] = undefined;

/**
 * Город
 * @member {String} city
 */
OrderAddress.prototype['city'] = undefined;

/**
 * Улица
 * @member {String} street
 */
OrderAddress.prototype['street'] = undefined;

/**
 * Номер дома
 * @member {String} home
 */
OrderAddress.prototype['home'] = undefined;

/**
 * Номер квартиры
 * @member {String} flat
 */
OrderAddress.prototype['flat'] = undefined;

/**
 * Подъезд
 * @member {String} entrance
 */
OrderAddress.prototype['entrance'] = undefined;

/**
 * Координата долготы
 * @member {Number} longitude
 */
OrderAddress.prototype['longitude'] = undefined;

/**
 * Координаты широты
 * @member {Number} latitude
 */
OrderAddress.prototype['latitude'] = undefined;






export default OrderAddress;

