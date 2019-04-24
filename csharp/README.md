# IO.Swagger - the C# library for the EdiFabric API

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

This C# SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- SDK version: 1.0.0
- Build package: io.swagger.codegen.languages.CSharpClientCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET 4.0 or later
- Windows Phone 7.1 (Mango)

<a name="dependencies"></a>
## Dependencies
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742)

<a name="installation"></a>
## Installation
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh build.sh`
- [Windows] `build.bat`

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;
```
<a name="packaging"></a>
## Packaging

A `.nuspec` is included with the project. You can follow the Nuget quickstart to [create](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#create-the-package) and [publish](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#publish-the-package) packages.

This `.nuspec` uses placeholders from the `.csproj`, so build the `.csproj` directly:

```
nuget pack -Build -OutputDirectory out IO.Swagger.csproj
```

Then, publish to a [local feed](https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds) or [other host](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) and consume the new package via Nuget as usual.

<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Example
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
                List<EdiFabricWebApiModelsEdifactAcknowledgment> result = apiInstance.AcknowledgeEdifact(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions);
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

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AcknowledgeApi* | [**AcknowledgeEdifact**](docs/AcknowledgeApi.md#acknowledgeedifact) | **POST** /acknowledge/edifact | 
*AcknowledgeApi* | [**AcknowledgeX12**](docs/AcknowledgeApi.md#acknowledgex12) | **POST** /acknowledge/x12 | 
*GenerateApi* | [**GenerateEdifactGroup**](docs/GenerateApi.md#generateedifactgroup) | **POST** /generate/edifact-group | 
*GenerateApi* | [**GenerateEdifactInterchange**](docs/GenerateApi.md#generateedifactinterchange) | **POST** /generate/edifact-interchange | 
*GenerateApi* | [**GenerateEdifactTransactions**](docs/GenerateApi.md#generateedifacttransactions) | **POST** /generate/edifact-transactions | 
*GenerateApi* | [**GenerateGs**](docs/GenerateApi.md#generategs) | **POST** /generate/gs | 
*GenerateApi* | [**GenerateIsa**](docs/GenerateApi.md#generateisa) | **POST** /generate/isa | 
*GenerateApi* | [**GenerateUnb**](docs/GenerateApi.md#generateunb) | **POST** /generate/unb | 
*GenerateApi* | [**GenerateUng**](docs/GenerateApi.md#generateung) | **POST** /generate/ung | 
*GenerateApi* | [**GenerateX12Group**](docs/GenerateApi.md#generatex12group) | **POST** /generate/x12-group | 
*GenerateApi* | [**GenerateX12Interchange**](docs/GenerateApi.md#generatex12interchange) | **POST** /generate/x12-interchange | 
*GenerateApi* | [**GenerateX12Transactions**](docs/GenerateApi.md#generatex12transactions) | **POST** /generate/x12-transactions | 
*TranslateApi* | [**TranslateEdifact**](docs/TranslateApi.md#translateedifact) | **POST** /translate/edifact | 
*TranslateApi* | [**TranslateX12**](docs/TranslateApi.md#translatex12) | **POST** /translate/x12 | 
*ValidateApi* | [**ValidateGs**](docs/ValidateApi.md#validategs) | **POST** /validate/gs | 
*ValidateApi* | [**ValidateIsa**](docs/ValidateApi.md#validateisa) | **POST** /validate/isa | 
*ValidateApi* | [**ValidateTransactions**](docs/ValidateApi.md#validatetransactions) | **POST** /validate/transactions | 
*ValidateApi* | [**ValidateUnb**](docs/ValidateApi.md#validateunb) | **POST** /validate/unb | 
*ValidateApi* | [**ValidateUng**](docs/ValidateApi.md#validateung) | **POST** /validate/ung | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.EdiFabricCoreModelEdiEdiMessage](docs/EdiFabricCoreModelEdiEdiMessage.md)
 - [Model.EdiFabricCoreModelEdiEdifactS001](docs/EdiFabricCoreModelEdiEdifactS001.md)
 - [Model.EdiFabricCoreModelEdiEdifactS002](docs/EdiFabricCoreModelEdiEdifactS002.md)
 - [Model.EdiFabricCoreModelEdiEdifactS003](docs/EdiFabricCoreModelEdiEdifactS003.md)
 - [Model.EdiFabricCoreModelEdiEdifactS004](docs/EdiFabricCoreModelEdiEdifactS004.md)
 - [Model.EdiFabricCoreModelEdiEdifactS005](docs/EdiFabricCoreModelEdiEdifactS005.md)
 - [Model.EdiFabricCoreModelEdiEdifactS006](docs/EdiFabricCoreModelEdiEdifactS006.md)
 - [Model.EdiFabricCoreModelEdiEdifactS007](docs/EdiFabricCoreModelEdiEdifactS007.md)
 - [Model.EdiFabricCoreModelEdiEdifactS008](docs/EdiFabricCoreModelEdiEdifactS008.md)
 - [Model.EdiFabricCoreModelEdiEdifactUNB](docs/EdiFabricCoreModelEdiEdifactUNB.md)
 - [Model.EdiFabricCoreModelEdiEdifactUNE](docs/EdiFabricCoreModelEdiEdifactUNE.md)
 - [Model.EdiFabricCoreModelEdiEdifactUNG](docs/EdiFabricCoreModelEdiEdifactUNG.md)
 - [Model.EdiFabricCoreModelEdiEdifactUNZ](docs/EdiFabricCoreModelEdiEdifactUNZ.md)
 - [Model.EdiFabricCoreModelEdiErrorContextsDataElementErrorContext](docs/EdiFabricCoreModelEdiErrorContextsDataElementErrorContext.md)
 - [Model.EdiFabricCoreModelEdiErrorContextsMessageErrorContext](docs/EdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)
 - [Model.EdiFabricCoreModelEdiErrorContextsReaderErrorContext](docs/EdiFabricCoreModelEdiErrorContextsReaderErrorContext.md)
 - [Model.EdiFabricCoreModelEdiErrorContextsSegmentErrorContext](docs/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)
 - [Model.EdiFabricCoreModelEdiX12GE](docs/EdiFabricCoreModelEdiX12GE.md)
 - [Model.EdiFabricCoreModelEdiX12GS](docs/EdiFabricCoreModelEdiX12GS.md)
 - [Model.EdiFabricCoreModelEdiX12IEA](docs/EdiFabricCoreModelEdiX12IEA.md)
 - [Model.EdiFabricCoreModelEdiX12ISA](docs/EdiFabricCoreModelEdiX12ISA.md)
 - [Model.EdiFabricWebApiModelsEdifactAcknowledgment](docs/EdiFabricWebApiModelsEdifactAcknowledgment.md)
 - [Model.EdiFabricWebApiModelsEdifactGroup](docs/EdiFabricWebApiModelsEdifactGroup.md)
 - [Model.EdiFabricWebApiModelsEdifactInterchange](docs/EdiFabricWebApiModelsEdifactInterchange.md)
 - [Model.EdiFabricWebApiModelsErrorDetails](docs/EdiFabricWebApiModelsErrorDetails.md)
 - [Model.EdiFabricWebApiModelsGenerateEdifactGroup](docs/EdiFabricWebApiModelsGenerateEdifactGroup.md)
 - [Model.EdiFabricWebApiModelsGenerateEdifactInterchange](docs/EdiFabricWebApiModelsGenerateEdifactInterchange.md)
 - [Model.EdiFabricWebApiModelsGenerateEdifactTransactions](docs/EdiFabricWebApiModelsGenerateEdifactTransactions.md)
 - [Model.EdiFabricWebApiModelsGenerateGs](docs/EdiFabricWebApiModelsGenerateGs.md)
 - [Model.EdiFabricWebApiModelsGenerateIsa](docs/EdiFabricWebApiModelsGenerateIsa.md)
 - [Model.EdiFabricWebApiModelsGenerateSettings](docs/EdiFabricWebApiModelsGenerateSettings.md)
 - [Model.EdiFabricWebApiModelsGenerateUnb](docs/EdiFabricWebApiModelsGenerateUnb.md)
 - [Model.EdiFabricWebApiModelsGenerateUng](docs/EdiFabricWebApiModelsGenerateUng.md)
 - [Model.EdiFabricWebApiModelsGenerateX12Group](docs/EdiFabricWebApiModelsGenerateX12Group.md)
 - [Model.EdiFabricWebApiModelsGenerateX12Interchange](docs/EdiFabricWebApiModelsGenerateX12Interchange.md)
 - [Model.EdiFabricWebApiModelsGenerateX12Transactions](docs/EdiFabricWebApiModelsGenerateX12Transactions.md)
 - [Model.EdiFabricWebApiModelsValidateEdi](docs/EdiFabricWebApiModelsValidateEdi.md)
 - [Model.EdiFabricWebApiModelsValidateSettings](docs/EdiFabricWebApiModelsValidateSettings.md)
 - [Model.EdiFabricWebApiModelsX12Acknowledgment](docs/EdiFabricWebApiModelsX12Acknowledgment.md)
 - [Model.EdiFabricWebApiModelsX12Group](docs/EdiFabricWebApiModelsX12Group.md)
 - [Model.EdiFabricWebApiModelsX12Interchange](docs/EdiFabricWebApiModelsX12Interchange.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.