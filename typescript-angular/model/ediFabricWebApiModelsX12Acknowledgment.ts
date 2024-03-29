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
import { EdiFabricCoreModelEdiEdiMessage } from './ediFabricCoreModelEdiEdiMessage';
import { EdiFabricCoreModelEdiX12GS } from './ediFabricCoreModelEdiX12GS';
import { EdiFabricCoreModelEdiX12ISA } from './ediFabricCoreModelEdiX12ISA';


export interface EdiFabricWebApiModelsX12Acknowledgment { 
    originalIsa?: EdiFabricCoreModelEdiX12ISA;
    originalGs?: EdiFabricCoreModelEdiX12GS;
    ackType?: EdiFabricWebApiModelsX12Acknowledgment.AckTypeEnum;
    ack?: EdiFabricCoreModelEdiEdiMessage;
    originalTransactions?: Array<EdiFabricCoreModelEdiEdiMessage>;
}
export namespace EdiFabricWebApiModelsX12Acknowledgment {
    export type AckTypeEnum = 'Technical' | 'Functional' | 'Implementation';
    export const AckTypeEnum = {
        Technical: 'Technical' as AckTypeEnum,
        Functional: 'Functional' as AckTypeEnum,
        Implementation: 'Implementation' as AckTypeEnum
    };
}
