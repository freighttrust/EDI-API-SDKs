/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type EdiFabricWebApiModelsX12Acknowledgment struct {
	OriginalIsa *EdiFabricCoreModelEdiX12Isa `json:"originalIsa,omitempty"`
	OriginalGs *EdiFabricCoreModelEdiX12Gs `json:"originalGs,omitempty"`
	AckType string `json:"ackType,omitempty"`
	Ack *EdiFabricCoreModelEdiEdiMessage `json:"ack,omitempty"`
	OriginalTransactions []EdiFabricCoreModelEdiEdiMessage `json:"originalTransactions,omitempty"`
}
