# TempApi.PatientApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createpatient**](PatientApi.md#createpatient) | **POST** /patient | Creates the data
[**deletepatient**](PatientApi.md#deletepatient) | **DELETE** /patient/{patientId} | Delete the element
[**getAllpatient**](PatientApi.md#getAllpatient) | **GET** /patient/getAll | Get all the data
[**getpatient**](PatientApi.md#getpatient) | **GET** /patient/{patientId} | Get the element
[**updatepatient**](PatientApi.md#updatepatient) | **PUT** /patient/{patientId} | Updates the element



## createpatient

> Patient createpatient(patient)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientApi();
let patient = new TempApi.Patient(); // Patient | data to be created
apiInstance.createpatient(patient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patient** | [**Patient**](Patient.md)| data to be created | 

### Return type

[**Patient**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletepatient

> deletepatient(patientId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientApi();
let patientId = "patientId_example"; // String | the Id parameter
apiInstance.deletepatient(patientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllpatient

> [Patient] getAllpatient()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientApi();
apiInstance.getAllpatient((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Patient]**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getpatient

> Patient getpatient(patientId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientApi();
let patientId = "patientId_example"; // String | the Id parameter
apiInstance.getpatient(patientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| the Id parameter | 

### Return type

[**Patient**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatepatient

> Patient updatepatient(patientId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientApi();
let patientId = "patientId_example"; // String | the Id parameter
let opts = {
  'patient': new TempApi.Patient() // Patient | data to be updated
};
apiInstance.updatepatient(patientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| the Id parameter | 
 **patient** | [**Patient**](Patient.md)| data to be updated | [optional] 

### Return type

[**Patient**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

