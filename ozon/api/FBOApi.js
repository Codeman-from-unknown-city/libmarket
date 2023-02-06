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
import PostingGetFboPostingListRequest from '../model/PostingGetFboPostingListRequest';
import PostingGetFboPostingRequest from '../model/PostingGetFboPostingRequest';
import RpcStatus from '../model/RpcStatus';
import V2FboPostingListResponse from '../model/V2FboPostingListResponse';
import V2FboPostingResponse from '../model/V2FboPostingResponse';

/**
* FBO service.
* @module api/FBOApi
* @version 2.1
*/
export default class FBOApi {

    /**
    * Constructs a new FBOApi. 
    * @alias module:api/FBOApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postingAPIGetFboPosting operation.
     * @callback module:api/FBOApi~postingAPIGetFboPostingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2FboPostingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Информация об отправлении
     * Возвращает информацию об отправлении по его идентификатору.
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/PostingGetFboPostingRequest} postingGetFboPostingRequest 
     * @param {module:api/FBOApi~postingAPIGetFboPostingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V2FboPostingResponse}
     */
    postingAPIGetFboPosting(clientId, apiKey, postingGetFboPostingRequest, callback) {
      let postBody = postingGetFboPostingRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling postingAPIGetFboPosting");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling postingAPIGetFboPosting");
      }
      // verify the required parameter 'postingGetFboPostingRequest' is set
      if (postingGetFboPostingRequest === undefined || postingGetFboPostingRequest === null) {
        throw new Error("Missing the required parameter 'postingGetFboPostingRequest' when calling postingAPIGetFboPosting");
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
      let returnType = V2FboPostingResponse;
      return this.apiClient.callApi(
        '/v2/posting/fbo/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postingAPIGetFboPostingList operation.
     * @callback module:api/FBOApi~postingAPIGetFboPostingListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2FboPostingListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список отправлений
     * Возвращает список отправлений за указанный период времени. Дополнительно можно отфильтровать отправления по их статусу.
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/PostingGetFboPostingListRequest} postingGetFboPostingListRequest 
     * @param {module:api/FBOApi~postingAPIGetFboPostingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V2FboPostingListResponse}
     */
    postingAPIGetFboPostingList(clientId, apiKey, postingGetFboPostingListRequest, callback) {
      let postBody = postingGetFboPostingListRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling postingAPIGetFboPostingList");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling postingAPIGetFboPostingList");
      }
      // verify the required parameter 'postingGetFboPostingListRequest' is set
      if (postingGetFboPostingListRequest === undefined || postingGetFboPostingListRequest === null) {
        throw new Error("Missing the required parameter 'postingGetFboPostingListRequest' when calling postingAPIGetFboPostingList");
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
      let returnType = V2FboPostingListResponse;
      return this.apiClient.callApi(
        '/v2/posting/fbo/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}