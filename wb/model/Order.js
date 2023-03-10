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
import OrderAddress from './OrderAddress';
import OrderUser from './OrderUser';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.6
 */
class Order {
    /**
     * Constructs a new <code>Order</code>.
     * @alias module:model/Order
     */
    constructor() { 
        
        Order.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rid')) {
                obj['rid'] = ApiClient.convertToType(data['rid'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('warehouseId')) {
                obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
            }
            if (data.hasOwnProperty('supplyId')) {
                obj['supplyId'] = ApiClient.convertToType(data['supplyId'], 'String');
            }
            if (data.hasOwnProperty('prioritySc')) {
                obj['prioritySc'] = ApiClient.convertToType(data['prioritySc'], ['String']);
            }
            if (data.hasOwnProperty('offices')) {
                obj['offices'] = ApiClient.convertToType(data['offices'], ['String']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = OrderAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = OrderUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('skus')) {
                obj['skus'] = ApiClient.convertToType(data['skus'], ['String']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('convertedPrice')) {
                obj['convertedPrice'] = ApiClient.convertToType(data['convertedPrice'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'Number');
            }
            if (data.hasOwnProperty('convertedCurrencyCode')) {
                obj['convertedCurrencyCode'] = ApiClient.convertToType(data['convertedCurrencyCode'], 'Number');
            }
            if (data.hasOwnProperty('orderUid')) {
                obj['orderUid'] = ApiClient.convertToType(data['orderUid'], 'String');
            }
            if (data.hasOwnProperty('deliveryType')) {
                obj['deliveryType'] = ApiClient.convertToType(data['deliveryType'], 'String');
            }
            if (data.hasOwnProperty('nmId')) {
                obj['nmId'] = ApiClient.convertToType(data['nmId'], 'Number');
            }
            if (data.hasOwnProperty('chrtId')) {
                obj['chrtId'] = ApiClient.convertToType(data['chrtId'], 'Number');
            }
            if (data.hasOwnProperty('article')) {
                obj['article'] = ApiClient.convertToType(data['article'], 'String');
            }
            if (data.hasOwnProperty('isLargeCargo')) {
                obj['isLargeCargo'] = ApiClient.convertToType(data['isLargeCargo'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Order</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Order</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['rid'] && !(typeof data['rid'] === 'string' || data['rid'] instanceof String)) {
            throw new Error("Expected the field `rid` to be a primitive type in the JSON string but got " + data['rid']);
        }
        // ensure the json data is a string
        if (data['supplyId'] && !(typeof data['supplyId'] === 'string' || data['supplyId'] instanceof String)) {
            throw new Error("Expected the field `supplyId` to be a primitive type in the JSON string but got " + data['supplyId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['prioritySc'])) {
            throw new Error("Expected the field `prioritySc` to be an array in the JSON data but got " + data['prioritySc']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['offices'])) {
            throw new Error("Expected the field `offices` to be an array in the JSON data but got " + data['offices']);
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          OrderAddress.validateJSON(data['address']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          OrderUser.validateJSON(data['user']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['skus'])) {
            throw new Error("Expected the field `skus` to be an array in the JSON data but got " + data['skus']);
        }
        // ensure the json data is a string
        if (data['orderUid'] && !(typeof data['orderUid'] === 'string' || data['orderUid'] instanceof String)) {
            throw new Error("Expected the field `orderUid` to be a primitive type in the JSON string but got " + data['orderUid']);
        }
        // ensure the json data is a string
        if (data['deliveryType'] && !(typeof data['deliveryType'] === 'string' || data['deliveryType'] instanceof String)) {
            throw new Error("Expected the field `deliveryType` to be a primitive type in the JSON string but got " + data['deliveryType']);
        }
        // ensure the json data is a string
        if (data['article'] && !(typeof data['article'] === 'string' || data['article'] instanceof String)) {
            throw new Error("Expected the field `article` to be a primitive type in the JSON string but got " + data['article']);
        }

        return true;
    }


}



/**
 * Идентификатор сборочного задания в Маркетплейсе
 * @member {Number} id
 */
Order.prototype['id'] = undefined;

/**
 * Идентификатор сборочного задания в системе Wildberries
 * @member {String} rid
 */
Order.prototype['rid'] = undefined;

/**
 * Дата создания сборочного задания (RFC3339)
 * @member {Date} createdAt
 */
Order.prototype['createdAt'] = undefined;

/**
 * Идентификатор склада поставщика, на который поступило сборочное задание
 * @member {Number} warehouseId
 */
Order.prototype['warehouseId'] = undefined;

/**
 * Идентификатор поставки. Возвращается, если заказ закреплён за поставкой.
 * @member {String} supplyId
 */
Order.prototype['supplyId'] = undefined;

/**
 * Массив приоритетных СЦ для доставки сборочного задания. Если поле не заполнено или массив пустой, приоритетного СЦ для данного сборочного задания нет.
 * @member {Array.<String>} prioritySc
 */
Order.prototype['prioritySc'] = undefined;

/**
 * Список офисов, куда следует привезти товар.
 * @member {Array.<String>} offices
 */
Order.prototype['offices'] = undefined;

/**
 * @member {module:model/OrderAddress} address
 */
Order.prototype['address'] = undefined;

/**
 * @member {module:model/OrderUser} user
 */
Order.prototype['user'] = undefined;

/**
 * Массив штрихкодов товара
 * @member {Array.<String>} skus
 */
Order.prototype['skus'] = undefined;

/**
 * Цена в валюте продажи с учетом скидок в копейках. Код валюты продажи в поле currencyCode.
 * @member {Number} price
 */
Order.prototype['price'] = undefined;

/**
 * Цена продажи с учетом скидок в копейках, сконвертированная в валюту страны поставщика по курсу на момент создания сборочного задания. Предоставляется в информационных целях.
 * @member {Number} convertedPrice
 */
Order.prototype['convertedPrice'] = undefined;

/**
 * Код валюты продажи (ISO 4217)
 * @member {Number} currencyCode
 */
Order.prototype['currencyCode'] = undefined;

/**
 * Код валюты страны поставщика (ISO 4217)
 * @member {Number} convertedCurrencyCode
 */
Order.prototype['convertedCurrencyCode'] = undefined;

/**
 * Идентификатор транзакции для группировки сборочных заданий. сборочные задания в одной корзине клиента будут иметь одинаковый orderUID.
 * @member {String} orderUid
 */
Order.prototype['orderUid'] = undefined;

/**
 * Тип доставки: fbs - доставка на склад Wildberries, dbs - доставка силами поставщика. 
 * @member {module:model/Order.DeliveryTypeEnum} deliveryType
 */
Order.prototype['deliveryType'] = undefined;

/**
 * Артикул товара в системе Wildberries
 * @member {Number} nmId
 */
Order.prototype['nmId'] = undefined;

/**
 * Идентификатор размера товара в системе Wildberries
 * @member {Number} chrtId
 */
Order.prototype['chrtId'] = undefined;

/**
 * Артикул поставщика
 * @member {String} article
 */
Order.prototype['article'] = undefined;

/**
 * сКГТ-признак товара, на который был сделан заказ
 * @member {module:model/Bool} isLargeCargo
 */
Order.prototype['isLargeCargo'] = undefined;





/**
 * Allowed values for the <code>deliveryType</code> property.
 * @enum {String}
 * @readonly
 */
Order['DeliveryTypeEnum'] = {

    /**
     * value: "dbs"
     * @const
     */
    "dbs": "dbs",

    /**
     * value: "fbs"
     * @const
     */
    "fbs": "fbs"
};



export default Order;

