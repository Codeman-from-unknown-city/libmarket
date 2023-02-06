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
import AutoOffersListV1ResponseOfferStatusInfo from './AutoOffersListV1ResponseOfferStatusInfo';

/**
 * The V1AutoOffersListV1ResponseOffer model module.
 * @module model/V1AutoOffersListV1ResponseOffer
 * @version 2.1
 */
class V1AutoOffersListV1ResponseOffer {
    /**
     * Constructs a new <code>V1AutoOffersListV1ResponseOffer</code>.
     * @alias module:model/V1AutoOffersListV1ResponseOffer
     */
    constructor() { 
        
        V1AutoOffersListV1ResponseOffer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AutoOffersListV1ResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AutoOffersListV1ResponseOffer} obj Optional instance to populate.
     * @return {module:model/V1AutoOffersListV1ResponseOffer} The populated <code>V1AutoOffersListV1ResponseOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AutoOffersListV1ResponseOffer();

            if (data.hasOwnProperty('offer_id')) {
                obj['offer_id'] = ApiClient.convertToType(data['offer_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('modification')) {
                obj['modification'] = ApiClient.convertToType(data['modification'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('drive')) {
                obj['drive'] = ApiClient.convertToType(data['drive'], 'String');
            }
            if (data.hasOwnProperty('doors')) {
                obj['doors'] = ApiClient.convertToType(data['doors'], 'Number');
            }
            if (data.hasOwnProperty('wheel')) {
                obj['wheel'] = ApiClient.convertToType(data['wheel'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
            }
            if (data.hasOwnProperty('owners')) {
                obj['owners'] = ApiClient.convertToType(data['owners'], 'Number');
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('extras')) {
                obj['extras'] = ApiClient.convertToType(data['extras'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = ApiClient.convertToType(data['availability'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('cbo_id')) {
                obj['cbo_id'] = ApiClient.convertToType(data['cbo_id'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('pts')) {
                obj['pts'] = ApiClient.convertToType(data['pts'], 'String');
            }
            if (data.hasOwnProperty('trade_in_discount')) {
                obj['trade_in_discount'] = ApiClient.convertToType(data['trade_in_discount'], 'String');
            }
            if (data.hasOwnProperty('credit_discount')) {
                obj['credit_discount'] = ApiClient.convertToType(data['credit_discount'], 'String');
            }
            if (data.hasOwnProperty('maximal_discount')) {
                obj['maximal_discount'] = ApiClient.convertToType(data['maximal_discount'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'Number');
            }
            if (data.hasOwnProperty('status_info')) {
                obj['status_info'] = AutoOffersListV1ResponseOfferStatusInfo.constructFromObject(data['status_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1AutoOffersListV1ResponseOffer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1AutoOffersListV1ResponseOffer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['offer_id'] && !(typeof data['offer_id'] === 'string' || data['offer_id'] instanceof String)) {
            throw new Error("Expected the field `offer_id` to be a primitive type in the JSON string but got " + data['offer_id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['modification'] && !(typeof data['modification'] === 'string' || data['modification'] instanceof String)) {
            throw new Error("Expected the field `modification` to be a primitive type in the JSON string but got " + data['modification']);
        }
        // ensure the json data is a string
        if (data['line'] && !(typeof data['line'] === 'string' || data['line'] instanceof String)) {
            throw new Error("Expected the field `line` to be a primitive type in the JSON string but got " + data['line']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['drive'] && !(typeof data['drive'] === 'string' || data['drive'] instanceof String)) {
            throw new Error("Expected the field `drive` to be a primitive type in the JSON string but got " + data['drive']);
        }
        // ensure the json data is a string
        if (data['wheel'] && !(typeof data['wheel'] === 'string' || data['wheel'] instanceof String)) {
            throw new Error("Expected the field `wheel` to be a primitive type in the JSON string but got " + data['wheel']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['vin'] && !(typeof data['vin'] === 'string' || data['vin'] instanceof String)) {
            throw new Error("Expected the field `vin` to be a primitive type in the JSON string but got " + data['vin']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['extras'] && !(typeof data['extras'] === 'string' || data['extras'] instanceof String)) {
            throw new Error("Expected the field `extras` to be a primitive type in the JSON string but got " + data['extras']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
            throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // ensure the json data is a string
        if (data['availability'] && !(typeof data['availability'] === 'string' || data['availability'] instanceof String)) {
            throw new Error("Expected the field `availability` to be a primitive type in the JSON string but got " + data['availability']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['pts'] && !(typeof data['pts'] === 'string' || data['pts'] instanceof String)) {
            throw new Error("Expected the field `pts` to be a primitive type in the JSON string but got " + data['pts']);
        }
        // ensure the json data is a string
        if (data['trade_in_discount'] && !(typeof data['trade_in_discount'] === 'string' || data['trade_in_discount'] instanceof String)) {
            throw new Error("Expected the field `trade_in_discount` to be a primitive type in the JSON string but got " + data['trade_in_discount']);
        }
        // ensure the json data is a string
        if (data['credit_discount'] && !(typeof data['credit_discount'] === 'string' || data['credit_discount'] instanceof String)) {
            throw new Error("Expected the field `credit_discount` to be a primitive type in the JSON string but got " + data['credit_discount']);
        }
        // ensure the json data is a string
        if (data['maximal_discount'] && !(typeof data['maximal_discount'] === 'string' || data['maximal_discount'] instanceof String)) {
            throw new Error("Expected the field `maximal_discount` to be a primitive type in the JSON string but got " + data['maximal_discount']);
        }
        // ensure the json data is a string
        if (data['item_id'] && !(typeof data['item_id'] === 'string' || data['item_id'] instanceof String)) {
            throw new Error("Expected the field `item_id` to be a primitive type in the JSON string but got " + data['item_id']);
        }
        // validate the optional field `status_info`
        if (data['status_info']) { // data not null
          AutoOffersListV1ResponseOfferStatusInfo.validateJSON(data['status_info']);
        }

        return true;
    }


}



/**
 * Идентификатор предложения в системе автодилера.
 * @member {String} offer_id
 */
V1AutoOffersListV1ResponseOffer.prototype['offer_id'] = undefined;

/**
 * Тип автомобиля: - `Новый`, - `С пробегом`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.TypeEnum} type
 */
V1AutoOffersListV1ResponseOffer.prototype['type'] = undefined;

/**
 * Бренд. Значение должно быть в списке модификаций.
 * @member {String} brand
 */
V1AutoOffersListV1ResponseOffer.prototype['brand'] = undefined;

/**
 * Модель и поколение. Значение должно быть в списке модификаций.
 * @member {String} model
 */
V1AutoOffersListV1ResponseOffer.prototype['model'] = undefined;

/**
 * Модификация. Значение должно быть в списке модификаций.
 * @member {String} modification
 */
V1AutoOffersListV1ResponseOffer.prototype['modification'] = undefined;

/**
 * Комплектация. Значение должно быть в списке модификаций.
 * @member {String} line
 */
V1AutoOffersListV1ResponseOffer.prototype['line'] = undefined;

/**
 * Год выпуска.
 * @member {Number} year
 */
V1AutoOffersListV1ResponseOffer.prototype['year'] = undefined;

/**
 * Кузов. Значение должно быть в списке модификаций.
 * @member {String} body
 */
V1AutoOffersListV1ResponseOffer.prototype['body'] = undefined;

/**
 * Привод: - `Передний`,  - `Задний`,  - `Полный`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.DriveEnum} drive
 */
V1AutoOffersListV1ResponseOffer.prototype['drive'] = undefined;

/**
 * Количество дверей.
 * @member {Number} doors
 */
V1AutoOffersListV1ResponseOffer.prototype['doors'] = undefined;

/**
 * Руль: - `Левый`, - `Правый`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.WheelEnum} wheel
 */
V1AutoOffersListV1ResponseOffer.prototype['wheel'] = undefined;

/**
 * Цвет: - `чёрный`, - `белый`, - `бежевый`, - `голубой`, - `жёлтый`, - `зелёный`, - `золотой`, - `коричневый`, - `красный`, - `оранжевый`, - `пурпурный`, - `розовый`, - `серебристый`, - `серый`, - `синий`, - `фиолетовый`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.ColorEnum} color
 */
V1AutoOffersListV1ResponseOffer.prototype['color'] = undefined;

/**
 * VIN автомобиля.
 * @member {String} vin
 */
V1AutoOffersListV1ResponseOffer.prototype['vin'] = undefined;

/**
 * Количество владельцев по ПТС.  Для новых автомобилей — значение `0`, для четырёх и более владельцев — `4`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.OwnersEnum} owners
 */
V1AutoOffersListV1ResponseOffer.prototype['owners'] = undefined;

/**
 * Пробег. Для новых автомобилей — значение `0`.
 * @member {Number} run
 */
V1AutoOffersListV1ResponseOffer.prototype['run'] = undefined;

/**
 * Описание.
 * @member {String} description
 */
V1AutoOffersListV1ResponseOffer.prototype['description'] = undefined;

/**
 * Дополнительные опции. Строка со значениями через запятую, например \"ЭРА-ГЛОНАСС,Климат-контроль 2-зонный\".  Возможные значения: - Обзор:   - `Ксеноновые/Биксеноновые фары`,   - `Лазерные фары`,   - `Светодиодные фары`,   - `Противотуманные фары`,   - `Автоматический корректор фар`,   - `Омыватель фар`,   - `Датчик дождя`,   - `Датчик света`,   - `Система адаптивного освещения`,   - `Система управления дальним светом`,   - `Электрообогрев зоны стеклоочистителей`,   - `Электрообогрев лобового стекла`,   - `Электрообогрев форсунок стеклоочистителей`,   - `Электрообогрев зеркал`. - Экстерьер:   - `Стальные диски`,   - `Легкосплавные диски`,   - `Диски 12`,   - `Диски 13`,   - `Диски 14`,   - `Диски 15`,   - `Диски 16`,   - `Диски 17`,   - `Диски 18`,   - `Диски 19`,   - `Диски 20`,   - `Диски 21`,   - `Диски 22`,   - `Диски 23`,   - `Диски 24`,   - `Диски 25`,   - `Диски 26`,   - `Диски 27`,   - `Диски 28`,   - `Рейлинги на крыше`,   - `Декоративные молдинги`,   - `Аэрография`,   - `Двухцветная окраска кузова`. - Защита от угона:   - `Сигнализация`,   - `Сигнализация с обратной связью`,   - `Центральный замок`,   - `Иммобилайзер`,   - `Датчик проникновения в салон (датчик объема)`. - Мультимедиа:   - `Аудио-подготовка`,   - `Аудиосистема`,   - `Беспроводная зарядка для смартфона`,   - `Голосовое управление`,   - `Мультимедиа система для задних пассажиров`,   - `Мультимедиа система с ЖК-экраном`,   - `Навигационная система`,   - `Премиальная аудиосистема`,   - `Розетка 12V`,   - `Розетка 220V`,   - `Яндекс Авто`,   - `Android Auto`,   - `AUX`,   - `Bluetooth`,   - `Car Play`,   - `USB`. - Салон:   - `Количество мест: 2`,   - `Количество мест: 4`,   - `Количество мест: 5`,   - `Количество мест: 6`,   - `Количество мест: 7`,   - `Количество мест: 8`,   - `Количество мест: 9`,   - `Третий ряд сидений`,   - `Вентиляция передних сидений`,   - `Вентиляция задних сидений`,   - `Подогрев передних сидений`,   - `Подогрев задних сидений`,   - `Регулировка сиденья водителя по высоте`,   - `Регулировка передних сидений по высоте`,   - `Электрорегулировка сиденья водителя`,   - `Электрорегулировка передних сидений`,   - `Электрорегулировка задних сидений`,   - `Память сиденья водителя`,   - `Память передних сидений`,   - `Сиденье водителя с поясничной поддержкой`,   - `Передние сиденья с поясничной поддержкой`,   - `Ткань (Материал салона)`,   - `Велюр (Материал салона)`,   - `Комбинированный (Материал салона)`,   - `Искусственная кожа (Материал салона)`,   - `Кожа (Материал салона)`,   - `Алькантара (Материал салона)`,   - `Светлый салон`,   - `Тёмный салон`,   - `Отделка кожей рулевого колеса`,   - `Отделка кожей рычага КПП`,   - `Люк`,   - `Панорамная крыша`,   - `Отделка потолка чёрной тканью`,   - `Спортивные передние сидения`,   - `Сиденья с массажем`,   - `Декоративная подсветка салона`,   - `Декоративные накладки на педали`,   - `Накладки на пороги`,   - `Складной столик на спинках передних сидений`,   - `Передний центральный подлокотник`,   - `Третий задний подголовник`,   - `Функция складывания спинки сиденья пассажира`,   - `Складывающееся заднее сидение`,   - `Солнцезащитная шторка на заднем стекле`,   - `Солнцезащитные шторки в задних дверях`,   - `Тонированные стёкла`. - Комфорт:   - `Электростеклоподъёмники передние`,   - `Электростеклоподъёмники задние`,   - `Кондиционер`,   - `Климат-контроль 1-зонный`,   - `Климат-контроль 2-зонный`,   - `Климат-контроль многозонный`,   - `Адаптивный круиз-контроль`,   - `Круиз-контроль`,   - `Усилитель руля`,   - `Активный усилитель руля`,   - `Регулировка руля по высоте`,   - `Регулировка руля по вылету`,   - `Электрорегулировка руля`,   - `Рулевая колонка с памятью положения`,   - `Камера задняя`,   - `Камера передняя`,   - `Камера 360°`,   - `Парктроник задний`,   - `Парктроник передний`,   - `Система автоматической парковки`,   - `Бортовой компьютер`,   - `Дистанционный запуск двигателя`,   - `Программируемый предпусковой отопитель`,   - `Запуск двигателя с кнопки`,   - `Мультифункциональное рулевое колесо`,   - `Подрулевые лепестки переключения передач`,   - `Проекционный дисплей`,   - `Электронная приборная панель`,   - `Система «старт-стоп»`,   - `Система доступа без ключа`,   - `Регулируемый педальный узел`,   - `Обогрев рулевого колеса`,   - `Охлаждаемый перчаточный ящик`,   - `Прикуриватель и пепельница`,   - `Доводчик дверей`,   - `Открытие багажника без помощи рук`,   - `Электропривод крышки багажника`,   - `Электропривод зеркал`,   - `Электроскладывание зеркал`. - Безопасность:   - `Подушка безопасности водителя`,   - `Подушка безопасности пассажира`,   - `Подушки безопасности боковые`,   - `Подушки безопасности боковые задние`,   - `Подушки безопасности оконные (шторки)`,   - `Подушка безопасности для защиты коленей водителя`,   - `Антиблокировочная система (ABS)`,   - `Антипробуксовочная система (ASR)`,   - `Система стабилизации`,   - `Система предотвращения столкновения`,   - `Система помощи при торможении`,   - `Система контроля за полосой движения`,   - `Система контроля слепых зон`,   - `Система помощи при старте в гору`,   - `Система распознавания дорожных знаков`,   - `Система ночного видения`,   - `Блокировка замков задних дверей`,   - `Датчик давления в шинах`,   - `Датчик усталости водителя`,   - `Крепление для детского кресла (задний ряд)`,   - `Крепление для детского кресла (передний ряд)`,   - `ЭРА-ГЛОНАСС`,   - `Бронированный кузов`. - Прочее:   - `Активная подвеска`,   - `Спортивная подвеска`,   - `Пневмоподвеска`,   - `Полноразмерное запасное колесо`,   - `Докатка`,   - `Защита картера`,   - `Фаркоп`,   - `Газобаллонное оборудование`. 
 * @member {String} extras
 */
V1AutoOffersListV1ResponseOffer.prototype['extras'] = undefined;

/**
 * Ссылки на изображения в формате JPG или PNG.
 * @member {Array.<String>} images
 */
V1AutoOffersListV1ResponseOffer.prototype['images'] = undefined;

/**
 * Наличие: - `В наличии`,  - `На заказ`. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.AvailabilityEnum} availability
 */
V1AutoOffersListV1ResponseOffer.prototype['availability'] = undefined;

/**
 * Индикатор, что предложение активно.
 * @member {Boolean} is_active
 */
V1AutoOffersListV1ResponseOffer.prototype['is_active'] = undefined;

/**
 * Идентификатор автосалона в системе Ozon.
 * @member {Number} cbo_id
 */
V1AutoOffersListV1ResponseOffer.prototype['cbo_id'] = undefined;

/**
 * Цена автомобиля без учёта скидок.
 * @member {String} price
 */
V1AutoOffersListV1ResponseOffer.prototype['price'] = undefined;

/**
 * ПТС: оригинал или дубликат. 
 * @member {module:model/V1AutoOffersListV1ResponseOffer.PtsEnum} pts
 */
V1AutoOffersListV1ResponseOffer.prototype['pts'] = undefined;

/**
 * Скидка при покупке в трейд-ин.
 * @member {String} trade_in_discount
 */
V1AutoOffersListV1ResponseOffer.prototype['trade_in_discount'] = undefined;

/**
 * Скидка при покупке в кредит.
 * @member {String} credit_discount
 */
V1AutoOffersListV1ResponseOffer.prototype['credit_discount'] = undefined;

/**
 * Максимальная скидка, возможная при выполнении условий всех действующих в этот момент акций.
 * @member {String} maximal_discount
 */
V1AutoOffersListV1ResponseOffer.prototype['maximal_discount'] = undefined;

/**
 * Идентификатор предложения в системе Ozon.
 * @member {String} item_id
 */
V1AutoOffersListV1ResponseOffer.prototype['item_id'] = undefined;

/**
 * SKU предложения в системе Ozon.
 * @member {Number} sku
 */
V1AutoOffersListV1ResponseOffer.prototype['sku'] = undefined;

/**
 * @member {module:model/AutoOffersListV1ResponseOfferStatusInfo} status_info
 */
V1AutoOffersListV1ResponseOffer.prototype['status_info'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['TypeEnum'] = {

    /**
     * value: "Новый"
     * @const
     */
    "Новый": "Новый",

    /**
     * value: "С пробегом"
     * @const
     */
    "С пробегом": "С пробегом"
};


/**
 * Allowed values for the <code>drive</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['DriveEnum'] = {

    /**
     * value: "Передний"
     * @const
     */
    "Передний": "Передний",

    /**
     * value: "Задний"
     * @const
     */
    "Задний": "Задний",

    /**
     * value: "Полный"
     * @const
     */
    "Полный": "Полный"
};


/**
 * Allowed values for the <code>wheel</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['WheelEnum'] = {

    /**
     * value: "Левый"
     * @const
     */
    "Левый": "Левый",

    /**
     * value: "Правый"
     * @const
     */
    "Правый": "Правый"
};


/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['ColorEnum'] = {

    /**
     * value: "чёрный"
     * @const
     */
    "чёрный": "чёрный",

    /**
     * value: "белый"
     * @const
     */
    "белый": "белый",

    /**
     * value: "бежевый"
     * @const
     */
    "бежевый": "бежевый",

    /**
     * value: "голубой"
     * @const
     */
    "голубой": "голубой",

    /**
     * value: "жёлтый"
     * @const
     */
    "жёлтый": "жёлтый",

    /**
     * value: "зелёный"
     * @const
     */
    "зелёный": "зелёный",

    /**
     * value: "золотой"
     * @const
     */
    "золотой": "золотой",

    /**
     * value: "коричневый"
     * @const
     */
    "коричневый": "коричневый",

    /**
     * value: "красный"
     * @const
     */
    "красный": "красный",

    /**
     * value: "оранжевый"
     * @const
     */
    "оранжевый": "оранжевый",

    /**
     * value: "пурпурный"
     * @const
     */
    "пурпурный": "пурпурный",

    /**
     * value: "розовый"
     * @const
     */
    "розовый": "розовый",

    /**
     * value: "серебристый"
     * @const
     */
    "серебристый": "серебристый",

    /**
     * value: "серый"
     * @const
     */
    "серый": "серый",

    /**
     * value: "синий"
     * @const
     */
    "синий": "синий",

    /**
     * value: "фиолетовый"
     * @const
     */
    "фиолетовый": "фиолетовый"
};


/**
 * Allowed values for the <code>owners</code> property.
 * @enum {Number}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['OwnersEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3,

    /**
     * value: 4
     * @const
     */
    "4": 4
};


/**
 * Allowed values for the <code>availability</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['AvailabilityEnum'] = {

    /**
     * value: "В наличии"
     * @const
     */
    "В наличии": "В наличии",

    /**
     * value: "На заказ"
     * @const
     */
    "На заказ": "На заказ"
};


/**
 * Allowed values for the <code>pts</code> property.
 * @enum {String}
 * @readonly
 */
V1AutoOffersListV1ResponseOffer['PtsEnum'] = {

    /**
     * value: "Оригинал"
     * @const
     */
    "Оригинал": "Оригинал",

    /**
     * value: "Дубликат"
     * @const
     */
    "Дубликат": "Дубликат"
};



export default V1AutoOffersListV1ResponseOffer;
