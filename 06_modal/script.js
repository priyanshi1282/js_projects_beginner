// Author : Priyanshi Agrawal
// Date : 27-12-2023
// Title : Modal

// button to open modal form
const openModal= document.querySelector("#open");

// button to close the modal form
const closeModal =  document.querySelector("#close");

// modal form element
const modal= document.querySelector(".modal");

// the concept is easy to understand.
// on click of open button, give display:flex/block (basically give desired display property) to modal element
//  to achieve this, we have created a "active" class with desired display value.
// on click of open modal btn, add that class to modal element.
openModal.addEventListener("click", ()=>{
    modal.classList.add("active");
})

// when we want to close the modal,
// just remove "active" class from the modal element.
// remember to display:none initially the modal element. 
closeModal.addEventListener("click",()=>{
    modal.classList.remove("active");
})