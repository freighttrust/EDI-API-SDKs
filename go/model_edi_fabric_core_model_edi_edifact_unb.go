/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type EdiFabricCoreModelEdiEdifactUnb struct {
	SyntaxidentifieR1 *EdiFabricCoreModelEdiEdifactS001 `json:"syntaxidentifieR_1,omitempty"`
	InterchangesendeR2 *EdiFabricCoreModelEdiEdifactS002 `json:"interchangesendeR_2,omitempty"`
	InterchangerecipienT3 *EdiFabricCoreModelEdiEdifactS003 `json:"interchangerecipienT_3,omitempty"`
	DateandtimeofpreparatioN4 *EdiFabricCoreModelEdiEdifactS004 `json:"dateandtimeofpreparatioN_4,omitempty"`
	InterchangeControlReference5 string `json:"interchangeControlReference_5,omitempty"`
	RecipientsreferencepassworddetailS6 *EdiFabricCoreModelEdiEdifactS005 `json:"recipientsreferencepassworddetailS_6,omitempty"`
	ApplicationReference7 string `json:"applicationReference_7,omitempty"`
	ProcessingPriorityCode8 string `json:"processingPriorityCode_8,omitempty"`
	AcknowledgementRequest9 string `json:"acknowledgementRequest_9,omitempty"`
	InterchangeAgreementIdentifier10 string `json:"interchangeAgreementIdentifier_10,omitempty"`
	TestIndicator11 string `json:"testIndicator_11,omitempty"`
}
