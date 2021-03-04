<div class="modal" id="loginModal"  role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Login</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="alertDiv"></div>
				<form>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text" id="usernameIcon">
							<i class="fas fa-user"></i>
						</div>
						<input type="text" class="form-control w-input"
							placeholder="Username" id="username" aria-label="Username"
							aria-describedby="username">
					</div>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text" id="passwordIcon">
							<i class="fas fa-user"></i>
						</div>
						<input type="text" class="form-control w-input"
							placeholder="Password" id="password" aria-label="Password"
							aria-describedby="password">
					</div>
				</form>
			</div>
			<div class="modal-footer" id="loginModalFooterDiv">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
				<button type="button" class="primarybutton w-button btn"
					id="doLoginBtn">
					<i class="fas fa-sign-in-alt"></i>Login
				</button>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="explorePlacesModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Places</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="viewLocationCategoryModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Location Category</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="viewLocationCategoryModalBody"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="editLocationCategoryModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Edit Location Category</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="editLocationCategoryModalBody"></div>
			<div class="modal-footer" id="editLocationCategoryModalFooterDiv">
				<button type="button" class="btn btn-primary"
					id="submitEditLocationCatBtn">
					<i class="fas fa-paper-plane"></i>Submit
				</button>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="addLocationCategoryModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Location Category</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="addLocationCategoryModalBody">
				<div class="w-form">
					<div class="alertDiv"></div>
					<form id="addLocationCategoryForm" name="addLocationCategoryForm"
						data-name="addLocationCategoryForm"
						class="addLocationCategoryFormblock foradmin">
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationNameIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location name" id="addLocationCategoryName"
								aria-label="addLocationCategoryName"
								aria-describedby="addLocationCategoryName"
								onkeyup="validateForm('addLocationCategoryForm', 'addLocationCategoryBtn')">
						</div>
						<p class="errorEl" id="el_addLocationCategoryName"></p>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationAddressIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location address"
								id="addLocationCategoryDescription"
								aria-label="addLocationCategoryDescription"
								aria-describedby="addLocationCategoryDescription"
								onkeyup="validateForm('addLocationCategoryForm', 'addLocationCategoryBtn')">
						</div>
						<p class="errorEl" id="el_addLocationCategoryDescription"></p>
						<div class="buttonsdiv d-flex justify-content-end"
							id="addlocationCategoryModalFooterDiv">
							<button class="primarybutton-2 w-button"
								id="addLocationCategoryBtn" disabled>
								<i class="fas fa-plus"></i> Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="addLocationModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Add Location</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="addLocationModalBody">
				<div class="w-form">
					<div class="alertDiv"></div>
					<form id="addLocationForm" name="addLocationForm"
						data-name="addLocationForm" class="addLocationFormblock foradmin">
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationNameIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location name" id="addLocationName"
								aria-label="addLocationName" aria-describedby="addLocationName"
								onkeyup="validateForm('addLocationForm', 'addLocationBtn')">
						</div>
						<p class="errorEl" id="el_addLocationName"></p>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationDescriptionIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location description" id="addLocationDescription"
								aria-label="addLocationDescription"
								aria-describedby="addLocationDescription"
								onkeyup="validateForm('addLocationForm', 'addLocationBtn')">
						</div>
						<p class="errorEl" id="el_addLocationDescription"></p>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationAddressIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location Longitude" id="addLocationLongitude"
								aria-label="addLocationLongitude"
								aria-describedby="addLocationLongitude"
								onkeyup="validateForm('addLocationForm', 'addLocationBtn')">
						</div>
						<p class="errorEl" id="el_addLocationLongitude"></p>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="locationAddressIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<input type="text" class="form-control inputbox"
								placeholder="Location Latiutude" id="addLocationLatitude"
								aria-label="addLocationLatitude"
								aria-describedby="addLocationLatitude"
								onkeyup="validateForm('addLocationForm', 'addLocationBtn')">
						</div>
						<p class="errorEl" id="el_addLocationLatitude"></p>
						<div class="input-group"
							style="margin: 10px 0px; padding: 10px 0px;">
							<div class="input-group-text" id="addLocationSelectIcon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<select class="custom-select" id="addLocationCategories"
								onchange="validateForm('addLocationForm', 'addLocationBtn')">
								<option value="">Please Choose...</option>
							</select>
						</div>
						<p class="errorEl" id="el_addLocationCategories"></p>
						<div class="buttonsdiv d-flex justify-content-end"
							id="addLocationModalFooterDiv">
							<button class="primarybutton-2 w-button" id="addLocationBtn"
								disabled>
								<i class="fas fa-plus"></i> Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="viewLocationsModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Location Information</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="viewLocationsModalBody"></div>
			<div class="modal-footer" id="viewLocationsModalFooterDiv">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="logoutModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Do you really want to Logout ?</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary closeModal">No</button>
				<button type="button" class="btn btn-primary" id="logoutBtn">Yes</button>
			</div>
		</div>
	</div>
</div>

<div class="modal" id="editLocationModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Edit Locations</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="editLocationModalBody"></div>
			<div class="modal-footer">
				<div class="buttonsdiv d-flex justify-content-end"
					id="editLocationModalFooterDiv"></div>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="addMissingPlaceModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Add a Place</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form name="addMissingPlaceForm" id="addMissingPlaceForm">
					<div id="alertDiv"></div>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text">
							<i class="fas fa-signature"></i>
						</div>
						<input type="text" class="form-control w-input" placeholder="Name"
							id="locationName" aria-label="locationName"
							aria-describedby="locationName"
							onkeyup="validateForm('addMissingPlaceForm', 'addMissingPlaceBtn')">
					</div>
					<p class="errorEl" id="el_name"></p>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text">
							<i class="fas fa-edit"></i>
						</div>
						<input type="text" class="form-control w-input"
							placeholder="Description" id="locationDescription"
							aria-label="locationDescription"
							aria-describedby="locationDescription"
							onkeyup="validateForm('addMissingPlaceForm', 'addMissingPlaceBtn')">
					</div>
					<p class="errorEl" id="el_description"></p>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text" id="locationSelectIcon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<select class="custom-select" id="locationSelect"
							onchange="validateForm('addMissingPlaceForm', 'addMissingPlaceBtn')">
							<option value="">Please Choose...</option>
						</select>
					</div>
					<p class="errorEl" id="el_locationSelect"></p>
				</form>
			</div>
			<div class="modal-footer" id="addMissingPlaceModalFooterDiv">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
				<button type="button" class="primarybutton w-button btn "
					id="addMissingPlaceBtn" onclick="addMissingPlace()" disabled>
					<i class="fas fa-plus"></i>Add
				</button>
			</div>
		</div>
	</div>
</div>