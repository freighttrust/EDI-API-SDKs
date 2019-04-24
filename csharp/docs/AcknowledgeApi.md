# IO.Swagger.Api.AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AcknowledgeEdifact**](AcknowledgeApi.md#acknowledgeedifact) | **POST** /acknowledge/edifact | 
[**AcknowledgeX12**](AcknowledgeApi.md#acknowledgex12) | **POST** /acknowledge/x12 | 


<a name="acknowledgeedifact"></a>
# **AcknowledgeEdifact**
> List<EdiFabricWebApiModelsEdifactAcknowledgment> AcknowledgeEdifact (System.IO.Stream ediFile, string readMode = null, string accept = null, string charSet = null, bool? continueOnError = null, bool? skipTrailerValidation = null, string decimalPoint = null, string syntaxSet = null, bool? transactionDuplicate = null, bool? groupDuplicate = null, string technicalAck = null, bool? generateForValidTransactions = null, bool? allowPartial = null, int? transactionControlNumber = null, string eancomSyntax = null, bool? includeTransactions = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AcknowledgeEdifactExample
    {
        public void main()
        {
            var apiInstance = new AcknowledgeApi();
            var ediFile = new System.IO.Stream(); // System.IO.Stream | EDI file to translate
            var readMode = readMode_example;  // string |  (optional)  (default to read_small)
            var accept = accept_example;  // string |  (optional)  (default to application/json)
            var charSet = charSet_example;  // string |  (optional)  (default to utf-8)
            var continueOnError = true;  // bool? |  (optional)  (default to true)
            var skipTrailerValidation = true;  // bool? |  (optional)  (default to false)
            var decimalPoint = decimalPoint_example;  // string |  (optional)  (default to .)
            var syntaxSet = syntaxSet_example;  // string |  (optional) 
            var transactionDuplicate = true;  // bool? |  (optional)  (default to false)
            var groupDuplicate = true;  // bool? |  (optional)  (default to false)
            var technicalAck = technicalAck_example;  // string |  (optional)  (default to default)
            var generateForValidTransactions = true;  // bool? |  (optional)  (default to false)
            var allowPartial = true;  // bool? |  (optional)  (default to false)
            var transactionControlNumber = 56;  // int? |  (optional)  (default to 1)
            var eancomSyntax = eancomSyntax_example;  // string |  (optional) 
            var includeTransactions = true;  // bool? |  (optional)  (default to false)

            try
            {
                List&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt; result = apiInstance.AcknowledgeEdifact(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AcknowledgeApi.AcknowledgeEdifact: " + e.Message );
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
 **accept** | **string**|  | [optional] [default to application/json]
 **charSet** | **string**|  | [optional] [default to utf-8]
 **continueOnError** | **bool?**|  | [optional] [default to true]
 **skipTrailerValidation** | **bool?**|  | [optional] [default to false]
 **decimalPoint** | **string**|  | [optional] [default to .]
 **syntaxSet** | **string**|  | [optional] 
 **transactionDuplicate** | **bool?**|  | [optional] [default to false]
 **groupDuplicate** | **bool?**|  | [optional] [default to false]
 **technicalAck** | **string**|  | [optional] [default to default]
 **generateForValidTransactions** | **bool?**|  | [optional] [default to false]
 **allowPartial** | **bool?**|  | [optional] [default to false]
 **transactionControlNumber** | **int?**|  | [optional] [default to 1]
 **eancomSyntax** | **string**|  | [optional] 
 **includeTransactions** | **bool?**|  | [optional] [default to false]

### Return type

[**List<EdiFabricWebApiModelsEdifactAcknowledgment>**](EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="acknowledgex12"></a>
# **AcknowledgeX12**
> List<EdiFabricWebApiModelsX12Acknowledgment> AcknowledgeX12 (System.IO.Stream ediFile, string readMode = null, string accept = null, string charSet = null, bool? continueOnError = null, bool? skipTrailerValidation = null, string syntaxSet = null, bool? transactionDuplicate = null, bool? groupDuplicate = null, string technicalAck = null, bool? generateForValidTransactions = null, bool? allowPartial = null, int? transactionControlNumber = null, string ak901 = null, string ackVersion = null, bool? includeTransactions = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AcknowledgeX12Example
    {
        public void main()
        {
            var apiInstance = new AcknowledgeApi();
            var ediFile = new System.IO.Stream(); // System.IO.Stream | EDI file to translate
            var readMode = readMode_example;  // string |  (optional)  (default to read_small)
            var accept = accept_example;  // string |  (optional)  (default to application/json)
            var charSet = charSet_example;  // string |  (optional)  (default to utf-8)
            var continueOnError = true;  // bool? |  (optional)  (default to true)
            var skipTrailerValidation = true;  // bool? |  (optional)  (default to false)
            var syntaxSet = syntaxSet_example;  // string |  (optional) 
            var transactionDuplicate = true;  // bool? |  (optional)  (default to false)
            var groupDuplicate = true;  // bool? |  (optional)  (default to false)
            var technicalAck = technicalAck_example;  // string |  (optional)  (default to default)
            var generateForValidTransactions = true;  // bool? |  (optional)  (default to false)
            var allowPartial = true;  // bool? |  (optional)  (default to false)
            var transactionControlNumber = 56;  // int? |  (optional)  (default to 1)
            var ak901 = ak901_example;  // string |  (optional)  (default to e)
            var ackVersion = ackVersion_example;  // string |  (optional)  (default to 4010_997)
            var includeTransactions = true;  // bool? |  (optional)  (default to false)

            try
            {
                List&lt;EdiFabricWebApiModelsX12Acknowledgment&gt; result = apiInstance.AcknowledgeX12(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AcknowledgeApi.AcknowledgeX12: " + e.Message );
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
 **accept** | **string**|  | [optional] [default to application/json]
 **charSet** | **string**|  | [optional] [default to utf-8]
 **continueOnError** | **bool?**|  | [optional] [default to true]
 **skipTrailerValidation** | **bool?**|  | [optional] [default to false]
 **syntaxSet** | **string**|  | [optional] 
 **transactionDuplicate** | **bool?**|  | [optional] [default to false]
 **groupDuplicate** | **bool?**|  | [optional] [default to false]
 **technicalAck** | **string**|  | [optional] [default to default]
 **generateForValidTransactions** | **bool?**|  | [optional] [default to false]
 **allowPartial** | **bool?**|  | [optional] [default to false]
 **transactionControlNumber** | **int?**|  | [optional] [default to 1]
 **ak901** | **string**|  | [optional] [default to e]
 **ackVersion** | **string**|  | [optional] [default to 4010_997]
 **includeTransactions** | **bool?**|  | [optional] [default to false]

### Return type

[**List<EdiFabricWebApiModelsX12Acknowledgment>**](EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

