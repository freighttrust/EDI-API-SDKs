
# EdiFabricCoreModelEdiErrorContextsMessageErrorContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  |  [optional]
**controlNumber** | **String** |  |  [optional]
**version** | **String** |  |  [optional]
**codes** | [**List&lt;CodesEnum&gt;**](#List&lt;CodesEnum&gt;) |  |  [optional]
**errors** | [**List&lt;EdiFabricCoreModelEdiErrorContextsSegmentErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md) |  |  [optional]
**hasErrors** | **Boolean** |  |  [optional]
**message** | **String** |  |  [optional]


<a name="List<CodesEnum>"></a>
## Enum: List&lt;CodesEnum&gt;
Name | Value
---- | -----
TRANSACTIONSETNOTSUPPORTED | &quot;TransactionSetNotSupported&quot;
MESSAGETRAILERMISSING | &quot;MessageTrailerMissing&quot;
CONTROLNUMBERNOTMATCHING | &quot;ControlNumberNotMatching&quot;
SEGMENTSCOUNTNOTMATCHING | &quot;SegmentsCountNotMatching&quot;
MESSAGEWITHERRORS | &quot;MessageWithErrors&quot;
MISSINGORINVALIDTRANSACTIONSET | &quot;MissingOrInvalidTransactionSet&quot;
MISSINGORINVALIDCONTROLNUMBER | &quot;MissingOrInvalidControlNumber&quot;
DUPLICATEMESSAGECONTROLNUMBER | &quot;DuplicateMessageControlNumber&quot;
FUNCTIONALGROUPVERSIONNOTSUPPORTED | &quot;FunctionalGroupVersionNotSupported&quot;



