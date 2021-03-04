package com.yct.map.services;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yct.map.models.GenericResponse;
import com.yct.map.models.Location;
import com.yct.map.models.LocationCategory;
import com.yct.map.models.LocationResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SearchService {
	private final ApiService apiService;
	private final ObjectMapper objectMapper;

	private final Environment env;

	public LocationResponse findSublocation(String request) {
		LocationResponse res = LocationResponse.builder().build();
		try {
			String url = env.getProperty("sublocations.find.endpoint");

			ResponseEntity<String> response = apiService.restTemplate().exchange(url + request, HttpMethod.GET, null,
					String.class);

			log.info("RESPONSE FROM SERVICE:::" + response);
			if (response.getStatusCode().is2xxSuccessful()) {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			} else {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			}
		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return res;
	}

	public LocationResponse getLocations() {
		LocationResponse res = LocationResponse.builder().build();
		try {
			String url = env.getProperty("locations");

			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.GET, null,
					String.class);

			log.info("RESPONSE FROM SERVICE:::" + response);
			if (response.getStatusCode().is2xxSuccessful()) {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			} else {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			}
		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return res;
	}

	public LocationCategory getLocationCategories() {
		LocationCategory res = LocationCategory.builder().build();
		try {
			String url = env.getProperty("locations.by-category");

			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.GET, null,
					String.class);

			log.info("RESPONSE FROM SERVICE:::" + response);
			if (response.getStatusCode().is2xxSuccessful()) {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			} else {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			}
		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return res;
	}

	public GenericResponse addSubLocation(Location location) {
		GenericResponse res = GenericResponse.builder().build();
		try {
			String url = env.getProperty("add.sublocations");

			HttpEntity<Location> newLoc = new HttpEntity<>(location);
			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.POST, newLoc,
					String.class);

			log.info("RESPONSE FROM SERVICE:::" + response);
			if (response.getStatusCode().is2xxSuccessful()) {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			} else {
				res = objectMapper.readValue(response.getBody(), res.getClass());
			}
		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return res;
	}
}
