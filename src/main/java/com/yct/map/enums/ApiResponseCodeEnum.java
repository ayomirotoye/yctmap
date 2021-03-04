package com.yct.map.enums;

import lombok.Getter;
import lombok.Setter;

public enum ApiResponseCodeEnum {

	SUCCESSFUL("00", "Successful"), FAILED("01", "Failed"), NO_RECORD_FOUND("03", "No record found"),
	UNKNWOWN_ERROR("11", "Empty response from third-party server"),
	THIRD_PARTY_API_ERROR("12", "Third party api error"), BAD_REQUEST("13", "Bad request"),
	INVALID_PAYMENT_REF("15", "Invalid payment reference"), VALIDATION_ERROR("16", "Validation error"),
	METHOD_NOT_ALLOWED("18", "Method not allowed"), UNSUPPORTED_MEDIA_TYPE("30", "Media type not supported"),
	INTERNAL_SERVER_ERROR("96", "Error while processing, try again");

	@Getter
	@Setter
	private String code;
	@Getter
	@Setter
	private String description;

	private ApiResponseCodeEnum(String code, String description) {
		this.code = code;
		this.description = description;
	}

}
