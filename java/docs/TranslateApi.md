# TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translateEdifact**](TranslateApi.md#translateEdifact) | **POST** /translate/edifact | 
[**translateX12**](TranslateApi.md#translateX12) | **POST** /translate/x12 | 


<a name="translateEdifact"></a>
# **translateEdifact**
> List&lt;EdiFabricWebApiModelsEdifactInterchange&gt; translateEdifact(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, escapeCharacter, decimalPoint, eancomSyntax, skipTrailerValidation, syntaxSet)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TranslateApi;


TranslateApi apiInstance = new TranslateApi();
File ediFile = new File("/path/to/file.txt"); // File | EDI file to translate
String readMode = "read_small"; // String | 
Boolean validate = false; // Boolean | 
String accept = "application/json"; // String | 
String charSet = "utf-8"; // String | 
Boolean continueOnError = true; // Boolean | 
Boolean transactionOnly = false; // Boolean | 
String dataElementSeparator = "+"; // String | 
String componentDataElementSeparator = ":"; // String | 
String segmentSeparator = "'"; // String | 
String repetitionSeparator = "*"; // String | 
String escapeCharacter = "?"; // String | 
String decimalPoint = "."; // String | 
String eancomSyntax = "eancomSyntax_example"; // String | 
Boolean skipTrailerValidation = false; // Boolean | 
String syntaxSet = "syntaxSet_example"; // String | 
try {
    List<EdiFabricWebApiModelsEdifactInterchange> result = apiInstance.translateEdifact(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, escapeCharacter, decimalPoint, eancomSyntax, skipTrailerValidation, syntaxSet);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TranslateApi#translateEdifact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate |
 **readMode** | **String**|  | [optional] [default to read_small] [enum: read_small, read_large]
 **validate** | **Boolean**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json] [enum: application/json, application/xml]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **transactionOnly** | **Boolean**|  | [optional] [default to false]
 **dataElementSeparator** | **String**|  | [optional] [default to +]
 **componentDataElementSeparator** | **String**|  | [optional] [default to :]
 **segmentSeparator** | **String**|  | [optional] [default to &#39;]
 **repetitionSeparator** | **String**|  | [optional] [default to *]
 **escapeCharacter** | **String**|  | [optional] [default to ?]
 **decimalPoint** | **String**|  | [optional] [default to .] [enum: ., ,]
 **eancomSyntax** | **String**|  | [optional] [enum: 4, 3, older]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] [enum: unoa, unob]

### Return type

[**List&lt;EdiFabricWebApiModelsEdifactInterchange&gt;**](EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

<a name="translateX12"></a>
# **translateX12**
> List&lt;EdiFabricWebApiModelsX12Interchange&gt; translateX12(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, skipTrailerValidation, syntaxSet)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TranslateApi;


TranslateApi apiInstance = new TranslateApi();
File ediFile = new File("/path/to/file.txt"); // File | EDI file to translate
String readMode = "read_small"; // String | 
Boolean validate = false; // Boolean | 
String accept = "application/json"; // String | 
String charSet = "utf-8"; // String | 
Boolean continueOnError = true; // Boolean | 
Boolean transactionOnly = false; // Boolean | 
String dataElementSeparator = "*"; // String | 
String componentDataElementSeparator = ">"; // String | 
String segmentSeparator = "~"; // String | 
String repetitionSeparator = "^"; // String | 
Boolean skipTrailerValidation = false; // Boolean | 
String syntaxSet = "syntaxSet_example"; // String | 
try {
    List<EdiFabricWebApiModelsX12Interchange> result = apiInstance.translateX12(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, skipTrailerValidation, syntaxSet);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TranslateApi#translateX12");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate |
 **readMode** | **String**|  | [optional] [default to read_small] [enum: read_small, read_large]
 **validate** | **Boolean**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json] [enum: application/json, application/xml]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **transactionOnly** | **Boolean**|  | [optional] [default to false]
 **dataElementSeparator** | **String**|  | [optional] [default to *]
 **componentDataElementSeparator** | **String**|  | [optional] [default to &gt;]
 **segmentSeparator** | **String**|  | [optional] [default to ~]
 **repetitionSeparator** | **String**|  | [optional] [default to ^]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] [enum: basic, standard]

### Return type

[**List&lt;EdiFabricWebApiModelsX12Interchange&gt;**](EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

