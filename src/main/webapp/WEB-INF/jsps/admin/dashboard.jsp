<!DOCTYPE html>
<html>
<%@include file="../header.jsp"%>
<body>
	<div class="mainprojectdiv">
		<div class="mainmenudiv">
			<div class="logodiv">
				<img
					src="${pageContext.request.contextPath}/assets/images/logoyct.png"
					loading="lazy" alt="" class="yabatechlogo">
			</div>
			<div class="menuitems dashboard">
				<a href="${pageContext.request.contextPath}/admin/dashboard"
					class="link-block w-inline-block">
					<p class="icons">
						<i class="fas fa-chart-line"></i>
					</p>
					<p>Dashboard</p>
				</a> <a href="#" type="button"
					page-url="${pageContext.request.contextPath}/admin/location"
					page-id="location-link" class="link-block w-inline-block gotoPage"
					id="location-link">
					<p class="icons">
						<i class="fas fa-map-marker-alt"></i>
					</p>
					<p>Locations</p>
				</a> <a href="#"
					page-url="${pageContext.request.contextPath}/admin/users"
					class="link-block w-inline-block gotoPage">
					<p class="icons">
						<i class="fas fa-users"></i>
					</p>
					<p>Users</p>
				</a> <a href="#"
					page-url="${pageContext.request.contextPath}/admin/settings"
					class="link-block w-inline-block gotoPage">
					<p class="icons">
						<i class="fas fa-cogs"></i>
					</p>
					<p>Settings</p>
				</a>
			</div>
		</div>
		<div></div>
		<div class="projectbodydiv">
			<div class="bodytopdiv d-flex justify-content-end">
				<!-- <form action="/search" class="search w-form">
					<input type="search" class="search-input w-input" maxlength="256"
						name="query" placeholder="Search" id="search" required=""><input
						type="button" value="Search" class="search-button w-button">
				</form> -->
				<div class="div-block-2 d-flex justify-content-end">
					<!-- <a href="#" class="logoutbutton w-button"><i
						class="fas fa-user-circle"></i> </a> <a href="#"
						class="notificationsbutton w-button"><i class="fas fa-bell"></i></a> -->
					<a href="#" data-toggle="modal" data-target="#logoutModal"
						class="logoutbutton w-button"><i class="fas fa-sign-out-alt"></i></a>
				</div>
			</div>
			<!-- THIS DIV IS A DEMARCATION:: please dont touch or rather find a workaround -->
			<div></div>
			<div id="dashboardMainDiv" class="div-block-3">
				<h3 class="heading-6">Dashboard</h3>
				<div class="dashboardcardholderdiv">
					<div class="dashboardcard">
						<div>
							<h1 class="heading-8">20</h1>
							<p class="paragraph-3">Total number of locations</p>
						</div>
						<div class="dashiconsdiv">
							<h1 class="dashicons">
								<i class="fas fa-map-marker-alt"></i>
							</h1>
						</div>
					</div>
					<div class="dashboardcard">
						<div>
							<h1 class="heading-8">30</h1>
							<p>Pending location requests</p>
						</div>
						<div class="dashiconsdiv pending">
							<h1 class="dashicons pending">
								<i class="fas fa-hourglass-start"></i>
							</h1>
						</div>
					</div>
					<div class="dashboardcard">
						<div>
							<h1 class="heading-8">4</h1>
							<p>Total number users</p>
						</div>
						<div class="dashiconsdiv users">
							<h1 class="dashicons">
								<i class="fas fa-users"></i>
							</h1>
						</div>
					</div>
				</div>
				<div class="dashboardcardholderdiv">
					<div class="dashboardcard pendinglocationstable">
						<h4 class="heading-7">Pending Location Requests</h4>
					</div>
					<div class="dashboardcard toplocations">
						<h4 class="heading-7">Most visited locations</h4>
					</div>
				</div>
			</div>

		</div>
	</div>
	<%@include file="../scripts.jsp"%>
	<%@include file="../modals.jsp"%>
</body>
</html>