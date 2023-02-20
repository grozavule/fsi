/** VARIABLE DECLARATION **/
const menuItems = document.querySelectorAll(".menu-item");

/** TEMPLATE DECLARATION **/


/** FUNCTION DECLARATIONS **/
const loadItems = () => {
    axios.get("/api/items/")
        .then(res => {
            console.log(res.data);
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

/** EVENT LISTENER DECLARATIONS **/
menuItems.forEach(menuItem => {
   menuItem.addEventListener("click", openSubmenu);
});

loadItems();