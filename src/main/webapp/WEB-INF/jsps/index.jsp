<%@ page language="java" contentType="text/html"%>
<!DOCTYPE html>
<html>
<%@include file="header.jsp"%>
<body>
	<div class="div-block-5">
		<header>
			<nav class="navbar navbar-expand-md mappageheader">
				<div class="container-fluid">
					<a class="navbar-brand mt-30px" href="#"> <img
						src="${pageContext.request.contextPath}/assets/images/logoyct.png"
						alt="" width="30" height="24"
						class="d-inline-block align-top image">
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarCollapse" aria-controls="navbarCollapse"
						aria-expanded="true" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="navbar-collapse collapse show" id="navbarCollapse"
						style="">

						<div class="navbar-nav me-auto mb-2 mb-lg-0" style="width: 80%">
							<form class="row d-flex justify-content-between" id="searchForm"
								name="searchForm" autocomplete="off" style="width: 100%">
								<input autocomplete="off" name="hidden" type="text"
									style="display: none;">
								<div class="col-sm-12 col-md-9">
									<label class="visually-hidden" for="yourDestination">Search
										for places, lecture halls and offices in yabatech</label>
									<div class="input-group">
										<div class="input-group-text">
											<i class="fab fa-searchengin"></i>
										</div>
										<input type="text" class="form-control"
											list="location-datalist" id="yourDestination"
											placeholder="Where will you like to go ?" autofill="off"
											autocomplete="off" onkeyup="findLocation()"> <span
											class="input-group-text" id="searchResIcon"></span>
									</div>
									<div id="locationListDiv"></div>
								</div>
								<div class="col-sm-12 col-md-3 mt-30px" id="">
									<button type="button" id="getDirectionBtn"
										class="btn btn-outline-primary" disabled style="width: 100%">Get
										Directions</button>
								</div>
							</form>
						</div>
						<div class="mx-2 mt-30px" id="">
							<!-- <button id="showExplorePlacesBtn"
								class="primarybutton w-button btn" style="width: 100%">
								<i class="fas fa-paper-plane"></i> Explore
							</button> -->
							<!-- <button data-target="#explorePlacesModal" data-toggle="modal"
								class="primarybutton w-button btn" style="width: 100%">
								<i class="fab fa-wpexplorer"></i> Explore
							</button> -->
						</div>
						<div class="mx-2 mt-30px" id="isLoggedInDiv">
							<button id="showLoginBtn" class="primarybutton w-button btn"
								style="width: 100%">
								<i class="fas fa-paper-plane"></i> Login
							</button>
							<!-- <button id="showLoginBtn" class="primarybutton w-button btn"
								style="width: 100%">
								<i class="fas fa-paper-plane"></i> Go to Dashboard
							</button> -->
						</div>
					</div>
				</div>
			</nav>
		</header>
		<div class="openSearchDiv" style="display: none;">
			<span><i class="fas fa-chevron-circle-right 7x openIcon"></i></span>
		</div>
		<div class="leftmapdiv" id="searchPlaceDiv" style="display: none">
			<div class="searchformblock w-form">
				<form id="" name="email-form" data-name="Email Form"
					class="searchform" autocomplete="off">
					<input autocomplete="off" name="hidden" type="text"
						style="display: none;">
					<div class="d-flex justify-content-between">
						<h1 class="heading-3">Directions</h1>
						<span><i class="far fa-window-close closeIcon 7x"></i></span>
					</div>
					<div>
						<div class="input-group drivingModeInput">
							<div class="input-group-text" id="modeOfTravelIcon">
								<i class="fas fa-car"></i>
							</div>
							<select class="custom-select" id="modeOfTravel">
								<option value="">Please Choose...</option>
								<option value="DRIVING" selected>Driving</option>
								<option value="WALKING">Walking</option>
								<option value="BICYCLING">Bicycling</option>
								<option value="TRANSIT">Transit</option>
							</select>
						</div>
						<small style="font-weight: 700">Mode of travel</small>
					</div>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text" id="startingPointIcon">
							<i class="fas fa-play-circle"></i>
						</div>
						<input type="text" class="form-control searchinputbox w-input"
							placeholder="Starting point" id="startingPoint"
							aria-label="startingPoint" aria-describedby="startingPoint"
							onkeyup="findLocationForStartingPoint()">
					</div>
					<div class="input-group" id="startingpointListDiv"></div>
					<input type="hidden" id="startingPointCity"
						name="startingPointCity" /> <input type="hidden"
						id="startingPointLat" name="startingPointLat" /> <input
						type="hidden" id="startingPointLong" name="startingPointLong" />

					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text" id="endPointIcon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<input type="text" class="form-control searchinputbox w-input"
							placeholder="Where are you going ?" id="endPoint"
							aria-label="Where are you going ?" aria-describedby="endPoint"
							readonly>
					</div>
					<input type="hidden" id="endpointCity" name="endpointCity" /> <input
						type="hidden" id="endpointLat" name="endpointLat" /> <input
						type="hidden" id="endpointLong" name="endpointLong" />
					<button id="startBtn" class="primarybutton w-button btn"
						onclick="findDirection()">
						<i class="fas fa-paper-plane"></i> Start
					</button>
					<h4 class="heading-4">Login to explore YCT</h4>
				</form>
			</div>
		</div>
		<div id="map" class="map w-widget w-widget-map"></div>
	</div>
	<%@include file="scripts.jsp"%>
	<%@include file="modals.jsp"%>
</body>
</html>