package com.yct.map.exception;

import java.util.HashMap;
import java.util.Map;

import javax.naming.ServiceUnavailableException;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;

import com.yct.map.enums.ApiResponseCodeEnum;

@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice
public class RestExceptionHandler {

	@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, Object> validationExceptionHandler(MethodArgumentNotValidException ex) {
		Map<String, String> responseBody = new HashMap<>();
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.VALIDATION_ERROR.getCode());
		errors.put("description", ApiResponseCodeEnum.VALIDATION_ERROR.getDescription());
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			responseBody.put(fieldName, errorMessage);
		});
		errors.put("message", responseBody);
		return errors;
	}


	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<Map<String, Object>> RunTimeException(RuntimeException ex) {
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.INTERNAL_SERVER_ERROR.getCode());
		errors.put("description", ApiResponseCodeEnum.INTERNAL_SERVER_ERROR.getDescription());
		errors.put("message", ex.getClass());

		ex.printStackTrace();
		
		return new ResponseEntity<>(errors, HttpStatus.INTERNAL_SERVER_ERROR) ;
	}

	@ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public Map<String, Object> handleMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) {
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.METHOD_NOT_ALLOWED.getCode());
		errors.put("description", ApiResponseCodeEnum.METHOD_NOT_ALLOWED.getDescription());
		errors.put("message", ex.getMessage());
		return errors;
	}
	
	@ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
	@ExceptionHandler(HttpMediaTypeNotSupportedException.class)
	public Map<String, Object> handleHttpMediaTypeNotSupportedException(HttpRequestMethodNotSupportedException ex) {
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.UNSUPPORTED_MEDIA_TYPE.getCode());
		errors.put("description", ApiResponseCodeEnum.UNSUPPORTED_MEDIA_TYPE.getDescription());
		errors.put("message", ex.getMessage());
		return errors;
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(HttpClientErrorException.class)
	public Map<String, Object> handleHttpClientErrorException(HttpClientErrorException ex) {
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.BAD_REQUEST.getCode());
		errors.put("description", ApiResponseCodeEnum.BAD_REQUEST.getDescription());
		errors.put("message", ex.getMessage());
		return errors;
	}
	
	@ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
	@ExceptionHandler(ServiceUnavailableException.class)
	public Map<String, Object> handleServiceUnavailableException(ServiceUnavailableException ex) {
		Map<String, Object> errors = new HashMap<>();
		errors.put("code", ApiResponseCodeEnum.INTERNAL_SERVER_ERROR.getCode());
		errors.put("description", ApiResponseCodeEnum.INTERNAL_SERVER_ERROR.getDescription());
		errors.put("message", ex.getMessage());
		return errors;
	}

}
