#import "SWGEdiFabricCoreModelEdiEdifactS003.h"

@implementation SWGEdiFabricCoreModelEdiEdifactS003

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"interchangeRecipientIdentification1": @"interchangeRecipientIdentification_1", @"identificationCodeQualifier2": @"identificationCodeQualifier_2", @"interchangeRecipientInternalIdentification3": @"interchangeRecipientInternalIdentification_3", @"interchangeRecipientInternalSubIdentification4": @"interchangeRecipientInternalSubIdentification_4" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"interchangeRecipientIdentification1", @"identificationCodeQualifier2", @"interchangeRecipientInternalIdentification3", @"interchangeRecipientInternalSubIdentification4"];
  return [optionalProperties containsObject:propertyName];
}

@end
