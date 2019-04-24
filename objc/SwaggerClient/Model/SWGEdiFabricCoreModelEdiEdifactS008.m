#import "SWGEdiFabricCoreModelEdiEdifactS008.h"

@implementation SWGEdiFabricCoreModelEdiEdifactS008

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"messageVersionNumber1": @"messageVersionNumber_1", @"messageReleaseNumber2": @"messageReleaseNumber_2", @"associationAssignedCode3": @"associationAssignedCode_3" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"messageVersionNumber1", @"messageReleaseNumber2", @"associationAssignedCode3"];
  return [optionalProperties containsObject:propertyName];
}

@end
