/*** TEMPLATE DECLARATIONS ***/
const binLocationModalTemplate = Handlebars.templates["bin-location-modal.hbs"];
const binLocationsTableTemplate = Handlebars.templates["bin-locations-table.hbs"];

/** VARIABLE DECLARATION **/
const addBinLocationButton = document.querySelector("#btn-add-bin-location");
let binLocationModal = null;

/*** FUNCTION DECLARATIONS ***/
const addBinLocation = e => {
    e.preventDefault();
    let binLocation = createBinLocationObjFromBinLocationModal();

    axios.post(`/api/bin_locations/`, binLocation)
        .then(res => {
            refreshBinLocations();
        })
        .catch(error => {
            displayAlert('danger',
                "The server sent back an cryptic error message. Make the joker who built this site fix it.");
        })
        .finally(() => {
            binLocationModal.hide();
        });
}

const captureAddBinLocationButtonClick = e => {
    displayBinLocationModal();
}

const captureEditBinLocationButtonClick = e => {
    const button = e.currentTarget;
    const binLocationId = button.getAttribute("data-bin-location-id");
    const binLocation = findBinLocation(binLocationId);

    displayBinLocationModal(binLocation);
}

const captureDeleteBinLocationButtonClick = e => {
    const button = e.currentTarget;
    const binLocationId = button.getAttribute("data-bin-location-id");
    const binLocation = findBinLocation(binLocationId);

    const modalHtml = generateConfirmationModal(`Confirm Delete: ${binLocation.binLocationName}`,
        `By deleting this location, all its bins will need to be assigned to other locations. Do you want to continue?`);

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    const confirmationModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));

    const confirmationButton = modalContainer.querySelector("#btn-modal-confirm");
    confirmationButton.addEventListener("click", (e) => {
        axios.delete(`/api/bin_locations/${binLocationId}`, {responseType: 'text'})
            .then(() => {
                refreshBinLocations();
                displayAlert(`success`, `${binLocation.binLocationName} was successfully deleted`);
            })
            .catch(error => {
                console.log(error);
                displayAlert(`danger`,
                    "Oops! Something went wrong. Please verify there are no bins still assigned to this location.")
            })
            .finally(() => {
                confirmationModal.hide();
            });
    });
    confirmationModal.show();
}

const createBinLocationObjFromBinLocationModal = () => {
    const binLocationName = document.querySelector("#bin-location-name").value;
    const binLocation = {
        "locationName": binLocationName
    };
    return binLocation;
}

const displayBinLocationModal = (binLocation = {}) => {
    const isModalInEditMode = Object.keys(binLocation).length > 0;

    if(binLocationModal !== null){
        binLocationModal.dispose();
    }

    const html = binLocationModalTemplate(binLocation);
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);

    const binLocationForm = document.querySelector("#form-bin-location");
    const saveBinLocationButton = document.querySelector("#btn-save-bin-location");
    if(isModalInEditMode){
        saveBinLocationButton.addEventListener("click", editBinLocation);
        binLocationForm.addEventListener("submit", editBinLocation)
    } else {
        saveBinLocationButton.addEventListener("click", addBinLocation);
        binLocationForm.addEventListener("submit", addBinLocation);
    }

    binLocationModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    binLocationModal.show();
}

const displayBinLocations = () => {
    const html = binLocationsTableTemplate(binLocations);
    mainContent.innerHTML = html;

    let editBinLocationButtons = document.querySelectorAll(".btn-edit-bin-location");
    editBinLocationButtons.forEach(button => button.addEventListener("click", captureEditBinLocationButtonClick));

    let deleteBinButtons = document.querySelectorAll(".btn-delete-bin-location");
    deleteBinButtons.forEach(button => button.addEventListener("click", captureDeleteBinLocationButtonClick));
}

const editBinLocation = e => {
    e.preventDefault();
    let binLocationId = document.querySelector("#bin-location-id").value;
    let binLocation = createBinLocationObjFromBinLocationModal();
    binLocation["binLocationId"] = binLocationId;

    axios.put(`/api/bin_locations/${binLocationId}`, binLocation)
        .then(() => {
            refreshBinLocations();
            displayAlert('success', `${binLocation.locationName} was successfully updated`);
        })
        .catch(error => displayAlert('danger', error.message))
        .finally(() => {
            binLocationModal.hide();
        });
}

const findBinLocation = binLocationId => {
    binLocationId = parseInt(binLocationId);
    return binLocations.find(location => location.binLocationId == binLocationId);
}

const refreshBinLocations = () => {
    let binLocationsPromise = retrieveBinLocations();
    binLocationsPromise.then(locations => {
        binLocations = locations;
        displayBinLocations();
    });
}

const startUp = () => {
    refreshBinLocations();
}

/*** EVENT HANDLER DECLARATIONS ***/
addBinLocationButton.addEventListener("click", captureAddBinLocationButtonClick);

/*** ON-LOAD FUNCTION CALLS ***/
startUp();