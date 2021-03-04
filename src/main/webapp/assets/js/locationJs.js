function getLocationCategories(locationCatObj) {
	try {
		if (locationCatObj.locationUrl === null && locationCatObj.elementType === null) {
			return;
		} else if (checkNullThenReturnDefinedString(locationCatObj.elementType, "") === "") {
			return;
		}
		var locationUrl = locationCatObj.locationUrl !== null ? locationCatObj.locationUrl : $baseUrl + "/admin/location/category";
		var element = locationCatObj.elementType;
		var elementSelector = locationCatObj.elementSelector;
		
		$.ajax({
			type: "GET",
			url: locationUrl,
			contentType: "application/json",
			beforeSend: function() {
				if (element !== "DROPDOWN") {
					$(elementSelector).html(`<i class="spinner-grow"></i>`);
				}
			},
			success: function(result) {
				
				$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
				if ($responseCode !== "" && $responseCode === "00") {
					if (element !== "DROPDOWN") {
						$theHtml = buildTableBody(result.data, "LOCATION_CATEGORY");
						$(elementSelector).html($theHtml);
					} else {
						$theHtml = buildSelectOptions({
							optionsArray: result.data,
							value: "id",
							label: "categoryName",
							data: null
						});
						$(elementSelector).html($theHtml);
					}
				}
				else {
					if (element !== "DROPDOWN") {
						$(elementSelector).html(displayAlert("NO_RECORD_FOUND", "Eeeya ! No record found ..."));
					}
				}
			},
			complete: function() {

			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				if (element !== "DROPDOWN") {
					$(elementSelector).html(displayAlert("NO_RECORD_FOUND", "Ooops ! Something happened while fetching records ..."));
				}
			}
		});
	} catch (err) {
		console.log("ERROR LOG::::", err);
	}
}

function getLocations(locationObj) {
	try {

		if (locationObj.locationUrl === null && locationObj.elementType === null) {
			return;
		} else if (checkNullThenReturnDefinedString(locationObj.elementType, "") === "") {
			return;
		}
		var locationUrl = locationObj.locationUrl !== null ? locationObj.locationUrl : $baseUrl + "/admin/location/view";
		var element = locationObj.elementType;
		var elementSelector = locationObj.elementSelector;
		
		$.ajax({
			type: "GET",
			url: locationUrl,
			contentType: "application/json",
			beforeSend: function() {
				if (element !== "DROPDOWN") {
					$(elementSelector).html(`<i class="spinner-grow"></i>`);
				}
			},
			success: function(result) {
				console.log("RESULT::", result);
				$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
				if (element !== "DROPDOWN") {
					if ($responseCode !== "" && $responseCode === "00") {
						$theHtml = buildTableBody(result.data, "LOCATION");
						$(elementSelector).html($theHtml);
					}
					else {
						$(elementSelector).html(displayAlert("NO_RECORD_FOUND", "Eeeya ! No record found ..."));
					}
				} else {
					if ($responseCode !== "" && $responseCode === "00") {
						$theHtml = buildSelectOptions({
							optionsArray: result.data,
							value: "id",
							label: "name",
							data: null
						});
						$(elementSelector).html($theHtml);
					}
					else {
						$theOpts = `<option value="">Please Choose...</option>`;
						$(elementSelector).html($theOpts);
					}
				}

			},
			complete: function() {

			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				if (element !== "DROPDOWN") {
					$(elementSelector).html(displayAlert("NO_RECORD_FOUND", "Ooops ! Something happened while fetching records ..."));
				}
			}
		});
	} catch (err) {
		console.log("ERROR LOG::::", err);
	}
}


function addMissingPlace() {
	$errorVal = validateForm("addMissingPlaceForm");
	try {
		$locName = checkNullThenReturnDefinedString($("#locationName").val(), "");
		$locDesc = checkNullThenReturnDefinedString($("#locationDescription").val(), "");
		$locId = checkNullThenReturnDefinedString($("#locationSelect").val(), "");

		$dataToSend = {
			"name": $locName,
			"description": $locDesc,
			"location": [{ "id": $locId }]
		}
		$prevIconHtml = "";
		$.ajax({
			type: "POST",
			url: $baseUrl + "/sublocations/add",
			contentType: "application/json",
			data: JSON.stringify($dataToSend),
			beforeSend: function() {
				toggleElementVisibility({state: "HIDE", selector: "#addMissingPlaceModalFooterDiv"});
				$("#alertDiv").html(displayAlert("LOADING", `Submitting ...`));
			},
			success: function(result) {
				$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
				if ($responseCode !== "" && $responseCode === "00") {
					$data = result.data;
					$("#alertDiv").html(displayAlert("SUCCESS", "Cool! Location has been added"));
					//RESET THE ADD LOCATION FORM
					resetForm($("#addMissingPlaceForm")[0]);
					//EMPTY THE TRIGGER DIV FOR ADD MISSING LOCATION
					$('#locationListDiv').html("");
					$('#startingpointListDiv').html("");
					setTimeout(() => {
						$("#alertDiv").html("");
						closeAllModals();
					}, 5000);
				} else {
					$("#alertDiv").html(displayAlert("FAIL", "Ooops! Location could not be added"));
				}
			},
			complete: function() {
				toggleElementVisibility({state: "SHOW", selector: "#addMissingPlaceModalFooterDiv"});
			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				toggleElementVisibility({state: "SHOW", selector: "#addMissingPlaceModalFooterDiv"});
			}
		});
	} catch (err) {
		console.log("ERROR OCCURRED>>>", err);
	}
}


