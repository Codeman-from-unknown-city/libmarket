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
import V1InvoiceCreateOrUpdateRequest from '../model/V1InvoiceCreateOrUpdateRequest';
import V1InvoiceCreateOrUpdateResponse from '../model/V1InvoiceCreateOrUpdateResponse';
import V1InvoiceDeleteRequest from '../model/V1InvoiceDeleteRequest';
import V1InvoiceDeleteResponse from '../model/V1InvoiceDeleteResponse';
import V1InvoiceGetRequest from '../model/V1InvoiceGetRequest';
import V1InvoiceGetResponse from '../model/V1InvoiceGetResponse';

/**
* SupplierAPI service.
* @module api/SupplierAPIApi
* @version 2.1
*/
export default class SupplierAPIApi {

    /**
    * Constructs a new SupplierAPIApi. 
    * @alias module:api/SupplierAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the invoiceCreate operation.
     * @callback module:api/SupplierAPIApi~invoiceCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1InvoiceCreateOrUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создать или изменить ссылку на счёт-проформу
     * Создание или изменение ссылки на таможенную счёт-проформу для возврата НДС продавцам из Турции.
     * @param {module:model/V1InvoiceCreateOrUpdateRequest} v1InvoiceCreateOrUpdateRequest 
     * @param {module:api/SupplierAPIApi~invoiceCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1InvoiceCreateOrUpdateResponse}
     */
    invoiceCreate(v1InvoiceCreateOrUpdateRequest, callback) {
      let postBody = v1InvoiceCreateOrUpdateRequest;
      // verify the required parameter 'v1InvoiceCreateOrUpdateRequest' is set
      if (v1InvoiceCreateOrUpdateRequest === undefined || v1InvoiceCreateOrUpdateRequest === null) {
        throw new Error("Missing the required parameter 'v1InvoiceCreateOrUpdateRequest' when calling invoiceCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1InvoiceCreateOrUpdateResponse;
      return this.apiClient.callApi(
        '/v1/invoice/create-or-update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoiceDelete operation.
     * @callback module:api/SupplierAPIApi~invoiceDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1InvoiceDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удалить ссылку на счёт-проформу
     * @param {module:model/V1InvoiceDeleteRequest} v1InvoiceDeleteRequest 
     * @param {module:api/SupplierAPIApi~invoiceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1InvoiceDeleteResponse}
     */
    invoiceDelete(v1InvoiceDeleteRequest, callback) {
      let postBody = v1InvoiceDeleteRequest;
      // verify the required parameter 'v1InvoiceDeleteRequest' is set
      if (v1InvoiceDeleteRequest === undefined || v1InvoiceDeleteRequest === null) {
        throw new Error("Missing the required parameter 'v1InvoiceDeleteRequest' when calling invoiceDelete");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1InvoiceDeleteResponse;
      return this.apiClient.callApi(
        '/v1/invoice/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoiceGet operation.
     * @callback module:api/SupplierAPIApi~invoiceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1InvoiceGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получить ссылку на счёт-проформу
     * @param {module:model/V1InvoiceGetRequest} v1InvoiceGetRequest 
     * @param {module:api/SupplierAPIApi~invoiceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1InvoiceGetResponse}
     */
    invoiceGet(v1InvoiceGetRequest, callback) {
      let postBody = v1InvoiceGetRequest;
      // verify the required parameter 'v1InvoiceGetRequest' is set
      if (v1InvoiceGetRequest === undefined || v1InvoiceGetRequest === null) {
        throw new Error("Missing the required parameter 'v1InvoiceGetRequest' when calling invoiceGet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1InvoiceGetResponse;
      return this.apiClient.callApi(
        '/v1/invoice/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}