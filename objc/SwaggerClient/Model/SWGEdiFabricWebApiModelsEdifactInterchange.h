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


#import "SWGEdiFabricCoreModelEdiEdifactUNB.h"
#import "SWGEdiFabricCoreModelEdiEdifactUNZ.h"
#import "SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext.h"
#import "SWGEdiFabricWebApiModelsEdifactGroup.h"
@protocol SWGEdiFabricCoreModelEdiEdifactUNB;
@class SWGEdiFabricCoreModelEdiEdifactUNB;
@protocol SWGEdiFabricCoreModelEdiEdifactUNZ;
@class SWGEdiFabricCoreModelEdiEdifactUNZ;
@protocol SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext;
@class SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext;
@protocol SWGEdiFabricWebApiModelsEdifactGroup;
@class SWGEdiFabricWebApiModelsEdifactGroup;



@protocol SWGEdiFabricWebApiModelsEdifactInterchange
@end

@interface SWGEdiFabricWebApiModelsEdifactInterchange : SWGObject


@property(nonatomic) SWGEdiFabricCoreModelEdiEdifactUNB* unb;

@property(nonatomic) NSArray<SWGEdiFabricWebApiModelsEdifactGroup>* groups;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiEdifactUNZ>* unzTrailers;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext>* errors;

@end
