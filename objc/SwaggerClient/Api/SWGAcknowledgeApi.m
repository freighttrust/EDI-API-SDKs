#import "SWGAcknowledgeApi.h"
#import "SWGQueryParamCollection.h"
#import "SWGApiClient.h"
#import "SWGEdiFabricWebApiModelsEdifactAcknowledgment.h"
#import "SWGEdiFabricWebApiModelsErrorDetails.h"
#import "SWGEdiFabricWebApiModelsX12Acknowledgment.h"


@interface SWGAcknowledgeApi ()

@property (nonatomic, strong, readwrite) NSMutableDictionary *mutableDefaultHeaders;

@end

@implementation SWGAcknowledgeApi

NSString* kSWGAcknowledgeApiErrorDomain = @"SWGAcknowledgeApiErrorDomain";
NSInteger kSWGAcknowledgeApiMissingParamErrorCode = 234513;

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
///  @param accept  (optional, default to application/json)
///
///  @param charSet  (optional, default to utf-8)
///
///  @param continueOnError  (optional, default to true)
///
///  @param skipTrailerValidation  (optional, default to false)
///
///  @param decimalPoint  (optional, default to .)
///
///  @param syntaxSet  (optional)
///
///  @param transactionDuplicate  (optional, default to false)
///
///  @param groupDuplicate  (optional, default to false)
///
///  @param technicalAck  (optional, default to default)
///
///  @param generateForValidTransactions  (optional, default to false)
///
///  @param allowPartial  (optional, default to false)
///
///  @param transactionControlNumber  (optional, default to 1)
///
///  @param eancomSyntax  (optional)
///
///  @param includeTransactions  (optional, default to false)
///
///  @returns NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>*
///
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
    completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>* output, NSError* error)) handler {
    // verify the required parameter 'ediFile' is set
    if (ediFile == nil) {
        NSParameterAssert(ediFile);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"ediFile"] };
            NSError* error = [NSError errorWithDomain:kSWGAcknowledgeApiErrorDomain code:kSWGAcknowledgeApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/acknowledge/edifact"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (readMode != nil) {
        queryParams[@"read_mode"] = readMode;
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
    if (skipTrailerValidation) {
        formParams[@"skip_trailer_validation"] = skipTrailerValidation;
    }
    if (decimalPoint) {
        formParams[@"decimal_point"] = decimalPoint;
    }
    if (syntaxSet) {
        formParams[@"syntax_set"] = syntaxSet;
    }
    if (transactionDuplicate) {
        formParams[@"transaction_duplicate"] = transactionDuplicate;
    }
    if (groupDuplicate) {
        formParams[@"group_duplicate"] = groupDuplicate;
    }
    if (technicalAck) {
        formParams[@"technical_ack"] = technicalAck;
    }
    if (generateForValidTransactions) {
        formParams[@"generate_for_valid_transactions"] = generateForValidTransactions;
    }
    if (allowPartial) {
        formParams[@"allow_partial"] = allowPartial;
    }
    if (transactionControlNumber) {
        formParams[@"transaction_control_number"] = transactionControlNumber;
    }
    if (eancomSyntax) {
        formParams[@"eancom_syntax"] = eancomSyntax;
    }
    if (includeTransactions) {
        formParams[@"include_transactions"] = includeTransactions;
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
                              responseType: @"NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricWebApiModelsEdifactAcknowledgment>*)data, error);
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
///  @param accept  (optional, default to application/json)
///
///  @param charSet  (optional, default to utf-8)
///
///  @param continueOnError  (optional, default to true)
///
///  @param skipTrailerValidation  (optional, default to false)
///
///  @param syntaxSet  (optional)
///
///  @param transactionDuplicate  (optional, default to false)
///
///  @param groupDuplicate  (optional, default to false)
///
///  @param technicalAck  (optional, default to default)
///
///  @param generateForValidTransactions  (optional, default to false)
///
///  @param allowPartial  (optional, default to false)
///
///  @param transactionControlNumber  (optional, default to 1)
///
///  @param ak901  (optional, default to e)
///
///  @param ackVersion  (optional, default to 4010_997)
///
///  @param includeTransactions  (optional, default to false)
///
///  @returns NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>*
///
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
    completionHandler: (void (^)(NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>* output, NSError* error)) handler {
    // verify the required parameter 'ediFile' is set
    if (ediFile == nil) {
        NSParameterAssert(ediFile);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"ediFile"] };
            NSError* error = [NSError errorWithDomain:kSWGAcknowledgeApiErrorDomain code:kSWGAcknowledgeApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/acknowledge/x12"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (readMode != nil) {
        queryParams[@"read_mode"] = readMode;
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
    if (skipTrailerValidation) {
        formParams[@"skip_trailer_validation"] = skipTrailerValidation;
    }
    if (syntaxSet) {
        formParams[@"syntax_set"] = syntaxSet;
    }
    if (transactionDuplicate) {
        formParams[@"transaction_duplicate"] = transactionDuplicate;
    }
    if (groupDuplicate) {
        formParams[@"group_duplicate"] = groupDuplicate;
    }
    if (technicalAck) {
        formParams[@"technical_ack"] = technicalAck;
    }
    if (generateForValidTransactions) {
        formParams[@"generate_for_valid_transactions"] = generateForValidTransactions;
    }
    if (allowPartial) {
        formParams[@"allow_partial"] = allowPartial;
    }
    if (transactionControlNumber) {
        formParams[@"transaction_control_number"] = transactionControlNumber;
    }
    if (ak901) {
        formParams[@"ak901"] = ak901;
    }
    if (ackVersion) {
        formParams[@"ack_version"] = ackVersion;
    }
    if (includeTransactions) {
        formParams[@"include_transactions"] = includeTransactions;
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
                              responseType: @"NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSArray<SWGEdiFabricWebApiModelsX12Acknowledgment>*)data, error);
                                }
                            }];
}



@end
