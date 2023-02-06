import ApiClient from "../../ApiClient";
import ApiV2WarehousesGet200ResponseInner from '../model/ApiV2WarehousesGet200ResponseInner';
import ApiV3OrdersGet200Response from '../model/ApiV3OrdersGet200Response';
import ApiV3OrdersNewGet200Response from '../model/ApiV3OrdersNewGet200Response';
import ApiV3OrdersOrderMetaSgtinPostRequest from '../model/ApiV3OrdersOrderMetaSgtinPostRequest';
import ApiV3OrdersStatusPost200Response from '../model/ApiV3OrdersStatusPost200Response';
import ApiV3OrdersStatusPostRequest from '../model/ApiV3OrdersStatusPostRequest';
import ApiV3OrdersStickersPost200Response from '../model/ApiV3OrdersStickersPost200Response';
import ApiV3OrdersStickersPostRequest from '../model/ApiV3OrdersStickersPostRequest';
import ApiV3StocksWarehouseDelete200Response from '../model/ApiV3StocksWarehouseDelete200Response';
import ApiV3StocksWarehouseDeleteRequest from '../model/ApiV3StocksWarehouseDeleteRequest';
import ApiV3StocksWarehouseDeleteRequest1 from '../model/ApiV3StocksWarehouseDeleteRequest1';
import ApiV3StocksWarehouseDeleteRequest2 from '../model/ApiV3StocksWarehouseDeleteRequest2';
import ApiV3SuppliesGet200Response from '../model/ApiV3SuppliesGet200Response';
import ApiV3SuppliesGet201Response from '../model/ApiV3SuppliesGet201Response';
import ApiV3SuppliesGetRequest from '../model/ApiV3SuppliesGetRequest';
import ApiV3SuppliesOrdersReshipmentGet200Response from '../model/ApiV3SuppliesOrdersReshipmentGet200Response';
import ApiV3SuppliesSupplyBarcodeGet200Response from '../model/ApiV3SuppliesSupplyBarcodeGet200Response';
import ApiV3SuppliesSupplyOrdersGet200Response from '../model/ApiV3SuppliesSupplyOrdersGet200Response';
import Error from '../model/Error';
import Supply from '../model/Supply';

/**
* Marketplace service.
* @module api/MarketplaceApi
* @version 1.6
*/
export default class MarketplaceApi {

