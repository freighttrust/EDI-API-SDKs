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
    root.EdiFabricApi.EdiFabricCoreModelEdiX12GE = factory(root.EdiFabricApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EdiFabricCoreModelEdiX12GE model module.
   * @module model/EdiFabricCoreModelEdiX12GE
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricCoreModelEdiX12GE</code>.
   * @alias module:model/EdiFabricCoreModelEdiX12GE
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EdiFabricCoreModelEdiX12GE</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricCoreModelEdiX12GE} obj Optional instance to populate.
   * @return {module:model/EdiFabricCoreModelEdiX12GE} The populated <code>EdiFabricCoreModelEdiX12GE</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('numberOfIncludedSets_1')) {
        obj['numberOfIncludedSets_1'] = ApiClient.convertToType(data['numberOfIncludedSets_1'], 'String');
      }
      if (data.hasOwnProperty('groupControlNumber_2')) {
        obj['groupControlNumber_2'] = ApiClient.convertToType(data['groupControlNumber_2'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} numberOfIncludedSets_1
   */
  exports.prototype['numberOfIncludedSets_1'] = undefined;
  /**
   * @member {String} groupControlNumber_2
   */
  exports.prototype['groupControlNumber_2'] = undefined;



  return exports;
}));


