/*** TEMPLATE DECLARATIONS ***/
const binModalTemplate = Handlebars.templates["bin-modal.hbs"];
const binsTableTemplate = Handlebars.templates["bins-table.hbs"];
const binLocationDropdownTemplate = Handlebars.templates["bin-locations-dropdown.hbs"];

/** VARIABLE DECLARATION **/
const addBinButton = document.querySelector("#btn-add-bin");
let binModal = null;

/*** FUNCTION DECLARATIONS ***/
const addBin = e => {
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

const captureEditBinButtonClick = e => {
    const button = e.currentTarget;
    const binId = button.getAttribute("data-bin-id");
    const bin = findBin(binId);

    displayBinModal(bin);
}

const captureDeleteBinButtonClick = e => {
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
        binModal.dispose();
    }

    const html = binModalTemplate(bin);
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);

    populateBinLocationsDropdown();

    const saveBinButton = document.querySelector("#btn-save-bin");
    if(isModalInEditMode){
        saveBinButton.addEventListener("click", editBin);
    } else {
        saveBinButton.addEventListener("click", addBin);
    }

    binModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    binModal.show();
}

const displayBins = () => {
    const html = binsTableTemplate(bins);
    mainContent.innerHTML = html;

    let editBinButtons = document.querySelectorAll(".btn-edit-bin");
    editBinButtons.forEach(button => button.addEventListener("click", captureEditBinButtonClick));

    let deleteBinButtons = document.querySelectorAll(".btn-delete-bin");
    deleteBinButtons.forEach(button => button.addEventListener("click", captureDeleteBinButtonClick));
}

const editBin = (e) => {
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



