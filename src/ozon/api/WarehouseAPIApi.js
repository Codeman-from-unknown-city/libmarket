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


import ApiClient from "../ApiClient";
import RpcStatus from '../model/RpcStatus';
import WarehouseDeliveryMethodListRequest from '../model/WarehouseDeliveryMethodListRequest';
import WarehouseDeliveryMethodListResponse from '../model/WarehouseDeliveryMethodListResponse';
import WarehouseWarehouseListResponse from '../model/WarehouseWarehouseListResponse';

/**
* WarehouseAPI service.
* @module api/WarehouseAPIApi
* @version 2.1
*/
export default class WarehouseAPIApi {

    /**
    * Constructs a new WarehouseAPIApi. 
    * @alias module:api/WarehouseAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the warehouseAPIDeliveryMethodList operation.
     * @callback module:api/WarehouseAPIApi~warehouseAPIDeliveryMethodListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseDeliveryMethodListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список методов доставки склада
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/WarehouseDeliveryMethodListRequest} warehouseDeliveryMethodListRequest 
     * @param {module:api/WarehouseAPIApi~warehouseAPIDeliveryMethodListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WarehouseDeliveryMethodListResponse}
     */
    warehouseAPIDeliveryMethodList(clientId, apiKey, warehouseDeliveryMethodListRequest, callback) {
      let postBody = warehouseDeliveryMethodListRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling warehouseAPIDeliveryMethodList");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling warehouseAPIDeliveryMethodList");
      }
      // verify the required parameter 'warehouseDeliveryMethodListRequest' is set
      if (warehouseDeliveryMethodListRequest === undefined || warehouseDeliveryMethodListRequest === null) {
        throw new Error("Missing the required parameter 'warehouseDeliveryMethodListRequest' when calling warehouseAPIDeliveryMethodList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Client-Id': clientId,
        'Api-Key': apiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WarehouseDeliveryMethodListResponse;
      return this.apiClient.callApi(
        '/v1/delivery-method/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the warehouseAPIWarehouseList operation.
     * @callback module:api/WarehouseAPIApi~warehouseAPIWarehouseListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseWarehouseListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список складов
     * В запросе не нужно указывать параметры. Ваша компания будет определена по `Client-ID`.
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:api/WarehouseAPIApi~warehouseAPIWarehouseListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WarehouseWarehouseListResponse}
     */
    warehouseAPIWarehouseList(clientId, apiKey, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling warehouseAPIWarehouseList");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling warehouseAPIWarehouseList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Client-Id': clientId,
        'Api-Key': apiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WarehouseWarehouseListResponse;
      return this.apiClient.callApi(
        '/v1/warehouse/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
