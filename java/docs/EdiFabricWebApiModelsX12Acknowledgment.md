
# EdiFabricWebApiModelsX12Acknowledgment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originalIsa** | [**EdiFabricCoreModelEdiX12ISA**](EdiFabricCoreModelEdiX12ISA.md) |  |  [optional]
**originalGs** | [**EdiFabricCoreModelEdiX12GS**](EdiFabricCoreModelEdiX12GS.md) |  |  [optional]
**ackType** | [**AckTypeEnum**](#AckTypeEnum) |  |  [optional]
**ack** | [**EdiFabricCoreModelEdiEdiMessage**](EdiFabricCoreModelEdiEdiMessage.md) |  |  [optional]
**originalTransactions** | [**List&lt;EdiFabricCoreModelEdiEdiMessage&gt;**](EdiFabricCoreModelEdiEdiMessage.md) |  |  [optional]


<a name="AckTypeEnum"></a>
## Enum: AckTypeEnum
Name | Value
---- | -----
TECHNICAL | &quot;Technical&quot;
FUNCTIONAL | &quot;Functional&quot;
IMPLEMENTATION | &quot;Implementation&quot;



