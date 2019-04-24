/*
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: v1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

import (
	"context"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
	"os"
	"github.com/antihax/optional"
)

// Linger please
var (
	_ context.Context
)

type AcknowledgeApiService service

/* 
AcknowledgeApiService
 * @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param ediFile EDI file to translate
 * @param optional nil or *AcknowledgeEdifactOpts - Optional Parameters:
     * @param "ReadMode" (optional.String) - 
     * @param "Accept" (optional.String) - 
     * @param "CharSet" (optional.String) - 
     * @param "ContinueOnError" (optional.Bool) - 
     * @param "SkipTrailerValidation" (optional.Bool) - 
     * @param "DecimalPoint" (optional.String) - 
     * @param "SyntaxSet" (optional.String) - 
     * @param "TransactionDuplicate" (optional.Bool) - 
     * @param "GroupDuplicate" (optional.Bool) - 
     * @param "TechnicalAck" (optional.String) - 
     * @param "GenerateForValidTransactions" (optional.Bool) - 
     * @param "AllowPartial" (optional.Bool) - 
     * @param "TransactionControlNumber" (optional.Int32) - 
     * @param "EancomSyntax" (optional.String) - 
     * @param "IncludeTransactions" (optional.Bool) - 

@return []EdiFabricWebApiModelsEdifactAcknowledgment
*/

type AcknowledgeEdifactOpts struct { 
	ReadMode optional.String
	Accept optional.String
	CharSet optional.String
	ContinueOnError optional.Bool
	SkipTrailerValidation optional.Bool
	DecimalPoint optional.String
	SyntaxSet optional.String
	TransactionDuplicate optional.Bool
	GroupDuplicate optional.Bool
	TechnicalAck optional.String
	GenerateForValidTransactions optional.Bool
	AllowPartial optional.Bool
	TransactionControlNumber optional.Int32
	EancomSyntax optional.String
	IncludeTransactions optional.Bool
}

