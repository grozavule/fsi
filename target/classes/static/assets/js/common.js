//console.log(Handlebars.templates);

/** TEMPLATE DECLARATION **/
const itemsTableTemplate = Handlebars.templates["items-table.hbs"];
const binsDropdownTemplate = Handlebars.templates["bins-dropdown.hbs"];

/** VARIABLE DECLARATION **/
const addItemModalObj = document.querySelector("#modal-add-item");
const addItemModal = new bootstrap.Modal("#modal-add-item", {});
const binLocationDropdown = document.querySelector("#bin-location");
const mainContent = document.querySelector("#main-content");
const menuItems = document.querySelectorAll(".menu-item");
const saveItemButton = document.querySelector("#btn-save-item");

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
            loadItems();
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
const loadItems = () => {
    axios.get("/api/items/")
        .then(res => {
            console.log(res.data);
            const html = itemsTableTemplate(res.data);
            mainContent.innerHTML = html;
        })
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

const populateBinLocationsDropDown = e => {
    const binsPromise = retrieveBinLocations();
    binsPromise.then(bins => {
        const selectOptions = binsDropdownTemplate(bins);
        binLocationDropdown.innerHTML = selectOptions;
    });
}

const retrieveBinLocations = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get("/api/bins/")
            .then(res => {
                console.log(res.data);
                resolve(res.data);
            })
            .catch(error => reject(error.message));
    });
    return promise;
}

/** EVENT LISTENER DECLARATIONS **/
addItemModalObj.addEventListener("show.bs.modal", populateBinLocationsDropDown);

menuItems.forEach(menuItem => {
   menuItem.addEventListener("click", openSubmenu);
});

saveItemButton.addEventListener("click", addItem);

loadItems();