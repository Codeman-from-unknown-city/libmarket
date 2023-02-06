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
 * The PostingFBSActCheckStatusResponseStatus model module.
 * @module model/PostingFBSActCheckStatusResponseStatus
 * @version 2.1
 */
class PostingFBSActCheckStatusResponseStatus {
    /**
     * Constructs a new <code>PostingFBSActCheckStatusResponseStatus</code>.
     * Результат работы метода.
     * @alias module:model/PostingFBSActCheckStatusResponseStatus
     */
    constructor() { 
        
        PostingFBSActCheckStatusResponseStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostingFBSActCheckStatusResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostingFBSActCheckStatusResponseStatus} obj Optional instance to populate.
     * @return {module:model/PostingFBSActCheckStatusResponseStatus} The populated <code>PostingFBSActCheckStatusResponseStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostingFBSActCheckStatusResponseStatus();

            if (data.hasOwnProperty('act_type')) {
                obj['act_type'] = ApiClient.convertToType(data['act_type'], 'String');
            }
            if (data.hasOwnProperty('added_to_act')) {
                obj['added_to_act'] = ApiClient.convertToType(data['added_to_act'], ['String']);
            }
            if (data.hasOwnProperty('removed_from_act')) {
                obj['removed_from_act'] = ApiClient.convertToType(data['removed_from_act'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('is_partial')) {
                obj['is_partial'] = ApiClient.convertToType(data['is_partial'], 'Boolean');
            }
            if (data.hasOwnProperty('has_postings_for_next_carriage')) {
                obj['has_postings_for_next_carriage'] = ApiClient.convertToType(data['has_postings_for_next_carriage'], 'Boolean');
            }
            if (data.hasOwnProperty('partial_num')) {
                obj['partial_num'] = ApiClient.convertToType(data['partial_num'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostingFBSActCheckStatusResponseStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostingFBSActCheckStatusResponseStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['act_type'] && !(typeof data['act_type'] === 'string' || data['act_type'] instanceof String)) {
            throw new Error("Expected the field `act_type` to be a primitive type in the JSON string but got " + data['act_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['added_to_act'])) {
            throw new Error("Expected the field `added_to_act` to be an array in the JSON data but got " + data['added_to_act']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['removed_from_act'])) {
            throw new Error("Expected the field `removed_from_act` to be an array in the JSON data but got " + data['removed_from_act']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Тип акта приёма передачи и транспортной накладной.  Если значение `ozon_digital`, используйте методы [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus)      и [/v2/posting/fbs/digital/act/get-pdf](#operation/PostingAPI_PostingFBSGetDigitalAct) для получения электронных акта приёма-передачи и транспортной накладной. 
 * @member {String} act_type
 */
PostingFBSActCheckStatusResponseStatus.prototype['act_type'] = undefined;

/**
 * Массив c номерами отправлений, которые добавлены в акт приёма-передачи. Эти отправления нужно передать сегодня.
 * @member {Array.<String>} added_to_act
 */
PostingFBSActCheckStatusResponseStatus.prototype['added_to_act'] = undefined;

/**
 * Массив с номерами отправлений, которые не попали в акт приёма-передачи. Такие отправления нужно передавать со следующей отгрузкой.
 * @member {Array.<String>} removed_from_act
 */
PostingFBSActCheckStatusResponseStatus.prototype['removed_from_act'] = undefined;

/**
 * Статус запроса:  - `in_process` — документы формируются, нужно подождать.  - `ready` — документы сформированы и готовы для скачивания.  - `error` — произошла ошибка при формировании документов, запросите документы повторно.  - `cancelled` — создание документов отменено, запросите их повторно.  - `The next postings aren't ready` — произошла ошибка, отправления не включены в отгрузку. Подождите некоторое время и проверьте результат запроса. Если ошибка повторяется, обратитесь в службу поддержки. 
 * @member {String} status
 */
PostingFBSActCheckStatusResponseStatus.prototype['status'] = undefined;

/**
 * Признак частичной перевозки. `true`, если перевозка частичная.  Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты. 
 * @member {Boolean} is_partial
 */
PostingFBSActCheckStatusResponseStatus.prototype['is_partial'] = undefined;

/**
 * Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. `true`, если такие отправления есть.  Если такие отправления есть, создайте новый акт через метод [/v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate) и проверьте его статус. Создавайте акты, пока в этом поле не вернётся `false`. 
 * @member {Boolean} has_postings_for_next_carriage
 */
PostingFBSActCheckStatusResponseStatus.prototype['has_postings_for_next_carriage'] = undefined;

/**
 * Порядковый номер частичной перевозки.
 * @member {Number} partial_num
 */
PostingFBSActCheckStatusResponseStatus.prototype['partial_num'] = undefined;






export default PostingFBSActCheckStatusResponseStatus;

