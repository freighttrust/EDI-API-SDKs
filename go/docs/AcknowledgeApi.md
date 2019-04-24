# \AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AcknowledgeEdifact**](AcknowledgeApi.md#AcknowledgeEdifact) | **Post** /acknowledge/edifact | 
[**AcknowledgeX12**](AcknowledgeApi.md#AcknowledgeX12) | **Post** /acknowledge/x12 | 


# **AcknowledgeEdifact**
> []EdiFabricWebApiModelsEdifactAcknowledgment AcknowledgeEdifact(ctx, ediFile, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **ediFile** | ***os.File**| EDI file to translate | 
 **optional** | ***AcknowledgeEdifactOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AcknowledgeEdifactOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **readMode** | **optional.String**|  | [default to read_small]
 **accept** | **optional.String**|  | [default to application/json]
 **charSet** | **optional.String**|  | [default to utf-8]
 **continueOnError** | **optional.Bool**|  | [default to true]
 **skipTrailerValidation** | **optional.Bool**|  | [default to false]
 **decimalPoint** | **optional.String**|  | [default to .]
 **syntaxSet** | **optional.String**|  | 
 **transactionDuplicate** | **optional.Bool**|  | [default to false]
 **groupDuplicate** | **optional.Bool**|  | [default to false]
 **technicalAck** | **optional.String**|  | [default to default]
 **generateForValidTransactions** | **optional.Bool**|  | [default to false]
 **allowPartial** | **optional.Bool**|  | [default to false]
 **transactionControlNumber** | **optional.Int32**|  | [default to 1]
 **eancomSyntax** | **optional.String**|  | 
 **includeTransactions** | **optional.Bool**|  | [default to false]

### Return type

[**[]EdiFabricWebApiModelsEdifactAcknowledgment**](EdiFabric.Web.Api.Models.EdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AcknowledgeX12**
> []EdiFabricWebApiModelsX12Acknowledgment AcknowledgeX12(ctx, ediFile, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **ediFile** | ***os.File**| EDI file to translate | 
 **optional** | ***AcknowledgeX12Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AcknowledgeX12Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **readMode** | **optional.String**|  | [default to read_small]
 **accept** | **optional.String**|  | [default to application/json]
 **charSet** | **optional.String**|  | [default to utf-8]
 **continueOnError** | **optional.Bool**|  | [default to true]
 **skipTrailerValidation** | **optional.Bool**|  | [default to false]
 **syntaxSet** | **optional.String**|  | 
 **transactionDuplicate** | **optional.Bool**|  | [default to false]
 **groupDuplicate** | **optional.Bool**|  | [default to false]
 **technicalAck** | **optional.String**|  | [default to default]
 **generateForValidTransactions** | **optional.Bool**|  | [default to false]
 **allowPartial** | **optional.Bool**|  | [default to false]
 **transactionControlNumber** | **optional.Int32**|  | [default to 1]
 **ak901** | **optional.String**|  | [default to e]
 **ackVersion** | **optional.String**|  | [default to 4010_997]
 **includeTransactions** | **optional.Bool**|  | [default to false]

### Return type

[**[]EdiFabricWebApiModelsX12Acknowledgment**](EdiFabric.Web.Api.Models.X12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

