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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdiMessage', 'model/EdiFabricCoreModelEdiEdifactUNB', 'model/EdiFabricCoreModelEdiEdifactUNG'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdiMessage'), require('./EdiFabricCoreModelEdiEdifactUNB'), require('./EdiFabricCoreModelEdiEdifactUNG'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsEdifactAcknowledgment = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdiMessage, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNG);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdiMessage, EdiFabricCoreModelEdiEdifactUNB, EdiFabricCoreModelEdiEdifactUNG) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsEdifactAcknowledgment model module.
   * @module model/EdiFabricWebApiModelsEdifactAcknowledgment
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsEdifactAcknowledgment</code>.
   * @alias module:model/EdiFabricWebApiModelsEdifactAcknowledgment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsEdifactAcknowledgment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsEdifactAcknowledgment} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsEdifactAcknowledgment} The populated <code>EdiFabricWebApiModelsEdifactAcknowledgment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('originalUnb')) {
        obj['originalUnb'] = EdiFabricCoreModelEdiEdifactUNB.constructFromObject(data['originalUnb']);
      }
      if (data.hasOwnProperty('originalUng')) {
        obj['originalUng'] = EdiFabricCoreModelEdiEdifactUNG.constructFromObject(data['originalUng']);
      }
      if (data.hasOwnProperty('ackType')) {
        obj['ackType'] = ApiClient.convertToType(data['ackType'], 'String');
      }
      if (data.hasOwnProperty('ack')) {
        obj['ack'] = EdiFabricCoreModelEdiEdiMessage.constructFromObject(data['ack']);
      }
      if (data.hasOwnProperty('originalTransactions')) {
        obj['originalTransactions'] = ApiClient.convertToType(data['originalTransactions'], [EdiFabricCoreModelEdiEdiMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricCoreModelEdiEdifactUNB} originalUnb
   */
  exports.prototype['originalUnb'] = undefined;
  /**
   * @member {module:model/EdiFabricCoreModelEdiEdifactUNG} originalUng
   */
  exports.prototype['originalUng'] = undefined;
  /**
   * @member {module:model/EdiFabricWebApiModelsEdifactAcknowledgment.AckTypeEnum} ackType
   */
  exports.prototype['ackType'] = undefined;
  /**
   * @member {module:model/EdiFabricCoreModelEdiEdiMessage} ack
   */
  exports.prototype['ack'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdiMessage>} originalTransactions
   */
  exports.prototype['originalTransactions'] = undefined;


  /**
   * Allowed values for the <code>ackType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AckTypeEnum = {
    /**
     * value: "Technical"
     * @const
     */
    "Technical": "Technical",
    /**
     * value: "Functional"
     * @const
     */
    "Functional": "Functional",
    /**
     * value: "Implementation"
     * @const
     */
    "Implementation": "Implementation"  };


  return exports;
}));


