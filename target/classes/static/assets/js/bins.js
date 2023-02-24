/*** TEMPLATE DECLARATIONS ***/
const binsTableTemplate = Handlebars.templates["bins-table.hbs"];

/** VARIABLE DECLARATION **/

const captureEditBinButtonClick = e => {

}

const captureDeleteBinButtonClick = e => {

}

const displayBins = () => {
    const html = binsTableTemplate(bins);
    mainContent.innerHTML = html;

    let editBinButtons = document.querySelectorAll(".btn-edit-bin");
    editBinButtons.forEach(button => button.addEventListener("click", captureEditBinButtonClick));

    let deleteBinButtons = document.querySelectorAll(".btn-delete-bin");
    deleteBinButtons.forEach(button => button.addEventListener("click", captureDeleteBinButtonClick));
}

const startUp = () => {
    let binsPromise = retrieveBins();
    binsPromise.then(retrievedBins => {
        bins = retrievedBins
        displayBins();
    });
}

startUp();