    /**
    * Constructs a new MarketplaceApi. 
    * @alias module:api/MarketplaceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV2WarehousesGet operation.
     * @callback module:api/MarketplaceApi~apiV2WarehousesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApiV2WarehousesGet200ResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cписок складов
     * Cписок складов поставщика.
     * @param {module:api/MarketplaceApi~apiV2WarehousesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApiV2WarehousesGet200ResponseInner>}
     */
    apiV2WarehousesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ApiV2WarehousesGet200ResponseInner];
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/warehouses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersGet operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3OrdersGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить информацию по сборочным заданиям
     * Возвращает информацию по сборочным заданиям без их актуального статуса.  Данные по сборочному заданию, возвращающиеся в данном методе, не меняются. Рекомендуется использовать для получения исторических данных. 
     * @param {Number} limit Параметр пагинации. Устанавливает предельное количество возвращаемых данных.
     * @param {Number} next Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен 0 в первом запросе.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.dateFrom Дата начала периода в формате Unix timestamp. Необязательный параметр.
     * @param {Number} opts.dateTo Дата конца периода в формате Unix timestamp. Необязательный параметр.
     * @param {module:api/MarketplaceApi~apiV3OrdersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3OrdersGet200Response}
     */
    apiV3OrdersGet(limit, next, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling apiV3OrdersGet");
      }
      // verify the required parameter 'next' is set
      if (next === undefined || next === null) {
        throw new Error("Missing the required parameter 'next' when calling apiV3OrdersGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'next': next,
        'dateFrom': opts['dateFrom'],
        'dateTo': opts['dateTo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3OrdersGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersNewGet operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersNewGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3OrdersNewGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить список новых сборочных заданий
     * Возвращает список всех новых сборочных заданий у поставщика на данный момент. 
     * @param {module:api/MarketplaceApi~apiV3OrdersNewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3OrdersNewGet200Response}
     */
    apiV3OrdersNewGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3OrdersNewGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders/new', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersOrderCancelPatch operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersOrderCancelPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Отменить сборочное задание
     * Переводит сборочное задание в статус **cancel** (\"Отменено поставщиком\").
     * @param {Number} order Идентификатор сборочного задания
     * @param {module:api/MarketplaceApi~apiV3OrdersOrderCancelPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3OrdersOrderCancelPatch(order, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling apiV3OrdersOrderCancelPatch");
      }

      let pathParams = {
        'order': order
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders/{order}/cancel', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersOrderMetaSgtinPost operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersOrderMetaSgtinPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Закрепить за сборочным заданием КиЗ (маркировку Честного знака)
     * Закрепляет за сборочным заданием КиЗ (маркировку Честного знака).   На данный момент требуется только для фармацевтической продукции. 
     * @param {Number} order Идентификатор сборочного задания
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiV3OrdersOrderMetaSgtinPostRequest} opts.apiV3OrdersOrderMetaSgtinPostRequest 
     * @param {module:api/MarketplaceApi~apiV3OrdersOrderMetaSgtinPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3OrdersOrderMetaSgtinPost(order, opts, callback) {
      opts = opts || {};
      let postBody = opts['apiV3OrdersOrderMetaSgtinPostRequest'];
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling apiV3OrdersOrderMetaSgtinPost");
      }

      let pathParams = {
        'order': order
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders/{order}/meta/sgtin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersStatusPost operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersStatusPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3OrdersStatusPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить статусы сборочных заданий
     * Возвращает статусы сборочных заданий по переданному списку идентификаторов сборочных заданий.  **supplierStatus** - статус сборочного задания, триггером изменения которого является сам поставщик.<br> Возможны следующие значения данного поля: | Статус   | Описание            | Поддерживаемый тип сборочного задания |   Как перевести сборочное задание в данный статус | | -------  | ---------           | ------------------------  | --------------------------------------| | new      | Новое сборочное задание         | dbs / fbs                 |  | confirm  | На сборке            | dbs / fbs                 | Для dbs - **PATCH** *_/api/v3/orders/{order}/confirm* <br> Для fbs - при добавлении сборочного задания к поставке **PATCH** *_/api/v3/supplies/{supply}/orders/{order}* | complete | В доставке           | fbs                       | При переводе в доставку соответствующей поставки **PATCH** *_/api/v3/supplies/{supply}/deliver* | cancel   | Отменено поставщиком | dbs / fbs                 | **PATCH** *_/api/v3/orders/{order}/cancel* | deliver  | В доставке           | dbs                       | **PATCH** *_/api/v3/orders/{order}/deliver* | receive  | Получено клиентом    | dbs                       | **PATCH** *_/api/v3/orders/{order}/receive* | reject   | Отказ при получении  | dbs                       | **PATCH** *_/api/v3/orders/{order}/reject*   **wbStatus** - статус сборочного задания в системе Wildberries.<br> Возможны следующие значения данного поля: - **waiting** - сборочное задание в работе - **sorted** - сборочное задание отсортировано - **sold** - сборочное задание получено клиентом - **canceled** - отмена сборочного задания - **canceled_by_client** - отмена сборочного задания клиентом 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiV3OrdersStatusPostRequest} opts.apiV3OrdersStatusPostRequest 
     * @param {module:api/MarketplaceApi~apiV3OrdersStatusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3OrdersStatusPost200Response}
     */
    apiV3OrdersStatusPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['apiV3OrdersStatusPostRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiV3OrdersStatusPost200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3OrdersStickersPost operation.
     * @callback module:api/MarketplaceApi~apiV3OrdersStickersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3OrdersStickersPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить этикетки для сборочных заданий
     * Возвращает список этикеток по переданному массиву сборочных заданий. Можно запросить этикетку в формате svg, zplv (вертикальный), zplh (горизонтальный), png.  **Ограничения при работе с методом**: - Нельзя запросить больше 100 этикеток за раз (не более 100 идентификаторов сборочных заданий в запросе). - Метод возвращает этикетки только для сборочных заданий, находящихся на сборке (в статусе **confirm**). - Доступные размеры: 58x40 и 40x30. 
     * @param {module:model/String} type Тип этикетки
     * @param {module:model/Number} width Ширина этикетки
     * @param {module:model/Number} height Высота этикетки
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiV3OrdersStickersPostRequest} opts.apiV3OrdersStickersPostRequest 
     * @param {module:api/MarketplaceApi~apiV3OrdersStickersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3OrdersStickersPost200Response}
     */
    apiV3OrdersStickersPost(type, width, height, opts, callback) {
      opts = opts || {};
      let postBody = opts['apiV3OrdersStickersPostRequest'];
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling apiV3OrdersStickersPost");
      }
      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling apiV3OrdersStickersPost");
      }
      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling apiV3OrdersStickersPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'type': type,
        'width': width,
        'height': height
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiV3OrdersStickersPost200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/orders/stickers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3StocksWarehouseDelete operation.
     * @callback module:api/MarketplaceApi~apiV3StocksWarehouseDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удалить остатки товаров
     * Удаляет остатки товаров. **Внимание! Действие необратимо**. Удаленный остаток будет необходимо загрузить повторно для возобновления продаж.
     * @param {Number} warehouse Идентификатор склада поставщика
     * @param {module:model/ApiV3StocksWarehouseDeleteRequest2} apiV3StocksWarehouseDeleteRequest2 
     * @param {module:api/MarketplaceApi~apiV3StocksWarehouseDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3StocksWarehouseDelete(warehouse, apiV3StocksWarehouseDeleteRequest2, opts, callback) {
      opts = opts || {};
      let postBody = apiV3StocksWarehouseDeleteRequest2;
      // verify the required parameter 'warehouse' is set
      if (warehouse === undefined || warehouse === null) {
        throw new Error("Missing the required parameter 'warehouse' when calling apiV3StocksWarehouseDelete");
      }
      // verify the required parameter 'apiV3StocksWarehouseDeleteRequest2' is set
      if (apiV3StocksWarehouseDeleteRequest2 === undefined || apiV3StocksWarehouseDeleteRequest2 === null) {
        throw new Error("Missing the required parameter 'apiV3StocksWarehouseDeleteRequest2' when calling apiV3StocksWarehouseDelete");
      }

      let pathParams = {
        'warehouse': warehouse
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/stocks/{warehouse}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3StocksWarehousePost operation.
     * @callback module:api/MarketplaceApi~apiV3StocksWarehousePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3StocksWarehouseDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить остатки товаров
     * Возвращает остатки товаров.
     * @param {Number} warehouse Идентификатор склада поставщика
     * @param {module:model/ApiV3StocksWarehouseDeleteRequest1} apiV3StocksWarehouseDeleteRequest1 
     * @param {module:api/MarketplaceApi~apiV3StocksWarehousePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3StocksWarehouseDelete200Response}
     */
    apiV3StocksWarehousePost(warehouse, apiV3StocksWarehouseDeleteRequest1, opts, callback) {
      opts = opts || {};
      let postBody = apiV3StocksWarehouseDeleteRequest1;
      // verify the required parameter 'warehouse' is set
      if (warehouse === undefined || warehouse === null) {
        throw new Error("Missing the required parameter 'warehouse' when calling apiV3StocksWarehousePost");
      }
      // verify the required parameter 'apiV3StocksWarehouseDeleteRequest1' is set
      if (apiV3StocksWarehouseDeleteRequest1 === undefined || apiV3StocksWarehouseDeleteRequest1 === null) {
        throw new Error("Missing the required parameter 'apiV3StocksWarehouseDeleteRequest1' when calling apiV3StocksWarehousePost");
      }

      let pathParams = {
        'warehouse': warehouse
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiV3StocksWarehouseDelete200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/stocks/{warehouse}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3StocksWarehousePut operation.
     * @callback module:api/MarketplaceApi~apiV3StocksWarehousePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Обновить остатки товаров
     * Обновляет остатки товаров.
     * @param {Number} warehouse Идентификатор склада поставщика
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiV3StocksWarehouseDeleteRequest} opts.apiV3StocksWarehouseDeleteRequest 
     * @param {module:api/MarketplaceApi~apiV3StocksWarehousePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3StocksWarehousePut(warehouse, opts, callback) {
      opts = opts || {};
      let postBody = opts['apiV3StocksWarehouseDeleteRequest'];
      // verify the required parameter 'warehouse' is set
      if (warehouse === undefined || warehouse === null) {
        throw new Error("Missing the required parameter 'warehouse' when calling apiV3StocksWarehousePut");
      }

      let pathParams = {
        'warehouse': warehouse
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/stocks/{warehouse}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesGet operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3SuppliesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить список поставок
     * Возвращает список поставок
     * @param {Number} limit Параметр пагинации. Устанавливает предельное количество возвращаемых данных.
     * @param {Number} next Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен 0 в первом запросе.
     * @param {module:api/MarketplaceApi~apiV3SuppliesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3SuppliesGet200Response}
     */
    apiV3SuppliesGet(limit, next, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling apiV3SuppliesGet");
      }
      // verify the required parameter 'next' is set
      if (next === undefined || next === null) {
        throw new Error("Missing the required parameter 'next' when calling apiV3SuppliesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'next': next
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3SuppliesGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesOrdersReshipmentGet operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesOrdersReshipmentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3SuppliesOrdersReshipmentGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить все сборочные задания на повторную отгрузку
     * Возвращает все сборочные задания, требующие повторной отгрузки.
     * @param {module:api/MarketplaceApi~apiV3SuppliesOrdersReshipmentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3SuppliesOrdersReshipmentGet200Response}
     */
    apiV3SuppliesOrdersReshipmentGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3SuppliesOrdersReshipmentGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/orders/reshipment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesPost operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3SuppliesGet201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создать новую поставку
     * **Ограничения работы с поставками**:  - Только для сборочных заданий по схеме \"Везу на склад WB\" - При добавлении в поставку все передаваемые сборочные задания в статусе **new** (\"Новое\") будут автоматически переведены в статус **confirm** (\"На сборке\"). - Обратите внимание, что если вы переведёте сборочное задание в статус **cancel** (\"Отмена поставщиком\"), то сборочное задание автоматически удалится из поставки, если было прикреплено к ней. - Поставку можно собрать только из одного типа сборочных заданий: сКГТ (isLargeCargo = true) или обычный (isLargeCargo = false). Новая поставка не обладает сКГТ-признаком. При добавлении первого заказа в поставку она приобретает сКГТ-признак добавляемого товара в заказе.  **Порядок работы**:  1. Создайте новую поставку с помощью метода **POST** *_/api/v3/supplies.* В ответ вернется идентификатор созданной поставки в формате \"WB-GI-1234567\". 2. В текущую новую поставку нужно добавить сборочные задания, которые вы повезёте на склад, методом **PATCH** *_/api/v3/supplies/{id поставки}/orders/{id сборочного задания}*. Обратите внимание, что при добавлении сборочных заданий к поставке они будут переведены в статус **confirm** (\"На сборке\"). 3. После добавления сборочных заданий к поставке вы можете получить этикетки с помощью метода **POST** *_/api/v3/orders/stickers*. Обратите внимание, что этикетки для сборочных заданий можно получить только тогда, когда они в статусе **confirm** (\"На сборке\"). 4. После того как поставка будет упомплектована нужными сборочными заданиями, необходимо ее передать в доставку с помощью метода **PATCH** *_/api/v3/supplies/{id поставки}/deliver*. Обратите внимание, что при передаче сборочных заданий в доставку они будут автоматически собраны, т.е. переведены в статус **complete** (\"В доставке\"). 5. Список сборочных заданий, добавленных к поставке, можно получить методом **GET** *_/api/v3/supplies/{id поставки}/orders*. 6. Все поставки, имеющиеся у поставщика, можно получить методом **GET** *_/api/v3/supplies*. 7. Детализацию конкретной поставки можно получить методом **GET** *_/api/v3/supplies/{id поставки}*. 8. С помощью метода **DELETE** *_/api/v3/supplies/{id поставки}* можно удалить поставку при условии, что она активна и за ней не закреплено ни одно сборочное задание. 9. Если поставка была отсканирована в пункте приёмки, но при этом в ней имеются ещё неотсканированные товары, то спустя определенное время необходимо доставить их повторно.   Все сборочные задания, требующие повторной отгрузки на данный момент, можно получить с помощью метода **GET** *_/api/v3/supplies/orders/reshipment*.    При помощи метода **PATCH** *_/api/v3/supplies/{id поставки}/orders/{id сборочного задания}* данные сборочные задания можно перевести в другую активную поставку (сборочное задание также будет переведено в статус **confirm** (\"На сборке\")). 10. Метод **PATCH** *_/api/v3/supplies/{id поставки}/orders/{id сборочного задания}* также позволяет перемещать сборочные задания между активными поставками. Обратите внимание, что нельзя перемещать сборочное задание из уже закрытой поставки, только если оно не требует повторной отгрузки. 11. QR-код поставки можно получить методом **GET** *_/api/v3/supplies/{id поставки}/barcode* в формате svg, zpl или png. Доступно только после передачи поставки в доставку. 
     * @param {module:model/ApiV3SuppliesGetRequest} apiV3SuppliesGetRequest 
     * @param {module:api/MarketplaceApi~apiV3SuppliesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3SuppliesGet201Response}
     */
    apiV3SuppliesPost(apiV3SuppliesGetRequest, opts, callback) {
      opts = opts || {};
      let postBody = apiV3SuppliesGetRequest;
      // verify the required parameter 'apiV3SuppliesGetRequest' is set
      if (apiV3SuppliesGetRequest === undefined || apiV3SuppliesGetRequest === null) {
        throw new Error("Missing the required parameter 'apiV3SuppliesGetRequest' when calling apiV3SuppliesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiV3SuppliesGet201Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyBarcodeGet operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyBarcodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3SuppliesSupplyBarcodeGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить QR поставки
     * Возвращает QR в svg, zplv (вертикальный), zplh (горизонтальный), png. <br> Можно получить, только если поставка передана в доставку. <br> Доступные размеры: 58х40 и 40х30. 
     * @param {String} supply Идентификатор поставки
     * @param {module:model/String} type Тип этикетки
     * @param {module:model/Number} width Ширина этикетки
     * @param {module:model/Number} height Высота этикетки
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyBarcodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3SuppliesSupplyBarcodeGet200Response}
     */
    apiV3SuppliesSupplyBarcodeGet(supply, type, width, height, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyBarcodeGet");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling apiV3SuppliesSupplyBarcodeGet");
      }
      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling apiV3SuppliesSupplyBarcodeGet");
      }
      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling apiV3SuppliesSupplyBarcodeGet");
      }

      let pathParams = {
        'supply': supply
      };
      let queryParams = {
        'type': type,
        'width': width,
        'height': height
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3SuppliesSupplyBarcodeGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}/barcode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyDelete operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удалить поставку
     * Удаляет поставку, если она активна и за ней не закреплено ни одно сборочное задание.
     * @param {String} supply Идентификатор поставки
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3SuppliesSupplyDelete(supply, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyDelete");
      }

      let pathParams = {
        'supply': supply
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyDeliverPatch operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyDeliverPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Передать поставку в доставку
     * Закрывает поставку и переводит все сборочные задания в ней в статус **complete** (\"В доставке\"). После закрытия поставки новые сборочные задания к ней добавить будет невозможно. Передать поставку в доставку можно только при наличии в ней хотя бы одного сборочного задания. 
     * @param {String} supply Идентификатор поставки
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyDeliverPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3SuppliesSupplyDeliverPatch(supply, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyDeliverPatch");
      }

      let pathParams = {
        'supply': supply
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}/deliver', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyGet operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supply} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить информацию о поставке
     * Возвращает информацию о поставке
     * @param {String} supply Идентификатор поставки
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supply}
     */
    apiV3SuppliesSupplyGet(supply, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyGet");
      }

      let pathParams = {
        'supply': supply
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Supply;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyOrdersGet operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyOrdersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV3SuppliesSupplyOrdersGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить сборочные задания в поставке
     * Возвращает сборочные задания, закреплённые за поставкой.
     * @param {String} supply Идентификатор поставки
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyOrdersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV3SuppliesSupplyOrdersGet200Response}
     */
    apiV3SuppliesSupplyOrdersGet(supply, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyOrdersGet");
      }

      let pathParams = {
        'supply': supply
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV3SuppliesSupplyOrdersGet200Response;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV3SuppliesSupplyOrdersOrderPatch operation.
     * @callback module:api/MarketplaceApi~apiV3SuppliesSupplyOrdersOrderPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Добавить к поставке сборочное задание
     * Добавляет к поставке сборочное задание и переводит его в статус **confirm** (\"На сборке\").  Также может перемещать сборочное задание между активными поставками, либо из закрытой в активную при условии, что сборочное задание требует повторной отгрузки. Добавить в поставку возможно только задания с соответствующим сКГТ-признаком (isLargeCargo), либо если поставке ещё не присвоен сКГТ-признак (isLargeCargo = null). 
     * @param {String} supply Идентификатор поставки
     * @param {Number} order Идентификатор сборочного задания
     * @param {module:api/MarketplaceApi~apiV3SuppliesSupplyOrdersOrderPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV3SuppliesSupplyOrdersOrderPatch(supply, order, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supply' is set
      if (supply === undefined || supply === null) {
        throw new Error("Missing the required parameter 'supply' when calling apiV3SuppliesSupplyOrdersOrderPatch");
      }
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling apiV3SuppliesSupplyOrdersOrderPatch");
      }

      let pathParams = {
        'supply': supply,
        'order': order
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://suppliers-api.wildberries.ru'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v3/supplies/{supply}/orders/{order}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }


}
