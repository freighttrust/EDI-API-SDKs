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
    instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
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

  describe('EdiFabricCoreModelEdiErrorContextsMessageErrorContext', function() {
    it('should create an instance of EdiFabricCoreModelEdiErrorContextsMessageErrorContext', function() {
      // uncomment below and update the code to test EdiFabricCoreModelEdiErrorContextsMessageErrorContext
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be.a(EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property controlNumber (base name: "controlNumber")', function() {
      // uncomment below and update the code to test the property controlNumber
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property codes (base name: "codes")', function() {
      // uncomment below and update the code to test the property codes
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property hasErrors (base name: "hasErrors")', function() {
      // uncomment below and update the code to test the property hasErrors
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext();
      //expect(instance).to.be();
    });

  });

}));
