//console.log(Handlebars.templates);

/** TEMPLATE DECLARATION **/
const itemsTableTemplate = Handlebars.templates["items-table.hbs"];
const binsDropdownTemplate = Handlebars.templates["bins-dropdown.hbs"];

/** VARIABLE DECLARATION **/
let bins = [];
let binLocations = [];
let inventoryItems = [];
const addItemModalObj = document.querySelector("#modal-add-item");
const addItemModal = new bootstrap.Modal("#modal-add-item", {});
const binLocationDropdown = document.querySelector("#bin-location");
const mainContent = document.querySelector("#main-content");
const menuItems = document.querySelectorAll(".menu-item");
const saveItemButton = document.querySelector("#btn-save-item");
const editItemButtons = document.querySelectorAll(".fa-edit");

/** FUNCTION DECLARATIONS **/
const addItem = e => {
    e.preventDefault();
    const itemDescription = document.querySelector("#description").value;
    const itemQuantity = document.querySelector("#quantity").value;
    const expirationDate = document.querySelector("#expiration-date").value;
    const binId = binLocationDropdown.value;

    let item = {
        "description": itemDescription,
        "quantity": itemQuantity,
        "expirationDate": expirationDate,
        "binId": binId
    };

    axios.post(`/api/items/bin/${binId}`, item)
        .then(res => {
            retrieveItems();
        })
        .catch(error => {
            displayError(error);
        })
        .finally(() => {
            addItemModal.hide();
        });
}

const displayError = error => {
    let errorContainer = document.createElement("div");
    errorContainer.classList.add("alert");
    errorContainer.classList.add("alert-danger");
    errorContainer.textContent = error;

    mainContent.prepend(errorContainer);
}

//generates the item inventory table
const displayItems = () => {
    const html = itemsTableTemplate(inventoryItems);
    mainContent.innerHTML = html;
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

const openSubmenu = e => {
    const submenu = e.target.parentNode.querySelector(".submenu");
    const displayValue = submenu.style.display;
    if(displayValue === "block"){
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

const populateBinsDropDown = e => {
    console.log(bins);
    const selectOptions = binsDropdownTemplate(bins);
    binLocationDropdown.innerHTML = selectOptions;
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

//loads all the item, bin, and binLocation data on page load
const startUp = () => {
    let binLocationsPromise = retrieveBinLocations();
    binLocationsPromise.then(locations => {
        binLocations = locations;
        let binsPromise = retrieveBins();
        binsPromise.then(retrievedBins => {
            bins = retrievedBins;
            let itemsPromise = retrieveItems();
            itemsPromise.then(retrievedItems => {
                matchItemsAndLocations(retrievedItems);
                displayItems();
            });
        });
    });
}

/** EVENT LISTENER DECLARATIONS **/
addItemModalObj.addEventListener("show.bs.modal", populateBinsDropDown);

menuItems.forEach(menuItem => {
   menuItem.addEventListener("click", openSubmenu);
});

saveItemButton.addEventListener("click", addItem);

startUp();