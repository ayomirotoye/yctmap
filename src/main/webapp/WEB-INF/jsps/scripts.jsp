<script
	src="${pageContext.request.contextPath}/assets/js/bootstrap.bundle.min.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/utils.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/myValida.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/modals.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/searchJs.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/webflow.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/globals.js"
	type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/assets/js/uiMessages.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/alerts.js"
	type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/assets/js/authJs.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/js/locationJs.js"
	type="text/javascript"></script>
<script
	src="${pageContext.request.contextPath}/assets/js/navigationJs.js"
	type="text/javascript"></script>

<!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->

<script>
	function init() {
		var input = document.getElementById('yourLocation');
		var autocomplete = new google.maps.places.Autocomplete(input);
		var google = new google.maps.place();
		google.maps.event
				.addListener(
						autocomplete,
						'place_changed',
						function() {
							var place = autocomplete.getPlace();
							document.getElementById('yourLocationCity').value = place.name;
							document.getElementById('yourLocationLat').value = place.geometry.location
									.lat();
							document.getElementById('yourLocationLong').value = place.geometry.location
									.lng();
						});

		google.maps.event.addDomListener(window, 'load', init);
	}
</script>