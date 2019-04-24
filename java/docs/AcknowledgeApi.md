# AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeEdifact**](AcknowledgeApi.md#acknowledgeEdifact) | **POST** /acknowledge/edifact | 
[**acknowledgeX12**](AcknowledgeApi.md#acknowledgeX12) | **POST** /acknowledge/x12 | 


<a name="acknowledgeEdifact"></a>
# **acknowledgeEdifact**
> List&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt; acknowledgeEdifact(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AcknowledgeApi;


AcknowledgeApi apiInstance = new AcknowledgeApi();
File ediFile = new File("/path/to/file.txt"); // File | EDI file to translate
String readMode = "read_small"; // String | 
String accept = "application/json"; // String | 
String charSet = "utf-8"; // String | 
Boolean continueOnError = true; // Boolean | 
Boolean skipTrailerValidation = false; // Boolean | 
String decimalPoint = "."; // String | 
String syntaxSet = "syntaxSet_example"; // String | 
Boolean transactionDuplicate = false; // Boolean | 
Boolean groupDuplicate = false; // Boolean | 
String technicalAck = "default"; // String | 
Boolean generateForValidTransactions = false; // Boolean | 
Boolean allowPartial = false; // Boolean | 
Integer transactionControlNumber = 1; // Integer | 
String eancomSyntax = "eancomSyntax_example"; // String | 
Boolean includeTransactions = false; // Boolean | 
try {
    List<EdiFabricWebApiModelsEdifactAcknowledgment> result = apiInstance.acknowledgeEdifact(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcknowledgeApi#acknowledgeEdifact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate |
 **readMode** | **String**|  | [optional] [default to read_small] [enum: read_small, read_large]
 **accept** | **String**|  | [optional] [default to application/json] [enum: application/json, application/xml]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **decimalPoint** | **String**|  | [optional] [default to .] [enum: ., ,]
 **syntaxSet** | **String**|  | [optional] [enum: unoa, unob]
 **transactionDuplicate** | **Boolean**|  | [optional] [default to false]
 **groupDuplicate** | **Boolean**|  | [optional] [default to false]
 **technicalAck** | **String**|  | [optional] [default to default] [enum: default, enforce, suppress]
 **generateForValidTransactions** | **Boolean**|  | [optional] [default to false]
 **allowPartial** | **Boolean**|  | [optional] [default to false]
 **transactionControlNumber** | **Integer**|  | [optional] [default to 1]
 **eancomSyntax** | **String**|  | [optional] [enum: 4, 3, older]
 **includeTransactions** | **Boolean**|  | [optional] [default to false]

### Return type

[**List&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt;**](EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

<a name="acknowledgeX12"></a>
# **acknowledgeX12**
> List&lt;EdiFabricWebApiModelsX12Acknowledgment&gt; acknowledgeX12(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AcknowledgeApi;


AcknowledgeApi apiInstance = new AcknowledgeApi();
File ediFile = new File("/path/to/file.txt"); // File | EDI file to translate
String readMode = "read_small"; // String | 
String accept = "application/json"; // String | 
String charSet = "utf-8"; // String | 
Boolean continueOnError = true; // Boolean | 
Boolean skipTrailerValidation = false; // Boolean | 
String syntaxSet = "syntaxSet_example"; // String | 
Boolean transactionDuplicate = false; // Boolean | 
Boolean groupDuplicate = false; // Boolean | 
String technicalAck = "default"; // String | 
Boolean generateForValidTransactions = false; // Boolean | 
Boolean allowPartial = false; // Boolean | 
Integer transactionControlNumber = 1; // Integer | 
String ak901 = "e"; // String | 
String ackVersion = "4010_997"; // String | 
Boolean includeTransactions = false; // Boolean | 
try {
    List<EdiFabricWebApiModelsX12Acknowledgment> result = apiInstance.acknowledgeX12(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcknowledgeApi#acknowledgeX12");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **File**| EDI file to translate |
 **readMode** | **String**|  | [optional] [default to read_small] [enum: read_small, read_large]
 **accept** | **String**|  | [optional] [default to application/json] [enum: application/json, application/xml]
 **charSet** | **String**|  | [optional] [default to utf-8]
 **continueOnError** | **Boolean**|  | [optional] [default to true]
 **skipTrailerValidation** | **Boolean**|  | [optional] [default to false]
 **syntaxSet** | **String**|  | [optional] [enum: basic, standard]
 **transactionDuplicate** | **Boolean**|  | [optional] [default to false]
 **groupDuplicate** | **Boolean**|  | [optional] [default to false]
 **technicalAck** | **String**|  | [optional] [default to default] [enum: default, enforce, suppress]
 **generateForValidTransactions** | **Boolean**|  | [optional] [default to false]
 **allowPartial** | **Boolean**|  | [optional] [default to false]
 **transactionControlNumber** | **Integer**|  | [optional] [default to 1]
 **ak901** | **String**|  | [optional] [default to e] [enum: p, e]
 **ackVersion** | **String**|  | [optional] [default to 4010_997] [enum: 4010_997, 5010_997, 5010_999]
 **includeTransactions** | **Boolean**|  | [optional] [default to false]

### Return type

[**List&lt;EdiFabricWebApiModelsX12Acknowledgment&gt;**](EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

