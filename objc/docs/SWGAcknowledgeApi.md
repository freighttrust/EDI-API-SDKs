# SWGAcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeEdifact**](SWGAcknowledgeApi.md#acknowledgeedifact) | **POST** /acknowledge/edifact | 
[**acknowledgeX12**](SWGAcknowledgeApi.md#acknowledgex12) | **POST** /acknowledge/x12 | 


# **acknowledgeEdifact**
```objc
-(NSURLSessionTask*) acknowledgeEdifactWithEdiFile: (NSURL*) ediFile
    readMode: (NSString*) readMode
    accept: (NSString*) accept
    charSet: (NSString*) charSet
    continueOnError: (NSNumber*) continueOnError
    skipTrailerValidation: (NSNumber*) skipTrailerValidation
    decimalPoint: (NSString*) decimalPoint
    syntaxSet: (NSString*) syntaxSet
    transactionDuplicate: (NSNumber*) transactionDuplicate
    groupDuplicate: (NSNumber*) groupDuplicate
    technicalAck: (NSString*) technicalAck
    generateForValidTransactions: (NSNumber*) generateForValidTransactions
    allowPartial: (NSNumber*) allowPartial
    transactionControlNumber: (NSNumber*) transactionControlNumber
    eancomSyntax: (NSString*) eancomSyntax
    includeTransactions: (NSNumber*) includeTransactions
        completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>* output, NSError* error)) handler;
```



### Example 
```objc

NSURL* ediFile = [NSURL fileURLWithPath:@"/path/to/file.txt"]; // EDI file to translate
NSString* readMode = @"read_small"; //  (optional) (default to read_small)
NSString* accept = @"application/json"; //  (optional) (default to application/json)
NSString* charSet = @"utf-8"; //  (optional) (default to utf-8)
NSNumber* continueOnError = @true; //  (optional) (default to true)
NSNumber* skipTrailerValidation = @false; //  (optional) (default to false)
NSString* decimalPoint = @"."; //  (optional) (default to .)
NSString* syntaxSet = @"syntaxSet_example"; //  (optional)
NSNumber* transactionDuplicate = @false; //  (optional) (default to false)
NSNumber* groupDuplicate = @false; //  (optional) (default to false)
NSString* technicalAck = @"default"; //  (optional) (default to default)
NSNumber* generateForValidTransactions = @false; //  (optional) (default to false)
NSNumber* allowPartial = @false; //  (optional) (default to false)
NSNumber* transactionControlNumber = @1; //  (optional) (default to 1)
NSString* eancomSyntax = @"eancomSyntax_example"; //  (optional)
NSNumber* includeTransactions = @false; //  (optional) (default to false)

SWGAcknowledgeApi*apiInstance = [[SWGAcknowledgeApi alloc] init];

[apiInstance acknowledgeEdifactWithEdiFile:ediFile
              readMode:readMode
              accept:accept
              charSet:charSet
              continueOnError:continueOnError
              skipTrailerValidation:skipTrailerValidation
              decimalPoint:decimalPoint
              syntaxSet:syntaxSet
              transactionDuplicate:transactionDuplicate
              groupDuplicate:groupDuplicate
              technicalAck:technicalAck
              generateForValidTransactions:generateForValidTransactions
              allowPartial:allowPartial
              transactionControlNumber:transactionControlNumber
              eancomSyntax:eancomSyntax
              includeTransactions:includeTransactions
          completionHandler: ^(NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGAcknowledgeApi->acknowledgeEdifact: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **NSURL***| EDI file to translate | 
 **readMode** | **NSString***|  | [optional] [default to read_small]
 **accept** | **NSString***|  | [optional] [default to application/json]
 **charSet** | **NSString***|  | [optional] [default to utf-8]
 **continueOnError** | **NSNumber***|  | [optional] [default to true]
 **skipTrailerValidation** | **NSNumber***|  | [optional] [default to false]
 **decimalPoint** | **NSString***|  | [optional] [default to .]
 **syntaxSet** | **NSString***|  | [optional] 
 **transactionDuplicate** | **NSNumber***|  | [optional] [default to false]
 **groupDuplicate** | **NSNumber***|  | [optional] [default to false]
 **technicalAck** | **NSString***|  | [optional] [default to default]
 **generateForValidTransactions** | **NSNumber***|  | [optional] [default to false]
 **allowPartial** | **NSNumber***|  | [optional] [default to false]
 **transactionControlNumber** | **NSNumber***|  | [optional] [default to 1]
 **eancomSyntax** | **NSString***|  | [optional] 
 **includeTransactions** | **NSNumber***|  | [optional] [default to false]

### Return type

[**NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>***](SWGEdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acknowledgeX12**
```objc
-(NSURLSessionTask*) acknowledgeX12WithEdiFile: (NSURL*) ediFile
    readMode: (NSString*) readMode
    accept: (NSString*) accept
    charSet: (NSString*) charSet
    continueOnError: (NSNumber*) continueOnError
    skipTrailerValidation: (NSNumber*) skipTrailerValidation
    syntaxSet: (NSString*) syntaxSet
    transactionDuplicate: (NSNumber*) transactionDuplicate
    groupDuplicate: (NSNumber*) groupDuplicate
    technicalAck: (NSString*) technicalAck
    generateForValidTransactions: (NSNumber*) generateForValidTransactions
    allowPartial: (NSNumber*) allowPartial
    transactionControlNumber: (NSNumber*) transactionControlNumber
    ak901: (NSString*) ak901
    ackVersion: (NSString*) ackVersion
    includeTransactions: (NSNumber*) includeTransactions
        completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>* output, NSError* error)) handler;
