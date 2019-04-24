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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EdiFabricApi);
  }
}(this, function(expect, EdiFabricApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EdiFabricCoreModelEdiEdifactUNB', function() {
    it('should create an instance of EdiFabricCoreModelEdiEdifactUNB', function() {
      // uncomment below and update the code to test EdiFabricCoreModelEdiEdifactUNB
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be.a(EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB);
    });

    it('should have the property syntaxidentifieR1 (base name: "syntaxidentifieR_1")', function() {
      // uncomment below and update the code to test the property syntaxidentifieR1
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property interchangesendeR2 (base name: "interchangesendeR_2")', function() {
      // uncomment below and update the code to test the property interchangesendeR2
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property interchangerecipienT3 (base name: "interchangerecipienT_3")', function() {
      // uncomment below and update the code to test the property interchangerecipienT3
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property dateandtimeofpreparatioN4 (base name: "dateandtimeofpreparatioN_4")', function() {
      // uncomment below and update the code to test the property dateandtimeofpreparatioN4
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property interchangeControlReference5 (base name: "interchangeControlReference_5")', function() {
      // uncomment below and update the code to test the property interchangeControlReference5
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property recipientsreferencepassworddetailS6 (base name: "recipientsreferencepassworddetailS_6")', function() {
      // uncomment below and update the code to test the property recipientsreferencepassworddetailS6
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property applicationReference7 (base name: "applicationReference_7")', function() {
      // uncomment below and update the code to test the property applicationReference7
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property processingPriorityCode8 (base name: "processingPriorityCode_8")', function() {
      // uncomment below and update the code to test the property processingPriorityCode8
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property acknowledgementRequest9 (base name: "acknowledgementRequest_9")', function() {
      // uncomment below and update the code to test the property acknowledgementRequest9
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property interchangeAgreementIdentifier10 (base name: "interchangeAgreementIdentifier_10")', function() {
      // uncomment below and update the code to test the property interchangeAgreementIdentifier10
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

    it('should have the property testIndicator11 (base name: "testIndicator_11")', function() {
      // uncomment below and update the code to test the property testIndicator11
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB();
      //expect(instance).to.be();
    });

  });

}));
