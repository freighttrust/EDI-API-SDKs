# SWGGenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateEdifactGroup**](SWGGenerateApi.md#generateedifactgroup) | **POST** /generate/edifact-group | 
[**generateEdifactInterchange**](SWGGenerateApi.md#generateedifactinterchange) | **POST** /generate/edifact-interchange | 
[**generateEdifactTransactions**](SWGGenerateApi.md#generateedifacttransactions) | **POST** /generate/edifact-transactions | 
[**generateGs**](SWGGenerateApi.md#generategs) | **POST** /generate/gs | 
[**generateIsa**](SWGGenerateApi.md#generateisa) | **POST** /generate/isa | 
[**generateUnb**](SWGGenerateApi.md#generateunb) | **POST** /generate/unb | 
[**generateUng**](SWGGenerateApi.md#generateung) | **POST** /generate/ung | 
[**generateX12Group**](SWGGenerateApi.md#generatex12group) | **POST** /generate/x12-group | 
[**generateX12Interchange**](SWGGenerateApi.md#generatex12interchange) | **POST** /generate/x12-interchange | 
[**generateX12Transactions**](SWGGenerateApi.md#generatex12transactions) | **POST** /generate/x12-transactions | 


# **generateEdifactGroup**
```objc
-(NSURLSessionTask*) generateEdifactGroupWithGenerateEdifactGroup: (SWGEdiFabricWebApiModelsGenerateEdifactGroup*) generateEdifactGroup
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateEdifactGroup* generateEdifactGroup = [[SWGEdiFabricWebApiModelsGenerateEdifactGroup alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateEdifactGroupWithGenerateEdifactGroup:generateEdifactGroup
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateEdifactGroup: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactGroup** | [**SWGEdiFabricWebApiModelsGenerateEdifactGroup***](SWGEdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateEdifactInterchange**
```objc
-(NSURLSessionTask*) generateEdifactInterchangeWithGenerateEdifactInterchange: (SWGEdiFabricWebApiModelsGenerateEdifactInterchange*) generateEdifactInterchange
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateEdifactInterchange* generateEdifactInterchange = [[SWGEdiFabricWebApiModelsGenerateEdifactInterchange alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateEdifactInterchangeWithGenerateEdifactInterchange:generateEdifactInterchange
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateEdifactInterchange: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactInterchange** | [**SWGEdiFabricWebApiModelsGenerateEdifactInterchange***](SWGEdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateEdifactTransactions**
```objc
-(NSURLSessionTask*) generateEdifactTransactionsWithGenerateEdifactTransactions: (SWGEdiFabricWebApiModelsGenerateEdifactTransactions*) generateEdifactTransactions
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateEdifactTransactions* generateEdifactTransactions = [[SWGEdiFabricWebApiModelsGenerateEdifactTransactions alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateEdifactTransactionsWithGenerateEdifactTransactions:generateEdifactTransactions
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateEdifactTransactions: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEdifactTransactions** | [**SWGEdiFabricWebApiModelsGenerateEdifactTransactions***](SWGEdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGs**
```objc
-(NSURLSessionTask*) generateGsWithGenerateGs: (SWGEdiFabricWebApiModelsGenerateGs*) generateGs
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateGs* generateGs = [[SWGEdiFabricWebApiModelsGenerateGs alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateGsWithGenerateGs:generateGs
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateGs: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateGs** | [**SWGEdiFabricWebApiModelsGenerateGs***](SWGEdiFabricWebApiModelsGenerateGs.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateIsa**
```objc
-(NSURLSessionTask*) generateIsaWithGenerateIsa: (SWGEdiFabricWebApiModelsGenerateIsa*) generateIsa
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateIsa* generateIsa = [[SWGEdiFabricWebApiModelsGenerateIsa alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateIsaWithGenerateIsa:generateIsa
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateIsa: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateIsa** | [**SWGEdiFabricWebApiModelsGenerateIsa***](SWGEdiFabricWebApiModelsGenerateIsa.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUnb**
```objc
-(NSURLSessionTask*) generateUnbWithGenerateUnb: (SWGEdiFabricWebApiModelsGenerateUnb*) generateUnb
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateUnb* generateUnb = [[SWGEdiFabricWebApiModelsGenerateUnb alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateUnbWithGenerateUnb:generateUnb
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateUnb: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnb** | [**SWGEdiFabricWebApiModelsGenerateUnb***](SWGEdiFabricWebApiModelsGenerateUnb.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUng**
```objc
-(NSURLSessionTask*) generateUngWithGenerateUng: (SWGEdiFabricWebApiModelsGenerateUng*) generateUng
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateUng* generateUng = [[SWGEdiFabricWebApiModelsGenerateUng alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateUngWithGenerateUng:generateUng
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateUng: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUng** | [**SWGEdiFabricWebApiModelsGenerateUng***](SWGEdiFabricWebApiModelsGenerateUng.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateX12Group**
```objc
-(NSURLSessionTask*) generateX12GroupWithGenerateX12Group: (SWGEdiFabricWebApiModelsGenerateX12Group*) generateX12Group
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateX12Group* generateX12Group = [[SWGEdiFabricWebApiModelsGenerateX12Group alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateX12GroupWithGenerateX12Group:generateX12Group
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateX12Group: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Group** | [**SWGEdiFabricWebApiModelsGenerateX12Group***](SWGEdiFabricWebApiModelsGenerateX12Group.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateX12Interchange**
```objc
-(NSURLSessionTask*) generateX12InterchangeWithGenerateX12Interchange: (SWGEdiFabricWebApiModelsGenerateX12Interchange*) generateX12Interchange
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateX12Interchange* generateX12Interchange = [[SWGEdiFabricWebApiModelsGenerateX12Interchange alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateX12InterchangeWithGenerateX12Interchange:generateX12Interchange
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateX12Interchange: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Interchange** | [**SWGEdiFabricWebApiModelsGenerateX12Interchange***](SWGEdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateX12Transactions**
```objc
-(NSURLSessionTask*) generateX12TransactionsWithGenerateX12Transactions: (SWGEdiFabricWebApiModelsGenerateX12Transactions*) generateX12Transactions
        completionHandler: (void (^)(NSURL* output, NSError* error)) handler;
```



### Example 
```objc

SWGEdiFabricWebApiModelsGenerateX12Transactions* generateX12Transactions = [[SWGEdiFabricWebApiModelsGenerateX12Transactions alloc] init]; //  (optional)

SWGGenerateApi*apiInstance = [[SWGGenerateApi alloc] init];

[apiInstance generateX12TransactionsWithGenerateX12Transactions:generateX12Transactions
          completionHandler: ^(NSURL* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGGenerateApi->generateX12Transactions: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateX12Transactions** | [**SWGEdiFabricWebApiModelsGenerateX12Transactions***](SWGEdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional] 

### Return type

**NSURL***

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

