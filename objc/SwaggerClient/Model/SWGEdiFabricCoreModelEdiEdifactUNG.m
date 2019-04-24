#import "SWGEdiFabricCoreModelEdiEdifactUNG.h"

@implementation SWGEdiFabricCoreModelEdiEdifactUNG

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"messageGroupIdentification1": @"messageGroupIdentification_1", @"applicationsenderidentificatioN2": @"applicationsenderidentificatioN_2", @"applicationrecipientidentificatioN3": @"applicationrecipientidentificatioN_3", @"dateandtimeofpreparatioN4": @"dateandtimeofpreparatioN_4", @"groupReferenceNumber5": @"groupReferenceNumber_5", @"controllingAgency6": @"controllingAgency_6", @"messageversioN7": @"messageversioN_7", @"dApplicationPassword8": @"d_ApplicationPassword_8" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"messageGroupIdentification1", @"applicationsenderidentificatioN2", @"applicationrecipientidentificatioN3", @"dateandtimeofpreparatioN4", @"groupReferenceNumber5", @"controllingAgency6", @"messageversioN7", @"dApplicationPassword8"];
  return [optionalProperties containsObject:propertyName];
}

@end
