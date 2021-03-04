package com.yct.map.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(content = JsonInclude.Include.NON_NULL)
public class Location {
	public Integer id;
	public double longitude;
	public double latitude;
	public String name;
	public String description;
	public String abbreviation;
	public List<Category> categories;
	public Object approvedBy;
	public boolean approved;
}