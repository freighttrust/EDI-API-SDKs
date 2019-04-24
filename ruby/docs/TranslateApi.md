# SwaggerClient::TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translate_edifact**](TranslateApi.md#translate_edifact) | **POST** /translate/edifact | 
[**translate_x12**](TranslateApi.md#translate_x12) | **POST** /translate/x12 | 


# **translate_edifact**
> Array&lt;EdiFabricWebApiModelsEdifactInterchange&gt; translate_edifact(edi_file, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TranslateApi.new

edi_file = File.new('/path/to/file.txt') # File | EDI file to translate

opts = { 
  read_mode: 'read_small', # String | 
  validate: false, # BOOLEAN | 
  accept: 'application/json', # String | 
  char_set: 'utf-8', # String | 
  continue_on_error: true, # BOOLEAN | 
  transaction_only: false, # BOOLEAN | 
  data_element_separator: '+', # String | 
  component_data_element_separator: ':', # String | 
  segment_separator: ''', # String | 
  repetition_separator: '*', # String | 
  escape_character: '?', # String | 
  decimal_point: '.', # String | 
  eancom_syntax: 'eancom_syntax_example', # String | 
  skip_trailer_validation: false, # BOOLEAN | 
  syntax_set: 'syntax_set_example' # String | 
}

begin
  result = api_instance.translate_edifact(edi_file, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TranslateApi->translate_edifact: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **File**| EDI file to translate | 
 **read_mode** | **String**|  | [optional] [default to read_small]
 **validate** | **BOOLEAN**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json]
 **char_set** | **String**|  | [optional] [default to utf-8]
 **continue_on_error** | **BOOLEAN**|  | [optional] [default to true]
 **transaction_only** | **BOOLEAN**|  | [optional] [default to false]
 **data_element_separator** | **String**|  | [optional] [default to +]
 **component_data_element_separator** | **String**|  | [optional] [default to :]
 **segment_separator** | **String**|  | [optional] [default to &#39;]
 **repetition_separator** | **String**|  | [optional] [default to *]
 **escape_character** | **String**|  | [optional] [default to ?]
 **decimal_point** | **String**|  | [optional] [default to .]
 **eancom_syntax** | **String**|  | [optional] 
 **skip_trailer_validation** | **BOOLEAN**|  | [optional] [default to false]
 **syntax_set** | **String**|  | [optional] 

### Return type

[**Array&lt;EdiFabricWebApiModelsEdifactInterchange&gt;**](EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml



# **translate_x12**
> Array&lt;EdiFabricWebApiModelsX12Interchange&gt; translate_x12(edi_file, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TranslateApi.new

edi_file = File.new('/path/to/file.txt') # File | EDI file to translate

opts = { 
  read_mode: 'read_small', # String | 
  validate: false, # BOOLEAN | 
  accept: 'application/json', # String | 
  char_set: 'utf-8', # String | 
  continue_on_error: true, # BOOLEAN | 
  transaction_only: false, # BOOLEAN | 
  data_element_separator: '*', # String | 
  component_data_element_separator: '>', # String | 
  segment_separator: '~', # String | 
  repetition_separator: '^', # String | 
  skip_trailer_validation: false, # BOOLEAN | 
  syntax_set: 'syntax_set_example' # String | 
}

begin
  result = api_instance.translate_x12(edi_file, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TranslateApi->translate_x12: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **File**| EDI file to translate | 
 **read_mode** | **String**|  | [optional] [default to read_small]
 **validate** | **BOOLEAN**|  | [optional] [default to false]
 **accept** | **String**|  | [optional] [default to application/json]
 **char_set** | **String**|  | [optional] [default to utf-8]
 **continue_on_error** | **BOOLEAN**|  | [optional] [default to true]
 **transaction_only** | **BOOLEAN**|  | [optional] [default to false]
 **data_element_separator** | **String**|  | [optional] [default to *]
 **component_data_element_separator** | **String**|  | [optional] [default to &gt;]
 **segment_separator** | **String**|  | [optional] [default to ~]
 **repetition_separator** | **String**|  | [optional] [default to ^]
 **skip_trailer_validation** | **BOOLEAN**|  | [optional] [default to false]
 **syntax_set** | **String**|  | [optional] 

### Return type

[**Array&lt;EdiFabricWebApiModelsX12Interchange&gt;**](EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml



