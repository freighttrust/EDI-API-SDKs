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





@protocol SWGEdiFabricCoreModelEdiX12GS
@end

@interface SWGEdiFabricCoreModelEdiX12GS : SWGObject


@property(nonatomic) NSString* codeIdentifyingInformationType1;

@property(nonatomic) NSString* senderIDCode2;

@property(nonatomic) NSString* receiverIDCode3;

@property(nonatomic) NSString* date4;

@property(nonatomic) NSString* time5;

@property(nonatomic) NSString* groupControlNumber6;

@property(nonatomic) NSString* transactionTypeCode7;

@property(nonatomic) NSString* versionAndRelease8;

@end
