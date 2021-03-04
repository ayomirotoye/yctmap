function displayAlert(type, messageBody) {
	$alertHtml = ``;
	switch (type) {
		case "SUCCESS":
			$alertHtml = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Cool!</h4>
  <p>`+ messageBody + `</p>
  <hr>
  <div style="text-align: right"><small class="mb-0">Lets take you anywhere in YCT</small></div>
</div>`;
			break;
		case "FAIL":
			$alertHtml = `<div class="alert alert-danger" role="alert">` + messageBody + `</div>`;
			break;
		case "LOADING":
			$alertHtml = `<div class="alert alert-info" role="alert">` + messageBody + `</div>`;
			break;
		case "NO_RECORD_FOUND":
			$alertHtml = `<div class="alert alert-info" role="alert">` + messageBody + `</div>`;
			break;
	}
	return $alertHtml;
}
