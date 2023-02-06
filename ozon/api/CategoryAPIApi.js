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
import CategoryGetCategoryTreeRequest from '../model/CategoryGetCategoryTreeRequest';
import CategoryGetCategoryTreeResponse from '../model/CategoryGetCategoryTreeResponse';
import Categoryv2DictionaryValueBatchRequest from '../model/Categoryv2DictionaryValueBatchRequest';
import Categoryv2DictionaryValueBatchResponse from '../model/Categoryv2DictionaryValueBatchResponse';
import Categoryv3CategoryAttributesRequest from '../model/Categoryv3CategoryAttributesRequest';
import Categoryv3CategoryAttributesResponse from '../model/Categoryv3CategoryAttributesResponse';
import RpcStatus from '../model/RpcStatus';

/**
* CategoryAPI service.
* @module api/CategoryAPIApi
* @version 2.1
*/
export default class CategoryAPIApi {

    /**
    * Constructs a new CategoryAPIApi. 
    * @alias module:api/CategoryAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the categoryAPIDictionaryValueBatch operation.
     * @callback module:api/CategoryAPIApi~categoryAPIDictionaryValueBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Categoryv2DictionaryValueBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Справочник значений характеристики
     * Узнать, есть ли у атрибута вложенный справочник, можно через метод [/v3/category/attribute](#operation/CategoryAPI_GetCategoryAttributesV3).  Если справочники есть, их нужно запрашивать этим методом. 
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/Categoryv2DictionaryValueBatchRequest} categoryv2DictionaryValueBatchRequest 
     * @param {module:api/CategoryAPIApi~categoryAPIDictionaryValueBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categoryv2DictionaryValueBatchResponse}
     */
    categoryAPIDictionaryValueBatch(clientId, apiKey, categoryv2DictionaryValueBatchRequest, callback) {
      let postBody = categoryv2DictionaryValueBatchRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling categoryAPIDictionaryValueBatch");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling categoryAPIDictionaryValueBatch");
      }
      // verify the required parameter 'categoryv2DictionaryValueBatchRequest' is set
      if (categoryv2DictionaryValueBatchRequest === undefined || categoryv2DictionaryValueBatchRequest === null) {
        throw new Error("Missing the required parameter 'categoryv2DictionaryValueBatchRequest' when calling categoryAPIDictionaryValueBatch");
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
      let returnType = Categoryv2DictionaryValueBatchResponse;
      return this.apiClient.callApi(
        '/v2/category/attribute/values', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryAPIGetCategoryAttributesV3 operation.
     * @callback module:api/CategoryAPIApi~categoryAPIGetCategoryAttributesV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Categoryv3CategoryAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список характеристик категории
     * Получение характеристик для указанной категории товаров.  Передавайте не более 20 идентификаторов категорий в списке `category_id`.  Узнать, есть ли у атрибута вложенный справочник, можно по параметру `dictionary_id`.  Если значение `0` — справочника нет. Если значение другое, то справочники есть. Их нужно запрашивать методом [/v2/category/attribute/values](#operation/CategoryAPI_DictionaryValueBatch). 
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/Categoryv3CategoryAttributesRequest} categoryv3CategoryAttributesRequest 
     * @param {module:api/CategoryAPIApi~categoryAPIGetCategoryAttributesV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categoryv3CategoryAttributesResponse}
     */
    categoryAPIGetCategoryAttributesV3(clientId, apiKey, categoryv3CategoryAttributesRequest, callback) {
      let postBody = categoryv3CategoryAttributesRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling categoryAPIGetCategoryAttributesV3");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling categoryAPIGetCategoryAttributesV3");
      }
      // verify the required parameter 'categoryv3CategoryAttributesRequest' is set
      if (categoryv3CategoryAttributesRequest === undefined || categoryv3CategoryAttributesRequest === null) {
        throw new Error("Missing the required parameter 'categoryv3CategoryAttributesRequest' when calling categoryAPIGetCategoryAttributesV3");
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
      let returnType = Categoryv3CategoryAttributesResponse;
      return this.apiClient.callApi(
        '/v3/category/attribute', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryAPIGetCategoryTree operation.
     * @callback module:api/CategoryAPIApi~categoryAPIGetCategoryTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryGetCategoryTreeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Дерево категории товаров
     * Возвращает категории для товаров в виде дерева. Создание товаров доступно только в категориях последнего уровня, сравните именно эти категории с категориями своей площадки. Категории не создаются по запросу пользователя.  <aside class=\"warning\">   Выберите корректную категорию для товара, так как для разных категорий применяется разный размер комиссии на продаваемый товар. </aside> 
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/CategoryGetCategoryTreeRequest} categoryGetCategoryTreeRequest 
     * @param {module:api/CategoryAPIApi~categoryAPIGetCategoryTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryGetCategoryTreeResponse}
     */
    categoryAPIGetCategoryTree(clientId, apiKey, categoryGetCategoryTreeRequest, callback) {
      let postBody = categoryGetCategoryTreeRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling categoryAPIGetCategoryTree");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling categoryAPIGetCategoryTree");
      }
      // verify the required parameter 'categoryGetCategoryTreeRequest' is set
      if (categoryGetCategoryTreeRequest === undefined || categoryGetCategoryTreeRequest === null) {
        throw new Error("Missing the required parameter 'categoryGetCategoryTreeRequest' when calling categoryAPIGetCategoryTree");
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
      let returnType = CategoryGetCategoryTreeResponse;
      return this.apiClient.callApi(
        '/v2/category/tree', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}