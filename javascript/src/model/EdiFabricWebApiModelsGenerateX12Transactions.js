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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdiMessage', 'model/EdiFabricWebApiModelsGenerateSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdiMessage'), require('./EdiFabricWebApiModelsGenerateSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsGenerateX12Transactions = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdiMessage, root.EdiFabricApi.EdiFabricWebApiModelsGenerateSettings);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdiMessage, EdiFabricWebApiModelsGenerateSettings) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsGenerateX12Transactions model module.
   * @module model/EdiFabricWebApiModelsGenerateX12Transactions
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsGenerateX12Transactions</code>.
   * @alias module:model/EdiFabricWebApiModelsGenerateX12Transactions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsGenerateX12Transactions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsGenerateX12Transactions} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsGenerateX12Transactions} The populated <code>EdiFabricWebApiModelsGenerateX12Transactions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settings')) {
        obj['settings'] = EdiFabricWebApiModelsGenerateSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [EdiFabricCoreModelEdiEdiMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricWebApiModelsGenerateSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdiMessage>} transactions
   */
  exports.prototype['transactions'] = undefined;



  return exports;
}));


