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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdiMessage', 'model/EdiFabricCoreModelEdiEdifactUNE', 'model/EdiFabricCoreModelEdiEdifactUNG'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdiMessage'), require('./EdiFabricCoreModelEdiEdifactUNE'), require('./EdiFabricCoreModelEdiEdifactUNG'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsEdifactGroup = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdiMessage, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNE, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNG);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdiMessage, EdiFabricCoreModelEdiEdifactUNE, EdiFabricCoreModelEdiEdifactUNG) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsEdifactGroup model module.
   * @module model/EdiFabricWebApiModelsEdifactGroup
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsEdifactGroup</code>.
   * @alias module:model/EdiFabricWebApiModelsEdifactGroup
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsEdifactGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsEdifactGroup} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsEdifactGroup} The populated <code>EdiFabricWebApiModelsEdifactGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ung')) {
        obj['ung'] = EdiFabricCoreModelEdiEdifactUNG.constructFromObject(data['ung']);
      }
      if (data.hasOwnProperty('uneTrailers')) {
        obj['uneTrailers'] = ApiClient.convertToType(data['uneTrailers'], [EdiFabricCoreModelEdiEdifactUNE]);
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [EdiFabricCoreModelEdiEdiMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricCoreModelEdiEdifactUNG} ung
   */
  exports.prototype['ung'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdifactUNE>} uneTrailers
   */
  exports.prototype['uneTrailers'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdiMessage>} transactions
   */
  exports.prototype['transactions'] = undefined;



  return exports;
}));


