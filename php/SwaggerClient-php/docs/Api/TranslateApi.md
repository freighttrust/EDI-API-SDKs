# Swagger\Client\TranslateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translateEdifact**](TranslateApi.md#translateEdifact) | **POST** /translate/edifact | 
[**translateX12**](TranslateApi.md#translateX12) | **POST** /translate/x12 | 


# **translateEdifact**
> \Swagger\Client\Model\EdiFabricWebApiModelsEdifactInterchange[] translateEdifact($edi_file, $read_mode, $validate, $accept, $char_set, $continue_on_error, $transaction_only, $data_element_separator, $component_data_element_separator, $segment_separator, $repetition_separator, $escape_character, $decimal_point, $eancom_syntax, $skip_trailer_validation, $syntax_set)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TranslateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$edi_file = "/path/to/file.txt"; // \SplFileObject | EDI file to translate
$read_mode = "read_small"; // string | 
$validate = false; // bool | 
$accept = "application/json"; // string | 
$char_set = "utf-8"; // string | 
$continue_on_error = true; // bool | 
$transaction_only = false; // bool | 
$data_element_separator = "+"; // string | 
$component_data_element_separator = ":"; // string | 
$segment_separator = "'"; // string | 
$repetition_separator = "*"; // string | 
$escape_character = "?"; // string | 
$decimal_point = "."; // string | 
$eancom_syntax = "eancom_syntax_example"; // string | 
$skip_trailer_validation = false; // bool | 
$syntax_set = "syntax_set_example"; // string | 

try {
    $result = $apiInstance->translateEdifact($edi_file, $read_mode, $validate, $accept, $char_set, $continue_on_error, $transaction_only, $data_element_separator, $component_data_element_separator, $segment_separator, $repetition_separator, $escape_character, $decimal_point, $eancom_syntax, $skip_trailer_validation, $syntax_set);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TranslateApi->translateEdifact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **\SplFileObject**| EDI file to translate |
 **read_mode** | **string**|  | [optional] [default to read_small]
 **validate** | **bool**|  | [optional] [default to false]
 **accept** | **string**|  | [optional] [default to application/json]
 **char_set** | **string**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **transaction_only** | **bool**|  | [optional] [default to false]
 **data_element_separator** | **string**|  | [optional] [default to +]
 **component_data_element_separator** | **string**|  | [optional] [default to :]
 **segment_separator** | **string**|  | [optional] [default to &#39;]
 **repetition_separator** | **string**|  | [optional] [default to *]
 **escape_character** | **string**|  | [optional] [default to ?]
 **decimal_point** | **string**|  | [optional] [default to .]
 **eancom_syntax** | **string**|  | [optional]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricWebApiModelsEdifactInterchange[]**](../Model/EdiFabricWebApiModelsEdifactInterchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **translateX12**
> \Swagger\Client\Model\EdiFabricWebApiModelsX12Interchange[] translateX12($edi_file, $read_mode, $validate, $accept, $char_set, $continue_on_error, $transaction_only, $data_element_separator, $component_data_element_separator, $segment_separator, $repetition_separator, $skip_trailer_validation, $syntax_set)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TranslateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$edi_file = "/path/to/file.txt"; // \SplFileObject | EDI file to translate
$read_mode = "read_small"; // string | 
$validate = false; // bool | 
$accept = "application/json"; // string | 
$char_set = "utf-8"; // string | 
$continue_on_error = true; // bool | 
$transaction_only = false; // bool | 
$data_element_separator = "*"; // string | 
$component_data_element_separator = ">"; // string | 
$segment_separator = "~"; // string | 
$repetition_separator = "^"; // string | 
$skip_trailer_validation = false; // bool | 
$syntax_set = "syntax_set_example"; // string | 

try {
    $result = $apiInstance->translateX12($edi_file, $read_mode, $validate, $accept, $char_set, $continue_on_error, $transaction_only, $data_element_separator, $component_data_element_separator, $segment_separator, $repetition_separator, $skip_trailer_validation, $syntax_set);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TranslateApi->translateX12: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **\SplFileObject**| EDI file to translate |
 **read_mode** | **string**|  | [optional] [default to read_small]
 **validate** | **bool**|  | [optional] [default to false]
 **accept** | **string**|  | [optional] [default to application/json]
 **char_set** | **string**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **transaction_only** | **bool**|  | [optional] [default to false]
 **data_element_separator** | **string**|  | [optional] [default to *]
 **component_data_element_separator** | **string**|  | [optional] [default to &gt;]
 **segment_separator** | **string**|  | [optional] [default to ~]
 **repetition_separator** | **string**|  | [optional] [default to ^]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricWebApiModelsX12Interchange[]**](../Model/EdiFabricWebApiModelsX12Interchange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

