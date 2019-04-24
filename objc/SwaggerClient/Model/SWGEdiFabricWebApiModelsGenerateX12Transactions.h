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
#import "SWGEdiFabricWebApiModelsGenerateSettings.h"
@protocol SWGEdiFabricCoreModelEdiEdiMessage;
@class SWGEdiFabricCoreModelEdiEdiMessage;
@protocol SWGEdiFabricWebApiModelsGenerateSettings;
@class SWGEdiFabricWebApiModelsGenerateSettings;



@protocol SWGEdiFabricWebApiModelsGenerateX12Transactions
@end

@interface SWGEdiFabricWebApiModelsGenerateX12Transactions : SWGObject


@property(nonatomic) SWGEdiFabricWebApiModelsGenerateSettings* settings;

@property(nonatomic) NSArray<SWGEdiFabricCoreModelEdiEdiMessage>* transactions;

@end
