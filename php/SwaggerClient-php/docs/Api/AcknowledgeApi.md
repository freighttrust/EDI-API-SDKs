# Swagger\Client\AcknowledgeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeEdifact**](AcknowledgeApi.md#acknowledgeEdifact) | **POST** /acknowledge/edifact | 
[**acknowledgeX12**](AcknowledgeApi.md#acknowledgeX12) | **POST** /acknowledge/x12 | 


# **acknowledgeEdifact**
> \Swagger\Client\Model\EdiFabricWebApiModelsEdifactAcknowledgment[] acknowledgeEdifact($edi_file, $read_mode, $accept, $char_set, $continue_on_error, $skip_trailer_validation, $decimal_point, $syntax_set, $transaction_duplicate, $group_duplicate, $technical_ack, $generate_for_valid_transactions, $allow_partial, $transaction_control_number, $eancom_syntax, $include_transactions)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\AcknowledgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$edi_file = "/path/to/file.txt"; // \SplFileObject | EDI file to translate
$read_mode = "read_small"; // string | 
$accept = "application/json"; // string | 
$char_set = "utf-8"; // string | 
$continue_on_error = true; // bool | 
$skip_trailer_validation = false; // bool | 
$decimal_point = "."; // string | 
$syntax_set = "syntax_set_example"; // string | 
$transaction_duplicate = false; // bool | 
$group_duplicate = false; // bool | 
$technical_ack = "default"; // string | 
$generate_for_valid_transactions = false; // bool | 
$allow_partial = false; // bool | 
$transaction_control_number = 1; // int | 
$eancom_syntax = "eancom_syntax_example"; // string | 
$include_transactions = false; // bool | 

try {
    $result = $apiInstance->acknowledgeEdifact($edi_file, $read_mode, $accept, $char_set, $continue_on_error, $skip_trailer_validation, $decimal_point, $syntax_set, $transaction_duplicate, $group_duplicate, $technical_ack, $generate_for_valid_transactions, $allow_partial, $transaction_control_number, $eancom_syntax, $include_transactions);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcknowledgeApi->acknowledgeEdifact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **\SplFileObject**| EDI file to translate |
 **read_mode** | **string**|  | [optional] [default to read_small]
 **accept** | **string**|  | [optional] [default to application/json]
 **char_set** | **string**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **decimal_point** | **string**|  | [optional] [default to .]
 **syntax_set** | **string**|  | [optional]
 **transaction_duplicate** | **bool**|  | [optional] [default to false]
 **group_duplicate** | **bool**|  | [optional] [default to false]
 **technical_ack** | **string**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **bool**|  | [optional] [default to false]
 **allow_partial** | **bool**|  | [optional] [default to false]
 **transaction_control_number** | **int**|  | [optional] [default to 1]
 **eancom_syntax** | **string**|  | [optional]
 **include_transactions** | **bool**|  | [optional] [default to false]

### Return type

[**\Swagger\Client\Model\EdiFabricWebApiModelsEdifactAcknowledgment[]**](../Model/EdiFabricWebApiModelsEdifactAcknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **acknowledgeX12**
> \Swagger\Client\Model\EdiFabricWebApiModelsX12Acknowledgment[] acknowledgeX12($edi_file, $read_mode, $accept, $char_set, $continue_on_error, $skip_trailer_validation, $syntax_set, $transaction_duplicate, $group_duplicate, $technical_ack, $generate_for_valid_transactions, $allow_partial, $transaction_control_number, $ak901, $ack_version, $include_transactions)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\AcknowledgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$edi_file = "/path/to/file.txt"; // \SplFileObject | EDI file to translate
$read_mode = "read_small"; // string | 
$accept = "application/json"; // string | 
$char_set = "utf-8"; // string | 
$continue_on_error = true; // bool | 
$skip_trailer_validation = false; // bool | 
$syntax_set = "syntax_set_example"; // string | 
$transaction_duplicate = false; // bool | 
$group_duplicate = false; // bool | 
$technical_ack = "default"; // string | 
$generate_for_valid_transactions = false; // bool | 
$allow_partial = false; // bool | 
$transaction_control_number = 1; // int | 
$ak901 = "e"; // string | 
$ack_version = "4010_997"; // string | 
$include_transactions = false; // bool | 

try {
    $result = $apiInstance->acknowledgeX12($edi_file, $read_mode, $accept, $char_set, $continue_on_error, $skip_trailer_validation, $syntax_set, $transaction_duplicate, $group_duplicate, $technical_ack, $generate_for_valid_transactions, $allow_partial, $transaction_control_number, $ak901, $ack_version, $include_transactions);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcknowledgeApi->acknowledgeX12: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edi_file** | **\SplFileObject**| EDI file to translate |
 **read_mode** | **string**|  | [optional] [default to read_small]
 **accept** | **string**|  | [optional] [default to application/json]
 **char_set** | **string**|  | [optional] [default to utf-8]
 **continue_on_error** | **bool**|  | [optional] [default to true]
 **skip_trailer_validation** | **bool**|  | [optional] [default to false]
 **syntax_set** | **string**|  | [optional]
 **transaction_duplicate** | **bool**|  | [optional] [default to false]
 **group_duplicate** | **bool**|  | [optional] [default to false]
 **technical_ack** | **string**|  | [optional] [default to default]
 **generate_for_valid_transactions** | **bool**|  | [optional] [default to false]
 **allow_partial** | **bool**|  | [optional] [default to false]
 **transaction_control_number** | **int**|  | [optional] [default to 1]
 **ak901** | **string**|  | [optional] [default to e]
 **ack_version** | **string**|  | [optional] [default to 4010_997]
 **include_transactions** | **bool**|  | [optional] [default to false]

### Return type

[**\Swagger\Client\Model\EdiFabricWebApiModelsX12Acknowledgment[]**](../Model/EdiFabricWebApiModelsX12Acknowledgment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

