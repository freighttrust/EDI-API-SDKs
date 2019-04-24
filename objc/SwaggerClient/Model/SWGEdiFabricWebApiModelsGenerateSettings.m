#import "SWGEdiFabricWebApiModelsGenerateSettings.h"

@implementation SWGEdiFabricWebApiModelsGenerateSettings

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"preserveWhitespace": @"preserve_whitespace", @"autoTrailers": @"auto_trailers", @"postFix": @"post_fix", @"segmentSeparator": @"segment_separator", @"componentDataElementSeparator": @"component_data_element_separator", @"escapeCharacter": @"escape_character", @"dataElementSeparator": @"data_element_separator", @"repetitionSeparator": @"repetition_separator", @"decimalPoint": @"decimal_point", @"syntaxSet": @"syntax_set", @"charSet": @"char_set" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"preserveWhitespace", @"autoTrailers", @"postFix", @"segmentSeparator", @"componentDataElementSeparator", @"escapeCharacter", @"dataElementSeparator", @"repetitionSeparator", @"decimalPoint", @"syntaxSet", @"charSet"];
  return [optionalProperties containsObject:propertyName];
}

@end
