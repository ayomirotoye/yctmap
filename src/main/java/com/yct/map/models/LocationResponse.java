package com.yct.map.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LocationResponse {
	public String code;
	public String message;
	public List<DataModel> data;
	@JsonAlias("data")
	public DataModel datum;
}
