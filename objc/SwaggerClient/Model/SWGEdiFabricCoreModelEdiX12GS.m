#import "SWGEdiFabricCoreModelEdiX12GS.h"

@implementation SWGEdiFabricCoreModelEdiX12GS

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"codeIdentifyingInformationType1": @"codeIdentifyingInformationType_1", @"senderIDCode2": @"senderIDCode_2", @"receiverIDCode3": @"receiverIDCode_3", @"date4": @"date_4", @"time5": @"time_5", @"groupControlNumber6": @"groupControlNumber_6", @"transactionTypeCode7": @"transactionTypeCode_7", @"versionAndRelease8": @"versionAndRelease_8" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"codeIdentifyingInformationType1", @"senderIDCode2", @"receiverIDCode3", @"date4", @"time5", @"groupControlNumber6", @"transactionTypeCode7", @"versionAndRelease8"];
  return [optionalProperties containsObject:propertyName];
}

@end
