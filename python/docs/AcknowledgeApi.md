# swagger_client.AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledge_edifact**](AcknowledgeApi.md#acknowledge_edifact) | **POST** /acknowledge/edifact | 
[**acknowledge_x12**](AcknowledgeApi.md#acknowledge_x12) | **POST** /acknowledge/x12 | 


# **acknowledge_edifact**
> list[EdiFabricWebApiModelsEdifactAcknowledgment] acknowledge_edifact(edi_file, read_mode=read_mode, accept=accept, char_set=char_set, continue_on_error=continue_on_error, skip_trailer_validation=skip_trailer_validation, decimal_point=decimal_point, syntax_set=syntax_set, transaction_duplicate=transaction_duplicate, group_duplicate=group_duplicate, technical_ack=technical_ack, generate_for_valid_transactions=generate_for_valid_transactions, allow_partial=allow_partial, transaction_control_number=transaction_control_number, eancom_syntax=eancom_syntax, include_transactions=include_transactions)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AcknowledgeApi()
edi_file = '/path/to/file.txt' # file | EDI file to translate
read_mode = 'read_small' # str |  (optional) (default to read_small)
accept = 'application/json' # str |  (optional) (default to application/json)
char_set = 'utf-8' # str |  (optional) (default to utf-8)
continue_on_error = true # bool |  (optional) (default to true)
skip_trailer_validation = false # bool |  (optional) (default to false)
decimal_point = '.' # str |  (optional) (default to .)
syntax_set = 'syntax_set_example' # str |  (optional)
transaction_duplicate = false # bool |  (optional) (default to false)
group_duplicate = false # bool |  (optional) (default to false)
technical_ack = 'default' # str |  (optional) (default to default)
generate_for_valid_transactions = false # bool |  (optional) (default to false)
allow_partial = false # bool |  (optional) (default to false)
transaction_control_number = 1 # int |  (optional) (default to 1)
eancom_syntax = 'eancom_syntax_example' # str |  (optional)
include_transactions = false # bool |  (optional) (default to false)

try:
    api_response = api_instance.acknowledge_edifact(edi_file, read_mode=read_mode, accept=accept, char_set=char_set, continue_on_error=continue_on_error, skip_trailer_validation=skip_trailer_validation, decimal_point=decimal_point, syntax_set=syntax_set, transaction_duplicate=transaction_duplicate, group_duplicate=group_duplicate, technical_ack=technical_ack, generate_for_valid_transactions=generate_for_valid_transactions, allow_partial=allow_partial, transaction_control_number=transaction_control_number, eancom_syntax=eancom_syntax, include_transactions=include_transactions)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcknowledgeApi->acknowledge_edifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **file**| EDI file to translate | 
 **read_mode** | **str**|  | [optional] [default to read_small]
 **accept** | **str**|  | [optional] [default to application/json]
 **char_set** | **str**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **decimal_point** | **str**|  | [optional] [default to .]
 **syntax_set** | **str**|  | [optional] 
 **transaction_duplicate** | **bool**|  | [optional] [default to false]
 **group_duplicate** | **bool**|  | [optional] [default to false]
 **technical_ack** | **str**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **bool**|  | [optional] [default to false]
 **allow_partial** | **bool**|  | [optional] [default to false]
 **transaction_control_number** | **int**|  | [optional] [default to 1]
 **eancom_syntax** | **str**|  | [optional] 
 **include_transactions** | **bool**|  | [optional] [default to false]

### Return type

[**list[EdiFabricWebApiModelsEdifactAcknowledgment]**](EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acknowledge_x12**
> list[EdiFabricWebApiModelsX12Acknowledgment] acknowledge_x12(edi_file, read_mode=read_mode, accept=accept, char_set=char_set, continue_on_error=continue_on_error, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set, transaction_duplicate=transaction_duplicate, group_duplicate=group_duplicate, technical_ack=technical_ack, generate_for_valid_transactions=generate_for_valid_transactions, allow_partial=allow_partial, transaction_control_number=transaction_control_number, ak901=ak901, ack_version=ack_version, include_transactions=include_transactions)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AcknowledgeApi()
edi_file = '/path/to/file.txt' # file | EDI file to translate
read_mode = 'read_small' # str |  (optional) (default to read_small)
accept = 'application/json' # str |  (optional) (default to application/json)
char_set = 'utf-8' # str |  (optional) (default to utf-8)
continue_on_error = true # bool |  (optional) (default to true)
skip_trailer_validation = false # bool |  (optional) (default to false)
syntax_set = 'syntax_set_example' # str |  (optional)
transaction_duplicate = false # bool |  (optional) (default to false)
group_duplicate = false # bool |  (optional) (default to false)
technical_ack = 'default' # str |  (optional) (default to default)
generate_for_valid_transactions = false # bool |  (optional) (default to false)
allow_partial = false # bool |  (optional) (default to false)
transaction_control_number = 1 # int |  (optional) (default to 1)
ak901 = 'e' # str |  (optional) (default to e)
ack_version = '4010_997' # str |  (optional) (default to 4010_997)
include_transactions = false # bool |  (optional) (default to false)

try:
    api_response = api_instance.acknowledge_x12(edi_file, read_mode=read_mode, accept=accept, char_set=char_set, continue_on_error=continue_on_error, skip_trailer_validation=skip_trailer_validation, syntax_set=syntax_set, transaction_duplicate=transaction_duplicate, group_duplicate=group_duplicate, technical_ack=technical_ack, generate_for_valid_transactions=generate_for_valid_transactions, allow_partial=allow_partial, transaction_control_number=transaction_control_number, ak901=ak901, ack_version=ack_version, include_transactions=include_transactions)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcknowledgeApi->acknowledge_x12: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **file**| EDI file to translate | 
 **read_mode** | **str**|  | [optional] [default to read_small]
 **accept** | **str**|  | [optional] [default to application/json]
 **char_set** | **str**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **str**|  | [optional] 
 **transaction_duplicate** | **bool**|  | [optional] [default to false]
 **group_duplicate** | **bool**|  | [optional] [default to false]
 **technical_ack** | **str**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **bool**|  | [optional] [default to false]
 **allow_partial** | **bool**|  | [optional] [default to false]
 **transaction_control_number** | **int**|  | [optional] [default to 1]
 **ak901** | **str**|  | [optional] [default to e]
 **ack_version** | **str**|  | [optional] [default to 4010_997]
 **include_transactions** | **bool**|  | [optional] [default to false]

### Return type

[**list[EdiFabricWebApiModelsX12Acknowledgment]**](EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

