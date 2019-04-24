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
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdifactUNB', 'model/EdiFabricCoreModelEdiEdifactUNZ', 'model/EdiFabricCoreModelEdiErrorContextsReaderErrorContext', 'model/EdiFabricWebApiModelsEdifactGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EdiFabricCoreModelEdiEdifactUNB'), require('./EdiFabricCoreModelEdiEdifactUNZ'), require('./EdiFabricCoreModelEdiErrorContextsReaderErrorContext'), require('./EdiFabricWebApiModelsEdifactGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.EdiFabricApi) {
      root.EdiFabricApi = {};
    }
    root.EdiFabricApi.EdiFabricWebApiModelsEdifactInterchange = factory(root.EdiFabricApi.ApiClient, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB, root.EdiFabricApi.EdiFabricCoreModelEdiEdifactUNZ, root.EdiFabricApi.EdiFabricCoreModelEdiErrorContextsReaderErrorContext, root.EdiFabricApi.EdiFabricWebApiModelsEdifactGroup);
  }
}(this, function(ApiClient, EdiFabricCoreModelEdiEdifactUNB, EdiFabricCoreModelEdiEdifactUNZ, EdiFabricCoreModelEdiErrorContextsReaderErrorContext, EdiFabricWebApiModelsEdifactGroup) {
  'use strict';




  /**
   * The EdiFabricWebApiModelsEdifactInterchange model module.
   * @module model/EdiFabricWebApiModelsEdifactInterchange
   * @version v1
   */

  /**
   * Constructs a new <code>EdiFabricWebApiModelsEdifactInterchange</code>.
   * @alias module:model/EdiFabricWebApiModelsEdifactInterchange
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EdiFabricWebApiModelsEdifactInterchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiFabricWebApiModelsEdifactInterchange} obj Optional instance to populate.
   * @return {module:model/EdiFabricWebApiModelsEdifactInterchange} The populated <code>EdiFabricWebApiModelsEdifactInterchange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('unb')) {
        obj['unb'] = EdiFabricCoreModelEdiEdifactUNB.constructFromObject(data['unb']);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [EdiFabricWebApiModelsEdifactGroup]);
      }
      if (data.hasOwnProperty('unzTrailers')) {
        obj['unzTrailers'] = ApiClient.convertToType(data['unzTrailers'], [EdiFabricCoreModelEdiEdifactUNZ]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [EdiFabricCoreModelEdiErrorContextsReaderErrorContext]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EdiFabricCoreModelEdiEdifactUNB} unb
   */
  exports.prototype['unb'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricWebApiModelsEdifactGroup>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiEdifactUNZ>} unzTrailers
   */
  exports.prototype['unzTrailers'] = undefined;
  /**
   * @member {Array.<module:model/EdiFabricCoreModelEdiErrorContextsReaderErrorContext>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));

