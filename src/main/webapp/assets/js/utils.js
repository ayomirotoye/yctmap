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