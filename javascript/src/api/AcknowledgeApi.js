/**
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EdiFabricWebApiModelsEdifactAcknowledgment', 'model/EdiFabricWebApiModelsErrorDetails', 'model/EdiFabricWebApiModelsX12Acknowledgment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EdiFabricWebApiModelsEdifactAcknowledgment'), require('../model/EdiFabricWebApiModelsErrorDetails'), require('../model/EdiFabricWebApiModelsX12Acknowledgment'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.AcknowledgeApi = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricWebApiModelsEdifactAcknowledgment, root.EdiFabricApi.EdiFabricWebApiModelsErrorDetails, root.EdiFabricApi.EdiFabricWebApiModelsX12Acknowledgment);
  }
}(this, function(ApiClient, EdiFabricWebApiModelsEdifactAcknowledgment, EdiFabricWebApiModelsErrorDetails, EdiFabricWebApiModelsX12Acknowledgment) {
  'use strict';

  /**
   * Acknowledge service.
   * @module api/AcknowledgeApi
   * @version v1
   */

  /**
   * Constructs a new AcknowledgeApi. 
   * @alias module:api/AcknowledgeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acknowledgeEdifact operation.
     * @callback module:api/AcknowledgeApi~acknowledgeEdifactCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EdiFabricWebApiModelsEdifactAcknowledgment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {File} ediFile EDI file to translate
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.readMode  (default to read_small)
     * @param {module:model/String} opts.accept  (default to application/json)
     * @param {String} opts.charSet  (default to utf-8)
     * @param {Boolean} opts.continueOnError  (default to true)
     * @param {Boolean} opts.skipTrailerValidation  (default to false)
     * @param {module:model/String} opts.decimalPoint  (default to .)
     * @param {module:model/String} opts.syntaxSet 
     * @param {Boolean} opts.transactionDuplicate  (default to false)
     * @param {Boolean} opts.groupDuplicate  (default to false)
     * @param {module:model/String} opts.technicalAck  (default to default)
     * @param {Boolean} opts.generateForValidTransactions  (default to false)
     * @param {Boolean} opts.allowPartial  (default to false)
     * @param {Number} opts.transactionControlNumber  (default to 1)
     * @param {module:model/String} opts.eancomSyntax 
     * @param {Boolean} opts.includeTransactions  (default to false)
     * @param {module:api/AcknowledgeApi~acknowledgeEdifactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EdiFabricWebApiModelsEdifactAcknowledgment>}
     */
    this.acknowledgeEdifact = function(ediFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ediFile' is set
      if (ediFile === undefined || ediFile === null) {
        throw new Error("Missing the required parameter 'ediFile' when calling acknowledgeEdifact");
      }


      var pathParams = {
      };
      var queryParams = {
        'read_mode': opts['readMode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {
        'char_set': opts['charSet'],
        'continue_on_error': opts['continueOnError'],
        'skip_trailer_validation': opts['skipTrailerValidation'],
        'decimal_point': opts['decimalPoint'],
        'syntax_set': opts['syntaxSet'],
        'transaction_duplicate': opts['transactionDuplicate'],
        'group_duplicate': opts['groupDuplicate'],
        'technical_ack': opts['technicalAck'],
        'generate_for_valid_transactions': opts['generateForValidTransactions'],
        'allow_partial': opts['allowPartial'],
        'transaction_control_number': opts['transactionControlNumber'],
        'eancom_syntax': opts['eancomSyntax'],
        'include_transactions': opts['includeTransactions'],
        'edi_file': ediFile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = [EdiFabricWebApiModelsEdifactAcknowledgment];

      return this.apiClient.callApi(
        '/acknowledge/edifact', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the acknowledgeX12 operation.
     * @callback module:api/AcknowledgeApi~acknowledgeX12Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EdiFabricWebApiModelsX12Acknowledgment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {File} ediFile EDI file to translate
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.readMode  (default to read_small)
     * @param {module:model/String} opts.accept  (default to application/json)
     * @param {String} opts.charSet  (default to utf-8)
     * @param {Boolean} opts.continueOnError  (default to true)
     * @param {Boolean} opts.skipTrailerValidation  (default to false)
     * @param {module:model/String} opts.syntaxSet 
     * @param {Boolean} opts.transactionDuplicate  (default to false)
     * @param {Boolean} opts.groupDuplicate  (default to false)
     * @param {module:model/String} opts.technicalAck  (default to default)
     * @param {Boolean} opts.generateForValidTransactions  (default to false)
     * @param {Boolean} opts.allowPartial  (default to false)
     * @param {Number} opts.transactionControlNumber  (default to 1)
     * @param {module:model/String} opts.ak901  (default to e)
     * @param {module:model/String} opts.ackVersion  (default to 4010_997)
     * @param {Boolean} opts.includeTransactions  (default to false)
     * @param {module:api/AcknowledgeApi~acknowledgeX12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EdiFabricWebApiModelsX12Acknowledgment>}
     */
    this.acknowledgeX12 = function(ediFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ediFile' is set
      if (ediFile === undefined || ediFile === null) {
        throw new Error("Missing the required parameter 'ediFile' when calling acknowledgeX12");
      }


      var pathParams = {
      };
      var queryParams = {
        'read_mode': opts['readMode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {
        'char_set': opts['charSet'],
        'continue_on_error': opts['continueOnError'],
        'skip_trailer_validation': opts['skipTrailerValidation'],
        'syntax_set': opts['syntaxSet'],
        'transaction_duplicate': opts['transactionDuplicate'],
        'group_duplicate': opts['groupDuplicate'],
        'technical_ack': opts['technicalAck'],
        'generate_for_valid_transactions': opts['generateForValidTransactions'],
        'allow_partial': opts['allowPartial'],
        'transaction_control_number': opts['transactionControlNumber'],
        'ak901': opts['ak901'],
        'ack_version': opts['ackVersion'],
        'include_transactions': opts['includeTransactions'],
        'edi_file': ediFile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = [EdiFabricWebApiModelsX12Acknowledgment];

      return this.apiClient.callApi(
        '/acknowledge/x12', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
