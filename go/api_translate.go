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

type TranslateApiService service

/* 
TranslateApiService
 * @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param ediFile EDI file to translate
 * @param optional nil or *TranslateEdifactOpts - Optional Parameters:
     * @param "ReadMode" (optional.String) - 
     * @param "Validate" (optional.Bool) - 
     * @param "Accept" (optional.String) - 
     * @param "CharSet" (optional.String) - 
     * @param "ContinueOnError" (optional.Bool) - 
     * @param "TransactionOnly" (optional.Bool) - 
     * @param "DataElementSeparator" (optional.String) - 
     * @param "ComponentDataElementSeparator" (optional.String) - 
     * @param "SegmentSeparator" (optional.String) - 
     * @param "RepetitionSeparator" (optional.String) - 
     * @param "EscapeCharacter" (optional.String) - 
     * @param "DecimalPoint" (optional.String) - 
     * @param "EancomSyntax" (optional.String) - 
     * @param "SkipTrailerValidation" (optional.Bool) - 
     * @param "SyntaxSet" (optional.String) - 

@return []EdiFabricWebApiModelsEdifactInterchange
*/

type TranslateEdifactOpts struct { 
	ReadMode optional.String
	Validate optional.Bool
	Accept optional.String
	CharSet optional.String
	ContinueOnError optional.Bool
	TransactionOnly optional.Bool
	DataElementSeparator optional.String
	ComponentDataElementSeparator optional.String
	SegmentSeparator optional.String
	RepetitionSeparator optional.String
	EscapeCharacter optional.String
	DecimalPoint optional.String
	EancomSyntax optional.String
	SkipTrailerValidation optional.Bool
	SyntaxSet optional.String
}

func (a *TranslateApiService) TranslateEdifact(ctx context.Context, ediFile *os.File, localVarOptionals *TranslateEdifactOpts) ([]EdiFabricWebApiModelsEdifactInterchange, *http.Response, error) {
	var (
		localVarHttpMethod = strings.ToUpper("Post")
		localVarPostBody   interface{}
		localVarFileName   string
		localVarFileBytes  []byte
		localVarReturnValue []EdiFabricWebApiModelsEdifactInterchange
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/translate/edifact"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if localVarOptionals != nil && localVarOptionals.ReadMode.IsSet() {
		localVarQueryParams.Add("read_mode", parameterToString(localVarOptionals.ReadMode.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.Validate.IsSet() {
		localVarQueryParams.Add("validate", parameterToString(localVarOptionals.Validate.Value(), ""))
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
	if localVarOptionals != nil && localVarOptionals.TransactionOnly.IsSet() {
		localVarFormParams.Add("transaction_only", parameterToString(localVarOptionals.TransactionOnly.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.DataElementSeparator.IsSet() {
		localVarFormParams.Add("data_element_separator", parameterToString(localVarOptionals.DataElementSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.ComponentDataElementSeparator.IsSet() {
		localVarFormParams.Add("component_data_element_separator", parameterToString(localVarOptionals.ComponentDataElementSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SegmentSeparator.IsSet() {
		localVarFormParams.Add("segment_separator", parameterToString(localVarOptionals.SegmentSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.RepetitionSeparator.IsSet() {
		localVarFormParams.Add("repetition_separator", parameterToString(localVarOptionals.RepetitionSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.EscapeCharacter.IsSet() {
		localVarFormParams.Add("escape_character", parameterToString(localVarOptionals.EscapeCharacter.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.DecimalPoint.IsSet() {
		localVarFormParams.Add("decimal_point", parameterToString(localVarOptionals.DecimalPoint.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.EancomSyntax.IsSet() {
		localVarFormParams.Add("eancom_syntax", parameterToString(localVarOptionals.EancomSyntax.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SkipTrailerValidation.IsSet() {
		localVarFormParams.Add("skip_trailer_validation", parameterToString(localVarOptionals.SkipTrailerValidation.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SyntaxSet.IsSet() {
		localVarFormParams.Add("syntax_set", parameterToString(localVarOptionals.SyntaxSet.Value(), ""))
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
			var v []EdiFabricWebApiModelsEdifactInterchange
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
TranslateApiService
 * @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param ediFile EDI file to translate
 * @param optional nil or *TranslateX12Opts - Optional Parameters:
     * @param "ReadMode" (optional.String) - 
     * @param "Validate" (optional.Bool) - 
     * @param "Accept" (optional.String) - 
     * @param "CharSet" (optional.String) - 
     * @param "ContinueOnError" (optional.Bool) - 
     * @param "TransactionOnly" (optional.Bool) - 
     * @param "DataElementSeparator" (optional.String) - 
     * @param "ComponentDataElementSeparator" (optional.String) - 
     * @param "SegmentSeparator" (optional.String) - 
     * @param "RepetitionSeparator" (optional.String) - 
     * @param "SkipTrailerValidation" (optional.Bool) - 
     * @param "SyntaxSet" (optional.String) - 

@return []EdiFabricWebApiModelsX12Interchange
*/

type TranslateX12Opts struct { 
	ReadMode optional.String
	Validate optional.Bool
	Accept optional.String
	CharSet optional.String
	ContinueOnError optional.Bool
	TransactionOnly optional.Bool
	DataElementSeparator optional.String
	ComponentDataElementSeparator optional.String
	SegmentSeparator optional.String
	RepetitionSeparator optional.String
	SkipTrailerValidation optional.Bool
	SyntaxSet optional.String
}

func (a *TranslateApiService) TranslateX12(ctx context.Context, ediFile *os.File, localVarOptionals *TranslateX12Opts) ([]EdiFabricWebApiModelsX12Interchange, *http.Response, error) {
	var (
		localVarHttpMethod = strings.ToUpper("Post")
		localVarPostBody   interface{}
		localVarFileName   string
		localVarFileBytes  []byte
		localVarReturnValue []EdiFabricWebApiModelsX12Interchange
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/translate/x12"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if localVarOptionals != nil && localVarOptionals.ReadMode.IsSet() {
		localVarQueryParams.Add("read_mode", parameterToString(localVarOptionals.ReadMode.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.Validate.IsSet() {
		localVarQueryParams.Add("validate", parameterToString(localVarOptionals.Validate.Value(), ""))
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
	if localVarOptionals != nil && localVarOptionals.TransactionOnly.IsSet() {
		localVarFormParams.Add("transaction_only", parameterToString(localVarOptionals.TransactionOnly.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.DataElementSeparator.IsSet() {
		localVarFormParams.Add("data_element_separator", parameterToString(localVarOptionals.DataElementSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.ComponentDataElementSeparator.IsSet() {
		localVarFormParams.Add("component_data_element_separator", parameterToString(localVarOptionals.ComponentDataElementSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SegmentSeparator.IsSet() {
		localVarFormParams.Add("segment_separator", parameterToString(localVarOptionals.SegmentSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.RepetitionSeparator.IsSet() {
		localVarFormParams.Add("repetition_separator", parameterToString(localVarOptionals.RepetitionSeparator.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SkipTrailerValidation.IsSet() {
		localVarFormParams.Add("skip_trailer_validation", parameterToString(localVarOptionals.SkipTrailerValidation.Value(), ""))
	}
	if localVarOptionals != nil && localVarOptionals.SyntaxSet.IsSet() {
		localVarFormParams.Add("syntax_set", parameterToString(localVarOptionals.SyntaxSet.Value(), ""))
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
			var v []EdiFabricWebApiModelsX12Interchange
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
