/**
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EdiFabricCoreModelEdiEdifactS001 } from './ediFabricCoreModelEdiEdifactS001';
import { EdiFabricCoreModelEdiEdifactS002 } from './ediFabricCoreModelEdiEdifactS002';
import { EdiFabricCoreModelEdiEdifactS003 } from './ediFabricCoreModelEdiEdifactS003';
import { EdiFabricCoreModelEdiEdifactS004 } from './ediFabricCoreModelEdiEdifactS004';
import { EdiFabricCoreModelEdiEdifactS005 } from './ediFabricCoreModelEdiEdifactS005';


export interface EdiFabricCoreModelEdiEdifactUNB { 
    syntaxidentifieR1?: EdiFabricCoreModelEdiEdifactS001;
    interchangesendeR2?: EdiFabricCoreModelEdiEdifactS002;
    interchangerecipienT3?: EdiFabricCoreModelEdiEdifactS003;
    dateandtimeofpreparatioN4?: EdiFabricCoreModelEdiEdifactS004;
    interchangeControlReference5?: string;
    recipientsreferencepassworddetailS6?: EdiFabricCoreModelEdiEdifactS005;
    applicationReference7?: string;
    processingPriorityCode8?: string;
    acknowledgementRequest9?: string;
    interchangeAgreementIdentifier10?: string;
    testIndicator11?: string;
}