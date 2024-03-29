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
    instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
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

  describe('EdiFabricWebApiModelsX12Interchange', function() {
    it('should create an instance of EdiFabricWebApiModelsX12Interchange', function() {
      // uncomment below and update the code to test EdiFabricWebApiModelsX12Interchange
      //var instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
      //expect(instance).to.be.a(EdiFabricApi.EdiFabricWebApiModelsX12Interchange);
    });

    it('should have the property isa (base name: "isa")', function() {
      // uncomment below and update the code to test the property isa
      //var instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
      //expect(instance).to.be();
    });

    it('should have the property ieaTrailers (base name: "ieaTrailers")', function() {
      // uncomment below and update the code to test the property ieaTrailers
      //var instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new EdiFabricApi.EdiFabricWebApiModelsX12Interchange();
      //expect(instance).to.be();
    });

  });

}));
