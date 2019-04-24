# IO.Swagger.Api.GenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GenerateEdifactGroup**](GenerateApi.md#generateedifactgroup) | **POST** /generate/edifact-group | 
[**GenerateEdifactInterchange**](GenerateApi.md#generateedifactinterchange) | **POST** /generate/edifact-interchange | 
[**GenerateEdifactTransactions**](GenerateApi.md#generateedifacttransactions) | **POST** /generate/edifact-transactions | 
[**GenerateGs**](GenerateApi.md#generategs) | **POST** /generate/gs | 
[**GenerateIsa**](GenerateApi.md#generateisa) | **POST** /generate/isa | 
[**GenerateUnb**](GenerateApi.md#generateunb) | **POST** /generate/unb | 
[**GenerateUng**](GenerateApi.md#generateung) | **POST** /generate/ung | 
[**GenerateX12Group**](GenerateApi.md#generatex12group) | **POST** /generate/x12-group | 
[**GenerateX12Interchange**](GenerateApi.md#generatex12interchange) | **POST** /generate/x12-interchange | 
[**GenerateX12Transactions**](GenerateApi.md#generatex12transactions) | **POST** /generate/x12-transactions | 


<a name="generateedifactgroup"></a>
# **GenerateEdifactGroup**
> System.IO.Stream GenerateEdifactGroup (EdiFabricWebApiModelsGenerateEdifactGroup generateEdifactGroup = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateEdifactGroupExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateEdifactGroup = new EdiFabricWebApiModelsGenerateEdifactGroup(); // EdiFabricWebApiModelsGenerateEdifactGroup |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateEdifactGroup(generateEdifactGroup);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateEdifactGroup: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactGroup** | [**EdiFabricWebApiModelsGenerateEdifactGroup**](EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generateedifactinterchange"></a>
# **GenerateEdifactInterchange**
> System.IO.Stream GenerateEdifactInterchange (EdiFabricWebApiModelsGenerateEdifactInterchange generateEdifactInterchange = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateEdifactInterchangeExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateEdifactInterchange = new EdiFabricWebApiModelsGenerateEdifactInterchange(); // EdiFabricWebApiModelsGenerateEdifactInterchange |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateEdifactInterchange(generateEdifactInterchange);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateEdifactInterchange: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactInterchange** | [**EdiFabricWebApiModelsGenerateEdifactInterchange**](EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generateedifacttransactions"></a>
# **GenerateEdifactTransactions**
> System.IO.Stream GenerateEdifactTransactions (EdiFabricWebApiModelsGenerateEdifactTransactions generateEdifactTransactions = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateEdifactTransactionsExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateEdifactTransactions = new EdiFabricWebApiModelsGenerateEdifactTransactions(); // EdiFabricWebApiModelsGenerateEdifactTransactions |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateEdifactTransactions(generateEdifactTransactions);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateEdifactTransactions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactTransactions** | [**EdiFabricWebApiModelsGenerateEdifactTransactions**](EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generategs"></a>
# **GenerateGs**
> System.IO.Stream GenerateGs (EdiFabricWebApiModelsGenerateGs generateGs = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateGsExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateGs = new EdiFabricWebApiModelsGenerateGs(); // EdiFabricWebApiModelsGenerateGs |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateGs(generateGs);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateGs: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateGs** | [**EdiFabricWebApiModelsGenerateGs**](EdiFabricWebApiModelsGenerateGs.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generateisa"></a>
# **GenerateIsa**
> System.IO.Stream GenerateIsa (EdiFabricWebApiModelsGenerateIsa generateIsa = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateIsaExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateIsa = new EdiFabricWebApiModelsGenerateIsa(); // EdiFabricWebApiModelsGenerateIsa |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateIsa(generateIsa);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateIsa: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateIsa** | [**EdiFabricWebApiModelsGenerateIsa**](EdiFabricWebApiModelsGenerateIsa.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generateunb"></a>
# **GenerateUnb**
> System.IO.Stream GenerateUnb (EdiFabricWebApiModelsGenerateUnb generateUnb = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateUnbExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateUnb = new EdiFabricWebApiModelsGenerateUnb(); // EdiFabricWebApiModelsGenerateUnb |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateUnb(generateUnb);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateUnb: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnb** | [**EdiFabricWebApiModelsGenerateUnb**](EdiFabricWebApiModelsGenerateUnb.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generateung"></a>
# **GenerateUng**
> System.IO.Stream GenerateUng (EdiFabricWebApiModelsGenerateUng generateUng = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateUngExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateUng = new EdiFabricWebApiModelsGenerateUng(); // EdiFabricWebApiModelsGenerateUng |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateUng(generateUng);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateUng: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUng** | [**EdiFabricWebApiModelsGenerateUng**](EdiFabricWebApiModelsGenerateUng.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generatex12group"></a>
# **GenerateX12Group**
> System.IO.Stream GenerateX12Group (EdiFabricWebApiModelsGenerateX12Group generateX12Group = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateX12GroupExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateX12Group = new EdiFabricWebApiModelsGenerateX12Group(); // EdiFabricWebApiModelsGenerateX12Group |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateX12Group(generateX12Group);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateX12Group: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Group** | [**EdiFabricWebApiModelsGenerateX12Group**](EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generatex12interchange"></a>
# **GenerateX12Interchange**
> System.IO.Stream GenerateX12Interchange (EdiFabricWebApiModelsGenerateX12Interchange generateX12Interchange = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateX12InterchangeExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateX12Interchange = new EdiFabricWebApiModelsGenerateX12Interchange(); // EdiFabricWebApiModelsGenerateX12Interchange |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateX12Interchange(generateX12Interchange);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateX12Interchange: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Interchange** | [**EdiFabricWebApiModelsGenerateX12Interchange**](EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="generatex12transactions"></a>
# **GenerateX12Transactions**
> System.IO.Stream GenerateX12Transactions (EdiFabricWebApiModelsGenerateX12Transactions generateX12Transactions = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GenerateX12TransactionsExample
    {
        public void main()
        {
            var apiInstance = new GenerateApi();
            var generateX12Transactions = new EdiFabricWebApiModelsGenerateX12Transactions(); // EdiFabricWebApiModelsGenerateX12Transactions |  (optional) 

            try
            {
                System.IO.Stream result = apiInstance.GenerateX12Transactions(generateX12Transactions);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GenerateApi.GenerateX12Transactions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Transactions** | [**EdiFabricWebApiModelsGenerateX12Transactions**](EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

