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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiErrorContextsSegmentErrorContext'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiErrorContextsSegmentErrorContext);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiErrorContextsSegmentErrorContext) {
  'use strict';




  /**
   * The EdiFabricCoreModelEdiErrorContextsMessageErrorContext model module.
   * @module model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricCoreModelEdiErrorContextsMessageErrorContext</code>.
   * @alias module:model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>EdiFabricCoreModelEdiErrorContextsMessageErrorContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext} obj Optional instance to populate.
   * @return {module:model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext} The populated <code>EdiFabricCoreModelEdiErrorContextsMessageErrorContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('controlNumber')) {
        obj['controlNumber'] = ApiClient.convertToType(data['controlNumber'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]);
      }
      if (data.hasOwnProperty('hasErrors')) {
        obj['hasErrors'] = ApiClient.convertToType(data['hasErrors'], 'Boolean');
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
   * @member {String} controlNumber
   */
  exports.prototype['controlNumber'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext.CodesEnum>} codes
   */
  exports.prototype['codes'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {Boolean} hasErrors
   */
  exports.prototype['hasErrors'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>codes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodesEnum = {
    /**
     * value: "TransactionSetNotSupported"
     * @const
     */
    "TransactionSetNotSupported": "TransactionSetNotSupported",
    /**
     * value: "MessageTrailerMissing"
     * @const
     */
    "MessageTrailerMissing": "MessageTrailerMissing",
    /**
     * value: "ControlNumberNotMatching"
     * @const
     */
    "ControlNumberNotMatching": "ControlNumberNotMatching",
    /**
     * value: "SegmentsCountNotMatching"
     * @const
     */
    "SegmentsCountNotMatching": "SegmentsCountNotMatching",
    /**
     * value: "MessageWithErrors"
     * @const
     */
    "MessageWithErrors": "MessageWithErrors",
    /**
     * value: "MissingOrInvalidTransactionSet"
     * @const
     */
    "MissingOrInvalidTransactionSet": "MissingOrInvalidTransactionSet",
    /**
     * value: "MissingOrInvalidControlNumber"
     * @const
     */
    "MissingOrInvalidControlNumber": "MissingOrInvalidControlNumber",
    /**
     * value: "DuplicateMessageControlNumber"
     * @const
     */
    "DuplicateMessageControlNumber": "DuplicateMessageControlNumber",
    /**
     * value: "FunctionalGroupVersionNotSupported"
     * @const
     */
    "FunctionalGroupVersionNotSupported": "FunctionalGroupVersionNotSupported"  };


  return exports;
}));


