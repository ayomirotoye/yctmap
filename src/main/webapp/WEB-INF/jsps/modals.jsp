<div id="loginModal" class="modal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Login</h5>
				<button type="button" class="btn-close closeModal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body">
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
			<div class="modal-footer">
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
<div class="modal" id="viewLocationsModal" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Locations</h5>
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
							id="name" aria-label="name" aria-describedby="name"
							onkeyup="validateForm('addMissingPlaceForm', 'addMissingPlaceBtn')">
					</div>
					<p class="errorEl" id="el_name"></p>
					<div class="input-group"
						style="margin: 10px 0px; padding: 10px 0px;">
						<div class="input-group-text">
							<i class="fas fa-edit"></i>
						</div>
						<input type="text" class="form-control w-input"
							placeholder="Description" id="description"
							aria-label="description" aria-describedby="description"
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
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary closeModal">Close</button>
				<button type="button" class="primarybutton w-button btn "
					id="addMissingPlaceBtn" onclick="addLocation()" disabled>
					<i class="fas fa-plus"></i>Add
				</button>
			</div>
		</div>
	</div>
</div>