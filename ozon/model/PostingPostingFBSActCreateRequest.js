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
 * The PostingPostingFBSActCreateRequest model module.
 * @module model/PostingPostingFBSActCreateRequest
 * @version 2.1
 */
class PostingPostingFBSActCreateRequest {
    /**
     * Constructs a new <code>PostingPostingFBSActCreateRequest</code>.
     * @alias module:model/PostingPostingFBSActCreateRequest
     */
    constructor() { 
        
        PostingPostingFBSActCreateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingPostingFBSActCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingPostingFBSActCreateRequest} obj Optional instance to populate.
     * @return {module:model/PostingPostingFBSActCreateRequest} The populated <code>PostingPostingFBSActCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingPostingFBSActCreateRequest();

            if (data.hasOwnProperty('containers_count')) {
                obj['containers_count'] = ApiClient.convertToType(data['containers_count'], 'Number');
            }
            if (data.hasOwnProperty('delivery_method_id')) {
                obj['delivery_method_id'] = ApiClient.convertToType(data['delivery_method_id'], 'Number');
            }
            if (data.hasOwnProperty('departure_date')) {
                obj['departure_date'] = ApiClient.convertToType(data['departure_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingPostingFBSActCreateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingPostingFBSActCreateRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Количество грузовых мест.   Используйте параметр, если вы подключены к доверительной приёмке и отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите его.  [Подробнее в Базе знаний продавца](https://docs.ozon.ru/partners/prodayoa-so-svoego-sklada-fbs/doveritel-naya-priemka-gruzovogo-mesta) 
 * @member {Number} containers_count
 */
PostingPostingFBSActCreateRequest.prototype['containers_count'] = undefined;

/**
 * Идентификатор метода доставки.
 * @member {Number} delivery_method_id
 */
PostingPostingFBSActCreateRequest.prototype['delivery_method_id'] = undefined;

/**
 * Дата отгрузки.  Чтобы печать была доступна до дня отгрузки, в личном кабинете в настройках метода включите **Печать актов приёма-передачи заранее**. Время на сборку отправлений — SLA на сборку — должно быть больше 13 часов. [Подробнее о печати акта приёма-передачи заранее](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/pechat-aktov-zaranee.html).  **Примеры**  - Отгрузка на следующий день: сборка заканчивается завтра в 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 текущего дня. С этого времени можно печатать акт приёма-передачи.  - Отгрузка после выходных: склад не работает в субботу и воскресенье. Сборка заканчивается в понедельник, 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 пятницы. С этого времени можно печатать акт приёма-передачи.<br>  - Время на сборку отправлений менее 13 часов: сборка заканчивается завтра в 13:00. Если время на сборку — 10 часов, то отгрузка сформируется в 13:00 - 10 часов + 1 минута = 03:01 следующего дня. Отправления, полученные до 03:00, нужно передать в тот же день. Раньше 03:01 напечатать акт не получится, только в день отгрузки. 
 * @member {Date} departure_date
 */
PostingPostingFBSActCreateRequest.prototype['departure_date'] = undefined;






export default PostingPostingFBSActCreateRequest;

