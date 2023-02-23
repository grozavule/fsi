//console.log(Handlebars.templates);

/** TEMPLATE DECLARATION **/
const itemsTableTemplate = Handlebars.templates["items-table.hbs"];
const itemModalTemplate = Handlebars.templates['item-modal.hbs'];
const binsDropdownTemplate = Handlebars.templates["bins-dropdown.hbs"];

/** VARIABLE DECLARATION **/
let bins = [];
let binLocations = [];
let inventoryItems = [];
let itemModal = null;
const addItemButton = document.querySelector("#btn-add-item");
const mainContent = document.querySelector("#main-content");
const menuItems = document.querySelectorAll(".menu-item");

/** FUNCTION DECLARATIONS **/
const addItem = e => {
    e.preventDefault();
    const itemDescription = document.querySelector("#description").value;
    const itemQuantity = document.querySelector("#quantity").value;
    const expirationDate = document.querySelector("#expiration-date").value;
    const binId = document.querySelector("#bin-location").value;

    let item = {
        "description": itemDescription,
        "quantity": itemQuantity,
        "expirationDate": expirationDate,
    };

    axios.post(`/api/items/bin/${binId}`, item)
        .then(res => {
            let itemsPromise = retrieveItems();
            itemsPromise.then(items => {
                inventoryItems = items
                displayItems();
            });
        })
        .catch(error => {
            displayError(error);
        })
        .finally(() => {
            itemModal.hide();
        });
}

const displayError = error => {
    let errorContainer = document.createElement("div");
    errorContainer.classList.add("alert");
    errorContainer.classList.add("alert-danger");
    errorContainer.textContent = error;

    mainContent.prepend(errorContainer);
}

const displayItemModal = (item = {}) => {
    if(itemModal !== null){
        itemModal.remove();
    }

    const html = itemModalTemplate(item);
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = html;
    document.body.appendChild(modalContainer);

    populateBinsDropDown();
    const saveItemButton = document.querySelector("#btn-save-item");
    saveItemButton.addEventListener("click", addItem);

    //console.log(html);
    itemModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    itemModal.show();
}

//generates the item inventory table
const displayItems = () => {
    const html = itemsTableTemplate(inventoryItems);
    mainContent.innerHTML = html;

    let editItemButtons = document.querySelectorAll(".btn-edit-item");
    editItemButtons.forEach(button => button.addEventListener("click", editItem));
}

function editItem(e){
    const button = e.currentTarget;
    const itemId = button.getAttribute("data-id");

    axios.get(`/api/items/${itemId}`)
        .then(res => {
            console.log(res.data);
            //const html = itemModalTemplate(res.data);
            //const modalContainer = document.createElement("div");
            //modalContainer.innerHTML = html;
            //document.body.appendChild(modalContainer);
        });
}

//finds the bin to which an item was assigned
const findBin = item => {
    return bins.find(bin => bin.binId === item.bin.binId);
}

//find the bin location (storage area) in which a bin has been placed
const findBinLocation = bin => {
    return binLocations.find(location => {
        let binLocationId = (bin.binLocation.binLocationId) ? bin.binLocation.binLocationId : bin.binLocation;
        return location.binLocationId === binLocationId;
    });
}

const matchBinsAndLocations = () => {
    bins = bins.map(bin => {
        let binLocation = findBinLocation(bin);
        bin["binLocationName"] = binLocation.locationName;
        return bin;
    });
}

//to reduce the size of JSON responses, only the binLocationId is returned when retrieving inventory items
//this function combines the bins to which items have been assigned with their corresponding bin locations
const matchItemsAndLocations = items => {
    inventoryItems = items.map(item => {
        let bin = findBin(item);
        let binLocation = findBinLocation(bin);
        item["binLabel"] = bin.binLabel;
        item["binLocationName"] = binLocation.locationName;
        return item;
    });
}

const openSubmenu = e => {
    const submenu = e.target.parentNode.querySelector(".submenu");
    const displayValue = submenu.style.display;
    if(displayValue === "block"){
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

const populateBinsDropDown = () => {
    console.log(bins);
    const binLocationDropdown = document.querySelector("#bin-location");
    binLocationDropdown.innerHTML = binsDropdownTemplate(bins);
}

const retrieveBinLocations = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get("/api/bin_locations/")
            .then(res => {
                binLocations = res.data;
                resolve(res.data);
            })
            .catch(error => reject(error.message));
    });
    return promise;
}

const retrieveBins = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get("/api/bins/")
            .then(res => {
                bins = res.data;
                matchBinsAndLocations();
                resolve(res.data);
            })
            .catch(error => reject(error.message));
    });
    return promise;
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
    // let binLocationsPromise = retrieveBinLocations();
    // binLocationsPromise.then(locations => {
    //     binLocations = locations;
    //     let binsPromise = retrieveBins();
    //     binsPromise.then(retrievedBins => {
    //         bins = retrievedBins;
    //         let itemsPromise = retrieveItems();
    //         itemsPromise.then(retrievedItems => {
    //             matchItemsAndLocations(retrievedItems);
    //             displayItems();
    //         });
    //     });
    // });
    let binsPromise = retrieveBins();
    binsPromise.then(retrievedBins => bins = retrievedBins);

    let itemsPromise = retrieveItems();
    itemsPromise.then(items => {
        inventoryItems = items
        displayItems();
    });
}

/** EVENT LISTENER DECLARATIONS **/
addItemButton.addEventListener("click", displayItemModal);

//addItemModalObj.addEventListener("show.bs.modal", populateBinsDropDown);

menuItems.forEach(menuItem => {
   menuItem.addEventListener("click", openSubmenu);
});

startUp();