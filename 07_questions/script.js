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

const cardContainer = document.querySelector("#card-container");

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

const card = document.querySelectorAll(".card");
const ans = document.querySelectorAll(".ans");
const btn = document.querySelectorAll(".btn");

for(let i=0;i<data.length;i++)
{
    btn[i].addEventListener("click", ()=>{
        ans[i].classList.toggle("active");
    })
}