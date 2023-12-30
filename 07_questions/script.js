// Author : Priyanshi Agrawal
// Date : 30-12-2023
// Title : questions - FAQs

// array of objects which contain data of ques and ans
const data = [
    {
        id: 1,
        ques: "Do you accept all major credit cards ?",
        ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat at nobis animi consequuntur illo aperiam corporis molestiae optio, quis repellendus?Lorem ipsum dolor sit. Lorem, ipsum dolor."
    },
    {
        id: 2,
        ques: "Do you support local farmers ?",
        ans: "amet consectetur adipisicing elit. Fugiat at nobis animi consequuntur illo aperiam corporis molestiae optio, quis repellendus?Lorem ipsum dolor sit. Lorem, ipsum dolor."
    },
    {
        id: 3,
        ques: "Do you use organic ingredients ?",
        ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat at nobis animi consequuntur illo aperiam corporis molestiae optio, quis repellendus?Lorem ipsum dolor sit. Lorem, ipsum dolor."
    },
]

// card container selected from document
// we will map the array in this element
const cardContainer = document.querySelector("#card-container");

// this will map the array data in card container element in html
// it will create card element for every array object (3 in our case)
// we have also given unique id to each card element with the help of object's id value
// join('') function will return the whole array elements as a string and join them with arrugemt passed to function i.e. empty string '' in our case
// by default map will return elements will ',' seperated values, to avoid commans we used join() method
cardContainer.innerHTML = data.map((item) => `
        <div id="card${item.id}" class="card bg-white shadow my-4 md:p-4 p-2">
        <div class="flex justify-between md:text-xl font-medium">
        <p class="ques"> ${item.ques} </p>
        <button class="btn text-yellow-500"><i class="fa-solid fa-square-plus"></i></button>
        </div>
        <p class="ans border-t-[2px] mt-2 pt-2">${item.ans}</p>
        </div>
    `
).join('');

// selectnig the array of 'ans' and 'btn' elements from document
const ans = document.querySelectorAll(".ans");
const btn = document.querySelectorAll(".btn");

// iterating the btn and ans array till the length of data array
// adding event listiner to handle the click event on each button and responding to that event for each ans element respectivley
// we have used toggle function to add and remove the "active" class from the "ans" element
for(let i=0;i<data.length;i++)
{
    btn[i].addEventListener("click", ()=>{
        ans[i].classList.toggle("active");
    })
}