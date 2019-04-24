#import "SWGValidateApi.h"
#import "SWGQueryParamCollection.h"
#import "SWGApiClient.h"
#import "SWGEdiFabricCoreModelEdiEdifactUNB.h"
#import "SWGEdiFabricCoreModelEdiEdifactUNG.h"
#import "SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext.h"
#import "SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.h"
#import "SWGEdiFabricCoreModelEdiX12GS.h"
#import "SWGEdiFabricCoreModelEdiX12ISA.h"
#import "SWGEdiFabricWebApiModelsErrorDetails.h"
#import "SWGEdiFabricWebApiModelsValidateEdi.h"


@interface SWGValidateApi ()

@property (nonatomic, strong, readwrite) NSMutableDictionary *mutableDefaultHeaders;

@end

@implementation SWGValidateApi

NSString* kSWGValidateApiErrorDomain = @"SWGValidateApiErrorDomain";
NSInteger kSWGValidateApiMissingParamErrorCode = 234513;

@synthesize apiClient = _apiClient;

#pragma mark - Initialize methods

- (instancetype) init {
    return [self initWithApiClient:[SWGApiClient sharedClient]];
}


-(instancetype) initWithApiClient:(SWGApiClient *)apiClient {
    self = [super init];
    if (self) {
        _apiClient = apiClient;
        _mutableDefaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

#pragma mark -

-(NSString*) defaultHeaderForKey:(NSString*)key {
    return self.mutableDefaultHeaders[key];
}

-(void) setDefaultHeaderValue:(NSString*) value forKey:(NSString*)key {
    [self.mutableDefaultHeaders setValue:value forKey:key];
}

-(NSDictionary *)defaultHeaders {
    return self.mutableDefaultHeaders;
}

#pragma mark - Api Methods

///
/// 
/// 
///  @param gs  (optional)
///
///  @returns NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
///
-(NSURLSessionTask*) validateGsWithGs: (SWGEdiFabricCoreModelEdiX12GS*) gs
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler {
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/validate/gs"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"text/plain", @"application/json", @"text/json", @"application/xml", @"text/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json-patch+json", @"application/json", @"text/json", @"application/_*+json", @"application/xml", @"text/xml", @"application/_*+xml"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = gs;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*)data, error);
                                }
                            }];
}

///
/// 
/// 
///  @param isa  (optional)
///
///  @returns NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
///
-(NSURLSessionTask*) validateIsaWithIsa: (SWGEdiFabricCoreModelEdiX12ISA*) isa
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler {
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/validate/isa"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"text/plain", @"application/json", @"text/json", @"application/xml", @"text/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json-patch+json", @"application/json", @"text/json", @"application/_*+json", @"application/xml", @"text/xml", @"application/_*+xml"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = isa;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*)data, error);
                                }
                            }];
}

///
/// 
/// 
///  @param validateEdi  (optional)
///
///  @returns SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext*
///
-(NSURLSessionTask*) validateTransactionsWithValidateEdi: (SWGEdiFabricWebApiModelsValidateEdi*) validateEdi
    completionHandler: (void (^)(SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext* output, NSError* error)) handler {
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/validate/transactions"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"text/plain", @"application/json", @"text/json", @"application/xml", @"text/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json-patch+json", @"application/json", @"text/json", @"application/_*+json", @"application/xml", @"text/xml", @"application/_*+xml"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = validateEdi;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext*)data, error);
                                }
                            }];
}

///
/// 
/// 
///  @param unb  (optional)
///
///  @returns NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
///
-(NSURLSessionTask*) validateUnbWithUnb: (SWGEdiFabricCoreModelEdiEdifactUNB*) unb
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler {
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/validate/unb"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"text/plain", @"application/json", @"text/json", @"application/xml", @"text/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json-patch+json", @"application/json", @"text/json", @"application/_*+json", @"application/xml", @"text/xml", @"application/_*+xml"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = unb;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*)data, error);
                                }
                            }];
}

///
/// 
/// 
///  @param ung  (optional)
///
///  @returns NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
///
-(NSURLSessionTask*) validateUngWithUng: (SWGEdiFabricCoreModelEdiEdifactUNG*) ung
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler {
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/validate/ung"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"text/plain", @"application/json", @"text/json", @"application/xml", @"text/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json-patch+json", @"application/json", @"text/json", @"application/_*+json", @"application/xml", @"text/xml", @"application/_*+xml"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = ung;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*)data, error);
                                }
                            }];
}



@end
