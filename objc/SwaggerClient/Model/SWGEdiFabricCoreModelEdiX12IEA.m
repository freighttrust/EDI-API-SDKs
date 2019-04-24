#import "SWGEdiFabricCoreModelEdiX12IEA.h"

@implementation SWGEdiFabricCoreModelEdiX12IEA

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"numberOfIncludedGroups1": @"numberOfIncludedGroups_1", @"interchangeControlNumber2": @"interchangeControlNumber_2" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"numberOfIncludedGroups1", @"interchangeControlNumber2"];
  return [optionalProperties containsObject:propertyName];
}

@end
