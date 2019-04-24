# SWGValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateGs**](SWGValidateApi.md#validategs) | **POST** /validate/gs | 
[**validateIsa**](SWGValidateApi.md#validateisa) | **POST** /validate/isa | 
[**validateTransactions**](SWGValidateApi.md#validatetransactions) | **POST** /validate/transactions | 
[**validateUnb**](SWGValidateApi.md#validateunb) | **POST** /validate/unb | 
[**validateUng**](SWGValidateApi.md#validateung) | **POST** /validate/ung | 


# **validateGs**
```objc
-(NSURLSessionTask*) validateGsWithGs: (SWGEdiFabricCoreModelEdiX12GS*) gs
        completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricCoreModelEdiX12GS* gs = [[SWGEdiFabricCoreModelEdiX12GS alloc] init]; //  (optional)

SWGValidateApi*apiInstance = [[SWGValidateApi alloc] init];

[apiInstance validateGsWithGs:gs
          completionHandler: ^(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGValidateApi->validateGs: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**SWGEdiFabricCoreModelEdiX12GS***](SWGEdiFabricCoreModelEdiX12GS.md)|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>***](SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateIsa**
```objc
-(NSURLSessionTask*) validateIsaWithIsa: (SWGEdiFabricCoreModelEdiX12ISA*) isa
        completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricCoreModelEdiX12ISA* isa = [[SWGEdiFabricCoreModelEdiX12ISA alloc] init]; //  (optional)

SWGValidateApi*apiInstance = [[SWGValidateApi alloc] init];

[apiInstance validateIsaWithIsa:isa
          completionHandler: ^(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGValidateApi->validateIsa: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**SWGEdiFabricCoreModelEdiX12ISA***](SWGEdiFabricCoreModelEdiX12ISA.md)|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>***](SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateTransactions**
```objc
-(NSURLSessionTask*) validateTransactionsWithValidateEdi: (SWGEdiFabricWebApiModelsValidateEdi*) validateEdi
        completionHandler: (void (^)(SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsValidateEdi* validateEdi = [[SWGEdiFabricWebApiModelsValidateEdi alloc] init]; //  (optional)

SWGValidateApi*apiInstance = [[SWGValidateApi alloc] init];

[apiInstance validateTransactionsWithValidateEdi:validateEdi
          completionHandler: ^(SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGValidateApi->validateTransactions: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateEdi** | [**SWGEdiFabricWebApiModelsValidateEdi***](SWGEdiFabricWebApiModelsValidateEdi.md)|  | [optional] 

### Return type

[**SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext***](SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateUnb**
```objc
-(NSURLSessionTask*) validateUnbWithUnb: (SWGEdiFabricCoreModelEdiEdifactUNB*) unb
        completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricCoreModelEdiEdifactUNB* unb = [[SWGEdiFabricCoreModelEdiEdifactUNB alloc] init]; //  (optional)

SWGValidateApi*apiInstance = [[SWGValidateApi alloc] init];

[apiInstance validateUnbWithUnb:unb
          completionHandler: ^(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGValidateApi->validateUnb: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**SWGEdiFabricCoreModelEdiEdifactUNB***](SWGEdiFabricCoreModelEdiEdifactUNB.md)|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>***](SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateUng**
```objc
-(NSURLSessionTask*) validateUngWithUng: (SWGEdiFabricCoreModelEdiEdifactUNG*) ung
        completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricCoreModelEdiEdifactUNG* ung = [[SWGEdiFabricCoreModelEdiEdifactUNG alloc] init]; //  (optional)

SWGValidateApi*apiInstance = [[SWGValidateApi alloc] init];

[apiInstance validateUngWithUng:ung
          completionHandler: ^(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGValidateApi->validateUng: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**SWGEdiFabricCoreModelEdiEdifactUNG***](SWGEdiFabricCoreModelEdiEdifactUNG.md)|  | [optional] 

### Return type

[**NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>***](SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

