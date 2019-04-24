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


#import "SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext.h"
#import "SWGEdiFabricCoreModelEdiX12IEA.h"
#import "SWGEdiFabricCoreModelEdiX12ISA.h"
#import "SWGEdiFabricWebApiModelsGenerateSettings.h"
#import "SWGEdiFabricWebApiModelsX12Group.h"
@protocol SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext;
@class SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext;
@protocol SWGEdiFabricCoreModelEdiX12IEA;
@class SWGEdiFabricCoreModelEdiX12IEA;
@protocol SWGEdiFabricCoreModelEdiX12ISA;
@class SWGEdiFabricCoreModelEdiX12ISA;
@protocol SWGEdiFabricWebApiModelsGenerateSettings;
@class SWGEdiFabricWebApiModelsGenerateSettings;
@protocol SWGEdiFabricWebApiModelsX12Group;
@class SWGEdiFabricWebApiModelsX12Group;



@protocol SWGEdiFabricWebApiModelsGenerateX12Interchange
@end

@interface SWGEdiFabricWebApiModelsGenerateX12Interchange : SWGObject


@property(nonatomic) SWGEdiFabricWebApiModelsGenerateSettings* settings;

@property(nonatomic) SWGEdiFabricCoreModelEdiX12ISA* isa;

@property(nonatomic) NSArray<SWGEdiFabricWebApiModelsX12Group>* groups;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiX12IEA>* ieaTrailers;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiErrorContextsReaderErrorContext>* errors;

@end
