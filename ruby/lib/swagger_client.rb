=begin
#EdiFabric API

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: v1

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.4

=end

# Common files
require 'swagger_client/api_client'
require 'swagger_client/api_error'
require 'swagger_client/version'
require 'swagger_client/configuration'

# Models
require 'swagger_client/models/edi_fabric_core_model_edi_edi_message'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s001'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s002'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s003'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s004'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s005'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s006'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s007'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_s008'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_unb'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_une'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_ung'
require 'swagger_client/models/edi_fabric_core_model_edi_edifact_unz'
require 'swagger_client/models/edi_fabric_core_model_edi_error_contexts_data_element_error_context'
require 'swagger_client/models/edi_fabric_core_model_edi_error_contexts_message_error_context'
require 'swagger_client/models/edi_fabric_core_model_edi_error_contexts_reader_error_context'
require 'swagger_client/models/edi_fabric_core_model_edi_error_contexts_segment_error_context'
require 'swagger_client/models/edi_fabric_core_model_edi_x12_ge'
require 'swagger_client/models/edi_fabric_core_model_edi_x12_gs'
require 'swagger_client/models/edi_fabric_core_model_edi_x12_iea'
require 'swagger_client/models/edi_fabric_core_model_edi_x12_isa'
require 'swagger_client/models/edi_fabric_web_api_models_edifact_acknowledgment'
require 'swagger_client/models/edi_fabric_web_api_models_edifact_group'
require 'swagger_client/models/edi_fabric_web_api_models_edifact_interchange'
require 'swagger_client/models/edi_fabric_web_api_models_error_details'
require 'swagger_client/models/edi_fabric_web_api_models_generate_edifact_group'
require 'swagger_client/models/edi_fabric_web_api_models_generate_edifact_interchange'
require 'swagger_client/models/edi_fabric_web_api_models_generate_edifact_transactions'
require 'swagger_client/models/edi_fabric_web_api_models_generate_gs'
require 'swagger_client/models/edi_fabric_web_api_models_generate_isa'
require 'swagger_client/models/edi_fabric_web_api_models_generate_settings'
require 'swagger_client/models/edi_fabric_web_api_models_generate_unb'
require 'swagger_client/models/edi_fabric_web_api_models_generate_ung'
require 'swagger_client/models/edi_fabric_web_api_models_generate_x12_group'
require 'swagger_client/models/edi_fabric_web_api_models_generate_x12_interchange'
require 'swagger_client/models/edi_fabric_web_api_models_generate_x12_transactions'
require 'swagger_client/models/edi_fabric_web_api_models_validate_edi'
require 'swagger_client/models/edi_fabric_web_api_models_validate_settings'
require 'swagger_client/models/edi_fabric_web_api_models_x12_acknowledgment'
require 'swagger_client/models/edi_fabric_web_api_models_x12_group'
require 'swagger_client/models/edi_fabric_web_api_models_x12_interchange'

# APIs
require 'swagger_client/api/acknowledge_api'
require 'swagger_client/api/generate_api'
require 'swagger_client/api/translate_api'
require 'swagger_client/api/validate_api'

module SwaggerClient
  class << self
    # Customize default settings for the SDK using block.
    #   SwaggerClient.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