func (a *AcknowledgeApiService) AcknowledgeEdifact(ctx context.Context, ediFile *os.File, localVarOptionals *AcknowledgeEdifactOpts) ([]EdiFabricWebApiModelsEdifactAcknowledgment, *http.Response, error) {
	var (
		localVarHttpMethod = strings.ToUpper("Post")
		localVarPostBody   interface{}
		localVarFileName   string
		localVarFileBytes  []byte
		localVarReturnValue []EdiFabricWebApiModelsEdifactAcknowledgment
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/acknowledge/edifact"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if localVarOptionals != nil && localVarOptionals.ReadMode.IsSet() {
		localVarQueryParams.Add("read_mode", parameterToString(localVarOptionals.ReadMode.Value(), ""))
	}
	// to determine the Content-Type header
	localVarHttpContentTypes := []string{"multipart/form-data"}

	// set Content-Type header
	localVarHttpContentType := selectHeaderContentType(localVarHttpContentTypes)
	if localVarHttpContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHttpContentType
	}

	// to determine the Accept header
	localVarHttpHeaderAccepts := []string{"application/json", "application/xml"}

	// set Accept header
	localVarHttpHeaderAccept := selectHeaderAccept(localVarHttpHeaderAccepts)
	if localVarHttpHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHttpHeaderAccept
	}
	if localVarOptionals != nil && localVarOptionals.Accept.IsSet() {
		localVarHeaderParams["Accept"] = parameterToString(localVarOptionals.Accept.Value(), "")
	}
	if localVarOptionals != nil && localVarOptionals.CharSet.IsSet() {
		localVarFormParams.Add("char_set", parameterToString(localVarOptionals.CharSet.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.ContinueOnError.IsSet() {
		localVarFormParams.Add("continue_on_error", parameterToString(localVarOptionals.ContinueOnError.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SkipTrailerValidation.IsSet() {
		localVarFormParams.Add("skip_trailer_validation", parameterToString(localVarOptionals.SkipTrailerValidation.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.DecimalPoint.IsSet() {
		localVarFormParams.Add("decimal_point", parameterToString(localVarOptionals.DecimalPoint.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SyntaxSet.IsSet() {
		localVarFormParams.Add("syntax_set", parameterToString(localVarOptionals.SyntaxSet.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TransactionDuplicate.IsSet() {
		localVarFormParams.Add("transaction_duplicate", parameterToString(localVarOptionals.TransactionDuplicate.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.GroupDuplicate.IsSet() {
		localVarFormParams.Add("group_duplicate", parameterToString(localVarOptionals.GroupDuplicate.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TechnicalAck.IsSet() {
		localVarFormParams.Add("technical_ack", parameterToString(localVarOptionals.TechnicalAck.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.GenerateForValidTransactions.IsSet() {
		localVarFormParams.Add("generate_for_valid_transactions", parameterToString(localVarOptionals.GenerateForValidTransactions.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.AllowPartial.IsSet() {
		localVarFormParams.Add("allow_partial", parameterToString(localVarOptionals.AllowPartial.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TransactionControlNumber.IsSet() {
		localVarFormParams.Add("transaction_control_number", parameterToString(localVarOptionals.TransactionControlNumber.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.EancomSyntax.IsSet() {
		localVarFormParams.Add("eancom_syntax", parameterToString(localVarOptionals.EancomSyntax.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.IncludeTransactions.IsSet() {
		localVarFormParams.Add("include_transactions", parameterToString(localVarOptionals.IncludeTransactions.Value(), ""))
	}
	if localVarFile != nil {
		fbs, _ := ioutil.ReadAll(localVarFile)
		localVarFileBytes = fbs
		localVarFileName = localVarFile.Name()
		localVarFile.Close()
	}
	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHttpMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHttpResponse, err := a.client.callAPI(r)
	if err != nil || localVarHttpResponse == nil {
		return localVarReturnValue, localVarHttpResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHttpResponse.Body)
	localVarHttpResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHttpResponse, err
	}

	if localVarHttpResponse.StatusCode < 300 {
		// If we succeed, return the data, otherwise pass on to decode error.
		err = a.client.decode(&localVarReturnValue, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
		if err == nil { 
			return localVarReturnValue, localVarHttpResponse, err
		}
	}

	if localVarHttpResponse.StatusCode >= 300 {
		newErr := GenericSwaggerError{
			body: localVarBody,
			error: localVarHttpResponse.Status,
		}
		
		if localVarHttpResponse.StatusCode == 200 {
			var v []EdiFabricWebApiModelsEdifactAcknowledgment
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		if localVarHttpResponse.StatusCode == 400 {
			var v EdiFabricWebApiModelsErrorDetails
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		if localVarHttpResponse.StatusCode == 500 {
			var v EdiFabricWebApiModelsErrorDetails
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		return localVarReturnValue, localVarHttpResponse, newErr
	}

	return localVarReturnValue, localVarHttpResponse, nil
}

/* 
AcknowledgeApiService
 * @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param ediFile EDI file to translate
 * @param optional nil or *AcknowledgeX12Opts - Optional Parameters:
     * @param "ReadMode" (optional.String) - 
     * @param "Accept" (optional.String) - 
     * @param "CharSet" (optional.String) - 
     * @param "ContinueOnError" (optional.Bool) - 
     * @param "SkipTrailerValidation" (optional.Bool) - 
     * @param "SyntaxSet" (optional.String) - 
     * @param "TransactionDuplicate" (optional.Bool) - 
     * @param "GroupDuplicate" (optional.Bool) - 
     * @param "TechnicalAck" (optional.String) - 
     * @param "GenerateForValidTransactions" (optional.Bool) - 
     * @param "AllowPartial" (optional.Bool) - 
     * @param "TransactionControlNumber" (optional.Int32) - 
     * @param "Ak901" (optional.String) - 
     * @param "AckVersion" (optional.String) - 
     * @param "IncludeTransactions" (optional.Bool) - 

@return []EdiFabricWebApiModelsX12Acknowledgment
*/

type AcknowledgeX12Opts struct { 
	ReadMode optional.String
	Accept optional.String
	CharSet optional.String
	ContinueOnError optional.Bool
	SkipTrailerValidation optional.Bool
	SyntaxSet optional.String
	TransactionDuplicate optional.Bool
	GroupDuplicate optional.Bool
	TechnicalAck optional.String
	GenerateForValidTransactions optional.Bool
	AllowPartial optional.Bool
	TransactionControlNumber optional.Int32
	Ak901 optional.String
	AckVersion optional.String
	IncludeTransactions optional.Bool
}

func (a *AcknowledgeApiService) AcknowledgeX12(ctx context.Context, ediFile *os.File, localVarOptionals *AcknowledgeX12Opts) ([]EdiFabricWebApiModelsX12Acknowledgment, *http.Response, error) {
	var (
		localVarHttpMethod = strings.ToUpper("Post")
		localVarPostBody   interface{}
		localVarFileName   string
		localVarFileBytes  []byte
		localVarReturnValue []EdiFabricWebApiModelsX12Acknowledgment
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/acknowledge/x12"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if localVarOptionals != nil && localVarOptionals.ReadMode.IsSet() {
		localVarQueryParams.Add("read_mode", parameterToString(localVarOptionals.ReadMode.Value(), ""))
	}
	// to determine the Content-Type header
	localVarHttpContentTypes := []string{"multipart/form-data"}

	// set Content-Type header
	localVarHttpContentType := selectHeaderContentType(localVarHttpContentTypes)
	if localVarHttpContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHttpContentType
	}

	// to determine the Accept header
	localVarHttpHeaderAccepts := []string{"application/json", "application/xml"}

	// set Accept header
	localVarHttpHeaderAccept := selectHeaderAccept(localVarHttpHeaderAccepts)
	if localVarHttpHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHttpHeaderAccept
	}
	if localVarOptionals != nil && localVarOptionals.Accept.IsSet() {
		localVarHeaderParams["Accept"] = parameterToString(localVarOptionals.Accept.Value(), "")
	}
	if localVarOptionals != nil && localVarOptionals.CharSet.IsSet() {
		localVarFormParams.Add("char_set", parameterToString(localVarOptionals.CharSet.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.ContinueOnError.IsSet() {
		localVarFormParams.Add("continue_on_error", parameterToString(localVarOptionals.ContinueOnError.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SkipTrailerValidation.IsSet() {
		localVarFormParams.Add("skip_trailer_validation", parameterToString(localVarOptionals.SkipTrailerValidation.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SyntaxSet.IsSet() {
		localVarFormParams.Add("syntax_set", parameterToString(localVarOptionals.SyntaxSet.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TransactionDuplicate.IsSet() {
		localVarFormParams.Add("transaction_duplicate", parameterToString(localVarOptionals.TransactionDuplicate.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.GroupDuplicate.IsSet() {
		localVarFormParams.Add("group_duplicate", parameterToString(localVarOptionals.GroupDuplicate.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TechnicalAck.IsSet() {
		localVarFormParams.Add("technical_ack", parameterToString(localVarOptionals.TechnicalAck.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.GenerateForValidTransactions.IsSet() {
		localVarFormParams.Add("generate_for_valid_transactions", parameterToString(localVarOptionals.GenerateForValidTransactions.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.AllowPartial.IsSet() {
		localVarFormParams.Add("allow_partial", parameterToString(localVarOptionals.AllowPartial.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.TransactionControlNumber.IsSet() {
		localVarFormParams.Add("transaction_control_number", parameterToString(localVarOptionals.TransactionControlNumber.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.Ak901.IsSet() {
		localVarFormParams.Add("ak901", parameterToString(localVarOptionals.Ak901.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.AckVersion.IsSet() {
		localVarFormParams.Add("ack_version", parameterToString(localVarOptionals.AckVersion.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.IncludeTransactions.IsSet() {
		localVarFormParams.Add("include_transactions", parameterToString(localVarOptionals.IncludeTransactions.Value(), ""))
	}
	if localVarFile != nil {
		fbs, _ := ioutil.ReadAll(localVarFile)
		localVarFileBytes = fbs
		localVarFileName = localVarFile.Name()
		localVarFile.Close()
	}
	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHttpMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHttpResponse, err := a.client.callAPI(r)
	if err != nil || localVarHttpResponse == nil {
		return localVarReturnValue, localVarHttpResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHttpResponse.Body)
	localVarHttpResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHttpResponse, err
	}

	if localVarHttpResponse.StatusCode < 300 {
		// If we succeed, return the data, otherwise pass on to decode error.
		err = a.client.decode(&localVarReturnValue, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
		if err == nil { 
			return localVarReturnValue, localVarHttpResponse, err
		}
	}

	if localVarHttpResponse.StatusCode >= 300 {
		newErr := GenericSwaggerError{
			body: localVarBody,
			error: localVarHttpResponse.Status,
		}
		
		if localVarHttpResponse.StatusCode == 200 {
			var v []EdiFabricWebApiModelsX12Acknowledgment
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		if localVarHttpResponse.StatusCode == 400 {
			var v EdiFabricWebApiModelsErrorDetails
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		if localVarHttpResponse.StatusCode == 500 {
			var v EdiFabricWebApiModelsErrorDetails
			err = a.client.decode(&v, localVarBody, localVarHttpResponse.Header.Get("Content-Type"));
				if err != nil {
					newErr.error = err.Error()
					return localVarReturnValue, localVarHttpResponse, newErr
				}
				newErr.model = v
				return localVarReturnValue, localVarHttpResponse, newErr
		}
		
		return localVarReturnValue, localVarHttpResponse, newErr
	}

	return localVarReturnValue, localVarHttpResponse, nil
}