# swagger_client.ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validate_gs**](ValidateApi.md#validate_gs) | **POST** /validate/gs | 
[**validate_isa**](ValidateApi.md#validate_isa) | **POST** /validate/isa | 
[**validate_transactions**](ValidateApi.md#validate_transactions) | **POST** /validate/transactions | 
[**validate_unb**](ValidateApi.md#validate_unb) | **POST** /validate/unb | 
[**validate_ung**](ValidateApi.md#validate_ung) | **POST** /validate/ung | 


# **validate_gs**
> list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validate_gs(gs=gs)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ValidateApi()
gs = swagger_client.EdiFabricCoreModelEdiX12GS() # EdiFabricCoreModelEdiX12GS |  (optional)

try:
    api_response = api_instance.validate_gs(gs=gs)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ValidateApi->validate_gs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md)|  | [optional] 

### Return type

[**list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_isa**
> list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validate_isa(isa=isa)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ValidateApi()
isa = swagger_client.EdiFabricCoreModelEdiX12ISA() # EdiFabricCoreModelEdiX12ISA |  (optional)

try:
    api_response = api_instance.validate_isa(isa=isa)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ValidateApi->validate_isa: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md)|  | [optional] 

### Return type

[**list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_transactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext validate_transactions(validate_edi=validate_edi)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ValidateApi()
validate_edi = swagger_client.EdiFabricWebApiModelsValidateEdi() # EdiFabricWebApiModelsValidateEdi |  (optional)

try:
    api_response = api_instance.validate_transactions(validate_edi=validate_edi)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ValidateApi->validate_transactions: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_unb**
> list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validate_unb(unb=unb)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ValidateApi()
unb = swagger_client.EdiFabricCoreModelEdiEdifactUNB() # EdiFabricCoreModelEdiEdifactUNB |  (optional)

try:
    api_response = api_instance.validate_unb(unb=unb)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ValidateApi->validate_unb: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional] 

### Return type

[**list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_ung**
> list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext] validate_ung(ung=ung)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ValidateApi()
ung = swagger_client.EdiFabricCoreModelEdiEdifactUNG() # EdiFabricCoreModelEdiEdifactUNG |  (optional)

try:
    api_response = api_instance.validate_ung(ung=ung)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ValidateApi->validate_ung: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional] 

### Return type

[**list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, application/xml, text/xml, application/*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

