package com.yct.map.services;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yct.map.models.GenericResponse;
import com.yct.map.models.Location;
import com.yct.map.models.LocationCategory;
import com.yct.map.models.UserDetails;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminService {
	private final ApiService apiService;
	private final SearchService searchService;
	private final ObjectMapper objectMapper;

	private final Environment env;

	public boolean doLogin(String username, String password) {
		boolean isPermitted = false;
		try {
			isPermitted = checkLoginDetails(username, password);

		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return isPermitted;
	}

	private boolean checkLoginDetails(String username, String password) {
		boolean isPermitted = false;
		try {
			String url = env.getProperty("permitted.user.details");
			String stringArr[] = url.split(",");
			List<UserDetails> responseMap = Arrays.asList(stringArr).stream().map(s -> {
				String arr[] = s.split(":");
				UserDetails userDetails = UserDetails.builder().username(arr[0]).password(arr[1]).build();
				return userDetails;
			}).collect(Collectors.toList());

			if (!responseMap.isEmpty()) {
				isPermitted = !responseMap.stream()
						.filter(s -> s.getUsername().toLowerCase().equalsIgnoreCase(username)
								&& s.getPassword().toLowerCase().equalsIgnoreCase(password))
						.collect(Collectors.toList()).isEmpty();
			}
		} catch (Exception e) {
			log.info("ERROR OCCURRED:::", e);
		}
		return isPermitted;
	}

	public LocationCategory getLocationCategories() {
		return searchService.getLocationCategories();
	}

	public GenericResponse addLocationCategory(LocationCategory location) {
		GenericResponse res = GenericResponse.builder().build();
		try {
			String url = env.getProperty("locations.by-category");
			HttpEntity<LocationCategory> newLoc = new HttpEntity<>(location);
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

	public GenericResponse updateLocationCategory(LocationCategory updatedLoc) {
		GenericResponse res = GenericResponse.builder().build();
		try {
			String url = env.getProperty("locations.by-category");
			HttpEntity<LocationCategory> newLoc = new HttpEntity<>(updatedLoc);
			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.PUT, newLoc,
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

	public GenericResponse updateLocation(Location updatedLoc) {
		GenericResponse res = GenericResponse.builder().build();
		try {
			String url = env.getProperty("locations");
			HttpEntity<Location> newLoc = new HttpEntity<>(updatedLoc);
			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.PUT, newLoc,
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

	public GenericResponse addLocation(Location newLoc) {
		GenericResponse res = GenericResponse.builder().build();
		try {
			String url = env.getProperty("locations");
			HttpEntity<Location> addLoc = new HttpEntity<>(newLoc);
			ResponseEntity<String> response = apiService.restTemplate().exchange(url, HttpMethod.POST, addLoc,
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
