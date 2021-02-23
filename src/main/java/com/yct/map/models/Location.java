package com.yct.map.models;

import java.util.List;
import lombok.Data;

@Data
public class Location {
	public int id;
	public double longitude;
	public double latitude;
	public String name;
	public String description;
	public List<Category> location;
	public Object approvedBy;
	public boolean approved;
}