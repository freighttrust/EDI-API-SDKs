#import <Foundation/Foundation.h>
#import "SWGEdiFabricCoreModelEdiEdifactUNB.h"
#import "SWGEdiFabricCoreModelEdiEdifactUNG.h"
#import "SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext.h"
#import "SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext.h"
#import "SWGEdiFabricCoreModelEdiX12GS.h"
#import "SWGEdiFabricCoreModelEdiX12ISA.h"
#import "SWGEdiFabricWebApiModelsErrorDetails.h"
#import "SWGEdiFabricWebApiModelsValidateEdi.h"
#import "SWGApi.h"

/**
* EdiFabric API
* No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
*
* OpenAPI spec version: v1
* 
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/



@interface SWGValidateApi: NSObject <SWGApi>

extern NSString* kSWGValidateApiErrorDomain;
extern NSInteger kSWGValidateApiMissingParamErrorCode;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient NS_DESIGNATED_INITIALIZER;

/// 
/// 
///
/// @param gs  (optional)
/// 
///  code:200 message:"Success",
///  code:400 message:"Bad Request",
///  code:500 message:"Server Error"
///
/// @return NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
-(NSURLSessionTask*) validateGsWithGs: (SWGEdiFabricCoreModelEdiX12GS*) gs
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;


/// 
/// 
///
/// @param isa  (optional)
/// 
///  code:200 message:"Success",
///  code:400 message:"Bad Request",
///  code:500 message:"Server Error"
///
/// @return NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
-(NSURLSessionTask*) validateIsaWithIsa: (SWGEdiFabricCoreModelEdiX12ISA*) isa
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;


/// 
/// 
///
/// @param validateEdi  (optional)
/// 
///  code:200 message:"Success",
///  code:400 message:"Bad Request",
///  code:500 message:"Server Error"
///
/// @return SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext*
-(NSURLSessionTask*) validateTransactionsWithValidateEdi: (SWGEdiFabricWebApiModelsValidateEdi*) validateEdi
    completionHandler: (void (^)(SWGEdiFabricCoreModelEdiErrorContextsMessageErrorContext* output, NSError* error)) handler;


/// 
/// 
///
/// @param unb  (optional)
/// 
///  code:200 message:"Success",
///  code:400 message:"Bad Request",
///  code:500 message:"Server Error"
///
/// @return NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
-(NSURLSessionTask*) validateUnbWithUnb: (SWGEdiFabricCoreModelEdiEdifactUNB*) unb
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;


/// 
/// 
///
/// @param ung  (optional)
/// 
///  code:200 message:"Success",
///  code:400 message:"Bad Request",
///  code:500 message:"Server Error"
///
/// @return NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>*
-(NSURLSessionTask*) validateUngWithUng: (SWGEdiFabricCoreModelEdiEdifactUNG*) ung
    completionHandler: (void (^)(NSArray<SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext>* output, NSError* error)) handler;



@end
