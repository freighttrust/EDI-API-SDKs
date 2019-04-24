# ValidateApi

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
> List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validateGs(gs)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ValidateApi;


ValidateApi apiInstance = new ValidateApi();
EdiFabricCoreModelEdiX12GS gs = new EdiFabricCoreModelEdiX12GS(); // EdiFabricCoreModelEdiX12GS | 
try {
    List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> result = apiInstance.validateGs(gs);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ValidateApi#validateGs");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md)|  | [optional]

### Return type

[**List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateIsa"></a>
# **validateIsa**
> List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validateIsa(isa)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ValidateApi;


ValidateApi apiInstance = new ValidateApi();
EdiFabricCoreModelEdiX12ISA isa = new EdiFabricCoreModelEdiX12ISA(); // EdiFabricCoreModelEdiX12ISA | 
try {
    List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> result = apiInstance.validateIsa(isa);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ValidateApi#validateIsa");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md)|  | [optional]

### Return type

[**List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateTransactions"></a>
# **validateTransactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext validateTransactions(validateEdi)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ValidateApi;


ValidateApi apiInstance = new ValidateApi();
EdiFabricWebApiModelsValidateEdi validateEdi = new EdiFabricWebApiModelsValidateEdi(); // EdiFabricWebApiModelsValidateEdi | 
try {
    EdiFabricCoreModelEdiErrorContextsMessageErrorContext result = apiInstance.validateTransactions(validateEdi);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ValidateApi#validateTransactions");
    e.printStackTrace();
}
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
> List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validateUnb(unb)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ValidateApi;


ValidateApi apiInstance = new ValidateApi();
EdiFabricCoreModelEdiEdifactUNB unb = new EdiFabricCoreModelEdiEdifactUNB(); // EdiFabricCoreModelEdiEdifactUNB | 
try {
    List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> result = apiInstance.validateUnb(unb);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ValidateApi#validateUnb");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional]

### Return type

[**List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="validateUng"></a>
# **validateUng**
> List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validateUng(ung)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ValidateApi;


ValidateApi apiInstance = new ValidateApi();
EdiFabricCoreModelEdiEdifactUNG ung = new EdiFabricCoreModelEdiEdifactUNG(); // EdiFabricCoreModelEdiEdifactUNG | 
try {
    List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> result = apiInstance.validateUng(ung);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ValidateApi#validateUng");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional]

### Return type

[**List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

