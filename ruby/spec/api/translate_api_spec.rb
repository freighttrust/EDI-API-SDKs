=begin
#EdiFabric API

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: v1

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.4

=end

require 'spec_helper'
require 'json'

# Unit tests for SwaggerClient::TranslateApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'TranslateApi' do
  before do
    # run before each test
    @instance = SwaggerClient::TranslateApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TranslateApi' do
    it 'should create an instance of TranslateApi' do
      expect(@instance).to be_instance_of(SwaggerClient::TranslateApi)
    end
  end

  # unit tests for translate_edifact
  # @param edi_file EDI file to translate
  # @param [Hash] opts the optional parameters
  # @option opts [String] :read_mode 
  # @option opts [BOOLEAN] :validate 
  # @option opts [String] :accept 
  # @option opts [String] :char_set 
  # @option opts [BOOLEAN] :continue_on_error 
  # @option opts [BOOLEAN] :transaction_only 
  # @option opts [String] :data_element_separator 
  # @option opts [String] :component_data_element_separator 
  # @option opts [String] :segment_separator 
  # @option opts [String] :repetition_separator 
  # @option opts [String] :escape_character 
  # @option opts [String] :decimal_point 
  # @option opts [String] :eancom_syntax 
  # @option opts [BOOLEAN] :skip_trailer_validation 
  # @option opts [String] :syntax_set 
  # @return [Array<EdiFabricWebApiModelsEdifactInterchange>]
  describe 'translate_edifact test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for translate_x12
  # @param edi_file EDI file to translate
  # @param [Hash] opts the optional parameters
  # @option opts [String] :read_mode 
  # @option opts [BOOLEAN] :validate 
  # @option opts [String] :accept 
  # @option opts [String] :char_set 
  # @option opts [BOOLEAN] :continue_on_error 
  # @option opts [BOOLEAN] :transaction_only 
  # @option opts [String] :data_element_separator 
  # @option opts [String] :component_data_element_separator 
  # @option opts [String] :segment_separator 
  # @option opts [String] :repetition_separator 
  # @option opts [BOOLEAN] :skip_trailer_validation 
  # @option opts [String] :syntax_set 
  # @return [Array<EdiFabricWebApiModelsX12Interchange>]
  describe 'translate_x12 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
