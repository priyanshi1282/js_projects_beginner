// increament btn
const up= document.querySelector("#up");

// decreament btn
const down= document.querySelector("#down");

// reset btn
const reset= document.querySelector("#reset");

// value of counter
const value=document.querySelector("#value");

// variable to handle counter value
let counter=0;


// handle increament value
up.addEventListener("click", ()=>{
    counter++;
    value.textContent=counter;
    handleColor();
});

// handle decreament value
down.addEventListener("click", ()=>{
    counter--;
    value.textContent=counter;
    handleColor();
});

// handle reset value
reset.addEventListener("click", ()=>{
    counter=0;
    value.textContent=counter;
    handleColor();
});

// handle color of value
function handleColor(){

    // set color to color when counter is zero
    if(counter==0)
    value.style.color="black";

    // set color to green when counter is positive
    else if(counter>0)
    value.style.color="rgb(132 204 22)";

    // set color to red when counter is negative
    else
    value.style.color="rgb(239 68 68)";
}