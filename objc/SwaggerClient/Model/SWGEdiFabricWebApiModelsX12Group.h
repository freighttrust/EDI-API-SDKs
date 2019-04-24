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


#import "SWGEdiFabricCoreModelEdiEdiMessage.h"
#import "SWGEdiFabricCoreModelEdiX12GE.h"
#import "SWGEdiFabricCoreModelEdiX12GS.h"
@protocol SWGEdiFabricCoreModelEdiEdiMessage;
@class SWGEdiFabricCoreModelEdiEdiMessage;
@protocol SWGEdiFabricCoreModelEdiX12GE;
@class SWGEdiFabricCoreModelEdiX12GE;
@protocol SWGEdiFabricCoreModelEdiX12GS;
@class SWGEdiFabricCoreModelEdiX12GS;



@protocol SWGEdiFabricWebApiModelsX12Group
@end

@interface SWGEdiFabricWebApiModelsX12Group : SWGObject


@property(nonatomic) SWGEdiFabricCoreModelEdiX12GS* gs;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiX12GE>* geTrailers;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiEdiMessage>* transactions;

@end
