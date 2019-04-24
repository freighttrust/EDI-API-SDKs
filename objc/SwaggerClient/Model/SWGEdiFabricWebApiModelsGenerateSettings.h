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





@protocol SWGEdiFabricWebApiModelsGenerateSettings
@end

@interface SWGEdiFabricWebApiModelsGenerateSettings : SWGObject


@property(nonatomic) NSNumber* preserveWhitespace;

@property(nonatomic) NSNumber* autoTrailers;

@property(nonatomic) NSString* postFix;

@property(nonatomic) NSString* segmentSeparator;

@property(nonatomic) NSString* componentDataElementSeparator;

@property(nonatomic) NSString* escapeCharacter;

@property(nonatomic) NSString* dataElementSeparator;

@property(nonatomic) NSString* repetitionSeparator;

@property(nonatomic) NSString* decimalPoint;

@property(nonatomic) NSString* syntaxSet;

@property(nonatomic) NSString* charSet;

@end
