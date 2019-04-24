# \TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TranslateEdifact**](TranslateApi.md#TranslateEdifact) | **Post** /translate/edifact | 
[**TranslateX12**](TranslateApi.md#TranslateX12) | **Post** /translate/x12 | 


# **TranslateEdifact**
> []EdiFabricWebApiModelsEdifactInterchange TranslateEdifact(ctx, ediFile, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **ediFile** | ***os.File**| EDI file to translate | 
 **optional** | ***TranslateEdifactOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TranslateEdifactOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **readMode** | **optional.String**|  | [default to read_small]
 **validate** | **optional.Bool**|  | [default to false]
 **accept** | **optional.String**|  | [default to application/json]
 **charSet** | **optional.String**|  | [default to utf-8]
 **continueOnError** | **optional.Bool**|  | [default to true]
 **transactionOnly** | **optional.Bool**|  | [default to false]
 **dataElementSeparator** | **optional.String**|  | [default to +]
 **componentDataElementSeparator** | **optional.String**|  | [default to :]
 **segmentSeparator** | **optional.String**|  | [default to &#39;]
 **repetitionSeparator** | **optional.String**|  | [default to *]
 **escapeCharacter** | **optional.String**|  | [default to ?]
 **decimalPoint** | **optional.String**|  | [default to .]
 **eancomSyntax** | **optional.String**|  | 
 **skipTrailerValidation** | **optional.Bool**|  | [default to false]
 **syntaxSet** | **optional.String**|  | 

### Return type

[**[]EdiFabricWebApiModelsEdifactInterchange**](EdiFabric.Web.Api.Models.EdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TranslateX12**
> []EdiFabricWebApiModelsX12Interchange TranslateX12(ctx, ediFile, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **ediFile** | ***os.File**| EDI file to translate | 
 **optional** | ***TranslateX12Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TranslateX12Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **readMode** | **optional.String**|  | [default to read_small]
 **validate** | **optional.Bool**|  | [default to false]
 **accept** | **optional.String**|  | [default to application/json]
 **charSet** | **optional.String**|  | [default to utf-8]
 **continueOnError** | **optional.Bool**|  | [default to true]
 **transactionOnly** | **optional.Bool**|  | [default to false]
 **dataElementSeparator** | **optional.String**|  | [default to *]
 **componentDataElementSeparator** | **optional.String**|  | [default to &gt;]
 **segmentSeparator** | **optional.String**|  | [default to ~]
 **repetitionSeparator** | **optional.String**|  | [default to ^]
 **skipTrailerValidation** | **optional.Bool**|  | [default to false]
 **syntaxSet** | **optional.String**|  | 

### Return type

[**[]EdiFabricWebApiModelsX12Interchange**](EdiFabric.Web.Api.Models.X12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

