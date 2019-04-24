#import "SWGEdiFabricCoreModelEdiEdifactS002.h"

@implementation SWGEdiFabricCoreModelEdiEdifactS002

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"interchangeSenderIdentification1": @"interchangeSenderIdentification_1", @"identificationCodeQualifier2": @"identificationCodeQualifier_2", @"interchangeSenderInternalIdentification3": @"interchangeSenderInternalIdentification_3", @"interchangeSenderInternalSubIdentification4": @"interchangeSenderInternalSubIdentification_4" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"interchangeSenderIdentification1", @"identificationCodeQualifier2", @"interchangeSenderInternalIdentification3", @"interchangeSenderInternalSubIdentification4"];
  return [optionalProperties containsObject:propertyName];
}

@end
