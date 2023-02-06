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
import ContentV1CardsFilterPost200ResponseDataInnerSizesInner from './ContentV1CardsFilterPost200ResponseDataInnerSizesInner';

/**
 * The ContentV1CardsFilterPost200ResponseDataInner model module.
 * @module model/ContentV1CardsFilterPost200ResponseDataInner
 * @version 1.6
 */
class ContentV1CardsFilterPost200ResponseDataInner {
    /**
     * Constructs a new <code>ContentV1CardsFilterPost200ResponseDataInner</code>.
     * @alias module:model/ContentV1CardsFilterPost200ResponseDataInner
     */
    constructor() { 
        
        ContentV1CardsFilterPost200ResponseDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentV1CardsFilterPost200ResponseDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentV1CardsFilterPost200ResponseDataInner} obj Optional instance to populate.
     * @return {module:model/ContentV1CardsFilterPost200ResponseDataInner} The populated <code>ContentV1CardsFilterPost200ResponseDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentV1CardsFilterPost200ResponseDataInner();

            if (data.hasOwnProperty('imtID')) {
                obj['imtID'] = ApiClient.convertToType(data['imtID'], 'Number');
            }
            if (data.hasOwnProperty('nmID')) {
                obj['nmID'] = ApiClient.convertToType(data['nmID'], 'Number');
            }
            if (data.hasOwnProperty('vendorCode')) {
                obj['vendorCode'] = ApiClient.convertToType(data['vendorCode'], 'String');
            }
            if (data.hasOwnProperty('mediaFiles')) {
                obj['mediaFiles'] = ApiClient.convertToType(data['mediaFiles'], ['String']);
            }
            if (data.hasOwnProperty('sizes')) {
                obj['sizes'] = ApiClient.convertToType(data['sizes'], [ContentV1CardsFilterPost200ResponseDataInnerSizesInner]);
            }
            if (data.hasOwnProperty('characteristics')) {
                obj['characteristics'] = ApiClient.convertToType(data['characteristics'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentV1CardsFilterPost200ResponseDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentV1CardsFilterPost200ResponseDataInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['vendorCode'] && !(typeof data['vendorCode'] === 'string' || data['vendorCode'] instanceof String)) {
            throw new Error("Expected the field `vendorCode` to be a primitive type in the JSON string but got " + data['vendorCode']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mediaFiles'])) {
            throw new Error("Expected the field `mediaFiles` to be an array in the JSON data but got " + data['mediaFiles']);
        }
        if (data['sizes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sizes'])) {
                throw new Error("Expected the field `sizes` to be an array in the JSON data but got " + data['sizes']);
            }
            // validate the optional field `sizes` (array)
            for (const item of data['sizes']) {
                ContentV1CardsFilterPost200ResponseDataInnerSizesInner.validateJsonObject(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['characteristics'])) {
            throw new Error("Expected the field `characteristics` to be an array in the JSON data but got " + data['characteristics']);
        }

        return true;
    }


}



/**
 * Идентификатор карточки товара (нужен для группирования НМ в одно КТ)
 * @member {Number} imtID
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['imtID'] = undefined;

/**
 * Числовой идентификатор номенклатуры Wildberries
 * @member {Number} nmID
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['nmID'] = undefined;

/**
 * Вендор код, текстовый идентификатор номенклатуры поставщика
 * @member {String} vendorCode
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['vendorCode'] = undefined;

/**
 * @member {Array.<String>} mediaFiles
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['mediaFiles'] = undefined;

/**
 * @member {Array.<module:model/ContentV1CardsFilterPost200ResponseDataInnerSizesInner>} sizes
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['sizes'] = undefined;

/**
 * Массив характеристик, индивидуальный для каждой категории
 * @member {Array.<Object>} characteristics
 */
ContentV1CardsFilterPost200ResponseDataInner.prototype['characteristics'] = undefined;






export default ContentV1CardsFilterPost200ResponseDataInner;

