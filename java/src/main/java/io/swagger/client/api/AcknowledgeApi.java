/*
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


package io.swagger.client.api;

import io.swagger.client.ApiCallback;
import io.swagger.client.ApiClient;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.Configuration;
import io.swagger.client.Pair;
import io.swagger.client.ProgressRequestBody;
import io.swagger.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.swagger.client.model.EdiFabricWebApiModelsEdifactAcknowledgment;
import io.swagger.client.model.EdiFabricWebApiModelsErrorDetails;
import io.swagger.client.model.EdiFabricWebApiModelsX12Acknowledgment;
import java.io.File;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AcknowledgeApi {
    private ApiClient apiClient;

    public AcknowledgeApi() {
        this(Configuration.getDefaultApiClient());
    }

    public AcknowledgeApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for acknowledgeEdifact
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param decimalPoint  (optional, default to .)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param eancomSyntax  (optional)
     * @param includeTransactions  (optional, default to false)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call acknowledgeEdifactCall(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String decimalPoint, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String eancomSyntax, Boolean includeTransactions, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/acknowledge/edifact";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (readMode != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("read_mode", readMode));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null)
        localVarHeaderParams.put("Accept", apiClient.parameterToString(accept));

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        if (charSet != null)
        localVarFormParams.put("char_set", charSet);
        if (continueOnError != null)
        localVarFormParams.put("continue_on_error", continueOnError);
        if (skipTrailerValidation != null)
        localVarFormParams.put("skip_trailer_validation", skipTrailerValidation);
        if (decimalPoint != null)
        localVarFormParams.put("decimal_point", decimalPoint);
        if (syntaxSet != null)
        localVarFormParams.put("syntax_set", syntaxSet);
        if (transactionDuplicate != null)
        localVarFormParams.put("transaction_duplicate", transactionDuplicate);
        if (groupDuplicate != null)
        localVarFormParams.put("group_duplicate", groupDuplicate);
        if (technicalAck != null)
        localVarFormParams.put("technical_ack", technicalAck);
        if (generateForValidTransactions != null)
        localVarFormParams.put("generate_for_valid_transactions", generateForValidTransactions);
        if (allowPartial != null)
        localVarFormParams.put("allow_partial", allowPartial);
        if (transactionControlNumber != null)
        localVarFormParams.put("transaction_control_number", transactionControlNumber);
        if (eancomSyntax != null)
        localVarFormParams.put("eancom_syntax", eancomSyntax);
        if (includeTransactions != null)
        localVarFormParams.put("include_transactions", includeTransactions);
        if (ediFile != null)
        localVarFormParams.put("edi_file", ediFile);

        final String[] localVarAccepts = {
            "application/json", "application/xml"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "multipart/form-data"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call acknowledgeEdifactValidateBeforeCall(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String decimalPoint, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String eancomSyntax, Boolean includeTransactions, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'ediFile' is set
        if (ediFile == null) {
            throw new ApiException("Missing the required parameter 'ediFile' when calling acknowledgeEdifact(Async)");
        }
        

        com.squareup.okhttp.Call call = acknowledgeEdifactCall(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions, progressListener, progressRequestListener);
        return call;

    }

    /**
     * 
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param decimalPoint  (optional, default to .)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param eancomSyntax  (optional)
     * @param includeTransactions  (optional, default to false)
     * @return List&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public List<EdiFabricWebApiModelsEdifactAcknowledgment> acknowledgeEdifact(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String decimalPoint, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String eancomSyntax, Boolean includeTransactions) throws ApiException {
        ApiResponse<List<EdiFabricWebApiModelsEdifactAcknowledgment>> resp = acknowledgeEdifactWithHttpInfo(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions);
        return resp.getData();
    }

    /**
     * 
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param decimalPoint  (optional, default to .)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param eancomSyntax  (optional)
     * @param includeTransactions  (optional, default to false)
     * @return ApiResponse&lt;List&lt;EdiFabricWebApiModelsEdifactAcknowledgment&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<List<EdiFabricWebApiModelsEdifactAcknowledgment>> acknowledgeEdifactWithHttpInfo(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String decimalPoint, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String eancomSyntax, Boolean includeTransactions) throws ApiException {
        com.squareup.okhttp.Call call = acknowledgeEdifactValidateBeforeCall(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions, null, null);
        Type localVarReturnType = new TypeToken<List<EdiFabricWebApiModelsEdifactAcknowledgment>>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param decimalPoint  (optional, default to .)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param eancomSyntax  (optional)
     * @param includeTransactions  (optional, default to false)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call acknowledgeEdifactAsync(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String decimalPoint, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String eancomSyntax, Boolean includeTransactions, final ApiCallback<List<EdiFabricWebApiModelsEdifactAcknowledgment>> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = acknowledgeEdifactValidateBeforeCall(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, decimalPoint, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, eancomSyntax, includeTransactions, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<List<EdiFabricWebApiModelsEdifactAcknowledgment>>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for acknowledgeX12
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param ak901  (optional, default to e)
     * @param ackVersion  (optional, default to 4010_997)
     * @param includeTransactions  (optional, default to false)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call acknowledgeX12Call(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String ak901, String ackVersion, Boolean includeTransactions, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/acknowledge/x12";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (readMode != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("read_mode", readMode));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null)
        localVarHeaderParams.put("Accept", apiClient.parameterToString(accept));

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        if (charSet != null)
        localVarFormParams.put("char_set", charSet);
        if (continueOnError != null)
        localVarFormParams.put("continue_on_error", continueOnError);
        if (skipTrailerValidation != null)
        localVarFormParams.put("skip_trailer_validation", skipTrailerValidation);
        if (syntaxSet != null)
        localVarFormParams.put("syntax_set", syntaxSet);
        if (transactionDuplicate != null)
        localVarFormParams.put("transaction_duplicate", transactionDuplicate);
        if (groupDuplicate != null)
        localVarFormParams.put("group_duplicate", groupDuplicate);
        if (technicalAck != null)
        localVarFormParams.put("technical_ack", technicalAck);
        if (generateForValidTransactions != null)
        localVarFormParams.put("generate_for_valid_transactions", generateForValidTransactions);
        if (allowPartial != null)
        localVarFormParams.put("allow_partial", allowPartial);
        if (transactionControlNumber != null)
        localVarFormParams.put("transaction_control_number", transactionControlNumber);
        if (ak901 != null)
        localVarFormParams.put("ak901", ak901);
        if (ackVersion != null)
        localVarFormParams.put("ack_version", ackVersion);
        if (includeTransactions != null)
        localVarFormParams.put("include_transactions", includeTransactions);
        if (ediFile != null)
        localVarFormParams.put("edi_file", ediFile);

        final String[] localVarAccepts = {
            "application/json", "application/xml"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "multipart/form-data"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call acknowledgeX12ValidateBeforeCall(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String ak901, String ackVersion, Boolean includeTransactions, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'ediFile' is set
        if (ediFile == null) {
            throw new ApiException("Missing the required parameter 'ediFile' when calling acknowledgeX12(Async)");
        }
        

        com.squareup.okhttp.Call call = acknowledgeX12Call(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions, progressListener, progressRequestListener);
        return call;

    }

    /**
     * 
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param ak901  (optional, default to e)
     * @param ackVersion  (optional, default to 4010_997)
     * @param includeTransactions  (optional, default to false)
     * @return List&lt;EdiFabricWebApiModelsX12Acknowledgment&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public List<EdiFabricWebApiModelsX12Acknowledgment> acknowledgeX12(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String ak901, String ackVersion, Boolean includeTransactions) throws ApiException {
        ApiResponse<List<EdiFabricWebApiModelsX12Acknowledgment>> resp = acknowledgeX12WithHttpInfo(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions);
        return resp.getData();
    }

    /**
     * 
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param ak901  (optional, default to e)
     * @param ackVersion  (optional, default to 4010_997)
     * @param includeTransactions  (optional, default to false)
     * @return ApiResponse&lt;List&lt;EdiFabricWebApiModelsX12Acknowledgment&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<List<EdiFabricWebApiModelsX12Acknowledgment>> acknowledgeX12WithHttpInfo(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String ak901, String ackVersion, Boolean includeTransactions) throws ApiException {
        com.squareup.okhttp.Call call = acknowledgeX12ValidateBeforeCall(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions, null, null);
        Type localVarReturnType = new TypeToken<List<EdiFabricWebApiModelsX12Acknowledgment>>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * 
     * @param ediFile EDI file to translate (required)
     * @param readMode  (optional, default to read_small)
     * @param accept  (optional, default to application/json)
     * @param charSet  (optional, default to utf-8)
     * @param continueOnError  (optional, default to true)
     * @param skipTrailerValidation  (optional, default to false)
     * @param syntaxSet  (optional)
     * @param transactionDuplicate  (optional, default to false)
     * @param groupDuplicate  (optional, default to false)
     * @param technicalAck  (optional, default to default)
     * @param generateForValidTransactions  (optional, default to false)
     * @param allowPartial  (optional, default to false)
     * @param transactionControlNumber  (optional, default to 1)
     * @param ak901  (optional, default to e)
     * @param ackVersion  (optional, default to 4010_997)
     * @param includeTransactions  (optional, default to false)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call acknowledgeX12Async(File ediFile, String readMode, String accept, String charSet, Boolean continueOnError, Boolean skipTrailerValidation, String syntaxSet, Boolean transactionDuplicate, Boolean groupDuplicate, String technicalAck, Boolean generateForValidTransactions, Boolean allowPartial, Integer transactionControlNumber, String ak901, String ackVersion, Boolean includeTransactions, final ApiCallback<List<EdiFabricWebApiModelsX12Acknowledgment>> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = acknowledgeX12ValidateBeforeCall(ediFile, readMode, accept, charSet, continueOnError, skipTrailerValidation, syntaxSet, transactionDuplicate, groupDuplicate, technicalAck, generateForValidTransactions, allowPartial, transactionControlNumber, ak901, ackVersion, includeTransactions, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<List<EdiFabricWebApiModelsX12Acknowledgment>>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
