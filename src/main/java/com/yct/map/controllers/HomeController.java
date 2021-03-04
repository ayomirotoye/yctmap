package com.yct.map.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.yct.map.models.Location;
import com.yct.map.services.SearchService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HomeController {
	private final SearchService searchService;

	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/index")
	public String index2() {
		return "index";
	}

	@GetMapping("/sublocations/find")
	public ResponseEntity<?> findSublocation(@RequestParam String findQuery) {
		return new ResponseEntity<>(searchService.findSublocation(findQuery), HttpStatus.OK);
	}
	
	@GetMapping("/locations")
	public ResponseEntity<?> getLocations() {
		return new ResponseEntity<>(searchService.getLocations(), HttpStatus.OK);
	}

	@PostMapping("/sublocations/add")
	public ResponseEntity<?> addSubLocation(@RequestBody Location newLoc) {
		return new ResponseEntity<>(searchService.addSubLocation(newLoc), HttpStatus.OK);
	}

	@GetMapping("/location-category")
	public ResponseEntity<?> getLocationCategories() {
		return new ResponseEntity<>(searchService.getLocationCategories(), HttpStatus.OK);
	}
}
