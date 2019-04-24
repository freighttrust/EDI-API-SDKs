# EdiFabricApi.TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translateEdifact**](TranslateApi.md#translateEdifact) | **POST** /translate/edifact | 
[**translateX12**](TranslateApi.md#translateX12) | **POST** /translate/x12 | 


<a name="translateEdifact"></a>
# **translateEdifact**
> [EdiFabricWebApiModelsEdifactInterchange] translateEdifact(ediFile, opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.TranslateApi();

var ediFile = "/path/to/file.txt"; // File | EDI file to translate

var opts = { 
  'readMode': "read_small", // String | 
  'validate': false, // Boolean | 
  'accept': "application/json", // String | 
  'charSet': "utf-8", // String | 
  'continueOnError': true, // Boolean | 
  'transactionOnly': false, // Boolean | 
  'dataElementSeparator': "+", // String | 
  'componentDataElementSeparator': ":", // String | 
  'segmentSeparator': "'", // String | 
  'repetitionSeparator': "*", // String | 
  'escapeCharacter': "?", // String | 
  'decimalPoint': ".", // String | 
  'eancomSyntax': "eancomSyntax_example", // String | 
  'skipTrailerValidation': false, // Boolean | 
  'syntaxSet': "syntaxSet_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.translateEdifact(ediFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate | 
 **readMode** | **String**|  | [optional] [default to read_small]
 **validate** | **Boolean**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **transactionOnly** | **Boolean**|  | [optional] [default to false]
 **dataElementSeparator** | **String**|  | [optional] [default to +]
 **componentDataElementSeparator** | **String**|  | [optional] [default to :]
 **segmentSeparator** | **String**|  | [optional] [default to &#39;]
 **repetitionSeparator** | **String**|  | [optional] [default to *]
 **escapeCharacter** | **String**|  | [optional] [default to ?]
 **decimalPoint** | **String**|  | [optional] [default to .]
 **eancomSyntax** | **String**|  | [optional] 
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] 

### Return type

[**[EdiFabricWebApiModelsEdifactInterchange]**](EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

<a name="translateX12"></a>
# **translateX12**
> [EdiFabricWebApiModelsX12Interchange] translateX12(ediFile, opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.TranslateApi();

var ediFile = "/path/to/file.txt"; // File | EDI file to translate

var opts = { 
  'readMode': "read_small", // String | 
  'validate': false, // Boolean | 
  'accept': "application/json", // String | 
  'charSet': "utf-8", // String | 
  'continueOnError': true, // Boolean | 
  'transactionOnly': false, // Boolean | 
  'dataElementSeparator': "*", // String | 
  'componentDataElementSeparator': ">", // String | 
  'segmentSeparator': "~", // String | 
  'repetitionSeparator': "^", // String | 
  'skipTrailerValidation': false, // Boolean | 
  'syntaxSet': "syntaxSet_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.translateX12(ediFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate | 
 **readMode** | **String**|  | [optional] [default to read_small]
 **validate** | **Boolean**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **transactionOnly** | **Boolean**|  | [optional] [default to false]
 **dataElementSeparator** | **String**|  | [optional] [default to *]
 **componentDataElementSeparator** | **String**|  | [optional] [default to &gt;]
 **segmentSeparator** | **String**|  | [optional] [default to ~]
 **repetitionSeparator** | **String**|  | [optional] [default to ^]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] 

### Return type

[**[EdiFabricWebApiModelsX12Interchange]**](EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

