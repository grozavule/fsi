console.log(Handlebars.templates);

/*** TEMPLATE DECLARATIONS ***/
const confirmationModalTemplate = Handlebars.templates["confirmation-modal.hbs"];

/*** VARIABLE DECLARATIONS ***/
const mainContent = document.querySelector("#main-content");
// const menuItems = document.querySelectorAll(".menu-item");

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

// const openSubmenu = e => {
//     const submenu = e.target.parentNode.querySelector(".submenu");
//     const displayValue = submenu.style.display;
//     if(displayValue === "block"){
//         submenu.style.display = "none";
//     } else {
//         submenu.style.display = "block";
//     }
// }

/*** EVENT HANDLERS ***/

// menuItems.forEach(menuItem => {
//    menuItem.addEventListener("click", openSubmenu);
// });