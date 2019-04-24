# SwaggerClient::GenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_edifact_group**](GenerateApi.md#generate_edifact_group) | **POST** /generate/edifact-group | 
[**generate_edifact_interchange**](GenerateApi.md#generate_edifact_interchange) | **POST** /generate/edifact-interchange | 
[**generate_edifact_transactions**](GenerateApi.md#generate_edifact_transactions) | **POST** /generate/edifact-transactions | 
[**generate_gs**](GenerateApi.md#generate_gs) | **POST** /generate/gs | 
[**generate_isa**](GenerateApi.md#generate_isa) | **POST** /generate/isa | 
[**generate_unb**](GenerateApi.md#generate_unb) | **POST** /generate/unb | 
[**generate_ung**](GenerateApi.md#generate_ung) | **POST** /generate/ung | 
[**generate_x12_group**](GenerateApi.md#generate_x12_group) | **POST** /generate/x12-group | 
[**generate_x12_interchange**](GenerateApi.md#generate_x12_interchange) | **POST** /generate/x12-interchange | 
[**generate_x12_transactions**](GenerateApi.md#generate_x12_transactions) | **POST** /generate/x12-transactions | 


# **generate_edifact_group**
> File generate_edifact_group(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_edifact_group: SwaggerClient::EdiFabricWebApiModelsGenerateEdifactGroup.new # EdiFabricWebApiModelsGenerateEdifactGroup | 
}

begin
  result = api_instance.generate_edifact_group(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_edifact_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_group** | [**EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_edifact_interchange**
> File generate_edifact_interchange(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_edifact_interchange: SwaggerClient::EdiFabricWebApiModelsGenerateEdifactInterchange.new # EdiFabricWebApiModelsGenerateEdifactInterchange | 
}

begin
  result = api_instance.generate_edifact_interchange(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_edifact_interchange: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_interchange** | [**EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_edifact_transactions**
> File generate_edifact_transactions(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_edifact_transactions: SwaggerClient::EdiFabricWebApiModelsGenerateEdifactTransactions.new # EdiFabricWebApiModelsGenerateEdifactTransactions | 
}

begin
  result = api_instance.generate_edifact_transactions(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_edifact_transactions: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_transactions** | [**EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_gs**
> File generate_gs(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_gs: SwaggerClient::EdiFabricWebApiModelsGenerateGs.new # EdiFabricWebApiModelsGenerateGs | 
}

begin
  result = api_instance.generate_gs(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_gs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_gs** | [**EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_isa**
> File generate_isa(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_isa: SwaggerClient::EdiFabricWebApiModelsGenerateIsa.new # EdiFabricWebApiModelsGenerateIsa | 
}

begin
  result = api_instance.generate_isa(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_isa: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_isa** | [**EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_unb**
> File generate_unb(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_unb: SwaggerClient::EdiFabricWebApiModelsGenerateUnb.new # EdiFabricWebApiModelsGenerateUnb | 
}

begin
  result = api_instance.generate_unb(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_unb: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_unb** | [**EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_ung**
> File generate_ung(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_ung: SwaggerClient::EdiFabricWebApiModelsGenerateUng.new # EdiFabricWebApiModelsGenerateUng | 
}

begin
  result = api_instance.generate_ung(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_ung: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_ung** | [**EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_x12_group**
> File generate_x12_group(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_x12_group: SwaggerClient::EdiFabricWebApiModelsGenerateX12Group.new # EdiFabricWebApiModelsGenerateX12Group | 
}

begin
  result = api_instance.generate_x12_group(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_x12_group: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_group** | [**EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_x12_interchange**
> File generate_x12_interchange(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_x12_interchange: SwaggerClient::EdiFabricWebApiModelsGenerateX12Interchange.new # EdiFabricWebApiModelsGenerateX12Interchange | 
}

begin
  result = api_instance.generate_x12_interchange(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_x12_interchange: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_interchange** | [**EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



# **generate_x12_transactions**
> File generate_x12_transactions(opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::GenerateApi.new

opts = { 
  generate_x12_transactions: SwaggerClient::EdiFabricWebApiModelsGenerateX12Transactions.new # EdiFabricWebApiModelsGenerateX12Transactions | 
}

begin
  result = api_instance.generate_x12_transactions(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling GenerateApi->generate_x12_transactions: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_transactions** | [**EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json



