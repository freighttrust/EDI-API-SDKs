# swagger_client.TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translate_edifact**](TranslateApi.md#translate_edifact) | **POST** /translate/edifact | 
[**translate_x12**](TranslateApi.md#translate_x12) | **POST** /translate/x12 | 


# **translate_edifact**
> list[EdiFabricWebApiModelsEdifactInterchange] translate_edifact(edi_file, read_mode=read_mode, validate=validate, accept=accept, char_set=char_set, continue_on_error=continue_on_error, transaction_only=transaction_only, data_element_separator=data_element_separator, component_data_element_separator=component_data_element_separator, segment_separator=segment_separator, repetition_separator=repetition_separator, escape_character=escape_character, decimal_point=decimal_point, eancom_syntax=eancom_syntax, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TranslateApi()
edi_file = '/path/to/file.txt' # file | EDI file to translate
read_mode = 'read_small' # str |  (optional) (default to read_small)
validate = false # bool |  (optional) (default to false)
accept = 'application/json' # str |  (optional) (default to application/json)
char_set = 'utf-8' # str |  (optional) (default to utf-8)
continue_on_error = true # bool |  (optional) (default to true)
transaction_only = false # bool |  (optional) (default to false)
data_element_separator = '+' # str |  (optional) (default to +)
component_data_element_separator = ':' # str |  (optional) (default to :)
segment_separator = ''' # str |  (optional) (default to ')
repetition_separator = '*' # str |  (optional) (default to *)
escape_character = '?' # str |  (optional) (default to ?)
decimal_point = '.' # str |  (optional) (default to .)
eancom_syntax = 'eancom_syntax_example' # str |  (optional)
skip_trailer_validation = false # bool |  (optional) (default to false)
syntax_set = 'syntax_set_example' # str |  (optional)

try:
    api_response = api_instance.translate_edifact(edi_file, read_mode=read_mode, validate=validate, accept=accept, char_set=char_set, continue_on_error=continue_on_error, transaction_only=transaction_only, data_element_separator=data_element_separator, component_data_element_separator=component_data_element_separator, segment_separator=segment_separator, repetition_separator=repetition_separator, escape_character=escape_character, decimal_point=decimal_point, eancom_syntax=eancom_syntax, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TranslateApi->translate_edifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **file**| EDI file to translate | 
 **read_mode** | **str**|  | [optional] [default to read_small]
 **validate** | **bool**|  | [optional] [default to false]
 **accept** | **str**|  | [optional] [default to application/json]
 **char_set** | **str**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **transaction_only** | **bool**|  | [optional] [default to false]
 **data_element_separator** | **str**|  | [optional] [default to +]
 **component_data_element_separator** | **str**|  | [optional] [default to :]
 **segment_separator** | **str**|  | [optional] [default to &#39;]
 **repetition_separator** | **str**|  | [optional] [default to *]
 **escape_character** | **str**|  | [optional] [default to ?]
 **decimal_point** | **str**|  | [optional] [default to .]
 **eancom_syntax** | **str**|  | [optional] 
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **str**|  | [optional] 

### Return type

[**list[EdiFabricWebApiModelsEdifactInterchange]**](EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_x12**
> list[EdiFabricWebApiModelsX12Interchange] translate_x12(edi_file, read_mode=read_mode, validate=validate, accept=accept, char_set=char_set, continue_on_error=continue_on_error, transaction_only=transaction_only, data_element_separator=data_element_separator, component_data_element_separator=component_data_element_separator, segment_separator=segment_separator, repetition_separator=repetition_separator, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TranslateApi()
edi_file = '/path/to/file.txt' # file | EDI file to translate
read_mode = 'read_small' # str |  (optional) (default to read_small)
validate = false # bool |  (optional) (default to false)
accept = 'application/json' # str |  (optional) (default to application/json)
char_set = 'utf-8' # str |  (optional) (default to utf-8)
continue_on_error = true # bool |  (optional) (default to true)
transaction_only = false # bool |  (optional) (default to false)
data_element_separator = '*' # str |  (optional) (default to *)
component_data_element_separator = '>' # str |  (optional) (default to >)
segment_separator = '~' # str |  (optional) (default to ~)
repetition_separator = '^' # str |  (optional) (default to ^)
skip_trailer_validation = false # bool |  (optional) (default to false)
syntax_set = 'syntax_set_example' # str |  (optional)

try:
    api_response = api_instance.translate_x12(edi_file, read_mode=read_mode, validate=validate, accept=accept, char_set=char_set, continue_on_error=continue_on_error, transaction_only=transaction_only, data_element_separator=data_element_separator, component_data_element_separator=component_data_element_separator, segment_separator=segment_separator, repetition_separator=repetition_separator, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TranslateApi->translate_x12: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **file**| EDI file to translate | 
 **read_mode** | **str**|  | [optional] [default to read_small]
 **validate** | **bool**|  | [optional] [default to false]
 **accept** | **str**|  | [optional] [default to application/json]
 **char_set** | **str**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **transaction_only** | **bool**|  | [optional] [default to false]
 **data_element_separator** | **str**|  | [optional] [default to *]
 **component_data_element_separator** | **str**|  | [optional] [default to &gt;]
 **segment_separator** | **str**|  | [optional] [default to ~]
 **repetition_separator** | **str**|  | [optional] [default to ^]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **str**|  | [optional] 

### Return type

[**list[EdiFabricWebApiModelsX12Interchange]**](EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

