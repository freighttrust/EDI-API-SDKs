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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { EdiFabricWebApiModelsEdifactInterchange } from '../model/ediFabricWebApiModelsEdifactInterchange';
import { EdiFabricWebApiModelsErrorDetails } from '../model/ediFabricWebApiModelsErrorDetails';
import { EdiFabricWebApiModelsX12Interchange } from '../model/ediFabricWebApiModelsX12Interchange';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TranslateService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param ediFile EDI file to translate
     * @param readMode 
     * @param validate 
     * @param accept 
     * @param charSet 
     * @param continueOnError 
     * @param transactionOnly 
     * @param dataElementSeparator 
     * @param componentDataElementSeparator 
     * @param segmentSeparator 
     * @param repetitionSeparator 
     * @param escapeCharacter 
     * @param decimalPoint 
     * @param eancomSyntax 
     * @param skipTrailerValidation 
     * @param syntaxSet 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public translateEdifact(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, escapeCharacter?: string, decimalPoint?: '.' | ',', eancomSyntax?: '4' | '3' | 'older', skipTrailerValidation?: boolean, syntaxSet?: 'unoa' | 'unob', observe?: 'body', reportProgress?: boolean): Observable<Array<EdiFabricWebApiModelsEdifactInterchange>>;
    public translateEdifact(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, escapeCharacter?: string, decimalPoint?: '.' | ',', eancomSyntax?: '4' | '3' | 'older', skipTrailerValidation?: boolean, syntaxSet?: 'unoa' | 'unob', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EdiFabricWebApiModelsEdifactInterchange>>>;
    public translateEdifact(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, escapeCharacter?: string, decimalPoint?: '.' | ',', eancomSyntax?: '4' | '3' | 'older', skipTrailerValidation?: boolean, syntaxSet?: 'unoa' | 'unob', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EdiFabricWebApiModelsEdifactInterchange>>>;
    public translateEdifact(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, escapeCharacter?: string, decimalPoint?: '.' | ',', eancomSyntax?: '4' | '3' | 'older', skipTrailerValidation?: boolean, syntaxSet?: 'unoa' | 'unob', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ediFile === null || ediFile === undefined) {
            throw new Error('Required parameter ediFile was null or undefined when calling translateEdifact.');
        }
















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (readMode !== undefined && readMode !== null) {
            queryParameters = queryParameters.set('read_mode', <any>readMode);
        }
        if (validate !== undefined && validate !== null) {
            queryParameters = queryParameters.set('validate', <any>validate);
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (charSet !== undefined) {
            formParams = formParams.append('char_set', <any>charSet) || formParams;
        }
        if (continueOnError !== undefined) {
            formParams = formParams.append('continue_on_error', <any>continueOnError) || formParams;
        }
        if (transactionOnly !== undefined) {
            formParams = formParams.append('transaction_only', <any>transactionOnly) || formParams;
        }
        if (dataElementSeparator !== undefined) {
            formParams = formParams.append('data_element_separator', <any>dataElementSeparator) || formParams;
        }
        if (componentDataElementSeparator !== undefined) {
            formParams = formParams.append('component_data_element_separator', <any>componentDataElementSeparator) || formParams;
        }
        if (segmentSeparator !== undefined) {
            formParams = formParams.append('segment_separator', <any>segmentSeparator) || formParams;
        }
        if (repetitionSeparator !== undefined) {
            formParams = formParams.append('repetition_separator', <any>repetitionSeparator) || formParams;
        }
        if (escapeCharacter !== undefined) {
            formParams = formParams.append('escape_character', <any>escapeCharacter) || formParams;
        }
        if (decimalPoint !== undefined) {
            formParams = formParams.append('decimal_point', <any>decimalPoint) || formParams;
        }
        if (eancomSyntax !== undefined) {
            formParams = formParams.append('eancom_syntax', <any>eancomSyntax) || formParams;
        }
        if (skipTrailerValidation !== undefined) {
            formParams = formParams.append('skip_trailer_validation', <any>skipTrailerValidation) || formParams;
        }
        if (syntaxSet !== undefined) {
            formParams = formParams.append('syntax_set', <any>syntaxSet) || formParams;
        }
        if (ediFile !== undefined) {
            formParams = formParams.append('edi_file', <any>ediFile) || formParams;
        }

        return this.httpClient.post<Array<EdiFabricWebApiModelsEdifactInterchange>>(`${this.basePath}/translate/edifact`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param ediFile EDI file to translate
     * @param readMode 
     * @param validate 
     * @param accept 
     * @param charSet 
     * @param continueOnError 
     * @param transactionOnly 
     * @param dataElementSeparator 
     * @param componentDataElementSeparator 
     * @param segmentSeparator 
     * @param repetitionSeparator 
     * @param skipTrailerValidation 
     * @param syntaxSet 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public translateX12(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, skipTrailerValidation?: boolean, syntaxSet?: 'basic' | 'standard', observe?: 'body', reportProgress?: boolean): Observable<Array<EdiFabricWebApiModelsX12Interchange>>;
    public translateX12(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, skipTrailerValidation?: boolean, syntaxSet?: 'basic' | 'standard', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EdiFabricWebApiModelsX12Interchange>>>;
    public translateX12(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, skipTrailerValidation?: boolean, syntaxSet?: 'basic' | 'standard', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EdiFabricWebApiModelsX12Interchange>>>;
    public translateX12(ediFile: Blob, readMode?: 'read_small' | 'read_large', validate?: boolean, accept?: 'application/json' | 'application/xml', charSet?: string, continueOnError?: boolean, transactionOnly?: boolean, dataElementSeparator?: string, componentDataElementSeparator?: string, segmentSeparator?: string, repetitionSeparator?: string, skipTrailerValidation?: boolean, syntaxSet?: 'basic' | 'standard', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ediFile === null || ediFile === undefined) {
            throw new Error('Required parameter ediFile was null or undefined when calling translateX12.');
        }













        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (readMode !== undefined && readMode !== null) {
            queryParameters = queryParameters.set('read_mode', <any>readMode);
        }
        if (validate !== undefined && validate !== null) {
            queryParameters = queryParameters.set('validate', <any>validate);
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (charSet !== undefined) {
            formParams = formParams.append('char_set', <any>charSet) || formParams;
        }
        if (continueOnError !== undefined) {
            formParams = formParams.append('continue_on_error', <any>continueOnError) || formParams;
        }
        if (transactionOnly !== undefined) {
            formParams = formParams.append('transaction_only', <any>transactionOnly) || formParams;
        }
        if (dataElementSeparator !== undefined) {
            formParams = formParams.append('data_element_separator', <any>dataElementSeparator) || formParams;
        }
        if (componentDataElementSeparator !== undefined) {
            formParams = formParams.append('component_data_element_separator', <any>componentDataElementSeparator) || formParams;
        }
        if (segmentSeparator !== undefined) {
            formParams = formParams.append('segment_separator', <any>segmentSeparator) || formParams;
        }
        if (repetitionSeparator !== undefined) {
            formParams = formParams.append('repetition_separator', <any>repetitionSeparator) || formParams;
        }
        if (skipTrailerValidation !== undefined) {
            formParams = formParams.append('skip_trailer_validation', <any>skipTrailerValidation) || formParams;
        }
        if (syntaxSet !== undefined) {
            formParams = formParams.append('syntax_set', <any>syntaxSet) || formParams;
        }
        if (ediFile !== undefined) {
            formParams = formParams.append('edi_file', <any>ediFile) || formParams;
        }

        return this.httpClient.post<Array<EdiFabricWebApiModelsX12Interchange>>(`${this.basePath}/translate/x12`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}