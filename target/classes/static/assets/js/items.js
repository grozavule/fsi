/** TEMPLATE DECLARATION **/
const binsDropdownTemplate = Handlebars.templates["bins-dropdown.hbs"];
const itemModalTemplate = Handlebars.templates['item-modal.hbs'];
const itemsTableTemplate = Handlebars.templates["items-table.hbs"];

/** VARIABLE DECLARATION **/
let inventoryItems = [];
let itemModal = null;
const addItemButton = document.querySelector("#btn-add-item");

/** FUNCTION DECLARATIONS **/
const addItem = e => {
    e.preventDefault();

    const binId = document.querySelector("#bin-location").value;
    let item = createItemObjFromItemModal();

    axios.post(`/api/items/bin/${binId}`, item)
        .then(res => {
            let itemsPromise = retrieveItems();
            itemsPromise.then(items => {
                inventoryItems = items
                displayItems();
            });
        })
        .catch(error => {
            displayAlert('danger', error);
        })
        .finally(() => {
            itemModal.hide();
        });
}

const captureDeleteButtonClick = e => {
    e.stopPropagation();
    const button = e.currentTarget;
    const itemId = button.getAttribute("data-id");
    const item = findItem(itemId);

    const modalHtml = generateConfirmationModal(`Confirm Delete: ${item.description}`,
        `Deleting this item will permanently remove it from your inventory. This cannot be undone. Do you want to continue?`);

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    const confirmationModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));

    const confirmationButton = modalContainer.querySelector("#btn-modal-confirm");
    confirmationButton.addEventListener("click", (e) => {
        axios.delete(`/api/items/${itemId}`)
            .then(res => {
                refreshItemsTable();
                displayAlert(`success`, `${item.description} was successfully deleted`);
            })
            .catch(error => displayAlert(`danger`, error.message))
            .finally(() => {
               confirmationModal.hide();
            });
    });
    confirmationModal.show();
}

const captureEditButtonClick = e => {
    const button = e.currentTarget;
    const itemId = button.getAttribute("data-id");
    const item = findItem(itemId);

    displayItemModal(item);
}

const createItemObjFromItemModal = () => {
    const itemDescription = document.querySelector("#description").value;
    const itemQuantity = document.querySelector("#quantity").value;
    const expirationDate = document.querySelector("#expiration-date").value;

    let item = {
        "description": itemDescription,
        "quantity": itemQuantity,
        "expirationDate": expirationDate,
    };

    return item;
}

function displayItemModal(item = {}) {
    const isModalInEditMode = Object.keys(item).length > 0;

    if(itemModal !== null){
        const modalContainer = document.querySelector("#modal-container");
        itemModal.dispose();
        modalContainer.remove();
    }

    const html = itemModalTemplate(item);
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "modal-container");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);

    markSelectedBin(item);
    populateBinsDropdown();

    const itemForm = document.querySelector("#form-item");
    const saveItemButton = document.querySelector("#btn-save-item");
    if(isModalInEditMode){
        itemForm.addEventListener("submit", editItem);
        saveItemButton.addEventListener("click", editItem);
    } else {
        itemForm.addEventListener("submit", addItem);
        saveItemButton.addEventListener("click", addItem);
    }

    itemModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    itemModal.show();
}

//generates the item inventory table
const displayItems = () => {
    const html = itemsTableTemplate(inventoryItems);
    mainContent.innerHTML = html;

    let itemRows = document.querySelectorAll(".data-table tbody tr");
    itemRows.forEach(row => row.addEventListener("click", captureEditButtonClick));

    let editItemButtons = document.querySelectorAll(".btn-edit-item");
    editItemButtons.forEach(button => button.addEventListener("click", captureEditButtonClick));

    let deleteItemButtons = document.querySelectorAll(".btn-delete-item");
    deleteItemButtons.forEach(button => button.addEventListener("click", captureDeleteButtonClick));
}

function editItem(e) {
    e.preventDefault();

    let itemId = document.querySelector("#itemId").value;
    let binId = document.querySelector("#bin-location").value;
    let item = createItemObjFromItemModal();
    item["itemId"] = itemId;
    item["binId"] = binId;

    axios.put(`/api/items/${itemId}`, item)
        .then(() => {
            refreshItemsTable();
            displayAlert('success', `${item.description} was successfully updated`);
        })
        .catch(error => displayAlert('danger', error.message))
        .finally(() => {
            itemModal.hide();
        });
}

function findItem(itemId) {
    if(inventoryItems.length <= 0){
        refreshItemsTable();
    }
    itemId = parseInt(itemId);
    return inventoryItems.find(item => item.itemId === itemId);
}

const markSelectedBin = item => {
    let isEmptyItem = Object.keys(item).length <= 0;
    if(isEmptyItem) return;

    if(bins.length <= 0){
        refreshBins();
    }

    bins.forEach(bin => {
        if(bin.binId === item.binId){
            bin["selected"] = true;
        } else if(bin["selected"]){
            delete bin["selected"];
        }
    });
}

const populateBinsDropdown = () => {
    if(bins.length <= 0 ){
        refreshBins();
    }
    const binLocationDropdown = document.querySelector("#bin-location");
    binLocationDropdown.innerHTML = binsDropdownTemplate(bins);
}

const refreshBins = () => {
    let binsPromise = retrieveBins();
    binsPromise.then(retrievedBins => bins = retrievedBins);
}

const refreshItemsTable = () => {
    let itemsPromise = retrieveItems();
    itemsPromise.then(items => {
        inventoryItems = items
        displayItems();
    });
}

const retrieveItems = () => {
    let itemsPromise = new Promise((resolve, reject) => {
        axios.get("/api/items/")
            .then(res => {
                resolve(res.data);
            })
            .catch(error => reject(error.message));
    });
    return itemsPromise;
}

//loads all the item, bin, and binLocation data on page load
const startUp = () => {
    let binsPromise = retrieveBins();
    binsPromise.then(retrievedBins => bins = retrievedBins);

    let itemsPromise = retrieveItems();
    itemsPromise.then(items => {
        inventoryItems = items
        displayItems();
    });
}

/** EVENT LISTENER DECLARATIONS **/

addItemButton.addEventListener("click", (e) => {
    displayItemModal();
});

/*** ON-LOAD FUNCTIONS ***/

startUp();