<div id="locationDiv">
	<div class="div-block-3">
		<h3 class="heading-6">Location</h3>
		<div class="div-block-4">
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation"><a
					class="nav-link active" id="viewLocationPillDiv-tab"
					data-toggle="pill" href="#viewLocationCategoriesPillDiv" role="tab"
					aria-controls="viewLocationCategoriesPillDiv" aria-selected="true">View
						Location Categories</a></li>
				<li class="nav-item" role="presentation"><a class="nav-link"
					id="viewLocationPillDiv-tab" data-toggle="pill"
					href="#viewLocationPillDiv" role="tab"
					aria-controls="viewLocationPillDiv" aria-selected="true">View
						Location</a></li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active"
					id="viewLocationCategoriesPillDiv" role="tabpanel"
					aria-labelledby="viewLocationCategoriesPillDiv-tab">
					<div class="buttonsdiv d-flex justify-content-end">
						<a href="#" data-toggle="modal"
							data-target="#addLocationCategoryModal"
							class="primarybutton-2 w-button"><i class="fas fa-plus"></i>
							Add Location Cat.</a>
					</div>
					<div class="table-responsive" id="locationCategoriesTableDivT"></div>
				</div>
				<div class="tab-pane fade" id="viewLocationPillDiv" role="tabpanel"
					aria-labelledby="viewLocationPillDiv-tab">
					<div class="buttonsdiv d-flex justify-content-end">
						<a href="#" data-toggle="modal" data-target="#addLocationModal"
							class="primarybutton-2 w-button"><i class="fas fa-plus"></i>
							Add Location</a>
					</div>
				</div>
				<div class="table-responsive" id="locationTableDivT"></div>
			</div>
		</div>
	</div>
</div>