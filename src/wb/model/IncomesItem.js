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
 * The IncomesItem model module.
 * @module model/IncomesItem
 * @version 1.6
 */
class IncomesItem {
    /**
     * Constructs a new <code>IncomesItem</code>.
     * @alias module:model/IncomesItem
     */
    constructor() { 
        
        IncomesItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IncomesItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncomesItem} obj Optional instance to populate.
     * @return {module:model/IncomesItem} The populated <code>IncomesItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncomesItem();

            if (data.hasOwnProperty('incomeId')) {
                obj['incomeId'] = ApiClient.convertToType(data['incomeId'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('lastChangeDate')) {
                obj['lastChangeDate'] = ApiClient.convertToType(data['lastChangeDate'], 'Date');
            }
            if (data.hasOwnProperty('supplierArticle')) {
                obj['supplierArticle'] = ApiClient.convertToType(data['supplierArticle'], 'String');
            }
            if (data.hasOwnProperty('techSize')) {
                obj['techSize'] = ApiClient.convertToType(data['techSize'], 'String');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('totalPrice')) {
                obj['totalPrice'] = ApiClient.convertToType(data['totalPrice'], 'Number');
            }
            if (data.hasOwnProperty('dateClose')) {
                obj['dateClose'] = ApiClient.convertToType(data['dateClose'], 'Date');
            }
            if (data.hasOwnProperty('warehouseName')) {
                obj['warehouseName'] = ApiClient.convertToType(data['warehouseName'], 'String');
            }
            if (data.hasOwnProperty('nmId')) {
                obj['nmId'] = ApiClient.convertToType(data['nmId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IncomesItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IncomesItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }
        // ensure the json data is a string
        if (data['supplierArticle'] && !(typeof data['supplierArticle'] === 'string' || data['supplierArticle'] instanceof String)) {
            throw new Error("Expected the field `supplierArticle` to be a primitive type in the JSON string but got " + data['supplierArticle']);
        }
        // ensure the json data is a string
        if (data['techSize'] && !(typeof data['techSize'] === 'string' || data['techSize'] instanceof String)) {
            throw new Error("Expected the field `techSize` to be a primitive type in the JSON string but got " + data['techSize']);
        }
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is a string
        if (data['warehouseName'] && !(typeof data['warehouseName'] === 'string' || data['warehouseName'] instanceof String)) {
            throw new Error("Expected the field `warehouseName` to be a primitive type in the JSON string but got " + data['warehouseName']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Номер поставки
 * @member {Number} incomeId
 */
IncomesItem.prototype['incomeId'] = undefined;

/**
 * Номер УПД
 * @member {String} number
 */
IncomesItem.prototype['number'] = undefined;

/**
 * Дата поступления. Если часовой пояс не указан, то берется Московское время UTC+3.
 * @member {Date} date
 */
IncomesItem.prototype['date'] = undefined;

/**
 * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе. Если часовой пояс не указан, то берется Московское время UTC+3.
 * @member {Date} lastChangeDate
 */
IncomesItem.prototype['lastChangeDate'] = undefined;

/**
 * Артикул поставщика
 * @member {String} supplierArticle
 */
IncomesItem.prototype['supplierArticle'] = undefined;

/**
 * Размер
 * @member {String} techSize
 */
IncomesItem.prototype['techSize'] = undefined;

/**
 * Бар-код
 * @member {String} barcode
 */
IncomesItem.prototype['barcode'] = undefined;

/**
 * Количество
 * @member {Number} quantity
 */
IncomesItem.prototype['quantity'] = undefined;

/**
 * Цена из УПД
 * @member {Number} totalPrice
 */
IncomesItem.prototype['totalPrice'] = undefined;

/**
 * Дата принятия (закрытия) в WB. Если часовой пояс не указан, то берется Московское время UTC+3.
 * @member {Date} dateClose
 */
IncomesItem.prototype['dateClose'] = undefined;

/**
 * Название склада
 * @member {String} warehouseName
 */
IncomesItem.prototype['warehouseName'] = undefined;

/**
 * Код WB
 * @member {Number} nmId
 */
IncomesItem.prototype['nmId'] = undefined;

/**
 * Текущий статус поставки
 * @member {module:model/IncomesItem.StatusEnum} status
 */
IncomesItem.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
IncomesItem['StatusEnum'] = {

    /**
     * value: "Принято"
     * @const
     */
    "Принято": "Принято"
};



export default IncomesItem;

