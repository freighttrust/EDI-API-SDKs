export * from './acknowledge.service';
import { AcknowledgeService } from './acknowledge.service';
export * from './generate.service';
import { GenerateService } from './generate.service';
export * from './translate.service';
import { TranslateService } from './translate.service';
export * from './validate.service';
import { ValidateService } from './validate.service';
export const APIS = [AcknowledgeService, GenerateService, TranslateService, ValidateService];
