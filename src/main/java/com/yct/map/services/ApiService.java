package com.yct.map.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {
	
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
