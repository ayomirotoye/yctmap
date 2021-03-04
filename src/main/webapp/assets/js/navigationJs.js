$(document).on('click', '.gotoPage', function(event) {
	event.preventDefault();
	try {
		$pageUrl = $(this).attr("page-url");
		$pageId = $(this).attr("page-id");
		console.log("PAGE URL:::", $pageUrl);

		$.ajax({
			type: "GET",
			url: $pageUrl,
			contentType: "application/json",
			beforeSend: function() {
				$("#dashboardMainDiv").html(`<i class="spinner-grow"></i>`);
			},
			success: function(result) {
				$("#dashboardMainDiv").html(result);
			},
			complete: function() {
				console.log("PAGE ID:::", $pageId);
				if ($pageId === 'location-link') {
					getLocationCategories({
						locationUrl: $baseUrl + "/admin/location/category",
						elementType: "DIV",
						elementSelector: "#locationCategoriesTableDivT"
					});
				}
			},
			error: function(err) {
				console.log("ERROR OCCURRED:::", err);
				$("#dashboardMainDiv").html("");
			}
		});
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}

});


$(document).on('click', '#viewLocationPillDiv-tab', function(event) {
	event.preventDefault();
	try {
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