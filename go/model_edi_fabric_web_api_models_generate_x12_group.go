/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type EdiFabricWebApiModelsGenerateX12Group struct {
	Settings *EdiFabricWebApiModelsGenerateSettings `json:"settings,omitempty"`
	Gs *EdiFabricCoreModelEdiX12Gs `json:"gs,omitempty"`
	GeTrailers []EdiFabricCoreModelEdiX12Ge `json:"geTrailers,omitempty"`
	Transactions []EdiFabricCoreModelEdiEdiMessage `json:"transactions,omitempty"`
}