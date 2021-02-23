package com.yct.map.services;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
