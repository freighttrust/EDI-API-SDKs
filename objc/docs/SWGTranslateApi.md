# SWGTranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translateEdifact**](SWGTranslateApi.md#translateedifact) | **POST** /translate/edifact | 
[**translateX12**](SWGTranslateApi.md#translatex12) | **POST** /translate/x12 | 


# **translateEdifact**
```objc
-(NSURLSessionTask*) translateEdifactWithEdiFile: (NSURL*) ediFile
    readMode: (NSString*) readMode
    validate: (NSNumber*) validate
    accept: (NSString*) accept
    charSet: (NSString*) charSet
    continueOnError: (NSNumber*) continueOnError
    transactionOnly: (NSNumber*) transactionOnly
    dataElementSeparator: (NSString*) dataElementSeparator
    componentDataElementSeparator: (NSString*) componentDataElementSeparator
    segmentSeparator: (NSString*) segmentSeparator
    repetitionSeparator: (NSString*) repetitionSeparator
    escapeCharacter: (NSString*) escapeCharacter
    decimalPoint: (NSString*) decimalPoint
    eancomSyntax: (NSString*) eancomSyntax
    skipTrailerValidation: (NSNumber*) skipTrailerValidation
    syntaxSet: (NSString*) syntaxSet
        completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>* output, NSError* error)) handler;
```



### Example 
```objc

NSURL* ediFile = [NSURL fileURLWithPath:@"/path/to/file.txt"]; // EDI file to translate
NSString* readMode = @"read_small"; //  (optional) (default to read_small)
NSNumber* validate = @false; //  (optional) (default to false)
NSString* accept = @"application/json"; //  (optional) (default to application/json)
NSString* charSet = @"utf-8"; //  (optional) (default to utf-8)
NSNumber* continueOnError = @true; //  (optional) (default to true)
NSNumber* transactionOnly = @false; //  (optional) (default to false)
NSString* dataElementSeparator = @"+"; //  (optional) (default to +)
NSString* componentDataElementSeparator = @":"; //  (optional) (default to :)
NSString* segmentSeparator = @"'"; //  (optional) (default to ')
NSString* repetitionSeparator = @"*"; //  (optional) (default to *)
NSString* escapeCharacter = @"?"; //  (optional) (default to ?)
NSString* decimalPoint = @"."; //  (optional) (default to .)
NSString* eancomSyntax = @"eancomSyntax_example"; //  (optional)
NSNumber* skipTrailerValidation = @false; //  (optional) (default to false)
NSString* syntaxSet = @"syntaxSet_example"; //  (optional)

SWGTranslateApi*apiInstance = [[SWGTranslateApi alloc] init];

[apiInstance translateEdifactWithEdiFile:ediFile
              readMode:readMode
              validate:validate
              accept:accept
              charSet:charSet
              continueOnError:continueOnError
              transactionOnly:transactionOnly
              dataElementSeparator:dataElementSeparator
              componentDataElementSeparator:componentDataElementSeparator
              segmentSeparator:segmentSeparator
              repetitionSeparator:repetitionSeparator
              escapeCharacter:escapeCharacter
              decimalPoint:decimalPoint
              eancomSyntax:eancomSyntax
              skipTrailerValidation:skipTrailerValidation
              syntaxSet:syntaxSet
          completionHandler: ^(NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGTranslateApi->translateEdifact: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **NSURL***| EDI file to translate | 
 **readMode** | **NSString***|  | [optional] [default to read_small]
 **validate** | **NSNumber***|  | [optional] [default to false]
 **accept** | **NSString***|  | [optional] [default to application/json]
 **charSet** | **NSString***|  | [optional] [default to utf-8]
 **continueOnError** | **NSNumber***|  | [optional] [default to true]
 **transactionOnly** | **NSNumber***|  | [optional] [default to false]
 **dataElementSeparator** | **NSString***|  | [optional] [default to +]
 **componentDataElementSeparator** | **NSString***|  | [optional] [default to :]
 **segmentSeparator** | **NSString***|  | [optional] [default to &#39;]
 **repetitionSeparator** | **NSString***|  | [optional] [default to *]
 **escapeCharacter** | **NSString***|  | [optional] [default to ?]
 **decimalPoint** | **NSString***|  | [optional] [default to .]
 **eancomSyntax** | **NSString***|  | [optional] 
 **skipTrailerValidation** | **NSNumber***|  | [optional] [default to false]
 **syntaxSet** | **NSString***|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>***](SWGEdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translateX12**
```objc
-(NSURLSessionTask*) translateX12WithEdiFile: (NSURL*) ediFile
    readMode: (NSString*) readMode
    validate: (NSNumber*) validate
    accept: (NSString*) accept
    charSet: (NSString*) charSet
    continueOnError: (NSNumber*) continueOnError
    transactionOnly: (NSNumber*) transactionOnly
    dataElementSeparator: (NSString*) dataElementSeparator
    componentDataElementSeparator: (NSString*) componentDataElementSeparator
    segmentSeparator: (NSString*) segmentSeparator
    repetitionSeparator: (NSString*) repetitionSeparator
    skipTrailerValidation: (NSNumber*) skipTrailerValidation
    syntaxSet: (NSString*) syntaxSet
        completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsX12Interchange>* output, NSError* error)) handler;
