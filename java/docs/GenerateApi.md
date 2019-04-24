# GenerateApi

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
> File generateEdifactGroup(generateEdifactGroup)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateEdifactGroup generateEdifactGroup = new EdiFabricWebApiModelsGenerateEdifactGroup(); // EdiFabricWebApiModelsGenerateEdifactGroup | 
try {
    File result = apiInstance.generateEdifactGroup(generateEdifactGroup);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateEdifactGroup");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactGroup** | [**EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateEdifactInterchange"></a>
# **generateEdifactInterchange**
> File generateEdifactInterchange(generateEdifactInterchange)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateEdifactInterchange generateEdifactInterchange = new EdiFabricWebApiModelsGenerateEdifactInterchange(); // EdiFabricWebApiModelsGenerateEdifactInterchange | 
try {
    File result = apiInstance.generateEdifactInterchange(generateEdifactInterchange);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateEdifactInterchange");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactInterchange** | [**EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateEdifactTransactions"></a>
# **generateEdifactTransactions**
> File generateEdifactTransactions(generateEdifactTransactions)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateEdifactTransactions generateEdifactTransactions = new EdiFabricWebApiModelsGenerateEdifactTransactions(); // EdiFabricWebApiModelsGenerateEdifactTransactions | 
try {
    File result = apiInstance.generateEdifactTransactions(generateEdifactTransactions);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateEdifactTransactions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactTransactions** | [**EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateGs"></a>
# **generateGs**
> File generateGs(generateGs)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateGs generateGs = new EdiFabricWebApiModelsGenerateGs(); // EdiFabricWebApiModelsGenerateGs | 
try {
    File result = apiInstance.generateGs(generateGs);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateGs");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateGs** | [**EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateIsa"></a>
# **generateIsa**
> File generateIsa(generateIsa)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateIsa generateIsa = new EdiFabricWebApiModelsGenerateIsa(); // EdiFabricWebApiModelsGenerateIsa | 
try {
    File result = apiInstance.generateIsa(generateIsa);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateIsa");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateIsa** | [**EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateUnb"></a>
# **generateUnb**
> File generateUnb(generateUnb)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateUnb generateUnb = new EdiFabricWebApiModelsGenerateUnb(); // EdiFabricWebApiModelsGenerateUnb | 
try {
    File result = apiInstance.generateUnb(generateUnb);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateUnb");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnb** | [**EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateUng"></a>
# **generateUng**
> File generateUng(generateUng)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateUng generateUng = new EdiFabricWebApiModelsGenerateUng(); // EdiFabricWebApiModelsGenerateUng | 
try {
    File result = apiInstance.generateUng(generateUng);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateUng");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUng** | [**EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Group"></a>
# **generateX12Group**
> File generateX12Group(generateX12Group)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateX12Group generateX12Group = new EdiFabricWebApiModelsGenerateX12Group(); // EdiFabricWebApiModelsGenerateX12Group | 
try {
    File result = apiInstance.generateX12Group(generateX12Group);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateX12Group");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Group** | [**EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Interchange"></a>
# **generateX12Interchange**
> File generateX12Interchange(generateX12Interchange)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateX12Interchange generateX12Interchange = new EdiFabricWebApiModelsGenerateX12Interchange(); // EdiFabricWebApiModelsGenerateX12Interchange | 
try {
    File result = apiInstance.generateX12Interchange(generateX12Interchange);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateX12Interchange");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Interchange** | [**EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

<a name="generateX12Transactions"></a>
# **generateX12Transactions**
> File generateX12Transactions(generateX12Transactions)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GenerateApi;


GenerateApi apiInstance = new GenerateApi();
EdiFabricWebApiModelsGenerateX12Transactions generateX12Transactions = new EdiFabricWebApiModelsGenerateX12Transactions(); // EdiFabricWebApiModelsGenerateX12Transactions | 
try {
    File result = apiInstance.generateX12Transactions(generateX12Transactions);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GenerateApi#generateX12Transactions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Transactions** | [**EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

