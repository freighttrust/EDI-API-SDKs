/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type EdiFabricWebApiModelsGenerateEdifactInterchange struct {
	Settings *EdiFabricWebApiModelsGenerateSettings `json:"settings,omitempty"`
	Unb *EdiFabricCoreModelEdiEdifactUnb `json:"unb,omitempty"`
	Groups []EdiFabricWebApiModelsEdifactGroup `json:"groups,omitempty"`
	UnzTrailers []EdiFabricCoreModelEdiEdifactUnz `json:"unzTrailers,omitempty"`
	Errors []EdiFabricCoreModelEdiErrorContextsReaderErrorContext `json:"errors,omitempty"`
}
