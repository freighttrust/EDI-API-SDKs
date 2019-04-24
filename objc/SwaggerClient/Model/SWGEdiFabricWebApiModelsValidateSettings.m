#import "SWGEdiFabricWebApiModelsValidateSettings.h"

@implementation SWGEdiFabricWebApiModelsValidateSettings

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"syntaxSet": @"syntax_set", @"decimalPoint": @"decimal_point", @"skipTrailerValidation": @"skip_trailer_validation" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"syntaxSet", @"decimalPoint", @"skipTrailerValidation"];
  return [optionalProperties containsObject:propertyName];
}

@end