```



### Example 
```objc

NSURL* ediFile = [NSURL fileURLWithPath:@"/path/to/file.txt"]; // EDI file to translate
NSString* readMode = @"read_small"; //  (optional) (default to read_small)
NSNumber* validate = @false; //  (optional) (default to false)
NSString* accept = @"application/json"; //  (optional) (default to application/json)
NSString* charSet = @"utf-8"; //  (optional) (default to utf-8)
NSNumber* continueOnError = @true; //  (optional) (default to true)
NSNumber* transactionOnly = @false; //  (optional) (default to false)
NSString* dataElementSeparator = @"*"; //  (optional) (default to *)
NSString* componentDataElementSeparator = @">"; //  (optional) (default to >)
NSString* segmentSeparator = @"~"; //  (optional) (default to ~)
NSString* repetitionSeparator = @"^"; //  (optional) (default to ^)
NSNumber* skipTrailerValidation = @false; //  (optional) (default to false)
NSString* syntaxSet = @"syntaxSet_example"; //  (optional)

SWGTranslateApi*apiInstance = [[SWGTranslateApi alloc] init];

[apiInstance translateX12WithEdiFile:ediFile
              readMode:readMode
              validate:validate
              accept:accept
              charSet:charSet
              continueOnError:continueOnError
              transactionOnly:transactionOnly
              dataElementSeparator:dataElementSeparator
              componentDataElementSeparator:componentDataElementSeparator
              segmentSeparator:segmentSeparator
              repetitionSeparator:repetitionSeparator
              skipTrailerValidation:skipTrailerValidation
              syntaxSet:syntaxSet
          completionHandler: ^(NSArray<SWGEdiFabricWebApiModelsX12Interchange>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGTranslateApi->translateX12: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **NSURL***| EDI file to translate | 
 **readMode** | **NSString***|  | [optional] [default to read_small]
 **validate** | **NSNumber***|  | [optional] [default to false]
 **accept** | **NSString***|  | [optional] [default to application/json]
 **charSet** | **NSString***|  | [optional] [default to utf-8]
 **continueOnError** | **NSNumber***|  | [optional] [default to true]
 **transactionOnly** | **NSNumber***|  | [optional] [default to false]
 **dataElementSeparator** | **NSString***|  | [optional] [default to *]
 **componentDataElementSeparator** | **NSString***|  | [optional] [default to &gt;]
 **segmentSeparator** | **NSString***|  | [optional] [default to ~]
 **repetitionSeparator** | **NSString***|  | [optional] [default to ^]
 **skipTrailerValidation** | **NSNumber***|  | [optional] [default to false]
 **syntaxSet** | **NSString***|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricWebApiModelsX12Interchange>***](SWGEdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

