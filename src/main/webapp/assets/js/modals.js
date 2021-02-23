$(document).ready(function() {
	$(document).on('click', '.closeModal', function() {
		$('.modal').hide(); //CLOSE ANY OPEN MODAL
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
		try {
			$buttonId = e.relatedTarget;
			$locationDetails = checkNullThenReturnDefinedString($buttonId, "") !== "" ? $($buttonId).data("details") : "";
			console.log("LOCATION DETAILS:::", $locationDetails);
			$detailsJson = checkNullThenReturnDefinedString($locationDetails, "") !== "" ? JSON.parse($locationDetails) : null;
			console.log("DETAILSJSON::::", $detailsJson);

			if ($detailsJson !== null) {
				$categoryId = $detailsJson.id;

			}
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	
	$(document).on('show.bs.modal', '#addMissingPlaceModal', function(e) {
		try {
			getLocations();
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});
	
	$(document).on('hidden.bs.modal', '#addMissingPlaceModal', function(e) {
		try {
			console.log("sdewrfeg");
			$('#searchForm')[0].reset();
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}

	});



});
