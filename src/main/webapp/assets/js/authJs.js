$(document).on('click', '#doLoginBtn', function(event) {
	$dataToSend = {
		username: $("#username").val(),
		password: $("#password").val()
	}
	$.ajax({
		type: "POST",
		url: $baseUrl + "/admin/login",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			toggleElementVisibility({ state: "HIDE", selector: "#loginModalFooterDiv" });
			$(".alertDiv").html(displayAlert("LOADING", `Submitting ...`));
		},
		success: function(result) {
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.code : "";
			if ($responseCode !== "" && $responseCode === "00") {
				$(".alertDiv").html(displayAlert("SUCCESS", "Cool! Logged in"));
				sessionStorage.setItem("isLoggedIn", true);
				setTimeout(() => {
					window.location = $baseUrl + "/admin/dashboard";
				}, 3000);
			} else {
				$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
				toggleElementVisibility({ state: "SHOW", selector: "#loginModalFooterDiv" });
			}
		},
		complete: function() {
			//toggleElementVisibility({ state: "SHOW", selector: "#loginModalFooterDiv" });
		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			$(".alertDiv").html(displayAlert("FAIL", "Ooops! Please check your details"));
			toggleElementVisibility({ state: "SHOW", selector: "#loginModalFooterDiv" });
		}
	});
});

$(document).on('click', '#logoutBtn', function(e) {
	window.location = $baseUrl + "/index";
});