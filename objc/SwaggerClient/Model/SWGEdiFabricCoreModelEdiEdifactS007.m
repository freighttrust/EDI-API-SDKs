#import "SWGEdiFabricCoreModelEdiEdifactS007.h"

@implementation SWGEdiFabricCoreModelEdiEdifactS007

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"applicationRecipientIdentification1": @"applicationRecipientIdentification_1", @"identificationCodeQualifier2": @"identificationCodeQualifier_2" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"applicationRecipientIdentification1", @"identificationCodeQualifier2"];
  return [optionalProperties containsObject:propertyName];
}

@end
