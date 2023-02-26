//console.log(Handlebars.templates);

/*** TEMPLATE DECLARATIONS ***/
const confirmationModalTemplate = Handlebars.templates["confirmation-modal.hbs"];

/*** VARIABLE DECLARATIONS ***/
let bins = [];
let binLocations = [];
const mainContent = document.querySelector("#main-content");

/*** FUNCTION DECLARATIONS ***/
const displayAlert = (type, message) => {
    let alertContainer = document.createElement("div");
    alertContainer.classList.add("alert");
    alertContainer.classList.add(`alert-${type}`);
    alertContainer.textContent = message;

    const mainContainer = document.querySelector("main");
    mainContainer.insertBefore(alertContainer, mainContent);
}

const generateConfirmationModal = (title, message) => {
    let modalValues = {
        "title": title,
        "message": message
    };

    return confirmationModalTemplate(modalValues);
}

const retrieveBins = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get("/api/bins/")
            .then(res => {
                bins = res.data;
                resolve(res.data);
            })
            .catch(error => reject(error.message));
    });
    return promise;
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