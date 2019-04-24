#import "SWGEdiFabricCoreModelEdiX12ISA.h"

@implementation SWGEdiFabricCoreModelEdiX12ISA

- (instancetype)init {
  self = [super init];
  if (self) {
    // initialize property's default value, if any
    
  }
  return self;
}


/**
 * Maps json key to property name.
 * This method is used by `JSONModel`.
 */
+ (JSONKeyMapper *)keyMapper {
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"authorizationInformationQualifier1": @"authorizationInformationQualifier_1", @"authorizationInformation2": @"authorizationInformation_2", @"securityInformationQualifier3": @"securityInformationQualifier_3", @"securityInformation4": @"securityInformation_4", @"senderIDQualifier5": @"senderIDQualifier_5", @"interchangeSenderID6": @"interchangeSenderID_6", @"receiverIDQualifier7": @"receiverIDQualifier_7", @"interchangeReceiverID8": @"interchangeReceiverID_8", @"interchangeDate9": @"interchangeDate_9", @"interchangeTime10": @"interchangeTime_10", @"interchangeControlStandardsIdentifier11": @"interchangeControlStandardsIdentifier_11", @"interchangeControlVersionNumber12": @"interchangeControlVersionNumber_12", @"interchangeControlNumber13": @"interchangeControlNumber_13", @"acknowledgementRequested14": @"acknowledgementRequested_14", @"usageIndicator15": @"usageIndicator_15", @"componentElementSeparator16": @"componentElementSeparator_16" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"authorizationInformationQualifier1", @"authorizationInformation2", @"securityInformationQualifier3", @"securityInformation4", @"senderIDQualifier5", @"interchangeSenderID6", @"receiverIDQualifier7", @"interchangeReceiverID8", @"interchangeDate9", @"interchangeTime10", @"interchangeControlStandardsIdentifier11", @"interchangeControlVersionNumber12", @"interchangeControlNumber13", @"acknowledgementRequested14", @"usageIndicator15", @"componentElementSeparator16"];
  return [optionalProperties containsObject:propertyName];
}

@end
