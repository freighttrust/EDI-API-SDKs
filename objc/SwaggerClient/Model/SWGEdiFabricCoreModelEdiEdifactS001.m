#import "SWGEdiFabricCoreModelEdiEdifactS001.h"

@implementation SWGEdiFabricCoreModelEdiEdifactS001

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"syntaxIdentifier1": @"syntaxIdentifier_1", @"syntaxVersionNumber2": @"syntaxVersionNumber_2", @"serviceCodeListDirectoryVersionNumber3": @"serviceCodeListDirectoryVersionNumber_3", @"characterEncoding4": @"characterEncoding_4" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"syntaxIdentifier1", @"syntaxVersionNumber2", @"serviceCodeListDirectoryVersionNumber3", @"characterEncoding4"];
  return [optionalProperties containsObject:propertyName];
}

@end
