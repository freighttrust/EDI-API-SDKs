# SwaggerClient::AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledge_edifact**](AcknowledgeApi.md#acknowledge_edifact) | **POST** /acknowledge/edifact | 
[**acknowledge_x12**](AcknowledgeApi.md#acknowledge_x12) | **POST** /acknowledge/x12 | 


# **acknowledge_edifact**
> Array&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt; acknowledge_edifact(edi_file, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AcknowledgeApi.new

edi_file = File.new('/path/to/file.txt') # File | EDI file to translate

opts = { 
  read_mode: 'read_small', # String | 
  accept: 'application/json', # String | 
  char_set: 'utf-8', # String | 
  continue_on_error: true, # BOOLEAN | 
  skip_trailer_validation: false, # BOOLEAN | 
  decimal_point: '.', # String | 
  syntax_set: 'syntax_set_example', # String | 
  transaction_duplicate: false, # BOOLEAN | 
  group_duplicate: false, # BOOLEAN | 
  technical_ack: 'default', # String | 
  generate_for_valid_transactions: false, # BOOLEAN | 
  allow_partial: false, # BOOLEAN | 
  transaction_control_number: 1, # Integer | 
  eancom_syntax: 'eancom_syntax_example', # String | 
  include_transactions: false # BOOLEAN | 
}

begin
  result = api_instance.acknowledge_edifact(edi_file, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AcknowledgeApi->acknowledge_edifact: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **File**| EDI file to translate | 
 **read_mode** | **String**|  | [optional] [default to read_small]
 **accept** | **String**|  | [optional] [default to application/json]
 **char_set** | **String**|  | [optional] [default to utf-8]
 **continue_on_error** | **BOOLEAN**|  | [optional] [default to true]
 **skip_trailer_validation** | **BOOLEAN**|  | [optional] [default to false]
 **decimal_point** | **String**|  | [optional] [default to .]
 **syntax_set** | **String**|  | [optional] 
 **transaction_duplicate** | **BOOLEAN**|  | [optional] [default to false]
 **group_duplicate** | **BOOLEAN**|  | [optional] [default to false]
 **technical_ack** | **String**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **BOOLEAN**|  | [optional] [default to false]
 **allow_partial** | **BOOLEAN**|  | [optional] [default to false]
 **transaction_control_number** | **Integer**|  | [optional] [default to 1]
 **eancom_syntax** | **String**|  | [optional] 
 **include_transactions** | **BOOLEAN**|  | [optional] [default to false]

### Return type

[**Array&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt;**](EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml



# **acknowledge_x12**
> Array&lt;EdiFabricWebApiModelsX12Acknowledgment&gt; acknowledge_x12(edi_file, opts)



### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AcknowledgeApi.new

edi_file = File.new('/path/to/file.txt') # File | EDI file to translate

opts = { 
  read_mode: 'read_small', # String | 
  accept: 'application/json', # String | 
  char_set: 'utf-8', # String | 
  continue_on_error: true, # BOOLEAN | 
  skip_trailer_validation: false, # BOOLEAN | 
  syntax_set: 'syntax_set_example', # String | 
  transaction_duplicate: false, # BOOLEAN | 
  group_duplicate: false, # BOOLEAN | 
  technical_ack: 'default', # String | 
  generate_for_valid_transactions: false, # BOOLEAN | 
  allow_partial: false, # BOOLEAN | 
  transaction_control_number: 1, # Integer | 
  ak901: 'e', # String | 
  ack_version: '4010_997', # String | 
  include_transactions: false # BOOLEAN | 
}

begin
  result = api_instance.acknowledge_x12(edi_file, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AcknowledgeApi->acknowledge_x12: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **File**| EDI file to translate | 
 **read_mode** | **String**|  | [optional] [default to read_small]
 **accept** | **String**|  | [optional] [default to application/json]
 **char_set** | **String**|  | [optional] [default to utf-8]
 **continue_on_error** | **BOOLEAN**|  | [optional] [default to true]
 **skip_trailer_validation** | **BOOLEAN**|  | [optional] [default to false]
 **syntax_set** | **String**|  | [optional] 
 **transaction_duplicate** | **BOOLEAN**|  | [optional] [default to false]
 **group_duplicate** | **BOOLEAN**|  | [optional] [default to false]
 **technical_ack** | **String**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **BOOLEAN**|  | [optional] [default to false]
 **allow_partial** | **BOOLEAN**|  | [optional] [default to false]
 **transaction_control_number** | **Integer**|  | [optional] [default to 1]
 **ak901** | **String**|  | [optional] [default to e]
 **ack_version** | **String**|  | [optional] [default to 4010_997]
 **include_transactions** | **BOOLEAN**|  | [optional] [default to false]

### Return type

[**Array&lt;EdiFabricWebApiModelsX12Acknowledgment&gt;**](EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml



