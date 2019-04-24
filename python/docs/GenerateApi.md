# swagger_client.GenerateApi

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
> file generate_edifact_group(generate_edifact_group=generate_edifact_group)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_edifact_group = swagger_client.EdiFabricWebApiModelsGenerateEdifactGroup() # EdiFabricWebApiModelsGenerateEdifactGroup |  (optional)

try:
    api_response = api_instance.generate_edifact_group(generate_edifact_group=generate_edifact_group)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_edifact_group: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_group** | [**EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_edifact_interchange**
> file generate_edifact_interchange(generate_edifact_interchange=generate_edifact_interchange)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_edifact_interchange = swagger_client.EdiFabricWebApiModelsGenerateEdifactInterchange() # EdiFabricWebApiModelsGenerateEdifactInterchange |  (optional)

try:
    api_response = api_instance.generate_edifact_interchange(generate_edifact_interchange=generate_edifact_interchange)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_edifact_interchange: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_interchange** | [**EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_edifact_transactions**
> file generate_edifact_transactions(generate_edifact_transactions=generate_edifact_transactions)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_edifact_transactions = swagger_client.EdiFabricWebApiModelsGenerateEdifactTransactions() # EdiFabricWebApiModelsGenerateEdifactTransactions |  (optional)

try:
    api_response = api_instance.generate_edifact_transactions(generate_edifact_transactions=generate_edifact_transactions)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_edifact_transactions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_transactions** | [**EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_gs**
> file generate_gs(generate_gs=generate_gs)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_gs = swagger_client.EdiFabricWebApiModelsGenerateGs() # EdiFabricWebApiModelsGenerateGs |  (optional)

try:
    api_response = api_instance.generate_gs(generate_gs=generate_gs)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_gs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_gs** | [**EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_isa**
> file generate_isa(generate_isa=generate_isa)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_isa = swagger_client.EdiFabricWebApiModelsGenerateIsa() # EdiFabricWebApiModelsGenerateIsa |  (optional)

try:
    api_response = api_instance.generate_isa(generate_isa=generate_isa)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_isa: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_isa** | [**EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_unb**
> file generate_unb(generate_unb=generate_unb)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_unb = swagger_client.EdiFabricWebApiModelsGenerateUnb() # EdiFabricWebApiModelsGenerateUnb |  (optional)

try:
    api_response = api_instance.generate_unb(generate_unb=generate_unb)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_unb: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_unb** | [**EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_ung**
> file generate_ung(generate_ung=generate_ung)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_ung = swagger_client.EdiFabricWebApiModelsGenerateUng() # EdiFabricWebApiModelsGenerateUng |  (optional)

try:
    api_response = api_instance.generate_ung(generate_ung=generate_ung)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_ung: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_ung** | [**EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_x12_group**
> file generate_x12_group(generate_x12_group=generate_x12_group)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_x12_group = swagger_client.EdiFabricWebApiModelsGenerateX12Group() # EdiFabricWebApiModelsGenerateX12Group |  (optional)

try:
    api_response = api_instance.generate_x12_group(generate_x12_group=generate_x12_group)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_x12_group: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_group** | [**EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_x12_interchange**
> file generate_x12_interchange(generate_x12_interchange=generate_x12_interchange)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_x12_interchange = swagger_client.EdiFabricWebApiModelsGenerateX12Interchange() # EdiFabricWebApiModelsGenerateX12Interchange |  (optional)

try:
    api_response = api_instance.generate_x12_interchange(generate_x12_interchange=generate_x12_interchange)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_x12_interchange: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_interchange** | [**EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_x12_transactions**
> file generate_x12_transactions(generate_x12_transactions=generate_x12_transactions)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GenerateApi()
generate_x12_transactions = swagger_client.EdiFabricWebApiModelsGenerateX12Transactions() # EdiFabricWebApiModelsGenerateX12Transactions |  (optional)

try:
    api_response = api_instance.generate_x12_transactions(generate_x12_transactions=generate_x12_transactions)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GenerateApi->generate_x12_transactions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_transactions** | [**EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional] 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