```



### Example 
```objc

NSURL* ediFile = [NSURL fileURLWithPath:@"/path/to/file.txt"]; // EDI file to translate
NSString* readMode = @"read_small"; //  (optional) (default to read_small)
NSString* accept = @"application/json"; //  (optional) (default to application/json)
NSString* charSet = @"utf-8"; //  (optional) (default to utf-8)
NSNumber* continueOnError = @true; //  (optional) (default to true)
NSNumber* skipTrailerValidation = @false; //  (optional) (default to false)
NSString* syntaxSet = @"syntaxSet_example"; //  (optional)
NSNumber* transactionDuplicate = @false; //  (optional) (default to false)
NSNumber* groupDuplicate = @false; //  (optional) (default to false)
NSString* technicalAck = @"default"; //  (optional) (default to default)
NSNumber* generateForValidTransactions = @false; //  (optional) (default to false)
NSNumber* allowPartial = @false; //  (optional) (default to false)
NSNumber* transactionControlNumber = @1; //  (optional) (default to 1)
NSString* ak901 = @"e"; //  (optional) (default to e)
NSString* ackVersion = @"4010_997"; //  (optional) (default to 4010_997)
NSNumber* includeTransactions = @false; //  (optional) (default to false)

SWGAcknowledgeApi*apiInstance = [[SWGAcknowledgeApi alloc] init];

[apiInstance acknowledgeX12WithEdiFile:ediFile
              readMode:readMode
              accept:accept
              charSet:charSet
              continueOnError:continueOnError
              skipTrailerValidation:skipTrailerValidation
              syntaxSet:syntaxSet
              transactionDuplicate:transactionDuplicate
              groupDuplicate:groupDuplicate
              technicalAck:technicalAck
              generateForValidTransactions:generateForValidTransactions
              allowPartial:allowPartial
              transactionControlNumber:transactionControlNumber
              ak901:ak901
              ackVersion:ackVersion
              includeTransactions:includeTransactions
          completionHandler: ^(NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGAcknowledgeApi->acknowledgeX12: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediFile** | **NSURL***| EDI file to translate | 
 **readMode** | **NSString***|  | [optional] [default to read_small]
 **accept** | **NSString***|  | [optional] [default to application/json]
 **charSet** | **NSString***|  | [optional] [default to utf-8]
 **continueOnError** | **NSNumber***|  | [optional] [default to true]
 **skipTrailerValidation** | **NSNumber***|  | [optional] [default to false]
 **syntaxSet** | **NSString***|  | [optional] 
 **transactionDuplicate** | **NSNumber***|  | [optional] [default to false]
 **groupDuplicate** | **NSNumber***|  | [optional] [default to false]
 **technicalAck** | **NSString***|  | [optional] [default to default]
 **generateForValidTransactions** | **NSNumber***|  | [optional] [default to false]
 **allowPartial** | **NSNumber***|  | [optional] [default to false]
 **transactionControlNumber** | **NSNumber***|  | [optional] [default to 1]
 **ak901** | **NSString***|  | [optional] [default to e]
 **ackVersion** | **NSString***|  | [optional] [default to 4010_997]
 **includeTransactions** | **NSNumber***|  | [optional] [default to false]

### Return type

[**NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>***](SWGEdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

