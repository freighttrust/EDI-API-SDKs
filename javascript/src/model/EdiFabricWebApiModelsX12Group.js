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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdiMessage', 'model/EdiFabricCoreModelEdiX12GE', 'model/EdiFabricCoreModelEdiX12GS'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdiMessage'), require('./EdiFabricCoreModelEdiX12GE'), require('./EdiFabricCoreModelEdiX12GS'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsX12Group = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdiMessage, root.EdiFabricApi.EdiFabricCoreModelEdiX12GE, root.EdiFabricApi.EdiFabricCoreModelEdiX12GS);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdiMessage, EdiFabricCoreModelEdiX12GE, EdiFabricCoreModelEdiX12GS) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsX12Group model module.
   * @module model/EdiFabricWebApiModelsX12Group
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsX12Group</code>.
   * @alias module:model/EdiFabricWebApiModelsX12Group
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsX12Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsX12Group} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsX12Group} The populated <code>EdiFabricWebApiModelsX12Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gs')) {
        obj['gs'] = EdiFabricCoreModelEdiX12GS.constructFromObject(data['gs']);
      }
      if (data.hasOwnProperty('geTrailers')) {
        obj['geTrailers'] = ApiClient.convertToType(data['geTrailers'], [EdiFabricCoreModelEdiX12GE]);
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [EdiFabricCoreModelEdiEdiMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricCoreModelEdiX12GS} gs
   */
  exports.prototype['gs'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiX12GE>} geTrailers
   */
  exports.prototype['geTrailers'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdiMessage>} transactions
   */
  exports.prototype['transactions'] = undefined;



  return exports;
}));

