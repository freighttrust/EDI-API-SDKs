
# EdiFabricWebApiModelsEdifactAcknowledgment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originalUnb** | [**EdiFabricCoreModelEdiEdifactUNB**](EdiFabricCoreModelEdiEdifactUNB.md) |  |  [optional]
**originalUng** | [**EdiFabricCoreModelEdiEdifactUNG**](EdiFabricCoreModelEdiEdifactUNG.md) |  |  [optional]
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



