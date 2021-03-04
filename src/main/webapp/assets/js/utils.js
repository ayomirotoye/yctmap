function checkNullThenReturnEmptyString(val) {
	return val !== null && val !== undefined ? val : "";
}
function checkNullThenReturnDefinedString(val, definedString) {
	return val !== null && val !== undefined ? val : definedString;
}
function checkNullThenReturnZero(val) {
	return val !== null && val !== undefined ? val : 0;
}
function checkNullThenReturnFalse(val) {
	return val !== null && val !== undefined ? val : false;
}
function buildSectionHtml(val) {
	return `<div class="sme-ui-div-header">` + val.toUpperCase() + ` Details</div><hr class="sme-ui-hr">`;
}

function buildSelectOptions(selectOptionObj) {
	$theOpts = `<option value="">Please Choose...</option>`;
	try {
		$whereToGetOptionBuilder = selectOptionObj.optionsArray;
		labelField = selectOptionObj.label;
		valueField = selectOptionObj.value;
		$.each($whereToGetOptionBuilder, function(index, v) {
			$theOpts += `<option value="` + v[valueField] + `" data-details="` + JSON.stringify(v) + `">` + v[labelField] + `</option>`;
		});
	} catch (err) {
		console.log("ERROR OCCURRED WHILE BUILDING SELECT:::", err);
	}
	return $theOpts;
}

function toggleElementVisibility(elementSelectorObj) {
	$state = elementSelectorObj.state;
	$elementSel = elementSelectorObj.selector;
	switch ($state) {
		case "HIDE":
			$($elementSel).css({ visibility: "hidden" });
			break;
		case "SHOW":
			$($elementSel).css({ visibility: "visible" });
			break;
	}
}

function resetForm(elementSelector){
	try{
		var form_elements = document.getElementById(elementSelector).elements;
	
	
	if(checkNullThenReturnDefinedString(form_elements, "") !== ""){
		for (i = 0; i < form_elements.length; i++)
			{
			    field_type = form_elements[i].type.toLowerCase();
			    switch (field_type)
			    {
			    case "text":
			    case "password":
			    case "textarea":
			    case "hidden":
			        form_elements[i].value = "";
			        break;
			    case "radio":
			    case "checkbox":
			        if (form_elements[i].checked)
			        {
			            form_elements[i].checked = false;
			        }
			        break;
			    case "select-one":
			    case "select-multi":
			        form_elements[i].selectedIndex = -1;
			        break;
			    default:
	        	break;
			}
	    }
	}
			
	}catch(err){
		console.log("CONSOLE ERR:::", err);
	}
	
}

function closeAllModals() {
	$('.modal').modal('hide'); //CLOSE ANY OPEN MODAL
	$('body').removeClass('modal-open');//REMOVE BACKDROP
	$('.modal-backdrop').remove();//REMOVE THE BACKDROP CLASS
}
function defineTableActions(tableType, valObj) {
	$tableBodyRowHtmlBuilder = ``;
	try {
		switch (tableType) {
			case "LOCATION_CATEGORY":
				$tableBodyRowHtmlBuilder += `<td>` + `<div class="btn-group locationCategoryActionBtnGroup" role="group" aria-label="locationCategoryActionBtnGroup">
  <button type="button" class="btn btn-outline-primary actionIconsBtn" data-toggle="modal" data-target="#viewLocationCategoryModal" data-locationcatdet='`+ JSON.stringify(valObj) + `'><i class="far fa-eye actionIcons"></i></button>
  <button type="button" class="btn btn btn-outline-primary actionIconsBtn" data-toggle="modal" data-target="#editLocationCategoryModal" data-locationcatdet='`+ JSON.stringify(valObj) + `'><i class="fas fa-edit actionIcons"></i></button>
</div>` + `</td>`;
				break;
			case "LOCATION":
				$tableBodyRowHtmlBuilder += `<td>` + `<div class="btn-group locationCategoryActionBtnGroup" role="group" aria-label="locationCategoryActionBtnGroup">
  <button type="button" class="btn btn-outline-primary actionIconsBtn" data-toggle="modal" data-target="#viewLocationsModal" data-locationdet='`+ JSON.stringify(valObj) + `'><i class="far fa-eye actionIcons"></i></button>
  <button type="button" class="btn btn btn-outline-primary actionIconsBtn" data-toggle="modal" data-target="#editLocationModal" data-locationdet='`+ JSON.stringify(valObj) + `'><i class="fas fa-edit actionIcons"></i></button>
</div>` + `</td>`;
				break;
		}

	} catch (err) {
		console.log("ERROR OCCURRED WHILE BUILDING TABLE:::", err);
	}
	return $tableBodyRowHtmlBuilder;
}

