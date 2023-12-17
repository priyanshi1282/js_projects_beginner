// a string array storing values of color.
const arr = ["red" , "pink" , "blue" ,"yellow","violet","purple","whitesmoke","cyan","brown","grey","green","orange","chocolate","silver"];

// selecting the button element from document using query selector
const btn = document.querySelector("#btn");

// selecting the span element from document using query selector
const color= document.querySelector("#color");

// selecting the body element from document using query selector
const body = document.body;

// count variable to keep record of current array index.
let count=0;

// len will store value of array length.
const len= arr.length;


// when user click on the button, the eventLitsener will detect it.
// the function will get triggered.
btn.addEventListener("click", ()=>{

    // handle index out of bound error,
    // set count to zero i.e.,the initial value.
    // this will help to form a infinite cycle of colors.
    // ex- 0,1,2,3,4,5,6,7,8........,0,1,2,4,......
    if(count>=len){
        count=0;
    }

    // below code will run always, when clicked the button

    // take first character from string and covert it into upper case
    // now, take the substring excluding first char.
    // append both strings
    // result will be a Capitalized string.
    color.textContent=arr[count].charAt(0).toUpperCase() + arr[count].substring(1);

    // manipulating DOM by using backgroundColor property to change the background color of body.
    body.style.backgroundColor = arr[count++];
})