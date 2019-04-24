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
import { EdiFabricCoreModelEdiErrorContextsMessageErrorContext } from './ediFabricCoreModelEdiErrorContextsMessageErrorContext';


export interface EdiFabricCoreModelEdiErrorContextsReaderErrorContext { 
    readerErrorCode?: EdiFabricCoreModelEdiErrorContextsReaderErrorContext.ReaderErrorCodeEnum;
    messageErrorContext?: EdiFabricCoreModelEdiErrorContextsMessageErrorContext;
    message?: string;
}
export namespace EdiFabricCoreModelEdiErrorContextsReaderErrorContext {
    export type ReaderErrorCodeEnum = 'Unknown' | 'InvalidSpecOrAssembly' | 'InvalidControlStructure' | 'ImproperEndOfFile' | 'InvalidInterchangeContent' | 'DemoVersion';
    export const ReaderErrorCodeEnum = {
        Unknown: 'Unknown' as ReaderErrorCodeEnum,
        InvalidSpecOrAssembly: 'InvalidSpecOrAssembly' as ReaderErrorCodeEnum,
        InvalidControlStructure: 'InvalidControlStructure' as ReaderErrorCodeEnum,
        ImproperEndOfFile: 'ImproperEndOfFile' as ReaderErrorCodeEnum,
        InvalidInterchangeContent: 'InvalidInterchangeContent' as ReaderErrorCodeEnum,
        DemoVersion: 'DemoVersion' as ReaderErrorCodeEnum
    };
}
