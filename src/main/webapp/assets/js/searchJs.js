const labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let labelIndex = 0;
var map = null;
var directionsService = null;
var directionsDisplay = null;
// This is the minimum zoom level that we'll allow
var minZoomLevel = 16;
var marker = null;
var svgMarker = null;

function setSvgMarker() {
	/*svgMarker = {
		path: "M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589",
		fillColor: "green",
		fillOpacity: 1.0,
		strokeWeight: 0,
		rotation: 0,
		scale: 2,
		anchor: new google.maps.Point(7, 25),
	};*/

	svgMarker = $baseUrl + "/assets/images/maps-and-flags.png";

	return svgMarker;
}
function addMarker(location, map) {
	setSvgMarker();
	marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: svgMarker,
		draggable: true
	});
	map.setCenter(marker.getPosition());
}

function removeMarker() {
	if (marker !== null) {
		marker.setMap(null);
	}
}

function locateCoordinates(location) {
	console.log("map", map);
	addMarker(location, map);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	removeMarker();
	$startingPoint = { lat: Number($('#startingPointLat').val()), lng: Number($('#startingPointLong').val()) };
	$endPoint = { lat: Number($('#endpointLat').val()), lng: Number($('#endpointLong').val()) };
	$modeOfTravelVal = $("#modeOfTravel").val();
	try {
		// Calculate and display the distance between markers
		var distanceCalcObj = {
			endpointLat: $endPoint.lat,
			startingpointLat: $startingPoint.lat,
			endpointLong: $endPoint.lng,
			startingpointLong: $startingPoint.lng
		}
		var distance = haversine_distance(distanceCalcObj);
		console.log("THE DISTANCE IS :::", distance);
		if (checkNullThenReturnDefinedString(distance, "") !== "" && distance > 0) {
			//map.setCenter($startingPoint);
			directionsService.route({
				origin: $startingPoint,
				destination: $endPoint,
				travelMode: $modeOfTravelVal
			}, function(response, status) {
				if (status === 'OK') {
					//removeMarker();
					//.setCenter(marker.getPosition());
					directionsDisplay.setDirections(response);
				} else {
					window.alert('Directions request failed due to ' + status);
				}
			});
		} else {
			directionDisplayOper("CLEAR");
			addMarker($startingPoint, map);
		}
	} catch (err) {
		console.log("ERROR OCCURRED>>>", err);
	}

}

function removeRoute() {
	directionsDisplay.setOptions({
		suppressPolylines: true
	});
	// this "refreshes" the renderer
	directionsDisplay.setMap(map);
};

function addRoute() {
	directionsDisplay.setOptions({
		suppressPolylines: false
	});
	// this "refreshes" the renderer
	directionsDisplay.setMap(map);
};

function haversine_distance(distanceCalcObj) {
	var R = 6371.0710; // Radius of the Earth in miles
	var dLat = toRad(distanceCalcObj.endpointLat - distanceCalcObj.startingpointLat);
	var dLon = toRad(distanceCalcObj.endpointLong - distanceCalcObj.startingpointLong);
	var lat1 = toRad(distanceCalcObj.startingpointLat);
	var lat2 = toRad(distanceCalcObj.endpointLat);

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d;

}

// Converts numeric degrees to radians
function toRad(Value) {
	return Value * Math.PI / 180;
}

