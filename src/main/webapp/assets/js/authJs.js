$(document).on('click', '#doLoginBtn', function(event) {
	$.ajax({
		type: "POST",
		url: $baseUrl + "/login",
		data: JSON.stringify($dataToSend),
		contentType: "application/json",
		beforeSend: function() {
			loadingAlert(20000, null, "... Sending Reference ...")
		},
		success: function(result) {
			$responseCode = checkNullThenReturnDefinedString(result, "") !== "" ? result.responseCode : "";
			if ($responseCode !== "" && $responseCode === "00") {
				showAlert({
					type: "success",
					icon: "success",
					title: "Success",
					html: uiMessages.COMPANY_EMAIL_VALIDATION_CODE_SENT,
					confirmButtonText: "Close"
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Ooops ! An error occurred",
					html: uiMessages.COMPANY_EMAIL_VALIDATION_CODE_FAILED,
					confirmButtonText: "Resend",
					denyButtonText: "Close",
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
				}).then((result) => {
					if (result.isConfirmed) {
						sendCompanyEmailValidationCode();
					} else {
						Swal.close();
					}
				});
			}

		},
		complete: function() {

		},
		error: function(err) {
			console.log("ERROR OCCURRED:::", err);
			showAlert({
				type: "error",
				icon: "error",
				title: "error",
				html: uiMessages.COMPANY_EMAIL_VALIDATION_CODE_FAILED,
				confirmButtonText: "Close"
			});
		}
	});
});	