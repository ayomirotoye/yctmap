function validateForm(formId, actionBtnEl = null) {
	$validationRes = new Map();
	try {
		var formElements = checkNullThenReturnDefinedString(document.getElementById(formId), "") !== "" ?
			document.getElementById(formId).elements : [];
		if (formElements.length > 0) {
			$validationRes = validator(formElements)
		}
	} catch (err) {
		$validationRes.set("systemError", err);
		enableBtn(actionBtnEl, $validationRes);
	}

	enableBtn(actionBtnEl, $validationRes);

	return $validationRes;
}

function enableBtn(actionBtnEl, validationRes) {
	if (checkNullThenReturnDefinedString(actionBtnEl, "") !== "") {
		if (validationRes.size > 0) {
			$("#" + actionBtnEl).attr("disabled", "disabled");
		} else {
			$("#" + actionBtnEl).removeAttr("disabled");
		}
	}
}

function validator(formElements) {
	let errorMsgMap = new Map();
	$.each(formElements, function(index, val) {
		var elId = $(val).attr("id");
		if (val.type === "text") {
			if (valIsEmpty(val.value) === true) {
				$("#el_" + elId).text(errorResponseMap().get(elId));
				$("#" + elId).css({"border-color":"red"});
				errorMsgMap.set(elId, errorResponseMap().get(elId));
			} else {
				$("#el_" + elId).text("");
				$("#" + elId).css({"border-color":"green"});
				errorMsgMap.delete(elId);
			}
		} else if (val.type === "select-one") {
			if (valIsEmpty(val.value) === true) {
				var elId = $(val).attr("id");
				$("#el_" + elId).text(errorResponseMap().get(elId));
				$("#" + elId).css({"border-color":"red"});
				errorMsgMap.set(elId, errorResponseMap().get(elId));
			} else {
				$("#el_" + elId).text("");
				$("#" + elId).css({"border-color":"green"});
				errorMsgMap.delete(elId);
			}
		}
	});

	return errorMsgMap;

}

function errorResponseMap() {
	var errorRes = new Map();
	errorRes.set("description", "Description can not be empty");
	errorRes.set("name", "name can not be empty");
	errorRes.set("locationSelect", "Location option must be provided");

	return errorRes;
}

function valIsEmpty(value) {
	$isEmpty = true;
	if (checkNullThenReturnDefinedString(value, "") !== "") {
		$isEmpty = false
	}
	return $isEmpty;
}