// Author : Priyanshi Agrawal
// Date : 26-12-2023
// Title : Responsive Sidebar

const menu= document.querySelector("#menu");
const sidebar= document.querySelector("#sidebar");
const close= document.querySelector("#close");

menu.addEventListener("click",()=>{
    sidebar.classList.remove("close");
    sidebar.classList.add("active");
})

close.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    sidebar.classList.add("close");
})