#import "SWGTranslateApi.h"
#import "SWGQueryParamCollection.h"
#import "SWGApiClient.h"
#import "SWGEdiFabricWebApiModelsEdifactInterchange.h"
#import "SWGEdiFabricWebApiModelsErrorDetails.h"
#import "SWGEdiFabricWebApiModelsX12Interchange.h"


@interface SWGTranslateApi ()

@property (nonatomic, strong, readwrite) NSMutableDictionary *mutableDefaultHeaders;

@end

@implementation SWGTranslateApi

NSString* kSWGTranslateApiErrorDomain = @"SWGTranslateApiErrorDomain";
NSInteger kSWGTranslateApiMissingParamErrorCode = 234513;

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
///  @param ediFile EDI file to translate 
///
///  @param readMode  (optional, default to read_small)
///
///  @param validate  (optional, default to false)
///
///  @param accept  (optional, default to application/json)
///
///  @param charSet  (optional, default to utf-8)
///
///  @param continueOnError  (optional, default to true)
///
///  @param transactionOnly  (optional, default to false)
///
///  @param dataElementSeparator  (optional, default to +)
///
///  @param componentDataElementSeparator  (optional, default to :)
///
///  @param segmentSeparator  (optional, default to ')
///
///  @param repetitionSeparator  (optional, default to *)
///
///  @param escapeCharacter  (optional, default to ?)
///
///  @param decimalPoint  (optional, default to .)
///
///  @param eancomSyntax  (optional)
///
///  @param skipTrailerValidation  (optional, default to false)
///
///  @param syntaxSet  (optional)
///
///  @returns NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>*
///
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
    completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>* output, NSError* error)) handler {
    // verify the required parameter 'ediFile' is set
    if (ediFile == nil) {
        NSParameterAssert(ediFile);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"ediFile"] };
            NSError* error = [NSError errorWithDomain:kSWGTranslateApiErrorDomain code:kSWGTranslateApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/translate/edifact"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (readMode != nil) {
        queryParams[@"read_mode"] = readMode;
    }
    if (validate != nil) {
        queryParams[@"validate"] = [validate isEqual:@(YES)] ? @"true" : @"false";
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    if (accept != nil) {
        headerParams[@"Accept"] = accept;
    }
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"application/json", @"application/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"multipart/form-data"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    if (charSet) {
        formParams[@"char_set"] = charSet;
    }
    if (continueOnError) {
        formParams[@"continue_on_error"] = continueOnError;
    }
    if (transactionOnly) {
        formParams[@"transaction_only"] = transactionOnly;
    }
    if (dataElementSeparator) {
        formParams[@"data_element_separator"] = dataElementSeparator;
    }
    if (componentDataElementSeparator) {
        formParams[@"component_data_element_separator"] = componentDataElementSeparator;
    }
    if (segmentSeparator) {
        formParams[@"segment_separator"] = segmentSeparator;
    }
    if (repetitionSeparator) {
        formParams[@"repetition_separator"] = repetitionSeparator;
    }
    if (escapeCharacter) {
        formParams[@"escape_character"] = escapeCharacter;
    }
    if (decimalPoint) {
        formParams[@"decimal_point"] = decimalPoint;
    }
    if (eancomSyntax) {
        formParams[@"eancom_syntax"] = eancomSyntax;
    }
    if (skipTrailerValidation) {
        formParams[@"skip_trailer_validation"] = skipTrailerValidation;
    }
    if (syntaxSet) {
        formParams[@"syntax_set"] = syntaxSet;
    }
    localVarFiles[@"ediFile"] = ediFile;

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
                              responseType: @"NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricWebApiModelsEdifactInterchange>*)data, error);
                                }
                            }];
}

///
/// 
/// 
///  @param ediFile EDI file to translate 
///
///  @param readMode  (optional, default to read_small)
///
///  @param validate  (optional, default to false)
///
///  @param accept  (optional, default to application/json)
///
///  @param charSet  (optional, default to utf-8)
///
///  @param continueOnError  (optional, default to true)
///
///  @param transactionOnly  (optional, default to false)
///
///  @param dataElementSeparator  (optional, default to *)
///
///  @param componentDataElementSeparator  (optional, default to >)
///
///  @param segmentSeparator  (optional, default to ~)
///
///  @param repetitionSeparator  (optional, default to ^)
///
///  @param skipTrailerValidation  (optional, default to false)
///
///  @param syntaxSet  (optional)
///
///  @returns NSArray<SWGEdiFabricWebApiModelsX12Interchange>*
///
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
    completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsX12Interchange>* output, NSError* error)) handler {
    // verify the required parameter 'ediFile' is set
    if (ediFile == nil) {
        NSParameterAssert(ediFile);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"ediFile"] };
            NSError* error = [NSError errorWithDomain:kSWGTranslateApiErrorDomain code:kSWGTranslateApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/translate/x12"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (readMode != nil) {
        queryParams[@"read_mode"] = readMode;
    }
    if (validate != nil) {
        queryParams[@"validate"] = [validate isEqual:@(YES)] ? @"true" : @"false";
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    if (accept != nil) {
        headerParams[@"Accept"] = accept;
    }
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"application/json", @"application/xml"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"multipart/form-data"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    if (charSet) {
        formParams[@"char_set"] = charSet;
    }
    if (continueOnError) {
        formParams[@"continue_on_error"] = continueOnError;
    }
    if (transactionOnly) {
        formParams[@"transaction_only"] = transactionOnly;
    }
    if (dataElementSeparator) {
        formParams[@"data_element_separator"] = dataElementSeparator;
    }
    if (componentDataElementSeparator) {
        formParams[@"component_data_element_separator"] = componentDataElementSeparator;
    }
    if (segmentSeparator) {
        formParams[@"segment_separator"] = segmentSeparator;
    }
    if (repetitionSeparator) {
        formParams[@"repetition_separator"] = repetitionSeparator;
    }
    if (skipTrailerValidation) {
        formParams[@"skip_trailer_validation"] = skipTrailerValidation;
    }
    if (syntaxSet) {
        formParams[@"syntax_set"] = syntaxSet;
    }
    localVarFiles[@"ediFile"] = ediFile;

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
                              responseType: @"NSArray<SWGEdiFabricWebApiModelsX12Interchange>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricWebApiModelsX12Interchange>*)data, error);
                                }
                            }];
}



@end
