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
import BrandBrandCompanyCertificationListRequest from '../model/BrandBrandCompanyCertificationListRequest';
import BrandBrandCompanyCertificationListResponse from '../model/BrandBrandCompanyCertificationListResponse';
import ProductBooleanResponse from '../model/ProductBooleanResponse';
import ProductProductCertificateAccordanceTypesResponse from '../model/ProductProductCertificateAccordanceTypesResponse';
import ProductProductCertificateBindRequest from '../model/ProductProductCertificateBindRequest';
import ProductProductCertificateTypesResponse from '../model/ProductProductCertificateTypesResponse';
import ProductProductCertificationListRequest from '../model/ProductProductCertificationListRequest';
import ProductProductCertificationListResponse from '../model/ProductProductCertificationListResponse';
import RpcStatus from '../model/RpcStatus';

/**
* CertificationAPI service.
* @module api/CertificationAPIApi
* @version 2.1
*/
export default class CertificationAPIApi {

    /**
    * Constructs a new CertificationAPIApi. 
    * @alias module:api/CertificationAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the brandAPIBrandCompanyCertificationList operation.
     * @callback module:api/CertificationAPIApi~brandAPIBrandCompanyCertificationListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandBrandCompanyCertificationListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список сертифицируемых брендов
     * Метод для получения списка брендов, для которых требуется предоставить сертификат. Ответ содержит список брендов, товары которых есть в вашем личном кабинете.  Список брендов может изменяться, если Ozon получит требование от бренда предоставлять сертификат. 
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/BrandBrandCompanyCertificationListRequest} brandBrandCompanyCertificationListRequest 
     * @param {module:api/CertificationAPIApi~brandAPIBrandCompanyCertificationListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandBrandCompanyCertificationListResponse}
     */
    brandAPIBrandCompanyCertificationList(clientId, apiKey, brandBrandCompanyCertificationListRequest, callback) {
      let postBody = brandBrandCompanyCertificationListRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling brandAPIBrandCompanyCertificationList");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling brandAPIBrandCompanyCertificationList");
      }
      // verify the required parameter 'brandBrandCompanyCertificationListRequest' is set
      if (brandBrandCompanyCertificationListRequest === undefined || brandBrandCompanyCertificationListRequest === null) {
        throw new Error("Missing the required parameter 'brandBrandCompanyCertificationListRequest' when calling brandAPIBrandCompanyCertificationList");
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
      let returnType = BrandBrandCompanyCertificationListResponse;
      return this.apiClient.callApi(
        '/v1/brand/company-certification/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productAPIProductCertificateAccordanceTypes operation.
     * @callback module:api/CertificationAPIApi~productAPIProductCertificateAccordanceTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductProductCertificateAccordanceTypesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cправочник типов соответствия требованиям
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:api/CertificationAPIApi~productAPIProductCertificateAccordanceTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductProductCertificateAccordanceTypesResponse}
     */
    productAPIProductCertificateAccordanceTypes(clientId, apiKey, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling productAPIProductCertificateAccordanceTypes");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling productAPIProductCertificateAccordanceTypes");
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
      let returnType = ProductProductCertificateAccordanceTypesResponse;
      return this.apiClient.callApi(
        '/v1/product/certificate/accordance-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productAPIProductCertificateBind operation.
     * @callback module:api/CertificationAPIApi~productAPIProductCertificateBindCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductBooleanResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Привязать сертификат к товару
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/ProductProductCertificateBindRequest} productProductCertificateBindRequest 
     * @param {module:api/CertificationAPIApi~productAPIProductCertificateBindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductBooleanResponse}
     */
    productAPIProductCertificateBind(clientId, apiKey, productProductCertificateBindRequest, callback) {
      let postBody = productProductCertificateBindRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling productAPIProductCertificateBind");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling productAPIProductCertificateBind");
      }
      // verify the required parameter 'productProductCertificateBindRequest' is set
      if (productProductCertificateBindRequest === undefined || productProductCertificateBindRequest === null) {
        throw new Error("Missing the required parameter 'productProductCertificateBindRequest' when calling productAPIProductCertificateBind");
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
      let returnType = ProductBooleanResponse;
      return this.apiClient.callApi(
        '/v1/product/certificate/bind', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productAPIProductCertificateCreate operation.
     * @callback module:api/CertificationAPIApi~productAPIProductCertificateCreateCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Добавить сертификаты для товаров
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {Array.<File>} files Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf.
     * @param {String} name Название сертификата. Максимум 100 символов.
     * @param {String} number Номер сертификата. Максимум 100 символов.
     * @param {module:model/String} typeCode Тип сертификата. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes).
     * @param {Date} issueDate Дата начала действия сертификата.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.accordanceTypeCode Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes).
     * @param {Date} opts.expireDate Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов.  Формат: `2021-04-30T11:31:26Z`. 
     * @param {module:api/CertificationAPIApi~productAPIProductCertificateCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    productAPIProductCertificateCreate(clientId, apiKey, files, name, number, typeCode, issueDate, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'number' is set
      if (number === undefined || number === null) {
        throw new Error("Missing the required parameter 'number' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'typeCode' is set
      if (typeCode === undefined || typeCode === null) {
        throw new Error("Missing the required parameter 'typeCode' when calling productAPIProductCertificateCreate");
      }
      // verify the required parameter 'issueDate' is set
      if (issueDate === undefined || issueDate === null) {
        throw new Error("Missing the required parameter 'issueDate' when calling productAPIProductCertificateCreate");
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
        'files': this.apiClient.buildCollectionParam(files, 'csv'),
        'name': name,
        'number': number,
        'type_code': typeCode,
        'accordance_type_code': opts['accordanceTypeCode'],
        'issue_date': issueDate,
        'expire_date': opts['expireDate']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/v1/product/certificate/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productAPIProductCertificateTypes operation.
     * @callback module:api/CertificationAPIApi~productAPIProductCertificateTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductProductCertificateTypesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Справочник типов документов
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:api/CertificationAPIApi~productAPIProductCertificateTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductProductCertificateTypesResponse}
     */
    productAPIProductCertificateTypes(clientId, apiKey, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling productAPIProductCertificateTypes");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling productAPIProductCertificateTypes");
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
      let returnType = ProductProductCertificateTypesResponse;
      return this.apiClient.callApi(
        '/v1/product/certificate/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productAPIProductCertificationList operation.
     * @callback module:api/CertificationAPIApi~productAPIProductCertificationListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductProductCertificationListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Список сертифицируемых категорий
     * @param {String} clientId Идентификатор клиента.
     * @param {String} apiKey API-ключ.
     * @param {module:model/ProductProductCertificationListRequest} productProductCertificationListRequest 
     * @param {module:api/CertificationAPIApi~productAPIProductCertificationListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductProductCertificationListResponse}
     */
    productAPIProductCertificationList(clientId, apiKey, productProductCertificationListRequest, callback) {
      let postBody = productProductCertificationListRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling productAPIProductCertificationList");
      }
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling productAPIProductCertificationList");
      }
      // verify the required parameter 'productProductCertificationListRequest' is set
      if (productProductCertificationListRequest === undefined || productProductCertificationListRequest === null) {
        throw new Error("Missing the required parameter 'productProductCertificationListRequest' when calling productAPIProductCertificationList");
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
      let returnType = ProductProductCertificationListResponse;
      return this.apiClient.callApi(
        '/v1/product/certification/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
