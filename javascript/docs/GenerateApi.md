# EdiFabricApi.GenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateEdifactGroup**](GenerateApi.md#generateEdifactGroup) | **POST** /generate/edifact-group | 
[**generateEdifactInterchange**](GenerateApi.md#generateEdifactInterchange) | **POST** /generate/edifact-interchange | 
[**generateEdifactTransactions**](GenerateApi.md#generateEdifactTransactions) | **POST** /generate/edifact-transactions | 
[**generateGs**](GenerateApi.md#generateGs) | **POST** /generate/gs | 
[**generateIsa**](GenerateApi.md#generateIsa) | **POST** /generate/isa | 
[**generateUnb**](GenerateApi.md#generateUnb) | **POST** /generate/unb | 
[**generateUng**](GenerateApi.md#generateUng) | **POST** /generate/ung | 
[**generateX12Group**](GenerateApi.md#generateX12Group) | **POST** /generate/x12-group | 
[**generateX12Interchange**](GenerateApi.md#generateX12Interchange) | **POST** /generate/x12-interchange | 
[**generateX12Transactions**](GenerateApi.md#generateX12Transactions) | **POST** /generate/x12-transactions | 


<a name="generateEdifactGroup"></a>
# **generateEdifactGroup**
> File generateEdifactGroup(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateEdifactGroup': new EdiFabricApi.EdiFabricWebApiModelsGenerateEdifactGroup() // EdiFabricWebApiModelsGenerateEdifactGroup | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEdifactGroup(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactGroup** | [**EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateEdifactInterchange"></a>
# **generateEdifactInterchange**
> File generateEdifactInterchange(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateEdifactInterchange': new EdiFabricApi.EdiFabricWebApiModelsGenerateEdifactInterchange() // EdiFabricWebApiModelsGenerateEdifactInterchange | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEdifactInterchange(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactInterchange** | [**EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateEdifactTransactions"></a>
# **generateEdifactTransactions**
> File generateEdifactTransactions(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateEdifactTransactions': new EdiFabricApi.EdiFabricWebApiModelsGenerateEdifactTransactions() // EdiFabricWebApiModelsGenerateEdifactTransactions | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEdifactTransactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactTransactions** | [**EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateGs"></a>
# **generateGs**
> File generateGs(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateGs': new EdiFabricApi.EdiFabricWebApiModelsGenerateGs() // EdiFabricWebApiModelsGenerateGs | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateGs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateGs** | [**EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateIsa"></a>
# **generateIsa**
> File generateIsa(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateIsa': new EdiFabricApi.EdiFabricWebApiModelsGenerateIsa() // EdiFabricWebApiModelsGenerateIsa | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateIsa(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateIsa** | [**EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateUnb"></a>
# **generateUnb**
> File generateUnb(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateUnb': new EdiFabricApi.EdiFabricWebApiModelsGenerateUnb() // EdiFabricWebApiModelsGenerateUnb | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateUnb(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnb** | [**EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateUng"></a>
# **generateUng**
> File generateUng(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateUng': new EdiFabricApi.EdiFabricWebApiModelsGenerateUng() // EdiFabricWebApiModelsGenerateUng | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateUng(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUng** | [**EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Group"></a>
# **generateX12Group**
> File generateX12Group(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateX12Group': new EdiFabricApi.EdiFabricWebApiModelsGenerateX12Group() // EdiFabricWebApiModelsGenerateX12Group | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateX12Group(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Group** | [**EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Interchange"></a>
# **generateX12Interchange**
> File generateX12Interchange(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateX12Interchange': new EdiFabricApi.EdiFabricWebApiModelsGenerateX12Interchange() // EdiFabricWebApiModelsGenerateX12Interchange | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateX12Interchange(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Interchange** | [**EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Transactions"></a>
# **generateX12Transactions**
> File generateX12Transactions(opts)



### Example
```javascript
var EdiFabricApi = require('edi_fabric_api');

var apiInstance = new EdiFabricApi.GenerateApi();

var opts = { 
  'generateX12Transactions': new EdiFabricApi.EdiFabricWebApiModelsGenerateX12Transactions() // EdiFabricWebApiModelsGenerateX12Transactions | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateX12Transactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Transactions** | [**EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

