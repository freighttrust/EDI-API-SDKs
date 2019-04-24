
# EdiFabricCoreModelEdiErrorContextsDataElementErrorContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  |  [optional]
**position** | **Integer** |  |  [optional]
**code** | [**CodeEnum**](#CodeEnum) |  |  [optional]
**value** | **String** |  |  [optional]
**componentPosition** | **Integer** |  |  [optional]
**repetitionPosition** | **Integer** |  |  [optional]
**message** | **String** |  |  [optional]


<a name="CodeEnum"></a>
## Enum: CodeEnum
Name | Value
---- | -----
REQUIREDDATAELEMENTMISSING | &quot;RequiredDataElementMissing&quot;
CONDITIONALREQUIREDDATAELEMENTMISSING | &quot;ConditionalRequiredDataElementMissing&quot;
TOOMANYDATAELEMENTS | &quot;TooManyDataElements&quot;
DATAELEMENTTOOSHORT | &quot;DataElementTooShort&quot;
DATAELEMENTTOOLONG | &quot;DataElementTooLong&quot;
INVALIDCHARACTERINDATAELEMENT | &quot;InvalidCharacterInDataElement&quot;
INVALIDCODEVALUE | &quot;InvalidCodeValue&quot;
INVALIDDATE | &quot;InvalidDate&quot;
INVALIDTIME | &quot;InvalidTime&quot;
EXCLUSIONCONDITIONVIOLATED | &quot;ExclusionConditionViolated&quot;
TOOMANYREPETITIONS | &quot;TooManyRepetitions&quot;
TOOMANYCOMPONENTS | &quot;TooManyComponents&quot;
TOOFEWREPETITIONS | &quot;TooFewRepetitions&quot;



