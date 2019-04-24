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
import { EdiFabricCoreModelEdiEdifactUNB } from './ediFabricCoreModelEdiEdifactUNB';
import { EdiFabricCoreModelEdiEdifactUNZ } from './ediFabricCoreModelEdiEdifactUNZ';
import { EdiFabricCoreModelEdiErrorContextsReaderErrorContext } from './ediFabricCoreModelEdiErrorContextsReaderErrorContext';
import { EdiFabricWebApiModelsEdifactGroup } from './ediFabricWebApiModelsEdifactGroup';


export interface EdiFabricWebApiModelsEdifactInterchange { 
    unb?: EdiFabricCoreModelEdiEdifactUNB;
    groups?: Array<EdiFabricWebApiModelsEdifactGroup>;
    unzTrailers?: Array<EdiFabricCoreModelEdiEdifactUNZ>;
    errors?: Array<EdiFabricCoreModelEdiErrorContextsReaderErrorContext>;
}
