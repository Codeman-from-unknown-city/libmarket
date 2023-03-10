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
 * The ContentV1CardsUpdatePostRequestInnerSizesInner model module.
 * @module model/ContentV1CardsUpdatePostRequestInnerSizesInner
 * @version 1.6
 */
class ContentV1CardsUpdatePostRequestInnerSizesInner {
    /**
     * Constructs a new <code>ContentV1CardsUpdatePostRequestInnerSizesInner</code>.
     * @alias module:model/ContentV1CardsUpdatePostRequestInnerSizesInner
     */
    constructor() { 
        
        ContentV1CardsUpdatePostRequestInnerSizesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentV1CardsUpdatePostRequestInnerSizesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentV1CardsUpdatePostRequestInnerSizesInner} obj Optional instance to populate.
     * @return {module:model/ContentV1CardsUpdatePostRequestInnerSizesInner} The populated <code>ContentV1CardsUpdatePostRequestInnerSizesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentV1CardsUpdatePostRequestInnerSizesInner();

            if (data.hasOwnProperty('techSize')) {
                obj['techSize'] = ApiClient.convertToType(data['techSize'], 'String');
            }
            if (data.hasOwnProperty('chrtID')) {
                obj['chrtID'] = ApiClient.convertToType(data['chrtID'], 'Number');
            }
            if (data.hasOwnProperty('wbSize')) {
                obj['wbSize'] = ApiClient.convertToType(data['wbSize'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('skus')) {
                obj['skus'] = ApiClient.convertToType(data['skus'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentV1CardsUpdatePostRequestInnerSizesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentV1CardsUpdatePostRequestInnerSizesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['techSize'] && !(typeof data['techSize'] === 'string' || data['techSize'] instanceof String)) {
            throw new Error("Expected the field `techSize` to be a primitive type in the JSON string but got " + data['techSize']);
        }
        // ensure the json data is a string
        if (data['wbSize'] && !(typeof data['wbSize'] === 'string' || data['wbSize'] instanceof String)) {
            throw new Error("Expected the field `wbSize` to be a primitive type in the JSON string but got " + data['wbSize']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['skus'])) {
            throw new Error("Expected the field `skus` to be an array in the JSON data but got " + data['skus']);
        }

        return true;
    }


}



/**
 * Размер поставщика (пример S, M, L, XL, 42, 42-43)
 * @member {String} techSize
 */
ContentV1CardsUpdatePostRequestInnerSizesInner.prototype['techSize'] = undefined;

/**
 * Числовой идентификатор размера для данной номенклатуры Wildberries
 * @member {Number} chrtID
 */
ContentV1CardsUpdatePostRequestInnerSizesInner.prototype['chrtID'] = undefined;

/**
 * Рос. размер
 * @member {String} wbSize
 */
ContentV1CardsUpdatePostRequestInnerSizesInner.prototype['wbSize'] = undefined;

/**
 * Цена
 * @member {Number} price
 */
ContentV1CardsUpdatePostRequestInnerSizesInner.prototype['price'] = undefined;

/**
 * Массив баркодов, строковых идентификаторов размеров поставщика (их можно сгенерировать с помощью API, см. Viewer)
 * @member {Array.<String>} skus
 */
ContentV1CardsUpdatePostRequestInnerSizesInner.prototype['skus'] = undefined;






export default ContentV1CardsUpdatePostRequestInnerSizesInner;

