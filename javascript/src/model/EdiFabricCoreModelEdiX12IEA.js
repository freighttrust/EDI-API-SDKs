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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricCoreModelEdiX12IEA = factory(root.EdiFabricApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EdiFabricCoreModelEdiX12IEA model module.
   * @module model/EdiFabricCoreModelEdiX12IEA
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricCoreModelEdiX12IEA</code>.
   * @alias module:model/EdiFabricCoreModelEdiX12IEA
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EdiFabricCoreModelEdiX12IEA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricCoreModelEdiX12IEA} obj Optional instance to populate.
   * @return {module:model/EdiFabricCoreModelEdiX12IEA} The populated <code>EdiFabricCoreModelEdiX12IEA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('numberOfIncludedGroups_1')) {
        obj['numberOfIncludedGroups_1'] = ApiClient.convertToType(data['numberOfIncludedGroups_1'], 'String');
      }
      if (data.hasOwnProperty('interchangeControlNumber_2')) {
        obj['interchangeControlNumber_2'] = ApiClient.convertToType(data['interchangeControlNumber_2'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} numberOfIncludedGroups_1
   */
  exports.prototype['numberOfIncludedGroups_1'] = undefined;
  /**
   * @member {String} interchangeControlNumber_2
   */
  exports.prototype['interchangeControlNumber_2'] = undefined;



  return exports;
}));


