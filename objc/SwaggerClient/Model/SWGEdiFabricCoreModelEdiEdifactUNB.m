#import "SWGEdiFabricCoreModelEdiEdifactUNB.h"

@implementation SWGEdiFabricCoreModelEdiEdifactUNB

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
  return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{ @"syntaxidentifieR1": @"syntaxidentifieR_1", @"interchangesendeR2": @"interchangesendeR_2", @"interchangerecipienT3": @"interchangerecipienT_3", @"dateandtimeofpreparatioN4": @"dateandtimeofpreparatioN_4", @"interchangeControlReference5": @"interchangeControlReference_5", @"recipientsreferencepassworddetailS6": @"recipientsreferencepassworddetailS_6", @"applicationReference7": @"applicationReference_7", @"processingPriorityCode8": @"processingPriorityCode_8", @"acknowledgementRequest9": @"acknowledgementRequest_9", @"interchangeAgreementIdentifier10": @"interchangeAgreementIdentifier_10", @"testIndicator11": @"testIndicator_11" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"syntaxidentifieR1", @"interchangesendeR2", @"interchangerecipienT3", @"dateandtimeofpreparatioN4", @"interchangeControlReference5", @"recipientsreferencepassworddetailS6", @"applicationReference7", @"processingPriorityCode8", @"acknowledgementRequest9", @"interchangeAgreementIdentifier10", @"testIndicator11"];
  return [optionalProperties containsObject:propertyName];
}

@end
