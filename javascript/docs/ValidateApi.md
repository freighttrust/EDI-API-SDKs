# EdiFabricApi.ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateGs**](ValidateApi.md#validateGs) | **POST** /validate/gs | 
[**validateIsa**](ValidateApi.md#validateIsa) | **POST** /validate/isa | 
[**validateTransactions**](ValidateApi.md#validateTransactions) | **POST** /validate/transactions | 
[**validateUnb**](ValidateApi.md#validateUnb) | **POST** /validate/unb | 
[**validateUng**](ValidateApi.md#validateUng) | **POST** /validate/ung | 


<a name="validateGs"></a>
# **validateGs**
> [EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validateGs(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.ValidateApi();

var opts = { 
  'gs': new EdiFabricApi.EdiFabricCoreModelEdiX12GS() // EdiFabricCoreModelEdiX12GS | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateGs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md)|  | [optional] 

### Return type

[**[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateIsa"></a>
# **validateIsa**
> [EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validateIsa(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.ValidateApi();

var opts = { 
  'isa': new EdiFabricApi.EdiFabricCoreModelEdiX12ISA() // EdiFabricCoreModelEdiX12ISA | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateIsa(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md)|  | [optional] 

### Return type

[**[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateTransactions"></a>
# **validateTransactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext validateTransactions(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.ValidateApi();

var opts = { 
  'validateEdi': new EdiFabricApi.EdiFabricWebApiModelsValidateEdi() // EdiFabricWebApiModelsValidateEdi | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateTransactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateEdi** | [**EdiFabricWebApiModelsValidateEdi**](EdiFabricWebApiModelsValidateEdi.md)|  | [optional] 

### Return type

[**EdiFabricCoreModelEdiErrorContextsMessageErrorContext**](EdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateUnb"></a>
# **validateUnb**
> [EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validateUnb(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.ValidateApi();

var opts = { 
  'unb': new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNB() // EdiFabricCoreModelEdiEdifactUNB | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateUnb(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional] 

### Return type

[**[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateUng"></a>
# **validateUng**
> [EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validateUng(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.ValidateApi();

var opts = { 
  'ung': new EdiFabricApi.EdiFabricCoreModelEdiEdifactUNG() // EdiFabricCoreModelEdiEdifactUNG | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateUng(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional] 

### Return type

[**[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

