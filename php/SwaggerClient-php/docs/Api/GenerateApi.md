# Swagger\Client\GenerateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateEdifactGroup**](GenerateApi.md#generateEdifactGroup) | **POST** /generate/edifact-group | 
[**generateEdifactInterchange**](GenerateApi.md#generateEdifactInterchange) | **POST** /generate/edifact-interchange | 
[**generateEdifactTransactions**](GenerateApi.md#generateEdifactTransactions) | **POST** /generate/edifact-transactions | 
[**generateGs**](GenerateApi.md#generateGs) | **POST** /generate/gs | 
[**generateIsa**](GenerateApi.md#generateIsa) | **POST** /generate/isa | 
[**generateUnb**](GenerateApi.md#generateUnb) | **POST** /generate/unb | 
[**generateUng**](GenerateApi.md#generateUng) | **POST** /generate/ung | 
[**generateX12Group**](GenerateApi.md#generateX12Group) | **POST** /generate/x12-group | 
[**generateX12Interchange**](GenerateApi.md#generateX12Interchange) | **POST** /generate/x12-interchange | 
[**generateX12Transactions**](GenerateApi.md#generateX12Transactions) | **POST** /generate/x12-transactions | 


# **generateEdifactGroup**
> \SplFileObject generateEdifactGroup($generate_edifact_group)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_edifact_group = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactGroup(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactGroup | 

try {
    $result = $apiInstance->generateEdifactGroup($generate_edifact_group);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateEdifactGroup: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_group** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactGroup**](../Model/EdiFabricWebApiModelsGenerateEdifactGroup.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateEdifactInterchange**
> \SplFileObject generateEdifactInterchange($generate_edifact_interchange)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_edifact_interchange = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactInterchange(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactInterchange | 

try {
    $result = $apiInstance->generateEdifactInterchange($generate_edifact_interchange);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateEdifactInterchange: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_interchange** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactInterchange**](../Model/EdiFabricWebApiModelsGenerateEdifactInterchange.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateEdifactTransactions**
> \SplFileObject generateEdifactTransactions($generate_edifact_transactions)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_edifact_transactions = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactTransactions(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactTransactions | 

try {
    $result = $apiInstance->generateEdifactTransactions($generate_edifact_transactions);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateEdifactTransactions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_edifact_transactions** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateEdifactTransactions**](../Model/EdiFabricWebApiModelsGenerateEdifactTransactions.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateGs**
> \SplFileObject generateGs($generate_gs)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_gs = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateGs(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateGs | 

try {
    $result = $apiInstance->generateGs($generate_gs);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateGs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_gs** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateGs**](../Model/EdiFabricWebApiModelsGenerateGs.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateIsa**
> \SplFileObject generateIsa($generate_isa)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_isa = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateIsa(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateIsa | 

try {
    $result = $apiInstance->generateIsa($generate_isa);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateIsa: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_isa** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateIsa**](../Model/EdiFabricWebApiModelsGenerateIsa.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateUnb**
> \SplFileObject generateUnb($generate_unb)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_unb = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateUnb(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateUnb | 

try {
    $result = $apiInstance->generateUnb($generate_unb);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateUnb: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_unb** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateUnb**](../Model/EdiFabricWebApiModelsGenerateUnb.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateUng**
> \SplFileObject generateUng($generate_ung)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_ung = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateUng(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateUng | 

try {
    $result = $apiInstance->generateUng($generate_ung);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateUng: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_ung** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateUng**](../Model/EdiFabricWebApiModelsGenerateUng.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateX12Group**
> \SplFileObject generateX12Group($generate_x12_group)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_x12_group = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Group(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Group | 

try {
    $result = $apiInstance->generateX12Group($generate_x12_group);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateX12Group: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_group** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Group**](../Model/EdiFabricWebApiModelsGenerateX12Group.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateX12Interchange**
> \SplFileObject generateX12Interchange($generate_x12_interchange)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_x12_interchange = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Interchange(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Interchange | 

try {
    $result = $apiInstance->generateX12Interchange($generate_x12_interchange);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateX12Interchange: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_interchange** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Interchange**](../Model/EdiFabricWebApiModelsGenerateX12Interchange.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **generateX12Transactions**
> \SplFileObject generateX12Transactions($generate_x12_transactions)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GenerateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$generate_x12_transactions = new \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Transactions(); // \Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Transactions | 

try {
    $result = $apiInstance->generateX12Transactions($generate_x12_transactions);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GenerateApi->generateX12Transactions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_x12_transactions** | [**\Swagger\Client\Model\EdiFabricWebApiModelsGenerateX12Transactions**](../Model/EdiFabricWebApiModelsGenerateX12Transactions.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json, application/xml, text/xml, application/_*+xml
 - **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

