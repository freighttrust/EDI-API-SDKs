# \GenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GenerateEdifactGroup**](GenerateApi.md#GenerateEdifactGroup) | **Post** /generate/edifact-group | 
[**GenerateEdifactInterchange**](GenerateApi.md#GenerateEdifactInterchange) | **Post** /generate/edifact-interchange | 
[**GenerateEdifactTransactions**](GenerateApi.md#GenerateEdifactTransactions) | **Post** /generate/edifact-transactions | 
[**GenerateGs**](GenerateApi.md#GenerateGs) | **Post** /generate/gs | 
[**GenerateIsa**](GenerateApi.md#GenerateIsa) | **Post** /generate/isa | 
[**GenerateUnb**](GenerateApi.md#GenerateUnb) | **Post** /generate/unb | 
[**GenerateUng**](GenerateApi.md#GenerateUng) | **Post** /generate/ung | 
[**GenerateX12Group**](GenerateApi.md#GenerateX12Group) | **Post** /generate/x12-group | 
[**GenerateX12Interchange**](GenerateApi.md#GenerateX12Interchange) | **Post** /generate/x12-interchange | 
[**GenerateX12Transactions**](GenerateApi.md#GenerateX12Transactions) | **Post** /generate/x12-transactions | 


# **GenerateEdifactGroup**
> *os.File GenerateEdifactGroup(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateEdifactGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateEdifactGroupOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactGroup** | [**optional.Interface of EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateEdifactInterchange**
> *os.File GenerateEdifactInterchange(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateEdifactInterchangeOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateEdifactInterchangeOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactInterchange** | [**optional.Interface of EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateEdifactTransactions**
> *os.File GenerateEdifactTransactions(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateEdifactTransactionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateEdifactTransactionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactTransactions** | [**optional.Interface of EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateGs**
> *os.File GenerateGs(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateGsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateGsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateGs** | [**optional.Interface of EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateIsa**
> *os.File GenerateIsa(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateIsaOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateIsaOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateIsa** | [**optional.Interface of EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateUnb**
> *os.File GenerateUnb(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateUnbOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateUnbOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnb** | [**optional.Interface of EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateUng**
> *os.File GenerateUng(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateUngOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateUngOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUng** | [**optional.Interface of EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateX12Group**
> *os.File GenerateX12Group(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateX12GroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateX12GroupOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Group** | [**optional.Interface of EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateX12Interchange**
> *os.File GenerateX12Interchange(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateX12InterchangeOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateX12InterchangeOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Interchange** | [**optional.Interface of EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateX12Transactions**
> *os.File GenerateX12Transactions(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GenerateX12TransactionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GenerateX12TransactionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Transactions** | [**optional.Interface of EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

