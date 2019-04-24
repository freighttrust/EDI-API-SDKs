# EdiFabricApi.AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeEdifact**](AcknowledgeApi.md#acknowledgeEdifact) | **POST** /acknowledge/edifact | 
[**acknowledgeX12**](AcknowledgeApi.md#acknowledgeX12) | **POST** /acknowledge/x12 | 


<a name="acknowledgeEdifact"></a>
# **acknowledgeEdifact**
> [EdiFabricWebApiModelsEdifactAcknowledgment] acknowledgeEdifact(ediFile, opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.AcknowledgeApi();

var ediFile = "/path/to/file.txt"; // File | EDI file to translate

var opts = { 
  'readMode': "read_small", // String | 
  'accept': "application/json", // String | 
  'charSet': "utf-8", // String | 
  'continueOnError': true, // Boolean | 
  'skipTrailerValidation': false, // Boolean | 
  'decimalPoint': ".", // String | 
  'syntaxSet': "syntaxSet_example", // String | 
  'transactionDuplicate': false, // Boolean | 
  'groupDuplicate': false, // Boolean | 
  'technicalAck': "default", // String | 
  'generateForValidTransactions': false, // Boolean | 
  'allowPartial': false, // Boolean | 
  'transactionControlNumber': 1, // Number | 
  'eancomSyntax': "eancomSyntax_example", // String | 
  'includeTransactions': false // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acknowledgeEdifact(ediFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate | 
 **readMode** | **String**|  | [optional] [default to read_small]
 **accept** | **String**|  | [optional] [default to application/json]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **decimalPoint** | **String**|  | [optional] [default to .]
 **syntaxSet** | **String**|  | [optional] 
 **transactionDuplicate** | **Boolean**|  | [optional] [default to false]
 **groupDuplicate** | **Boolean**|  | [optional] [default to false]
 **technicalAck** | **String**|  | [optional] [default to default]
 **generateForValidTransactions** | **Boolean**|  | [optional] [default to false]
 **allowPartial** | **Boolean**|  | [optional] [default to false]
 **transactionControlNumber** | **Number**|  | [optional] [default to 1]
 **eancomSyntax** | **String**|  | [optional] 
 **includeTransactions** | **Boolean**|  | [optional] [default to false]

### Return type

[**[EdiFabricWebApiModelsEdifactAcknowledgment]**](EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

<a name="acknowledgeX12"></a>
# **acknowledgeX12**
> [EdiFabricWebApiModelsX12Acknowledgment] acknowledgeX12(ediFile, opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.AcknowledgeApi();

var ediFile = "/path/to/file.txt"; // File | EDI file to translate

var opts = { 
  'readMode': "read_small", // String | 
  'accept': "application/json", // String | 
  'charSet': "utf-8", // String | 
  'continueOnError': true, // Boolean | 
  'skipTrailerValidation': false, // Boolean | 
  'syntaxSet': "syntaxSet_example", // String | 
  'transactionDuplicate': false, // Boolean | 
  'groupDuplicate': false, // Boolean | 
  'technicalAck': "default", // String | 
  'generateForValidTransactions': false, // Boolean | 
  'allowPartial': false, // Boolean | 
  'transactionControlNumber': 1, // Number | 
  'ak901': "e", // String | 
  'ackVersion': "4010_997", // String | 
  'includeTransactions': false // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acknowledgeX12(ediFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate | 
 **readMode** | **String**|  | [optional] [default to read_small]
 **accept** | **String**|  | [optional] [default to application/json]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] 
 **transactionDuplicate** | **Boolean**|  | [optional] [default to false]
 **groupDuplicate** | **Boolean**|  | [optional] [default to false]
 **technicalAck** | **String**|  | [optional] [default to default]
 **generateForValidTransactions** | **Boolean**|  | [optional] [default to false]
 **allowPartial** | **Boolean**|  | [optional] [default to false]
 **transactionControlNumber** | **Number**|  | [optional] [default to 1]
 **ak901** | **String**|  | [optional] [default to e]
 **ackVersion** | **String**|  | [optional] [default to 4010_997]
 **includeTransactions** | **Boolean**|  | [optional] [default to false]

### Return type

[**[EdiFabricWebApiModelsX12Acknowledgment]**](EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

