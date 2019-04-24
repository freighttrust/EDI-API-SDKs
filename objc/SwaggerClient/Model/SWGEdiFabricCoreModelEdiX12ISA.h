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





@protocol SWGEdiFabricCoreModelEdiX12ISA
@end

@interface SWGEdiFabricCoreModelEdiX12ISA : SWGObject


@property(nonatomic) NSString* authorizationInformationQualifier1;

@property(nonatomic) NSString* authorizationInformation2;

@property(nonatomic) NSString* securityInformationQualifier3;

@property(nonatomic) NSString* securityInformation4;

@property(nonatomic) NSString* senderIDQualifier5;

@property(nonatomic) NSString* interchangeSenderID6;

@property(nonatomic) NSString* receiverIDQualifier7;

@property(nonatomic) NSString* interchangeReceiverID8;

@property(nonatomic) NSString* interchangeDate9;

@property(nonatomic) NSString* interchangeTime10;

@property(nonatomic) NSString* interchangeControlStandardsIdentifier11;

@property(nonatomic) NSString* interchangeControlVersionNumber12;

@property(nonatomic) NSString* interchangeControlNumber13;

@property(nonatomic) NSString* acknowledgementRequested14;

@property(nonatomic) NSString* usageIndicator15;

@property(nonatomic) NSString* componentElementSeparator16;

@end
