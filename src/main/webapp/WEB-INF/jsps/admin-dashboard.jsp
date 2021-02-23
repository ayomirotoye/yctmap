<%@ page language="java" contentType="text/html"%>
<!DOCTYPE html>
<html>
<%@include file="header.jsp"%>
<%@include file="modals.jsp"%>
<body>
	<div class="maindivblock">
		<div class="columns w-row">
			<div class="mapsearchdiv w-col w-col-5">
				<div class="mappageheader d-flex justify-content-between">
					<a class="navbar-brand" href="#"> <img
						src="${pageContext.request.contextPath}/assets/images/logoyct.png"
						" alt="" width="30" height="24"
						class="d-inline-block align-top image"> YCT Map
					</a>
					<button id="showLoginBtn" class="primarybutton w-button btn">
						<i class="fas fa-paper-plane"></i> Login
					</button>
				</div>
				<div class="searchformblock w-form">
					<form id="email-form" name="email-form" data-name="Email Form"
						class="searchform">
						<h1 class="heading-3">Search for places, restaurants &amp;
							faculties in yabatech</h1>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="yourLocationIcon">
								<i class="fas fa-play-circle"></i>
							</div>
							<input type="text" class="form-control searchinputbox w-input"
								placeholder="Your location" id="yourLocation"
								aria-label="Your location" aria-describedby="yourLocation"
								autocomplete="on" runat="server">
						</div>
						<input type="hidden" id="yourLocationCity" name="yourLocationCity" />
						<input type="hidden" id="yourLocationLat" name="yourLocationLat" />
						<input type="hidden" id="yourLocationLong" name="yourLocationLong" />
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="yourDestination">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control searchinputbox w-input"
								placeholder="Where are you going ?"
								aria-label="Where are you going ?"
								aria-describedby="yourDestination">
						</div>
						<button id="findPlaceBtn" class="primarybutton w-button btn">
							<i class="fas fa-paper-plane"></i> Find place
						</button>
						<h4 class="heading-4">Login to explore YCT </h4>
					</form>
					<div class="w-form-done">
						<div>Thank you! Your submission has been received!</div>
					</div>
					<div class="w-form-fail">
						<div>Oops! Something went wrong while submitting the form.</div>
					</div>
				</div>
				<div class="mapsuggestionsdiv">
					<h4 class="heading-5">Places to visit in YCT:</h4>
					<div class="suggestedplacesdiv">
						<div class="suggestedplaces">
							<div class="placesdiv">
								<div class="suggestedplacesimage"></div>
								<p class="spdetails">University Gate</p>
							</div>
							<div class="placesdiv">
								<div class="suggestedplacesimage"></div>
								<p class="spdetails">University Gate</p>
							</div>
							<div class="placesdiv">
								<div class="suggestedplacesimage"></div>
								<p class="spdetails">University Gate</p>
							</div>
							<div class="placesdiv">
								<div class="suggestedplacesimage"></div>
								<p class="spdetails">University Gate</p>
							</div>
						</div>
						<div class="placesdiv"></div>
					</div>
				</div>
			</div>
			<div class="mapmaindiv w-col w-col-7">
				<div class="mapimagediv">
					<div id="map" class="map w-widget w-widget-map"></div>
					<div class="addlocationform">
						<div id="infowindow-content">
							<span id="place-name" class="title"></span><br /> <span
								id="place-address"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<%@include file="scripts.jsp"%>
</body>
</html>