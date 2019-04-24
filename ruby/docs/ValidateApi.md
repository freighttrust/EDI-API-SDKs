# SwaggerClient::ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validate_gs**](ValidateApi.md#validate_gs) | **POST** /validate/gs | 
[**validate_isa**](ValidateApi.md#validate_isa) | **POST** /validate/isa | 
[**validate_transactions**](ValidateApi.md#validate_transactions) | **POST** /validate/transactions | 
[**validate_unb**](ValidateApi.md#validate_unb) | **POST** /validate/unb | 
[**validate_ung**](ValidateApi.md#validate_ung) | **POST** /validate/ung | 


# **validate_gs**
> Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validate_gs(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ValidateApi.new

opts = { 
  gs: SwaggerClient::EdiFabricCoreModelEdiX12GS.new # EdiFabricCoreModelEdiX12GS | 
}

begin
  result = api_instance.validate_gs(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ValidateApi->validate_gs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md)|  | [optional] 

### Return type

[**Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml



# **validate_isa**
> Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validate_isa(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ValidateApi.new

opts = { 
  isa: SwaggerClient::EdiFabricCoreModelEdiX12ISA.new # EdiFabricCoreModelEdiX12ISA | 
}

begin
  result = api_instance.validate_isa(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ValidateApi->validate_isa: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md)|  | [optional] 

### Return type

[**Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml



# **validate_transactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext validate_transactions(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ValidateApi.new

opts = { 
  validate_edi: SwaggerClient::EdiFabricWebApiModelsValidateEdi.new # EdiFabricWebApiModelsValidateEdi | 
}

begin
  result = api_instance.validate_transactions(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ValidateApi->validate_transactions: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validate_edi** | [**EdiFabricWebApiModelsValidateEdi**](EdiFabricWebApiModelsValidateEdi.md)|  | [optional] 

### Return type

[**EdiFabricCoreModelEdiErrorContextsMessageErrorContext**](EdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml



# **validate_unb**
> Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validate_unb(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ValidateApi.new

opts = { 
  unb: SwaggerClient::EdiFabricCoreModelEdiEdifactUNB.new # EdiFabricCoreModelEdiEdifactUNB | 
}

begin
  result = api_instance.validate_unb(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ValidateApi->validate_unb: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional] 

### Return type

[**Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml



# **validate_ung**
> Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; validate_ung(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ValidateApi.new

opts = { 
  ung: SwaggerClient::EdiFabricCoreModelEdiEdifactUNG.new # EdiFabricCoreModelEdiEdifactUNG | 
}

begin
  result = api_instance.validate_ung(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ValidateApi->validate_ung: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional] 

### Return type

[**Array&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml



