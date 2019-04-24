# \ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ValidateGs**](ValidateApi.md#ValidateGs) | **Post** /validate/gs | 
[**ValidateIsa**](ValidateApi.md#ValidateIsa) | **Post** /validate/isa | 
[**ValidateTransactions**](ValidateApi.md#ValidateTransactions) | **Post** /validate/transactions | 
[**ValidateUnb**](ValidateApi.md#ValidateUnb) | **Post** /validate/unb | 
[**ValidateUng**](ValidateApi.md#ValidateUng) | **Post** /validate/ung | 


# **ValidateGs**
> []EdiFabricCoreModelEdiErrorContextsSegmentErrorContext ValidateGs(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ValidateGsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ValidateGsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**optional.Interface of EdiFabricCoreModelEdiX12Gs**](EdiFabricCoreModelEdiX12Gs.md)|  | 

### Return type

[**[]EdiFabricCoreModelEdiErrorContextsSegmentErrorContext**](EdiFabric.Core.Model.Edi.ErrorContexts.SegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ValidateIsa**
> []EdiFabricCoreModelEdiErrorContextsSegmentErrorContext ValidateIsa(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ValidateIsaOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ValidateIsaOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**optional.Interface of EdiFabricCoreModelEdiX12Isa**](EdiFabricCoreModelEdiX12Isa.md)|  | 

### Return type

[**[]EdiFabricCoreModelEdiErrorContextsSegmentErrorContext**](EdiFabric.Core.Model.Edi.ErrorContexts.SegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ValidateTransactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext ValidateTransactions(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ValidateTransactionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ValidateTransactionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateEdi** | [**optional.Interface of EdiFabricWebApiModelsValidateEdi**](EdiFabricWebApiModelsValidateEdi.md)|  | 

### Return type

[**EdiFabricCoreModelEdiErrorContextsMessageErrorContext**](EdiFabric.Core.Model.Edi.ErrorContexts.MessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ValidateUnb**
> []EdiFabricCoreModelEdiErrorContextsSegmentErrorContext ValidateUnb(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ValidateUnbOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ValidateUnbOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**optional.Interface of EdiFabricCoreModelEdiEdifactUnb**](EdiFabricCoreModelEdiEdifactUnb.md)|  | 

### Return type

[**[]EdiFabricCoreModelEdiErrorContextsSegmentErrorContext**](EdiFabric.Core.Model.Edi.ErrorContexts.SegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ValidateUng**
> []EdiFabricCoreModelEdiErrorContextsSegmentErrorContext ValidateUng(ctx, optional)


### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ValidateUngOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ValidateUngOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**optional.Interface of EdiFabricCoreModelEdiEdifactUng**](EdiFabricCoreModelEdiEdifactUng.md)|  | 

### Return type

[**[]EdiFabricCoreModelEdiErrorContextsSegmentErrorContext**](EdiFabric.Core.Model.Edi.ErrorContexts.SegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