function defineTableHeader(tableHeaderObj) {
	$tableHeaderHtml = `<thead><tr>{HEADER_HTML}</tr></thead>`;
	$tableHeaderRowHtml = ``;
	var headers = [];
	if (tableHeaderObj !== null) {
		try {
			//DEFINE HEADER ARRAY
			if (tableHeaderObj.objectToExtract !== null) {
				headers = Object.keys(tableHeaderObj.objectToExtract);
				if (checkNullThenReturnDefinedString(headers, "") !== "" && headers.length > 0) {
					//REMOVE UNNECESSARY HEADERS
					if (tableHeaderObj.hiddenCols !== null) {
						$arrayVal = tableHeaderObj.hiddenCols;
						$.each($arrayVal, function(index, val) {
							if ($.inArray(val, headers) > -1) {
								headers.splice(headers.indexOf(val), 1);
							}
						});
					}
				}
			} else if (checkNullThenReturnDefinedString(tableHeaderObj.defaultHeaders, "") !== "") {
				headers = tableHeaderObj.defaultHeaders;
			}

			//FORM HEADERS
			$.each(headers, function(i, v) {
				if (v === "id") {
					$tableHeaderRowHtml += `<th scope="col">` + "#" + `</th>`;
				} else {
					$tableHeaderRowHtml += `<th scope="col">` + beautifyString(v, "SENTENCE_CASE_FROM_CAMEL_CASE") + `</th>`;
				}
			});
			//ADD ACTION COLUMN
			if (tableHeaderObj.hasActions === true) {
				$tableHeaderRowHtml += `<th scope="col">` + "Actions" + `</th>`;
			}

			$tableHeaderHtml = $tableHeaderHtml.replace('{HEADER_HTML}', $tableHeaderRowHtml);
		} catch (err) {
			console.log("ERROR OCCURRED:::", err);
		}
		//console.log("tableHeaderRowHtml = ", $tableHeaderHtml);
		return $tableHeaderHtml
	} else {
		console.log("Table builder object can not be null");
	}

}
function buildTableBody(tableBody, tableType = null) {
	$tableBodyHtml = `<table class="table">{TABLE_HTML}</table>`;
	$tableBodyRowHtml = ``;
	$tableHeaderVal = '';
	try {
		switch (tableType) {
			case "LOCATION_CATEGORY":
				//GET THE TABLE HEADER FROM THE OBJECT
				$tableHeaderVal = defineTableHeader({
					defaultHeaders: [],
					hiddenCols: null,
					objectToExtract: tableBody[0],
					hasActions: true
				});

				$.each(tableBody, function(i, v) {
					$tableBodyRowHtml += `<tr>`;
					for (const [key, value] of Object.entries(v)) {
						if ($.inArray(key, ["id", "description", "categoryName"]) > -1) {
							if (key === 'id') {
								$tableBodyRowHtml += `<th scope="col">` + (i + 1) + `</th>`;
							} else {
								$tableBodyRowHtml += `<td>` + value + `</td>`;
							}
						}
					}
					$tableBodyRowHtml += defineTableActions(tableType, v);
					$tableBodyRowHtml += `</tr>`;
				});
				break;
			case "LOCATION":
				$tableHeaderVal = defineTableHeader({
					defaultHeaders: [],
					hiddenCols: ["approved", "approvedBy", "categories", "location"],
					objectToExtract: tableBody[0],
					hasActions: true
				});
				$.each(tableBody, function(i, v) {
					$tableBodyRowHtml += `<tr>`;
					for (const [key, value] of Object.entries(v)) {
						if ($.inArray(key, ["id", "description", "longitude", "latitude", "name"]) > -1) {
							if (key === 'id') {
								$tableBodyRowHtml += `<th scope="col">` + (i + 1) + `</th>`;
							} else {
								$tableBodyRowHtml += `<td>` + beautifyString(value, "SENTENCE_CASE_FROM_CAMEL_CASE") + `</td>`;
							}
						}
					}

					$tableBodyRowHtml += defineTableActions(tableType, v);
					$tableBodyRowHtml += `</tr>`;
				});
				break;
		}


		$theRealTableHtml = $tableHeaderVal + $tableBodyRowHtml;
		//console.log("$theRealTableHtml = ", $theRealTableHtml);
		$tableBodyHtml = $tableBodyHtml.replace("{TABLE_HTML}", $tableHeaderVal + $tableBodyRowHtml);
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
	//console.log("tableBodyHtml = ", $tableBodyHtml);
	return $tableBodyHtml;
}

function buildLabelHtml(val) {
	$labelHtml = ``;

	try {
		$labelHtml = `<label for="label_` + val + `">` + beautifyString(val, "SENTENCE_CASE_FROM_CAMEL_CASE")  + `</label>`;
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
	return $labelHtml;
}

function errorTagHtml(val) {
	$errorTagHtml = ``;

	try {
		$errorTagHtml = `<p class="errorEl" id="el_`+val+`"></p>`;
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
	return $errorTagHtml;
}

function buildTextHtml(inputHtmlObj) {
	$textHtml = ``;
	try {
		switch (inputHtmlObj.type) {
			case "text":
				$textHtml = `<div class="input-group"
						style="{val_STYLE}"><div class="input-group-text">
							<i class="fas fa-edit"></i>
						</div><input type="`+ inputHtmlObj.type + `" class="form-control searchinputbox w-input"
							placeholder="`+ inputHtmlObj.key + `" value="` + defineValue(inputHtmlObj.value, "TEXT") 
							+ `" id="` + inputHtmlObj.key + `"` + (inputHtmlObj.readonly === true ? " readonly" : "") 
							+ ` onkeyup="validateForm("`+inputHtmlObj.formSelector+`", "`+inputHtmlObj.buttonSelector+`")"></div>`;
				break;
			case "select":
				$textHtml = `<div class="input-group"
						style="{val_STYLE}"><div class="input-group-text">
							<i class="fas fa-edit"></i>
						</div><select class="custom-select" id="`+inputHtmlObj.key+`">
						<option value="">Please Choose...</option>
							</select></div>`;
				break;
			case "hidden":
				$textHtml = `<input type="` + inputHtmlObj.type + `" class="form-control searchinputbox w-input"
							placeholder="`+ inputHtmlObj.key + `" value="` + defineValue(inputHtmlObj.value, "TEXT") + `" id="` + inputHtmlObj.key + `"` + (inputHtmlObj.readonly === true ? " readonly" : "") + `>`;
				break;

		}
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}
	return $textHtml;
}

function defineValue(theVal, valType) {
	$responseVal = theVal;
	try {
		switch (valType) {
			case "TEXT":
				if (checkNullThenReturnDefinedString(theVal, "") !== "") {

				} else {
					$responseVal = "N/A";
				}
				break;
			default:
				break;

		}
	} catch (err) {
		console.log("ERROR OCCURRED WHILE DEFINING VALUE:::", err);
	}

	return $responseVal;

}

function beautifyString(strVal, operationType) {
	$strRes = checkNullThenReturnDefinedString(strVal, "");
	if ($strRes.length === 0) {
		return "";
	}
	try {
		switch (operationType) {
			case "UPPERCASE":
				$strRes = strVal.toUpperCase();
				break;
			case "SENTENCE_CASE_FROM_CAMEL_CASE":
				$strRes = strVal.toString().replace(/([A-Z])/g, " $1");
				$strRes = $strRes.charAt(0).toUpperCase() + $strRes.slice(1);
				break;
		}
	} catch (err) {
		console.log("ERROR OCCURRED:::", err);
	}

	return $strRes;
}