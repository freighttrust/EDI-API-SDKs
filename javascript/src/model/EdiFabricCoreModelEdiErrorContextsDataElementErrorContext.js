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
    root.EdiFabricApi.EdiFabricCoreModelEdiErrorContextsDataElementErrorContext = factory(root.EdiFabricApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EdiFabricCoreModelEdiErrorContextsDataElementErrorContext model module.
   * @module model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricCoreModelEdiErrorContextsDataElementErrorContext</code>.
   * @alias module:model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>EdiFabricCoreModelEdiErrorContextsDataElementErrorContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext} obj Optional instance to populate.
   * @return {module:model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext} The populated <code>EdiFabricCoreModelEdiErrorContextsDataElementErrorContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('componentPosition')) {
        obj['componentPosition'] = ApiClient.convertToType(data['componentPosition'], 'Number');
      }
      if (data.hasOwnProperty('repetitionPosition')) {
        obj['repetitionPosition'] = ApiClient.convertToType(data['repetitionPosition'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {module:model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} componentPosition
   */
  exports.prototype['componentPosition'] = undefined;
  /**
   * @member {Number} repetitionPosition
   */
  exports.prototype['repetitionPosition'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "RequiredDataElementMissing"
     * @const
     */
    "RequiredDataElementMissing": "RequiredDataElementMissing",
    /**
     * value: "ConditionalRequiredDataElementMissing"
     * @const
     */
    "ConditionalRequiredDataElementMissing": "ConditionalRequiredDataElementMissing",
    /**
     * value: "TooManyDataElements"
     * @const
     */
    "TooManyDataElements": "TooManyDataElements",
    /**
     * value: "DataElementTooShort"
     * @const
     */
    "DataElementTooShort": "DataElementTooShort",
    /**
     * value: "DataElementTooLong"
     * @const
     */
    "DataElementTooLong": "DataElementTooLong",
    /**
     * value: "InvalidCharacterInDataElement"
     * @const
     */
    "InvalidCharacterInDataElement": "InvalidCharacterInDataElement",
    /**
     * value: "InvalidCodeValue"
     * @const
     */
    "InvalidCodeValue": "InvalidCodeValue",
    /**
     * value: "InvalidDate"
     * @const
     */
    "InvalidDate": "InvalidDate",
    /**
     * value: "InvalidTime"
     * @const
     */
    "InvalidTime": "InvalidTime",
    /**
     * value: "ExclusionConditionViolated"
     * @const
     */
    "ExclusionConditionViolated": "ExclusionConditionViolated",
    /**
     * value: "TooManyRepetitions"
     * @const
     */
    "TooManyRepetitions": "TooManyRepetitions",
    /**
     * value: "TooManyComponents"
     * @const
     */
    "TooManyComponents": "TooManyComponents",
    /**
     * value: "TooFewRepetitions"
     * @const
     */
    "TooFewRepetitions": "TooFewRepetitions"  };


  return exports;
}));


