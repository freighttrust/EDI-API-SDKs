/* 
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing TranslateApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class TranslateApiTests
    {
        private TranslateApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new TranslateApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of TranslateApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' TranslateApi
            //Assert.IsInstanceOfType(typeof(TranslateApi), instance, "instance is a TranslateApi");
        }

        
        /// <summary>
        /// Test TranslateEdifact
        /// </summary>
        [Test]
        public void TranslateEdifactTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //System.IO.Stream ediFile = null;
            //string readMode = null;
            //bool? validate = null;
            //string accept = null;
            //string charSet = null;
            //bool? continueOnError = null;
            //bool? transactionOnly = null;
            //string dataElementSeparator = null;
            //string componentDataElementSeparator = null;
            //string segmentSeparator = null;
            //string repetitionSeparator = null;
            //string escapeCharacter = null;
            //string decimalPoint = null;
            //string eancomSyntax = null;
            //bool? skipTrailerValidation = null;
            //string syntaxSet = null;
            //var response = instance.TranslateEdifact(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, escapeCharacter, decimalPoint, eancomSyntax, skipTrailerValidation, syntaxSet);
            //Assert.IsInstanceOf<List<EdiFabricWebApiModelsEdifactInterchange>> (response, "response is List<EdiFabricWebApiModelsEdifactInterchange>");
        }
        
        /// <summary>
        /// Test TranslateX12
        /// </summary>
        [Test]
        public void TranslateX12Test()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //System.IO.Stream ediFile = null;
            //string readMode = null;
            //bool? validate = null;
            //string accept = null;
            //string charSet = null;
            //bool? continueOnError = null;
            //bool? transactionOnly = null;
            //string dataElementSeparator = null;
            //string componentDataElementSeparator = null;
            //string segmentSeparator = null;
            //string repetitionSeparator = null;
            //bool? skipTrailerValidation = null;
            //string syntaxSet = null;
            //var response = instance.TranslateX12(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, skipTrailerValidation, syntaxSet);
            //Assert.IsInstanceOf<List<EdiFabricWebApiModelsX12Interchange>> (response, "response is List<EdiFabricWebApiModelsX12Interchange>");
        }
        
    }

}
