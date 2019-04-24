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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdifactUNB', 'model/EdiFabricWebApiModelsGenerateSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdifactUNB'), require('./EdiFabricWebApiModelsGenerateSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsGenerateUnb = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB, root.EdiFabricApi.EdiFabricWebApiModelsGenerateSettings);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdifactUNB, EdiFabricWebApiModelsGenerateSettings) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsGenerateUnb model module.
   * @module model/EdiFabricWebApiModelsGenerateUnb
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsGenerateUnb</code>.
   * @alias module:model/EdiFabricWebApiModelsGenerateUnb
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsGenerateUnb</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsGenerateUnb} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsGenerateUnb} The populated <code>EdiFabricWebApiModelsGenerateUnb</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settings')) {
        obj['settings'] = EdiFabricWebApiModelsGenerateSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('unb')) {
        obj['unb'] = EdiFabricCoreModelEdiEdifactUNB.constructFromObject(data['unb']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricWebApiModelsGenerateSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * @member {module:model/EdiFabricCoreModelEdiEdifactUNB} unb
   */
  exports.prototype['unb'] = undefined;



  return exports;
}));

