# IO.Swagger.Api.ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ValidateGs**](ValidateApi.md#validategs) | **POST** /validate/gs | 
[**ValidateIsa**](ValidateApi.md#validateisa) | **POST** /validate/isa | 
[**ValidateTransactions**](ValidateApi.md#validatetransactions) | **POST** /validate/transactions | 
[**ValidateUnb**](ValidateApi.md#validateunb) | **POST** /validate/unb | 
[**ValidateUng**](ValidateApi.md#validateung) | **POST** /validate/ung | 


<a name="validategs"></a>
# **ValidateGs**
> List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> ValidateGs (EdiFabricCoreModelEdiX12GS gs = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateGsExample
    {
        public void main()
        {
            var apiInstance = new ValidateApi();
            var gs = new EdiFabricCoreModelEdiX12GS(); // EdiFabricCoreModelEdiX12GS |  (optional) 

            try
            {
                List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; result = apiInstance.ValidateGs(gs);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValidateApi.ValidateGs: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md)|  | [optional] 

### Return type

[**List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="validateisa"></a>
# **ValidateIsa**
> List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> ValidateIsa (EdiFabricCoreModelEdiX12ISA isa = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateIsaExample
    {
        public void main()
        {
            var apiInstance = new ValidateApi();
            var isa = new EdiFabricCoreModelEdiX12ISA(); // EdiFabricCoreModelEdiX12ISA |  (optional) 

            try
            {
                List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; result = apiInstance.ValidateIsa(isa);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValidateApi.ValidateIsa: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md)|  | [optional] 

### Return type

[**List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="validatetransactions"></a>
# **ValidateTransactions**
> EdiFabricCoreModelEdiErrorContextsMessageErrorContext ValidateTransactions (EdiFabricWebApiModelsValidateEdi validateEdi = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateTransactionsExample
    {
        public void main()
        {
            var apiInstance = new ValidateApi();
            var validateEdi = new EdiFabricWebApiModelsValidateEdi(); // EdiFabricWebApiModelsValidateEdi |  (optional) 

            try
            {
                EdiFabricCoreModelEdiErrorContextsMessageErrorContext result = apiInstance.ValidateTransactions(validateEdi);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValidateApi.ValidateTransactions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateEdi** | [**EdiFabricWebApiModelsValidateEdi**](EdiFabricWebApiModelsValidateEdi.md)|  | [optional] 

### Return type

[**EdiFabricCoreModelEdiErrorContextsMessageErrorContext**](EdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="validateunb"></a>
# **ValidateUnb**
> List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> ValidateUnb (EdiFabricCoreModelEdiEdifactUNB unb = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateUnbExample
    {
        public void main()
        {
            var apiInstance = new ValidateApi();
            var unb = new EdiFabricCoreModelEdiEdifactUNB(); // EdiFabricCoreModelEdiEdifactUNB |  (optional) 

            try
            {
                List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; result = apiInstance.ValidateUnb(unb);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValidateApi.ValidateUnb: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional] 

### Return type

[**List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="validateung"></a>
# **ValidateUng**
> List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> ValidateUng (EdiFabricCoreModelEdiEdifactUNG ung = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateUngExample
    {
        public void main()
        {
            var apiInstance = new ValidateApi();
            var ung = new EdiFabricCoreModelEdiEdifactUNG(); // EdiFabricCoreModelEdiEdifactUNG |  (optional) 

            try
            {
                List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt; result = apiInstance.ValidateUng(ung);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValidateApi.ValidateUng: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional] 

### Return type

[**List<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

