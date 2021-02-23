package com.yct.map.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GenericResponse {
	private String code;
	private String message;
	private Object data;
}
