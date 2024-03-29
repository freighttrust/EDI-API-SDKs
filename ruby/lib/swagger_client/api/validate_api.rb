=begin
#EdiFabric API

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: v1

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.4

=end

require 'uri'

module SwaggerClient
  class ValidateApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiX12GS] :gs 
    # @return [Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>]
    def validate_gs(opts = {})
      data, _status_code, _headers = validate_gs_with_http_info(opts)
      data
    end

    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiX12GS] :gs 
    # @return [Array<(Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>, Fixnum, Hash)>] Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> data, response status code and response headers
    def validate_gs_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ValidateApi.validate_gs ...'
      end
      # resource path
      local_var_path = '/validate/gs'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(opts[:'gs'])
      auth_names = []
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ValidateApi#validate_gs\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiX12ISA] :isa 
    # @return [Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>]
    def validate_isa(opts = {})
      data, _status_code, _headers = validate_isa_with_http_info(opts)
      data
    end

    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiX12ISA] :isa 
    # @return [Array<(Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>, Fixnum, Hash)>] Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> data, response status code and response headers
    def validate_isa_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ValidateApi.validate_isa ...'
      end
      # resource path
      local_var_path = '/validate/isa'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(opts[:'isa'])
      auth_names = []
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ValidateApi#validate_isa\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricWebApiModelsValidateEdi] :validate_edi 
    # @return [EdiFabricCoreModelEdiErrorContextsMessageErrorContext]
    def validate_transactions(opts = {})
      data, _status_code, _headers = validate_transactions_with_http_info(opts)
      data
    end

    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricWebApiModelsValidateEdi] :validate_edi 
    # @return [Array<(EdiFabricCoreModelEdiErrorContextsMessageErrorContext, Fixnum, Hash)>] EdiFabricCoreModelEdiErrorContextsMessageErrorContext data, response status code and response headers
    def validate_transactions_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ValidateApi.validate_transactions ...'
      end
      # resource path
      local_var_path = '/validate/transactions'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(opts[:'validate_edi'])
      auth_names = []
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'EdiFabricCoreModelEdiErrorContextsMessageErrorContext')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ValidateApi#validate_transactions\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiEdifactUNB] :unb 
    # @return [Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>]
    def validate_unb(opts = {})
      data, _status_code, _headers = validate_unb_with_http_info(opts)
      data
    end

    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiEdifactUNB] :unb 
    # @return [Array<(Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>, Fixnum, Hash)>] Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> data, response status code and response headers
    def validate_unb_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ValidateApi.validate_unb ...'
      end
      # resource path
      local_var_path = '/validate/unb'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(opts[:'unb'])
      auth_names = []
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ValidateApi#validate_unb\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiEdifactUNG] :ung 
    # @return [Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>]
    def validate_ung(opts = {})
      data, _status_code, _headers = validate_ung_with_http_info(opts)
      data
    end

    # @param [Hash] opts the optional parameters
    # @option opts [EdiFabricCoreModelEdiEdifactUNG] :ung 
    # @return [Array<(Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>, Fixnum, Hash)>] Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext> data, response status code and response headers
    def validate_ung_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ValidateApi.validate_ung ...'
      end
      # resource path
      local_var_path = '/validate/ung'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(opts[:'ung'])
      auth_names = []
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Array<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ValidateApi#validate_ung\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
