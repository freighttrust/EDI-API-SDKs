/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type EdiFabricWebApiModelsValidateEdi struct {
	Settings *EdiFabricWebApiModelsValidateSettings `json:"settings,omitempty"`
	Transactions []EdiFabricCoreModelEdiEdiMessage `json:"transactions,omitempty"`
}
