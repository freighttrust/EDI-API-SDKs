#import <Foundation/Foundation.h>
#import "SWGObject.h"

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


#import "SWGEdiFabricCoreModelEdiErrorContextsDataElementErrorContext.h"
@protocol SWGEdiFabricCoreModelEdiErrorContextsDataElementErrorContext;
@class SWGEdiFabricCoreModelEdiErrorContextsDataElementErrorContext;



@protocol SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext
@end

@interface SWGEdiFabricCoreModelEdiErrorContextsSegmentErrorContext : SWGObject


@property(nonatomic) NSString* name;

@property(nonatomic) NSNumber* position;

@property(nonatomic) NSString* value;

@property(nonatomic) NSArray<NSString*>* codes;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiErrorContextsDataElementErrorContext>* errors;

@property(nonatomic) NSString* message;

@end
