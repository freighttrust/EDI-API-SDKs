# IO.Swagger.Api.TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TranslateEdifact**](TranslateApi.md#translateedifact) | **POST** /translate/edifact | 
[**TranslateX12**](TranslateApi.md#translatex12) | **POST** /translate/x12 | 


<a name="translateedifact"></a>
# **TranslateEdifact**
> List<EdiFabricWebApiModelsEdifactInterchange> TranslateEdifact (System.IO.Stream ediFile, string readMode = null, bool? validate = null, string accept = null, string charSet = null, bool? continueOnError = null, bool? transactionOnly = null, string dataElementSeparator = null, string componentDataElementSeparator = null, string segmentSeparator = null, string repetitionSeparator = null, string escapeCharacter = null, string decimalPoint = null, string eancomSyntax = null, bool? skipTrailerValidation = null, string syntaxSet = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TranslateEdifactExample
    {
        public void main()
        {
            var apiInstance = new TranslateApi();
            var ediFile = new System.IO.Stream(); // System.IO.Stream | EDI file to translate
            var readMode = readMode_example;  // string |  (optional)  (default to read_small)
            var validate = true;  // bool? |  (optional)  (default to false)
            var accept = accept_example;  // string |  (optional)  (default to application/json)
            var charSet = charSet_example;  // string |  (optional)  (default to utf-8)
            var continueOnError = true;  // bool? |  (optional)  (default to true)
            var transactionOnly = true;  // bool? |  (optional)  (default to false)
            var dataElementSeparator = dataElementSeparator_example;  // string |  (optional)  (default to +)
            var componentDataElementSeparator = componentDataElementSeparator_example;  // string |  (optional)  (default to :)
            var segmentSeparator = segmentSeparator_example;  // string |  (optional)  (default to ')
            var repetitionSeparator = repetitionSeparator_example;  // string |  (optional)  (default to *)
            var escapeCharacter = escapeCharacter_example;  // string |  (optional)  (default to ?)
            var decimalPoint = decimalPoint_example;  // string |  (optional)  (default to .)
            var eancomSyntax = eancomSyntax_example;  // string |  (optional) 
            var skipTrailerValidation = true;  // bool? |  (optional)  (default to false)
            var syntaxSet = syntaxSet_example;  // string |  (optional) 

            try
            {
                List&lt;EdiFabricWebApiModelsEdifactInterchange&gt; result = apiInstance.TranslateEdifact(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, escapeCharacter, decimalPoint, eancomSyntax, skipTrailerValidation, syntaxSet);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TranslateApi.TranslateEdifact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **System.IO.Stream**| EDI file to translate | 
 **readMode** | **string**|  | [optional] [default to read_small]
 **validate** | **bool?**|  | [optional] [default to false]
 **accept** | **string**|  | [optional] [default to application/json]
 **charSet** | **string**|  | [optional] [default to utf-8]
 **continueOnError** | **bool?**|  | [optional] [default to true]
 **transactionOnly** | **bool?**|  | [optional] [default to false]
 **dataElementSeparator** | **string**|  | [optional] [default to +]
 **componentDataElementSeparator** | **string**|  | [optional] [default to :]
 **segmentSeparator** | **string**|  | [optional] [default to &#39;]
 **repetitionSeparator** | **string**|  | [optional] [default to *]
 **escapeCharacter** | **string**|  | [optional] [default to ?]
 **decimalPoint** | **string**|  | [optional] [default to .]
 **eancomSyntax** | **string**|  | [optional] 
 **skipTrailerValidation** | **bool?**|  | [optional] [default to false]
 **syntaxSet** | **string**|  | [optional] 

### Return type

[**List<EdiFabricWebApiModelsEdifactInterchange>**](EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="translatex12"></a>
# **TranslateX12**
> List<EdiFabricWebApiModelsX12Interchange> TranslateX12 (System.IO.Stream ediFile, string readMode = null, bool? validate = null, string accept = null, string charSet = null, bool? continueOnError = null, bool? transactionOnly = null, string dataElementSeparator = null, string componentDataElementSeparator = null, string segmentSeparator = null, string repetitionSeparator = null, bool? skipTrailerValidation = null, string syntaxSet = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TranslateX12Example
    {
        public void main()
        {
            var apiInstance = new TranslateApi();
            var ediFile = new System.IO.Stream(); // System.IO.Stream | EDI file to translate
            var readMode = readMode_example;  // string |  (optional)  (default to read_small)
            var validate = true;  // bool? |  (optional)  (default to false)
            var accept = accept_example;  // string |  (optional)  (default to application/json)
            var charSet = charSet_example;  // string |  (optional)  (default to utf-8)
            var continueOnError = true;  // bool? |  (optional)  (default to true)
            var transactionOnly = true;  // bool? |  (optional)  (default to false)
            var dataElementSeparator = dataElementSeparator_example;  // string |  (optional)  (default to *)
            var componentDataElementSeparator = componentDataElementSeparator_example;  // string |  (optional)  (default to >)
            var segmentSeparator = segmentSeparator_example;  // string |  (optional)  (default to ~)
            var repetitionSeparator = repetitionSeparator_example;  // string |  (optional)  (default to ^)
            var skipTrailerValidation = true;  // bool? |  (optional)  (default to false)
            var syntaxSet = syntaxSet_example;  // string |  (optional) 

            try
            {
                List&lt;EdiFabricWebApiModelsX12Interchange&gt; result = apiInstance.TranslateX12(ediFile, readMode, validate, accept, charSet, continueOnError, transactionOnly, dataElementSeparator, componentDataElementSeparator, segmentSeparator, repetitionSeparator, skipTrailerValidation, syntaxSet);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TranslateApi.TranslateX12: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **System.IO.Stream**| EDI file to translate | 
 **readMode** | **string**|  | [optional] [default to read_small]
 **validate** | **bool?**|  | [optional] [default to false]
 **accept** | **string**|  | [optional] [default to application/json]
 **charSet** | **string**|  | [optional] [default to utf-8]
 **continueOnError** | **bool?**|  | [optional] [default to true]
 **transactionOnly** | **bool?**|  | [optional] [default to false]
 **dataElementSeparator** | **string**|  | [optional] [default to *]
 **componentDataElementSeparator** | **string**|  | [optional] [default to &gt;]
 **segmentSeparator** | **string**|  | [optional] [default to ~]
 **repetitionSeparator** | **string**|  | [optional] [default to ^]
 **skipTrailerValidation** | **bool?**|  | [optional] [default to false]
 **syntaxSet** | **string**|  | [optional] 

### Return type

[**List<EdiFabricWebApiModelsX12Interchange>**](EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

