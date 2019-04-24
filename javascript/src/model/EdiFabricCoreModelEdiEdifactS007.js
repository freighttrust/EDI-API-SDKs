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
    root.EdiFabricApi.EdiFabricCoreModelEdiEdifactS007 = factory(root.EdiFabricApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EdiFabricCoreModelEdiEdifactS007 model module.
   * @module model/EdiFabricCoreModelEdiEdifactS007
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricCoreModelEdiEdifactS007</code>.
   * @alias module:model/EdiFabricCoreModelEdiEdifactS007
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EdiFabricCoreModelEdiEdifactS007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricCoreModelEdiEdifactS007} obj Optional instance to populate.
   * @return {module:model/EdiFabricCoreModelEdiEdifactS007} The populated <code>EdiFabricCoreModelEdiEdifactS007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationRecipientIdentification_1')) {
        obj['applicationRecipientIdentification_1'] = ApiClient.convertToType(data['applicationRecipientIdentification_1'], 'String');
      }
      if (data.hasOwnProperty('identificationCodeQualifier_2')) {
        obj['identificationCodeQualifier_2'] = ApiClient.convertToType(data['identificationCodeQualifier_2'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} applicationRecipientIdentification_1
   */
  exports.prototype['applicationRecipientIdentification_1'] = undefined;
  /**
   * @member {String} identificationCodeQualifier_2
   */
  exports.prototype['identificationCodeQualifier_2'] = undefined;



  return exports;
}));


