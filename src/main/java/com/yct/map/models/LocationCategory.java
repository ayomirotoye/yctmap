package com.yct.map.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LocationCategory{
	public String code;
	public String categoryName;
	public String description;
	public Long id;
	public String message;
	public List<Category> data;
}
