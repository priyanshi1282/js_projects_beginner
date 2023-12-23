// get menu button and items element from document
const menu= document.querySelector("#menu");
const items= document.querySelector("#items");

// handles click event on menu button
// toggles the nav-active class which displays and hides the items
menu.addEventListener("click",()=>{
    items.classList.toggle("nav-active")
})