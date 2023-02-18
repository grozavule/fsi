const menuItems = document.querySelectorAll(".menu-item");

const openSubmenu = e => {
    const submenu = e.target.parentNode.querySelector(".submenu");
    const displayValue = submenu.style.display;
    if(displayValue === "block"){
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

menuItems.forEach(menuItem => {
   menuItem.addEventListener("click", openSubmenu);
});