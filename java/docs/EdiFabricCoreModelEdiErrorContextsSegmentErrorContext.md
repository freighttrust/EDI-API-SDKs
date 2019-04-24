
# EdiFabricCoreModelEdiErrorContextsSegmentErrorContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  |  [optional]
**position** | **Integer** |  |  [optional]
**value** | **String** |  |  [optional]
**codes** | [**List&lt;CodesEnum&gt;**](#List&lt;CodesEnum&gt;) |  |  [optional]
**errors** | [**List&lt;EdiFabricCoreModelEdiErrorContextsDataElementErrorContext&gt;**](EdiFabricCoreModelEdiErrorContextsDataElementErrorContext.md) |  |  [optional]
**message** | **String** |  |  [optional]


<a name="List<CodesEnum>"></a>
## Enum: List&lt;CodesEnum&gt;
Name | Value
---- | -----
UNRECOGNIZEDSEGMENT | &quot;UnrecognizedSegment&quot;
REQUIREDSEGMENTMISSING | &quot;RequiredSegmentMissing&quot;
LOOPEXCEEDSMAXIMUMUSE | &quot;LoopExceedsMaximumUse&quot;
SEGMENTEXCEEDSMAXIMUMUSE | &quot;SegmentExceedsMaximumUse&quot;
SEGMENTNOTINPROPERSEQUENCE | &quot;SegmentNotInProperSequence&quot;
LOOPBELOWMINIMUMUSE | &quot;LoopBelowMinimumUse&quot;
SEGMENTBELOWMINIMUMUSE | &quot;SegmentBelowMinimumUse&quot;



