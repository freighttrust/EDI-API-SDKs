# Swagger\Client\ValidateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateGs**](ValidateApi.md#validateGs) | **POST** /validate/gs | 
[**validateIsa**](ValidateApi.md#validateIsa) | **POST** /validate/isa | 
[**validateTransactions**](ValidateApi.md#validateTransactions) | **POST** /validate/transactions | 
[**validateUnb**](ValidateApi.md#validateUnb) | **POST** /validate/unb | 
[**validateUng**](ValidateApi.md#validateUng) | **POST** /validate/ung | 


# **validateGs**
> \Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[] validateGs($gs)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ValidateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$gs = new \Swagger\Client\Model\EdiFabricCoreModelEdiX12GS(); // \Swagger\Client\Model\EdiFabricCoreModelEdiX12GS | 

try {
    $result = $apiInstance->validateGs($gs);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ValidateApi->validateGs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs** | [**\Swagger\Client\Model\EdiFabricCoreModelEdiX12GS**](../Model/EdiFabricCoreModelEdiX12GS.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[]**](../Model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateIsa**
> \Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[] validateIsa($isa)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ValidateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$isa = new \Swagger\Client\Model\EdiFabricCoreModelEdiX12ISA(); // \Swagger\Client\Model\EdiFabricCoreModelEdiX12ISA | 

try {
    $result = $apiInstance->validateIsa($isa);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ValidateApi->validateIsa: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isa** | [**\Swagger\Client\Model\EdiFabricCoreModelEdiX12ISA**](../Model/EdiFabricCoreModelEdiX12ISA.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[]**](../Model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateTransactions**
> \Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsMessageErrorContext validateTransactions($validate_edi)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ValidateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$validate_edi = new \Swagger\Client\Model\EdiFabricWebApiModelsValidateEdi(); // \Swagger\Client\Model\EdiFabricWebApiModelsValidateEdi | 

try {
    $result = $apiInstance->validateTransactions($validate_edi);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ValidateApi->validateTransactions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validate_edi** | [**\Swagger\Client\Model\EdiFabricWebApiModelsValidateEdi**](../Model/EdiFabricWebApiModelsValidateEdi.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsMessageErrorContext**](../Model/EdiFabricCoreModelEdiErrorContextsMessageErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateUnb**
> \Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[] validateUnb($unb)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ValidateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$unb = new \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB(); // \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB | 

try {
    $result = $apiInstance->validateUnb($unb);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ValidateApi->validateUnb: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unb** | [**\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB**](../Model/EdiFabricCoreModelEdiEdifactUNB.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[]**](../Model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateUng**
> \Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[] validateUng($ung)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ValidateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$ung = new \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG(); // \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG | 

try {
    $result = $apiInstance->validateUng($ung);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ValidateApi->validateUng: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ung** | [**\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG**](../Model/EdiFabricCoreModelEdiEdifactUNG.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\EdiFabricCoreModelEdiErrorContextsSegmentErrorContext[]**](../Model/EdiFabricCoreModelEdiErrorContextsSegmentErrorContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

