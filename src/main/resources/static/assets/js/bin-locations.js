/*** TEMPLATE DECLARATIONS ***/
const binLocationModalTemplate = Handlebars.templates["bin-location-modal.hbs"];
const binLocationsTableTemplate = Handlebars.templates["bin-locations-table.hbs"];

/** VARIABLE DECLARATION **/
const addBinLocationButton = document.querySelector("#btn-add-bin-location");
let binLocationModal = null;

/*** FUNCTION DECLARATIONS ***/
const addBinLocation = e => {
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
    const binId = button.getAttribute("data-bin-id");
    const bin = findBin(binId);

    displayBinModal(bin);
}

const captureDeleteBinLocationButtonClick = e => {
    const button = e.currentTarget;
    const binId = button.getAttribute("data-bin-id");
    const bin = findBin(binId);

    const modalHtml = generateConfirmationModal(`Confirm Delete: ${bin.binLabel}`,
        `By deleting this bin, all its items will need to be assigned to other bins. Do you want to continue?`);

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    const confirmationModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));

    const confirmationButton = modalContainer.querySelector("#btn-modal-confirm");
    confirmationButton.addEventListener("click", (e) => {
        axios.delete(`/api/bins/${binId}`)
            .then(res => {
                refreshItemsTable();
                displayAlert(`success`, `${bin.binLabel} was successfully deleted`);
            })
            .catch(error => displayAlert(`danger`,
                "Oops! Something went wrong. Please verify there are no items still assigned to this bin."))
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

    const saveBinLocationButton = document.querySelector("#btn-save-bin-location");
    if(isModalInEditMode){
        saveBinLocationButton.addEventListener("click", editBinLocation);
    } else {
        saveBinLocationButton.addEventListener("click", addBinLocation);
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