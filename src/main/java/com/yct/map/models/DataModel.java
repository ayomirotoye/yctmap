package com.yct.map.models;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DataModel {
	private int id;
	private Object name;
	private Object description;
	private List<Location> location;
	private String approvedBy;
	private boolean approved;
	private int longitude;
	private int latitude;
	private List<Category> categories;
}