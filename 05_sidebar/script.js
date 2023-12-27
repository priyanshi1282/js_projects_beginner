// Author : Priyanshi Agrawal
// Date : 26-12-2023
// Title : Responsive Sidebar

// selecting buttons and elements from the document
const menu= document.querySelector("#menu");
const sidebar= document.querySelector("#sidebar");
const close= document.querySelector("#close");

// handle the click event for opening the sidebar
menu.addEventListener("click",()=>{
    sidebar.classList.remove("close");
    sidebar.classList.add("active");
})

// handle the click event for closing the sidebar
close.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    sidebar.classList.add("close");
})