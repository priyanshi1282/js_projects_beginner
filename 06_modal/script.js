// Author : Priyanshi Agrawal
// Date : 27-12-2023
// Title : Modal

const openModal= document.querySelector("#open");
const closeModal =  document.querySelector("#close");
const modal= document.querySelector(".modal");

openModal.addEventListener("click", ()=>{
    modal.classList.add("active");
})

closeModal.addEventListener("click",()=>{
    modal.classList.remove("active");
})