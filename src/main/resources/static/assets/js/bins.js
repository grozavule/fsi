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

}

const captureDeleteBinButtonClick = e => {

}

const createBinObjFromBinModal = () => {
    const binLabel = document.querySelector("#bin-label").value;
    const binLocationId = document.querySelector("#bin-location").value;
    let bin = {
        "binLabel": binLabel
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

const editBin = (e) => {

}

const displayBins = () => {
    const html = binsTableTemplate(bins);
    mainContent.innerHTML = html;

    let editBinButtons = document.querySelectorAll(".btn-edit-bin");
    editBinButtons.forEach(button => button.addEventListener("click", captureEditBinButtonClick));

    let deleteBinButtons = document.querySelectorAll(".btn-delete-bin");
    deleteBinButtons.forEach(button => button.addEventListener("click", captureDeleteBinButtonClick));
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



