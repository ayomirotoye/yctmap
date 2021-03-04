$(document).ready(function() {
	$(document).on('click', '.closeModal', function(event) {
		$('.modal').modal('hide'); //CLOSE ANY OPEN MODAL
		$('body').removeClass('modal-open');//REMOVE BACKDROP
		$('.modal-backdrop').remove();//REMOVE THE BACKDROP CLASS
	});
	$(document).on('click', '#showLoginBtn', function(event) {
		$('#loginModal').show();
	});

	$(document).on('shown.bs.modal', '#explorePlacesModal', function(e) {
		$modalBodyHtml = ``;
		try {
			$.ajax({
				type: "GET",
				url: $baseUrl + "/location-category",
				contentType: "application/json",
				beforeSend: function() {
					$("#explorePlacesModal .modal-body").html(`<i class="spinner-grow"></i>`);
				},
				success: function(result) {
					$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
					if ($responseCode !== "" && $responseCode === "00") {
						$data = result.data;
						if ($.isArray($data)) {
							$openingHtml = `<div class="row">{ROW_BODY_HTML}</div>`;
							$rowHtml = ``;
							$.each($data, function(index, val) {
								$rowHtml += `<div class="col-sm-6">
											<div class="card">
											  <div class="card-body">
												<h5 class="card-title">`+ val.categoryName + `</h5>
												<p class="card-text">`+ val.description + `</p>
												<button data-target="#viewLocationsModal" data-toggle="modal"
													class="primarybutton w-button btn" data-details='`+ JSON.stringify(val) + `' style="width: 100%">
													<i class="fas fa-paper-plane"></i> View Locations
												</button>
											  </div>
											</div>
										  </div>`;
								/*<a href="#" class="primarybutton w-button btn viewLocationsBtn" 
								data-details='`+ JSON.stringify(val) + `'><i class="fas fa-binoculars"></i>View locations</a>*/
							});
							$("#explorePlacesModal .modal-body").html($openingHtml.replace("{ROW_BODY_HTML}", $rowHtml));
						} else {
							$("#explorePlacesModal .modal-body").html(`<h3>No record found</h3>`);
						}
					} else {
						$("#explorePlacesModal .modal-body").html(`<h3>No record found</h3>`);
					}
				},
				complete: function() {

				},
				error: function(err) {
					console.log("ERROR OCCURRED:::", err);
					$("#explorePlacesModal .modal-body").html(`<h3>No record found</h3>`);
				}
			});
		} catch (err) {
			console.log("ERRORO OCCURRED:::", err);
			$("#explorePlacesModal .modal-body").html(`<h3>Error occurred while retrieving records</h3>`);
		}
	});
	$(document).on('click', '#showExplorePlacesBtn', function() {
		$('#explorePlacesModal').show();
	});

	$(document).on('show.bs.modal', '#viewLocationsModal', function(e) {
		$viewLocationHtml = "";
		try {
			$button = e.relatedTarget;
			$buttonId = $($button).attr("id");
			$locationDet = $($button).attr("data-locationdet");
			if (checkNullThenReturnDefinedString($locationDet, "") !== "") {
				$locationDetJson = checkNullThenReturnDefinedString(JSON.parse($locationDet), "");
				if (checkNullThenReturnDefinedString($locationDetJson, "") !== "") {
					for (const [key, value] of Object.entries($locationDetJson)) {
						$viewLocationHtml += buildLabelHtml(key);
						$viewLocationHtml += buildTextHtml({ key: key, value: value, readonly: true, type: 'text' });
					}
					$("#viewLocationsModalBody").html($viewLocationHtml);
				}

			} else {
				console.log("LOCATION DETAILS PARSING RETURNS AN ERROR:::");
			}
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});

	$(document).on('show.bs.modal', '#editLocationModal', function(e) {
		$editLocationHtml = "";
		try {
			$button = e.relatedTarget;
			$buttonId = $($button).attr("id");
			$locationDet = $($button).attr("data-locationdet");
			if (checkNullThenReturnDefinedString($locationDet, "") !== "") {
				$locationDetJson = checkNullThenReturnDefinedString(JSON.parse($locationDet), "");
				if (checkNullThenReturnDefinedString($locationDetJson, "") !== "") {
					for (const [key, value] of Object.entries($locationDetJson)) {
						if($.inArray(key, ["approvedBy", "approved"]) < 0){
							if (key === "id") {
								$editLocationHtml += buildTextHtml({ key: "location_"+key, value: value, readonly: true, type: 'hidden' });
							}else if(key === "categories") {
								$editLocationHtml += buildLabelHtml(key);
								$editLocationHtml += buildTextHtml({ 
									key: "location_"+key,
								 	value: value,
									readonly: false,
							 		type: 'select',
									formSelector:'editLocationModalForm',
									buttonSelector: 'submitEditLocationBtn'
								});
								$editLocationHtml += errorTagHtml("location_"+key);
							}
							else {
								$editLocationHtml += buildLabelHtml(key);
								$editLocationHtml += buildTextHtml({ 
									key: "location_"+key, 
									value: value, 
									readonly: false, 
									type: 'text', 
									formSelector:'editLocationModalForm',
									buttonSelector: 'submitEditLocationBtn'
								});
								$editLocationHtml += errorTagHtml("location_"+key);
							}
						}
					}
					
					$("#editLocationModalBody").html(`<form id="editLocationModalForm"><div class="alertDiv"></div>`+$editLocationHtml+`</form>`);
					$("#editLocationModalFooterDiv").html(`<button class="primarybutton-2 w-button"
						id="submitEditLocationBtn"><i class="fas fa-edit"></i> Edit</button>`);
						if($editLocationHtml.length > 0){
							getLocationCategories(
								{
									locationUrl: $baseUrl + "/admin/location/category",
									elementType: "DROPDOWN",
									elementSelector: "#location_categories"
								}
						);
					}
						
				}
			} else {
				console.log("LOCATION DETAILS PARSING RETURNS AN ERROR:::");
			}
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});

	$(document).on('show.bs.modal', '#addMissingPlaceModal', function(e) {
		try {
			getLocations({
				locationUrl: null,
				elementType: "DROPDOWN",
				elementSelector: "#locationSelect"
			});
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	$(document).on('show.bs.modal', '#addLocationModal', function(e) {
		try {
			getLocationCategories({
				locationUrl: null,
				elementType: "DROPDOWN",
				elementSelector: "#addLocationCategories"
			});
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	$(document).on('hidden.bs.modal', '#editLocationCategoryModal', function(e) {
		try {
			$('#location-link').trigger('click');
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	$(document).on('hidden.bs.modal', '#addLocationCategoryModal', function(e) {
		try {
			$('#location-link').trigger('click');
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	
	$(document).on('hidden.bs.modal', '#editLocationModal', function(e) {
		try {
			//$('#viewLocationPillDiv-tab').trigger('click');
			$pageUrll = $baseUrl + "/admin/location/view";
			getLocations({
			locationUrl: $pageUrll,
				elementType: "DIV",
				elementSelector: "#locationTableDivT"
			});
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	$(document).on('hidden.bs.modal', '#addLocationModal', function(e) {
		try {
			$('#viewLocationPillDiv-tab').trigger('click');
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});

	$(document).on('show.bs.modal', '#viewLocationCategoryModal', function(e) {
		$viewLocationCategoryHtml = "";
		try {
			$button = e.relatedTarget;
			$buttonId = $($button).attr("id");
			$locationCatDet = $($button).attr("data-locationcatdet");
			if (checkNullThenReturnDefinedString($locationCatDet, "") !== "") {
				$locationCatDetJson = checkNullThenReturnDefinedString(JSON.parse($locationCatDet), "");
				if (checkNullThenReturnDefinedString($locationCatDetJson, "") !== "") {
					for (const [key, value] of Object.entries($locationCatDetJson)) {
						$viewLocationCategoryHtml += buildLabelHtml(key);
						$viewLocationCategoryHtml += buildTextHtml({ key: key, value: value, readonly: true, type: 'text' });
					}
					$("#viewLocationCategoryModalBody").html($viewLocationCategoryHtml);
				}

			} else {

			}
			console.log("LOCATION CAT DET::::", $locationCatDet);
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});

	$(document).on('show.bs.modal', '#editLocationCategoryModal', function(e) {
		$editLocationCategoryHtml = "";
		try {
			$button = e.relatedTarget;
			$buttonId = $($button).attr("id");
			$locationCatDet = $($button).attr("data-locationcatdet");
			if (checkNullThenReturnDefinedString($locationCatDet, "") !== "") {
				$locationCatDetJson = checkNullThenReturnDefinedString(JSON.parse($locationCatDet), "");
				if (checkNullThenReturnDefinedString($locationCatDetJson, "") !== "") {
					for (const [key, value] of Object.entries($locationCatDetJson)) {
						if (key === "id") {
							$editLocationCategoryHtml += buildTextHtml({ key: key, value: value, readonly: false, type: 'hidden' });
						} else if (key === "description") {
							$editLocationCategoryHtml += buildLabelHtml("locationCategory_" + key);
							$editLocationCategoryHtml += buildTextHtml({ key: "locationCategory_" + key, value: value, readonly: false, type: 'text' });
						} else {
							$editLocationCategoryHtml += buildLabelHtml(key);
							$editLocationCategoryHtml += buildTextHtml({ key: key, value: value, readonly: false, type: 'text' });
						}
					}
					$("#editLocationCategoryModalBody").html(`<div class="alertDiv"></div>` + $editLocationCategoryHtml);
				}

			} else {

			}
			console.log("LOCATION CAT DET::::", $locationCatDet);
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});



	$(document).on('hidden.bs.modal', '#addMissingPlaceModal', function(e) {
		try {
			$('#searchForm')[0].reset();
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
});