$(document).on('click', '#submitEditLocationCatBtn', function(event) {
	$dataToSend = {
		id: $("#id").val(),
		categoryName: $("#categoryName").val(),
		description: $("#locationCategory_description").val()
	}
	$.ajax({
		type: "PUT",
		url: $baseUrl + "/admin/location/category",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			toggleElementVisibility({state:"HIDE", selector: '#editLocationCategoryModalFooterDiv'});
			$(".alertDiv").html(displayAlert("LOADING", `Submitting ...`));
		},
		success: function(result) {
			console.log("RESULT::", result);
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
			if ($responseCode !== "" && $responseCode === "00") {
				$(".alertDiv").html(displayAlert("SUCCESS", "Cool! Location Category updated"));
				setTimeout(() => {
					$(".alertDiv").html("");
					closeAllModals();
				}, 5000);
			} else {
				$(".alertDiv").html(displayAlert("FAIL", "Ooops! Could not update location category"));
				toggleElementVisibility({state:"SHOW", selector: '#editLocationCategoryModalFooterDiv'});
			}
		},
		complete: function() {
			
		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
			toggleElementVisibility({state:"SHOW", selector: '#editLocationCategoryModalFooterDiv'});
		}
	});
});

$(document).on('click', '#addLocationCategoryBtn', function(event) {
	$dataToSend = {
		categoryName: $("#addLocationCategoryName").val(),
		description: $("#addLocationCategoryDescription").val()
	}
	$.ajax({
		type: "POST",
		url: $baseUrl + "/admin/location/category",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			toggleElementVisibility({state:"HIDE", selector: '#addlocationCategoryModalFooterDiv'});
			$(".alertDiv").html(displayAlert("LOADING", `Submitting ...`));
		},
		success: function(result) {
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
			if ($responseCode !== "" && $responseCode === "00") {
				$(".alertDiv").html(displayAlert("SUCCESS", "Cool! Location Category added"));
				setTimeout(() => {
					$(".alertDiv").html("");
					closeAllModals();
				}, 5000);
			} else {
				$(".alertDiv").html(displayAlert("FAIL", "Ooops! Could not add location category"));
				toggleElementVisibility({state:"SHOW", selector: '#addlocationCategoryModalFooterDiv'});
			}
		},
		complete: function() {
			
		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
			toggleElementVisibility({state:"SHOW", selector: '#addlocationCategoryModalFooterDiv'});
		}
	});
});

$(document).on('click', '#submitEditLocationBtn', function(event) {
	$dataToSend = {
		id: $("#location_id").val(),
		categories: [{id: $("#location_categories option:selected").val()}],
        latitude: $("#location_latitude").val(),
        longitude: $("#location_longitude").val(),
		description: $("#location_description").val(),
		name: $('#location_name').val()
	}
	console.log("EDIT LOCATION:::", $dataToSend);
	$.ajax({
		type: "PUT",
		url: $baseUrl + "/admin/location",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			toggleElementVisibility({state:"HIDE", selector: '#editLocationModalFooterDiv'});
			$(".alertDiv").html(displayAlert("LOADING", `Submitting ...`));
		},
		success: function(result) {
			console.log("RESULT::", result);
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
			if ($responseCode !== "" && $responseCode === "00") {
				$(".alertDiv").html(displayAlert("SUCCESS", "Cool! Location details updated"));
				toggleElementVisibility({state:"SHOW", selector: '#editLocationModalFooterDiv'});
				resetForm("editLocationModalForm");
				setTimeout(() => {
					$(".alertDiv").html("");
					closeAllModals();
				}, 5000);
			} else {
				$(".alertDiv").html(displayAlert("FAIL", "Ooops! Could not update location details"));
				toggleElementVisibility({state:"SHOW", selector: '#editLocationModalFooterDiv'});
			}
		},
		complete: function() {
			
		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
			toggleElementVisibility({state:"SHOW", selector: '#editLocationModalFooterDiv'});
		}
	});
});

$(document).on('click', '#addLocationBtn', function(event) {
	$dataToSend = {
		categories: [{id: $("#addLocationCategories option:selected").val()}],
        latitude: $("#addLocationLatitude").val(),
        longitude: $("#addLocationLongitude").val(),
		description: $("#addLocationDescription").val(),
		name: $('#addLocationName').val()
	}
	console.log("ADD LOCATION:::", $dataToSend);
	$.ajax({
		type: "POST",
		url: $baseUrl + "/admin/location",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			toggleElementVisibility({state:"HIDE", selector: '#addLocationModalFooterDiv'});
			$(".alertDiv").html(displayAlert("LOADING", `Submitting ...`));
		},
		success: function(result) {
			console.log("RESULT::", result);
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
			if ($responseCode !== "" && $responseCode === "00") {
				$(".alertDiv").html(displayAlert("SUCCESS", "Cool! Location details added"));
				toggleElementVisibility({state:"SHOW", selector: '#addLocationModalFooterDiv'});
				resetForm("addLocationForm");
				setTimeout(() => {
					$(".alertDiv").html("");
					closeAllModals();
				}, 5000);
			} else {
				$(".alertDiv").html(displayAlert("FAIL", "Ooops! Could not add location details"));
				toggleElementVisibility({state:"SHOW", selector: '#addLocationModalFooterDiv'});
			}
		},
		complete: function() {
			
		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
			toggleElementVisibility({state:"SHOW", selector: '#addLocationModalFooterDiv'});
		}
	});
});

