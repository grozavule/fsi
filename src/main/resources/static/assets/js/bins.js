/*** TEMPLATE DECLARATIONS ***/
const binModalTemplate = Handlebars.templates["bin-modal.hbs"];
const binsTableTemplate = Handlebars.templates["bins-table.hbs"];
const binLocationDropdownTemplate = Handlebars.templates["bin-locations-dropdown.hbs"];

/** VARIABLE DECLARATION **/
const addBinButton = document.querySelector("#btn-add-bin");
let binModal = null;

/*** FUNCTION DECLARATIONS ***/
const addBin = e => {
    e.preventDefault();
    const binLocationId = document.querySelector("#bin-location").value;
    let bin = createBinObjFromBinModal();

    axios.post(`/api/bins/bin_location/${binLocationId}`, bin)
        .then(res => {
            refreshBins();
        })
        .catch(error => {
            displayAlert('danger', error);
        })
        .finally(() => {
            binModal.hide();
        });
}

const captureAddBinButtonClick = e => {
    displayBinModal();
}

const captureDeleteBinButtonClick = e => {
    e.stopPropagation();
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

const captureEditBinButtonClick = e => {
    const button = e.currentTarget;
    const binId = button.getAttribute("data-bin-id");
    const bin = findBin(binId);

    displayBinModal(bin);
}

const createBinObjFromBinModal = () => {
    const binLabel = document.querySelector("#bin-label").value;
    const binLocationId = document.querySelector("#bin-location").value;
    let bin = {
        "binLabel": binLabel,
        //"binLocationId": binLocationId
    };

    return bin;
}

const displayBinModal = (bin = {}) => {
    const isModalInEditMode = Object.keys(bin).length > 0;

    if(binModal !== null){
        const modalContainer = document.querySelector("#modal-container");
        binModal.dispose();
        modalContainer.remove();
    }

    const html = binModalTemplate(bin);
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "modal-container");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);

    markSelectedBinLocation(bin);
    populateBinLocationsDropdown();

    const binForm = document.querySelector("#form-bin");
    const saveBinButton = document.querySelector("#btn-save-bin");
    if(isModalInEditMode){
        binForm.addEventListener("submit", editBin);
        saveBinButton.addEventListener("click", editBin);
    } else {
        binForm.addEventListener("submit", addBin);
        saveBinButton.addEventListener("click", addBin);
    }

    binModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    binModal.show();
}

const displayBins = () => {
    const html = binsTableTemplate(bins);
    mainContent.innerHTML = html;

    let binRows = document.querySelectorAll(".data-table tbody tr");
    binRows.forEach(row => row.addEventListener("click", captureEditBinButtonClick));

    let editBinButtons = document.querySelectorAll(".btn-edit-bin");
    editBinButtons.forEach(button => button.addEventListener("click", captureEditBinButtonClick));

    let deleteBinButtons = document.querySelectorAll(".btn-delete-bin");
    deleteBinButtons.forEach(button => button.addEventListener("click", captureDeleteBinButtonClick));
}

const editBin = e => {
    e.preventDefault();

    let binId = document.querySelector("#bin-id").value;
    let binLocationId = document.querySelector("#bin-location").value;
    let bin = createBinObjFromBinModal();
    bin["binId"] = binId;
    bin["binLocationId"] = binLocationId;

    axios.put(`/api/bins/${binId}`, bin)
        .then(() => {
            refreshBins();
            displayAlert('success', `${bin.binLabel} was successfully updated`);
        })
        .catch(error => displayAlert('danger', error.message))
        .finally(() => {
            binModal.hide();
        });
}

const findBin = binId => {
    binId = parseInt(binId);
    return bins.find(bin => bin.binId == binId);
}

const markSelectedBinLocation = bin => {
    const isEmptyBin = Object.keys(bin).length <= 0;
    if(isEmptyBin) return;

    if(binLocations.length <= 0){
        refreshBinLocations();
    }
    binLocations.forEach(location => {
        if(location.binLocationId === bin.binLocationId){
            location["selected"] = true;
        } else if(location["selected"]){
            delete location["selected"];
        }
    });
}

const populateBinLocationsDropdown = () => {
    if(binLocations.length <= 0 ){
        refreshBinLocations();
    }
    const binLocationDropdown = document.querySelector("#bin-location");
    binLocationDropdown.innerHTML = binLocationDropdownTemplate(binLocations);
}

const refreshBinLocations = () => {
    let binLocationsPromise = retrieveBinLocations();
    binLocationsPromise.then(locations => binLocations = locations);
}

const refreshBins = () => {
    let binsPromise = retrieveBins();
    binsPromise.then(retrievedBins => {
        bins = retrievedBins
        displayBins();
    });
}

const startUp = () => {
    refreshBins();
    refreshBinLocations();
}

/*** EVENT HANDLER DECLARATIONS ***/
addBinButton.addEventListener("click", captureAddBinButtonClick);

/*** ON-LOAD FUNCTION CALLS ***/

startUp();



