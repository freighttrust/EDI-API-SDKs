# EdiFabricApi.EdiFabricCoreModelEdiErrorContextsMessageErrorContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**controlNumber** | **String** |  | [optional] 
**version** | **String** |  | [optional] 
**codes** | **[String]** |  | [optional] 
**errors** | [**[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]**](EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md) |  | [optional] 
**hasErrors** | **Boolean** |  | [optional] 
**message** | **String** |  | [optional] 


<a name="[CodesEnum]"></a>
## Enum: [CodesEnum]


* `TransactionSetNotSupported` (value: `"TransactionSetNotSupported"`)

* `MessageTrailerMissing` (value: `"MessageTrailerMissing"`)

* `ControlNumberNotMatching` (value: `"ControlNumberNotMatching"`)

* `SegmentsCountNotMatching` (value: `"SegmentsCountNotMatching"`)

* `MessageWithErrors` (value: `"MessageWithErrors"`)

* `MissingOrInvalidTransactionSet` (value: `"MissingOrInvalidTransactionSet"`)

* `MissingOrInvalidControlNumber` (value: `"MissingOrInvalidControlNumber"`)

* `DuplicateMessageControlNumber` (value: `"DuplicateMessageControlNumber"`)

* `FunctionalGroupVersionNotSupported` (value: `"FunctionalGroupVersionNotSupported"`)




