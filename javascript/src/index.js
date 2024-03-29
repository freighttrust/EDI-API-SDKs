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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EdiFabricCoreModelEdiEdiMessage', 'model/EdiFabricCoreModelEdiEdifactS001', 'model/EdiFabricCoreModelEdiEdifactS002', 'model/EdiFabricCoreModelEdiEdifactS003', 'model/EdiFabricCoreModelEdiEdifactS004', 'model/EdiFabricCoreModelEdiEdifactS005', 'model/EdiFabricCoreModelEdiEdifactS006', 'model/EdiFabricCoreModelEdiEdifactS007', 'model/EdiFabricCoreModelEdiEdifactS008', 'model/EdiFabricCoreModelEdiEdifactUNB', 'model/EdiFabricCoreModelEdiEdifactUNE', 'model/EdiFabricCoreModelEdiEdifactUNG', 'model/EdiFabricCoreModelEdiEdifactUNZ', 'model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext', 'model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext', 'model/EdiFabricCoreModelEdiErrorContextsReaderErrorContext', 'model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext', 'model/EdiFabricCoreModelEdiX12GE', 'model/EdiFabricCoreModelEdiX12GS', 'model/EdiFabricCoreModelEdiX12IEA', 'model/EdiFabricCoreModelEdiX12ISA', 'model/EdiFabricWebApiModelsEdifactAcknowledgment', 'model/EdiFabricWebApiModelsEdifactGroup', 'model/EdiFabricWebApiModelsEdifactInterchange', 'model/EdiFabricWebApiModelsErrorDetails', 'model/EdiFabricWebApiModelsGenerateEdifactGroup', 'model/EdiFabricWebApiModelsGenerateEdifactInterchange', 'model/EdiFabricWebApiModelsGenerateEdifactTransactions', 'model/EdiFabricWebApiModelsGenerateGs', 'model/EdiFabricWebApiModelsGenerateIsa', 'model/EdiFabricWebApiModelsGenerateSettings', 'model/EdiFabricWebApiModelsGenerateUnb', 'model/EdiFabricWebApiModelsGenerateUng', 'model/EdiFabricWebApiModelsGenerateX12Group', 'model/EdiFabricWebApiModelsGenerateX12Interchange', 'model/EdiFabricWebApiModelsGenerateX12Transactions', 'model/EdiFabricWebApiModelsValidateEdi', 'model/EdiFabricWebApiModelsValidateSettings', 'model/EdiFabricWebApiModelsX12Acknowledgment', 'model/EdiFabricWebApiModelsX12Group', 'model/EdiFabricWebApiModelsX12Interchange', 'api/AcknowledgeApi', 'api/GenerateApi', 'api/TranslateApi', 'api/ValidateApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/EdiFabricCoreModelEdiEdiMessage'), require('./model/EdiFabricCoreModelEdiEdifactS001'), require('./model/EdiFabricCoreModelEdiEdifactS002'), require('./model/EdiFabricCoreModelEdiEdifactS003'), require('./model/EdiFabricCoreModelEdiEdifactS004'), require('./model/EdiFabricCoreModelEdiEdifactS005'), require('./model/EdiFabricCoreModelEdiEdifactS006'), require('./model/EdiFabricCoreModelEdiEdifactS007'), require('./model/EdiFabricCoreModelEdiEdifactS008'), require('./model/EdiFabricCoreModelEdiEdifactUNB'), require('./model/EdiFabricCoreModelEdiEdifactUNE'), require('./model/EdiFabricCoreModelEdiEdifactUNG'), require('./model/EdiFabricCoreModelEdiEdifactUNZ'), require('./model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext'), require('./model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext'), require('./model/EdiFabricCoreModelEdiErrorContextsReaderErrorContext'), require('./model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext'), require('./model/EdiFabricCoreModelEdiX12GE'), require('./model/EdiFabricCoreModelEdiX12GS'), require('./model/EdiFabricCoreModelEdiX12IEA'), require('./model/EdiFabricCoreModelEdiX12ISA'), require('./model/EdiFabricWebApiModelsEdifactAcknowledgment'), require('./model/EdiFabricWebApiModelsEdifactGroup'), require('./model/EdiFabricWebApiModelsEdifactInterchange'), require('./model/EdiFabricWebApiModelsErrorDetails'), require('./model/EdiFabricWebApiModelsGenerateEdifactGroup'), require('./model/EdiFabricWebApiModelsGenerateEdifactInterchange'), require('./model/EdiFabricWebApiModelsGenerateEdifactTransactions'), require('./model/EdiFabricWebApiModelsGenerateGs'), require('./model/EdiFabricWebApiModelsGenerateIsa'), require('./model/EdiFabricWebApiModelsGenerateSettings'), require('./model/EdiFabricWebApiModelsGenerateUnb'), require('./model/EdiFabricWebApiModelsGenerateUng'), require('./model/EdiFabricWebApiModelsGenerateX12Group'), require('./model/EdiFabricWebApiModelsGenerateX12Interchange'), require('./model/EdiFabricWebApiModelsGenerateX12Transactions'), require('./model/EdiFabricWebApiModelsValidateEdi'), require('./model/EdiFabricWebApiModelsValidateSettings'), require('./model/EdiFabricWebApiModelsX12Acknowledgment'), require('./model/EdiFabricWebApiModelsX12Group'), require('./model/EdiFabricWebApiModelsX12Interchange'), require('./api/AcknowledgeApi'), require('./api/GenerateApi'), require('./api/TranslateApi'), require('./api/ValidateApi'));
  }
}(function(ApiClient, EdiFabricCoreModelEdiEdiMessage, EdiFabricCoreModelEdiEdifactS001, EdiFabricCoreModelEdiEdifactS002, EdiFabricCoreModelEdiEdifactS003, EdiFabricCoreModelEdiEdifactS004, EdiFabricCoreModelEdiEdifactS005, EdiFabricCoreModelEdiEdifactS006, EdiFabricCoreModelEdiEdifactS007, EdiFabricCoreModelEdiEdifactS008, EdiFabricCoreModelEdiEdifactUNB, EdiFabricCoreModelEdiEdifactUNE, EdiFabricCoreModelEdiEdifactUNG, EdiFabricCoreModelEdiEdifactUNZ, EdiFabricCoreModelEdiErrorContextsDataElementErrorContext, EdiFabricCoreModelEdiErrorContextsMessageErrorContext, EdiFabricCoreModelEdiErrorContextsReaderErrorContext, EdiFabricCoreModelEdiErrorContextsSegmentErrorContext, EdiFabricCoreModelEdiX12GE, EdiFabricCoreModelEdiX12GS, EdiFabricCoreModelEdiX12IEA, EdiFabricCoreModelEdiX12ISA, EdiFabricWebApiModelsEdifactAcknowledgment, EdiFabricWebApiModelsEdifactGroup, EdiFabricWebApiModelsEdifactInterchange, EdiFabricWebApiModelsErrorDetails, EdiFabricWebApiModelsGenerateEdifactGroup, EdiFabricWebApiModelsGenerateEdifactInterchange, EdiFabricWebApiModelsGenerateEdifactTransactions, EdiFabricWebApiModelsGenerateGs, EdiFabricWebApiModelsGenerateIsa, EdiFabricWebApiModelsGenerateSettings, EdiFabricWebApiModelsGenerateUnb, EdiFabricWebApiModelsGenerateUng, EdiFabricWebApiModelsGenerateX12Group, EdiFabricWebApiModelsGenerateX12Interchange, EdiFabricWebApiModelsGenerateX12Transactions, EdiFabricWebApiModelsValidateEdi, EdiFabricWebApiModelsValidateSettings, EdiFabricWebApiModelsX12Acknowledgment, EdiFabricWebApiModelsX12Group, EdiFabricWebApiModelsX12Interchange, AcknowledgeApi, GenerateApi, TranslateApi, ValidateApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var EdiFabricApi = require('index'); // See note below*.
   * var xxxSvc = new EdiFabricApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new EdiFabricApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new EdiFabricApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new EdiFabricApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The EdiFabricCoreModelEdiEdiMessage model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdiMessage}
     */
    EdiFabricCoreModelEdiEdiMessage: EdiFabricCoreModelEdiEdiMessage,
    /**
     * The EdiFabricCoreModelEdiEdifactS001 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS001}
     */
    EdiFabricCoreModelEdiEdifactS001: EdiFabricCoreModelEdiEdifactS001,
    /**
     * The EdiFabricCoreModelEdiEdifactS002 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS002}
     */
    EdiFabricCoreModelEdiEdifactS002: EdiFabricCoreModelEdiEdifactS002,
    /**
     * The EdiFabricCoreModelEdiEdifactS003 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS003}
     */
    EdiFabricCoreModelEdiEdifactS003: EdiFabricCoreModelEdiEdifactS003,
    /**
     * The EdiFabricCoreModelEdiEdifactS004 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS004}
     */
    EdiFabricCoreModelEdiEdifactS004: EdiFabricCoreModelEdiEdifactS004,
    /**
     * The EdiFabricCoreModelEdiEdifactS005 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS005}
     */
    EdiFabricCoreModelEdiEdifactS005: EdiFabricCoreModelEdiEdifactS005,
    /**
     * The EdiFabricCoreModelEdiEdifactS006 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS006}
     */
    EdiFabricCoreModelEdiEdifactS006: EdiFabricCoreModelEdiEdifactS006,
    /**
     * The EdiFabricCoreModelEdiEdifactS007 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS007}
     */
    EdiFabricCoreModelEdiEdifactS007: EdiFabricCoreModelEdiEdifactS007,
    /**
     * The EdiFabricCoreModelEdiEdifactS008 model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactS008}
     */
    EdiFabricCoreModelEdiEdifactS008: EdiFabricCoreModelEdiEdifactS008,
    /**
     * The EdiFabricCoreModelEdiEdifactUNB model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactUNB}
     */
    EdiFabricCoreModelEdiEdifactUNB: EdiFabricCoreModelEdiEdifactUNB,
    /**
     * The EdiFabricCoreModelEdiEdifactUNE model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactUNE}
     */
    EdiFabricCoreModelEdiEdifactUNE: EdiFabricCoreModelEdiEdifactUNE,
    /**
     * The EdiFabricCoreModelEdiEdifactUNG model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactUNG}
     */
    EdiFabricCoreModelEdiEdifactUNG: EdiFabricCoreModelEdiEdifactUNG,
    /**
     * The EdiFabricCoreModelEdiEdifactUNZ model constructor.
     * @property {module:model/EdiFabricCoreModelEdiEdifactUNZ}
     */
    EdiFabricCoreModelEdiEdifactUNZ: EdiFabricCoreModelEdiEdifactUNZ,
    /**
     * The EdiFabricCoreModelEdiErrorContextsDataElementErrorContext model constructor.
     * @property {module:model/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext}
     */
    EdiFabricCoreModelEdiErrorContextsDataElementErrorContext: EdiFabricCoreModelEdiErrorContextsDataElementErrorContext,
    /**
     * The EdiFabricCoreModelEdiErrorContextsMessageErrorContext model constructor.
     * @property {module:model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext}
     */
    EdiFabricCoreModelEdiErrorContextsMessageErrorContext: EdiFabricCoreModelEdiErrorContextsMessageErrorContext,
    /**
     * The EdiFabricCoreModelEdiErrorContextsReaderErrorContext model constructor.
     * @property {module:model/EdiFabricCoreModelEdiErrorContextsReaderErrorContext}
     */
    EdiFabricCoreModelEdiErrorContextsReaderErrorContext: EdiFabricCoreModelEdiErrorContextsReaderErrorContext,
    /**
     * The EdiFabricCoreModelEdiErrorContextsSegmentErrorContext model constructor.
     * @property {module:model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext}
     */
    EdiFabricCoreModelEdiErrorContextsSegmentErrorContext: EdiFabricCoreModelEdiErrorContextsSegmentErrorContext,
    /**
     * The EdiFabricCoreModelEdiX12GE model constructor.
     * @property {module:model/EdiFabricCoreModelEdiX12GE}
     */
    EdiFabricCoreModelEdiX12GE: EdiFabricCoreModelEdiX12GE,
    /**
     * The EdiFabricCoreModelEdiX12GS model constructor.
     * @property {module:model/EdiFabricCoreModelEdiX12GS}
     */
    EdiFabricCoreModelEdiX12GS: EdiFabricCoreModelEdiX12GS,
    /**
     * The EdiFabricCoreModelEdiX12IEA model constructor.
     * @property {module:model/EdiFabricCoreModelEdiX12IEA}
     */
    EdiFabricCoreModelEdiX12IEA: EdiFabricCoreModelEdiX12IEA,
    /**
     * The EdiFabricCoreModelEdiX12ISA model constructor.
     * @property {module:model/EdiFabricCoreModelEdiX12ISA}
     */
    EdiFabricCoreModelEdiX12ISA: EdiFabricCoreModelEdiX12ISA,
    /**
     * The EdiFabricWebApiModelsEdifactAcknowledgment model constructor.
     * @property {module:model/EdiFabricWebApiModelsEdifactAcknowledgment}
     */
    EdiFabricWebApiModelsEdifactAcknowledgment: EdiFabricWebApiModelsEdifactAcknowledgment,
    /**
     * The EdiFabricWebApiModelsEdifactGroup model constructor.
     * @property {module:model/EdiFabricWebApiModelsEdifactGroup}
     */
    EdiFabricWebApiModelsEdifactGroup: EdiFabricWebApiModelsEdifactGroup,
    /**
     * The EdiFabricWebApiModelsEdifactInterchange model constructor.
     * @property {module:model/EdiFabricWebApiModelsEdifactInterchange}
     */
    EdiFabricWebApiModelsEdifactInterchange: EdiFabricWebApiModelsEdifactInterchange,
    /**
     * The EdiFabricWebApiModelsErrorDetails model constructor.
     * @property {module:model/EdiFabricWebApiModelsErrorDetails}
     */
    EdiFabricWebApiModelsErrorDetails: EdiFabricWebApiModelsErrorDetails,
    /**
     * The EdiFabricWebApiModelsGenerateEdifactGroup model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateEdifactGroup}
     */
    EdiFabricWebApiModelsGenerateEdifactGroup: EdiFabricWebApiModelsGenerateEdifactGroup,
    /**
     * The EdiFabricWebApiModelsGenerateEdifactInterchange model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateEdifactInterchange}
     */
    EdiFabricWebApiModelsGenerateEdifactInterchange: EdiFabricWebApiModelsGenerateEdifactInterchange,
    /**
     * The EdiFabricWebApiModelsGenerateEdifactTransactions model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateEdifactTransactions}
     */
    EdiFabricWebApiModelsGenerateEdifactTransactions: EdiFabricWebApiModelsGenerateEdifactTransactions,
    /**
     * The EdiFabricWebApiModelsGenerateGs model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateGs}
     */
    EdiFabricWebApiModelsGenerateGs: EdiFabricWebApiModelsGenerateGs,
    /**
     * The EdiFabricWebApiModelsGenerateIsa model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateIsa}
     */
    EdiFabricWebApiModelsGenerateIsa: EdiFabricWebApiModelsGenerateIsa,
    /**
     * The EdiFabricWebApiModelsGenerateSettings model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateSettings}
     */
    EdiFabricWebApiModelsGenerateSettings: EdiFabricWebApiModelsGenerateSettings,
    /**
     * The EdiFabricWebApiModelsGenerateUnb model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateUnb}
     */
    EdiFabricWebApiModelsGenerateUnb: EdiFabricWebApiModelsGenerateUnb,
    /**
     * The EdiFabricWebApiModelsGenerateUng model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateUng}
     */
    EdiFabricWebApiModelsGenerateUng: EdiFabricWebApiModelsGenerateUng,
    /**
     * The EdiFabricWebApiModelsGenerateX12Group model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateX12Group}
     */
    EdiFabricWebApiModelsGenerateX12Group: EdiFabricWebApiModelsGenerateX12Group,
    /**
     * The EdiFabricWebApiModelsGenerateX12Interchange model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateX12Interchange}
     */
    EdiFabricWebApiModelsGenerateX12Interchange: EdiFabricWebApiModelsGenerateX12Interchange,
    /**
     * The EdiFabricWebApiModelsGenerateX12Transactions model constructor.
     * @property {module:model/EdiFabricWebApiModelsGenerateX12Transactions}
     */
    EdiFabricWebApiModelsGenerateX12Transactions: EdiFabricWebApiModelsGenerateX12Transactions,
    /**
     * The EdiFabricWebApiModelsValidateEdi model constructor.
     * @property {module:model/EdiFabricWebApiModelsValidateEdi}
     */
    EdiFabricWebApiModelsValidateEdi: EdiFabricWebApiModelsValidateEdi,
    /**
     * The EdiFabricWebApiModelsValidateSettings model constructor.
     * @property {module:model/EdiFabricWebApiModelsValidateSettings}
     */
    EdiFabricWebApiModelsValidateSettings: EdiFabricWebApiModelsValidateSettings,
    /**
     * The EdiFabricWebApiModelsX12Acknowledgment model constructor.
     * @property {module:model/EdiFabricWebApiModelsX12Acknowledgment}
     */
    EdiFabricWebApiModelsX12Acknowledgment: EdiFabricWebApiModelsX12Acknowledgment,
    /**
     * The EdiFabricWebApiModelsX12Group model constructor.
     * @property {module:model/EdiFabricWebApiModelsX12Group}
     */
    EdiFabricWebApiModelsX12Group: EdiFabricWebApiModelsX12Group,
    /**
     * The EdiFabricWebApiModelsX12Interchange model constructor.
     * @property {module:model/EdiFabricWebApiModelsX12Interchange}
     */
    EdiFabricWebApiModelsX12Interchange: EdiFabricWebApiModelsX12Interchange,
    /**
     * The AcknowledgeApi service constructor.
     * @property {module:api/AcknowledgeApi}
     */
    AcknowledgeApi: AcknowledgeApi,
    /**
     * The GenerateApi service constructor.
     * @property {module:api/GenerateApi}
     */
    GenerateApi: GenerateApi,
    /**
     * The TranslateApi service constructor.
     * @property {module:api/TranslateApi}
     */
    TranslateApi: TranslateApi,
    /**
     * The ValidateApi service constructor.
     * @property {module:api/ValidateApi}
     */
    ValidateApi: ValidateApi
  };

  return exports;
}));