// Initialize and add the map
function initMap() {
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	const loc = { lat: 6.5187, lng: 3.3744 };
	/*{lat: 6.515535102016946, lng: 3.370529065352547}, 
	{lat:6.522816485113751, lng: 3.3789131486742234}*/
	// Bounds for Yaba
	var strictBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(6.515535102016946, 3.370529065352547),
		new google.maps.LatLng(6.522816485113751, 3.3789131486742234));

	// This is the minimum zoom level that we'll allow
	minZoomLevel = 16;


	map = new google.maps.Map(document.getElementById("map"), {
		center: loc,
		zoom: minZoomLevel,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	// The marker, positioned at Yaba
	//addMarker(loc, map);

	// Listen for the dragend event
	google.maps.event.addListener(map, 'dragend', function() {
		if (strictBounds.contains(map.getCenter())) return;

		// We're out of bounds - Move the map back within the bounds

		var c = map.getCenter(),
			x = c.lng(),
			y = c.lat(),
			maxX = strictBounds.getNorthEast().lng(),
			maxY = strictBounds.getNorthEast().lat(),
			minX = strictBounds.getSouthWest().lng(),
			minY = strictBounds.getSouthWest().lat();

		if (x < minX) x = minX;
		if (x > maxX) x = maxX;
		if (y < minY) y = minY;
		if (y > maxY) y = maxY;

		map.setCenter(new google.maps.LatLng(y, x));
	});

	// Limit the zoom level
	google.maps.event.addListener(map, 'zoom_changed', function() {
		if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
	});
	/*var rendererOptions = {
		map: map,
		suppressMarker: true,
		polylineOptions: { strokeColor: '#00903f', strokeOpacity: 1 },
		markerOptions: {
			icon: setSvgMarker()
		}
	}*/
	directionDisplayOper("SHOW");
	/*directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);*/
	/*var rendererOptions = {
		map: map,
		suppressMarker: true,
		polylineOptions: { strokeColor: '#00903f', strokeOpacity: 1 },
		markerOptions: {
			icon: setSvgMarker()
		}
	}
	directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);*/
	directionsDisplay.setMap(map);

}

function directionDisplayOper(actionType = null) {
	if (actionType === "CLEAR") {
		directionsDisplay = new google.maps.DirectionsRenderer();
	} else {
		var rendererOptions = {
			map: map,
			suppressMarker: true,
			polylineOptions: { strokeColor: '#00903f', strokeOpacity: 1 },
			markerOptions: {
				icon: setSvgMarker()
			}
		}
		directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
	}
}

function findDirection() {
	calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function findLocation() {
	try {
		$str = $('#yourDestination').val();
		if (checkNullThenReturnDefinedString($str, "") === "") {
			$("#searchPlaceDiv").css({ display: 'none' });
			$("#searchResIcon").html(`<i class="far fa-minus-square"></i>`);
			$('#locationListDiv').html("");
			$("#getDirectionBtn").attr("disabled", "disabled");
			return;
		}
		$.ajax({
			type: "GET",
			url: $baseUrl + "/sublocations/find?findQuery=" + $str,
			contentType: "application/json",
			beforeSend: function() {
				$("#searchResIcon").html(`<i class="spinner-grow"></i>`);
				$("#searchPlaceDiv").css({ display: 'none' });
				$('#locationListDiv').html("");
			},
			success: function(result) {
				$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
				if ($responseCode !== "" && $responseCode === "00") {
					//$("#directionBtn").removeAttr("disabled");
					$data = result.data;
					if ($.isArray($data)) {
						buildDataList($data);
					}
					$("#searchResIcon").html(`<i class="fas fa-check"></i>`);
				} else {
					buildDataList(null);
					hideNavigation();
				}
			},
			complete: function() {

			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				buildDataList(null);
				hideNavigation();
			}
		});
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
}

function findLocationForStartingPoint() {
	try {
		$str = $('#startingPoint').val();
		if (checkNullThenReturnDefinedString($str, "") === "") {
			//$("#searchPlaceDiv").css({ display: 'none' });
			$("#startingPointIcon").html(`<i class="fas fa-play-circle"></i>`);
			$('#startingpointListDiv').html("");
			$("#startBtn").attr("disabled", "disabled");
			return;
		}
		$.ajax({
			type: "GET",
			url: $baseUrl + "/sublocations/find?findQuery=" + $str,
			contentType: "application/json",
			beforeSend: function() {
				$("#startingPointIcon").html(`<i class="fas fa-play-circle"></i>`);
				$('#startingpointListDiv').html("");
				$("#startBtn").attr("disabled", "disabled");
			},
			success: function(result) {
				$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
				if ($responseCode !== "" && $responseCode === "00") {
					$("#startBtn").removeAttr("disabled");
					$data = result.data;
					if ($.isArray($data)) {
						buildStartingPointDataList($data);
					}
					$("#searchResIcon").html(`<i class="fas fa-play-circle"></i>`);
				} else {
					buildStartingPointDataList(null);
				}
			},
			complete: function() {

			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				buildStartingPointDataList(null);
			}
		});
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
}

function buildDataList($arrOfLocations) {
	try{
		$locationList = $('#locationListDiv').html();
		$input = document.getElementById('yourDestination');
		console.log("l;kmnjbhj::", $arrOfLocations);
		if ($arrOfLocations == null) {
			$addNewOpt = `Add a missing place`;
			if (true) {
				$('#locationListDiv').html(`<div class="card" id="addMissingPlaceDiv" "> 
				<button class="btn customLinks" type="button" data-target="#addMissingPlaceModal" data-toggle="modal"><i class="fas fa-plus"></i>` + $addNewOpt + `</button></div>`);
			}
		} else {
			$dropDownHtml = `<div class="dropdown-menu">{DROPDOWN_ITEM}</div>`;
			$newOption = "";
			$.each($arrOfLocations, function(index, vall) {
				$locationObj = vall;
				if ($.isArray($locationObj) && $locationObj.length > 0) {
					$newOption += `<a class="dropdown-item locationVal" latitude="` + $locationObj[0]["latitude"] + `" longitude="` + $locationObj[0]["longitude"] + `" id="` + vall["name"] + `"><i class="fas fa-map-marker-alt" id="locIcons"></i>` + vall["name"] + `</a>`;
					$('#locationListDiv').html($dropDownHtml.replace("{DROPDOWN_ITEM}", $newOption));
				}else{
					$newOption += `<a class="dropdown-item locationVal" latitude="` + $locationObj["latitude"] + `" longitude="` + $locationObj["longitude"] + `" id="` + vall["name"] + `"><i class="fas fa-map-marker-alt" id="locIcons"></i>` + vall["name"] + `</a>`;
					$('#locationListDiv').html($dropDownHtml.replace("{DROPDOWN_ITEM}", $newOption));
				}
			});
		}
	}catch(err){
		console.log("ERROR OCCURRED:::", err);
	}
	
}

function buildStartingPointDataList($arrOfLocations) {
	$locationList = $('#startingpointListDiv').html();
	$input = document.getElementById('startingPoint');
	if ($arrOfLocations == null) {
		$addNewOpt = `Add a missing place`;
		if (true) {
			$('#startingpointListDiv').html(`<div class="card" id="addMissingPlaceDiv" "> 
			<button class="btn customLinks" type="button" data-target="#addMissingPlaceModal" data-toggle="modal"><i class="fas fa-plus"></i>` + $addNewOpt + `</button></div>`);
		}
	} else {
		$dropDownHtml = `<div class="dropdown-menu">{DROPDOWN_ITEM}</div>`;
		$newOption = "";
		$.each($arrOfLocations, function(index, vall) {
			$locationObj = vall;
			if ($.isArray($locationObj) && $locationObj.length > 0) {
				$newOption += `<a class="dropdown-item startingPointVal" latitude="` + $locationObj[0]["latitude"] + `" longitude="` + $locationObj[0]["longitude"] + `" id="` + vall["name"] + `"><i class="fas fa-map-marker-alt" id="locIcons"></i>` + vall["name"] + `</a>`;
				$('#startingpointListDiv').html($dropDownHtml.replace("{DROPDOWN_ITEM}", $newOption));
			}else{
				$newOption += `<a class="dropdown-item startingPointVal" latitude="` + $locationObj["latitude"] + `" longitude="` + $locationObj["longitude"] + `" id="` + vall["name"] + `"><i class="fas fa-map-marker-alt" id="locIcons"></i>` + vall["name"] + `</a>`;
				$('#startingpointListDiv').html($dropDownHtml.replace("{DROPDOWN_ITEM}", $newOption));
			}
		});
	}
}

$(document).on('click', '.locationVal', function(e) {
	e.preventDefault();
	$theVal = e.target;
	$theDestination = $($theVal).attr("id");
	$endpointLat = $($theVal).attr("latitude");
	$endpointLong = $($theVal).attr("longitude");
	$("#getDirectionBtn").removeAttr("disabled");
	$('#yourDestination').val(checkNullThenReturnDefinedString($theDestination, ""));
	$('#endpointLat').val(checkNullThenReturnDefinedString($endpointLat, ""));
	$('#endpointLong').val(checkNullThenReturnDefinedString($endpointLong, ""));
	$('#locationListDiv').html("");
});

$(document).on('click', '.startingPointVal', function(e) {
	e.preventDefault();
	$theVal = e.target;
	$startingPointVal = $($theVal).attr("id");
	$endpointLat = $($theVal).attr("latitude");
	$endpointLong = $($theVal).attr("longitude");
	$('#startingPoint').val(checkNullThenReturnDefinedString($startingPointVal, ""));
	$('#startingPointLat').val(checkNullThenReturnDefinedString($endpointLat, ""));
	$('#startingPointLong').val(checkNullThenReturnDefinedString($endpointLong, ""));
	$('#startingpointListDiv').html("");


});

function buildSelectOptions_($arrOfLocations) {
	if ($arrOfLocations == null) {
		$addNewOpt = `<option value=''>Please Choose...</option>`;
		if (true) {
			$('#locationSelect').html($addNewOpt);
		}
	} else {
		$newOption = "<option value=''>Please Choose...</option>";
		$.each($arrOfLocations, function(index, val) {
			$newOption += `<option value="` + val["id"] + `">` + val["name"] + `</option>`;
		});
		$('#locationSelect').html($newOption);
	}
}

function checkIfOptionIsPresent(optionValues, optToCheck) {
	$checker = false;
	$.each(optionValues, function(index, value) {
		if (optToCheck.name === $(value).val()) {
			$checker = true;
		}
	});

	return $checker;
}

function hideNavigation() {
	removeMarker(map);
	$("#searchResIcon").html(`<i class="fas fa-times"></i>`);
	$("#searchPlaceDiv").css({ display: 'none' });
	$("#getDirectionBtn").attr("disabled", "disabled");
}

function showNavigation(theLocLat, theLocLong) {
	const loc = { lat: Number(theLocLat), lng: Number(theLocLong) };
	locateCoordinates(loc);
	$str = $('#yourDestination').val();
	console.log("YOUR DESTINATION IS:::", $str);
	$("#endPoint").val($str);
	$("#searchPlaceDiv").css({ display: 'block' });
	$("#startBtn").removeAttr("disabled");
}

$(document).on('click', '#getDirectionBtn', function() {
	try {
		$startingPointVal = $('#startingPoint').val();
		$endPointVal = $('#endPoint').val();
		//$("#getDirectionBtn").removeAttr("disabled");
		$('#endpointLat').val();
		$('#endpointLong').val();
		console.log("LATITUDE:::", $('#endpointLat').val());
		console.log("LONGITUDE:::", $('#endpointLong').val());
		showNavigation(checkNullThenReturnDefinedString($('#endpointLat').val(), ""),
			checkNullThenReturnDefinedString($('#endpointLong').val(), ""));

	} catch (err) {
		console.log("ERROR OCCURRED>>>>", err);
	}
});

function searchDivOperation(actionType) {
	if (actionType === "SHOW") {
		$(".leftmapdiv").show();
		$(".openSearchDiv").css({ "display": "none" });
	} else {
		$(".leftmapdiv").hide();
		$(".openSearchDiv").css({ "display": "block" });
	}
}

$(document).on('change', '#modeOfTravel', function() {
	$modeOfTravelVal = $("#modeOfTravel").val();
	console.log("MODE OF TRAVEL:::", $modeOfTravelVal)
	if ($modeOfTravelVal === "WALKING") {
		$("#modeOfTravelIcon").html(`<i class="fas fa-walking"></i>`);
	} else if ($modeOfTravelVal === "DRIVING") {
		$("#modeOfTravelIcon").html(`<i class="fas fa-car"></i>`);
	} else if ($modeOfTravelVal === "BICYCLING") {
		$("#modeOfTravelIcon").html(`<i class="fas fa-bicycle"></i>`);
	} else if ($modeOfTravelVal === "TRANSIT") {
		$("#modeOfTravelIcon").html(`<i class="fas fa-plane-departure"></i>`);
	}
});

$(document).on('click', '.openIcon', function() {
	searchDivOperation("SHOW");
});

$(document).on('click', '.closeIcon', function() {
	searchDivOperation("HIDE");
});