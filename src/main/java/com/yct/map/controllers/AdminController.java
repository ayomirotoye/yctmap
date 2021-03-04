package com.yct.map.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yct.map.enums.ApiResponseCodeEnum;
import com.yct.map.models.GenericResponse;
import com.yct.map.models.Location;
import com.yct.map.models.LocationCategory;
import com.yct.map.models.LocationResponse;
import com.yct.map.models.UserDetails;
import com.yct.map.services.AdminService;
import com.yct.map.services.SearchService;

import jdk.internal.org.jline.utils.Log;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequestMapping("/admin")
@Controller
@RequiredArgsConstructor
@Slf4j
public class AdminController {
	private final AdminService adminService;
	private final SearchService searchService;

	@GetMapping("/dashboard")
	public String dashboard() {
		return "/admin/dashboard";
	}

	@GetMapping("/location")
	public ModelAndView getLocationCategoryPage(ModelAndView mv) {
		mv.setViewName("/admin/location");
		return mv;
	}

	@GetMapping("/location/view")
	public ResponseEntity<?> viewLocation(ModelAndView mv) {
		LocationResponse lRes = searchService.getLocations();
		return new ResponseEntity<>(lRes, HttpStatus.OK);
	}

	@PutMapping("/location")
	public ResponseEntity<?> editLocation(@RequestBody Location updatedLoc) {
		log.info("UPDATE LOCATION DETAILS:::" + updatedLoc);
		return new ResponseEntity<>(adminService.updateLocation(updatedLoc), HttpStatus.OK);
	}

	@PostMapping("/location")
	public ResponseEntity<?> addLocation(@RequestBody Location newLoc) {
		log.info("ADD LOCATION DETAILS:::" + newLoc);
		return new ResponseEntity<>(adminService.addLocation(newLoc), HttpStatus.OK);
	}

	@PutMapping("/location/category")
	public ResponseEntity<?> editLocationCategory(@RequestBody LocationCategory updatedLoc) {
		return new ResponseEntity<>(adminService.updateLocationCategory(updatedLoc), HttpStatus.OK);
	}

	@PostMapping("/location/category")
	public ResponseEntity<?> addLocationCategory(@RequestBody LocationCategory newLoc) {
		return new ResponseEntity<>(adminService.addLocationCategory(newLoc), HttpStatus.OK);
	}

	@GetMapping("/location/category")
	public ResponseEntity<?> viewLocationCategory(ModelAndView mv) {
		LocationCategory lRes = adminService.getLocationCategories();
		return new ResponseEntity<>(lRes, HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody UserDetails userDetails) {
		GenericResponse response = adminService.doLogin(userDetails.getUsername(), userDetails.getPassword()) == true
				? GenericResponse.builder().code(ApiResponseCodeEnum.SUCCESSFUL.getCode()).build()
				: GenericResponse.builder().code(ApiResponseCodeEnum.FAILED.getCode()).build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
