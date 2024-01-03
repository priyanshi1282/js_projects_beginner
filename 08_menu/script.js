// Author : Priyanshi Agrawal
// Date : 31-12-2023
// Title : Menu page - filter items

const menu = [
    {
        id: 1,
        item: "avocado toast",
        price:"$15.99",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"avocado-toast.jpg",
        tag:"breakfast"
    },
    {
        id: 2,
        item: "butter pancake",
        price:"$5.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"butter-pancake.jpg",
        tag:"breakfast"
    },
    {
        id: 3,
        item: "cold pasta salad",
        price:"$19.03",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"pasta-salad.jpg",
        tag:"breakfast"
    },
    {
        id: 4,
        item: "masala omlette",
        price:"$8.83",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"masala-omlette.jpg",
        tag:"lunch"
    },
    {
        id: 5,
        item: "tofu burger",
        price:"$10.99",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"tofu-burger.jpg",
        tag:"lunch"
    },
    {
        id: 6,
        item: "salmon rice bowl",
        price:"$16.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"salmon-rice-bowl.jpg",
        tag:"lunch"
    },
    {
        id: 7,
        item: "baked pasta",
        price:"$24.50",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"baked-pasta.jpg",
        tag:"dinner"
    },
    {
        id: 8,
        item: "noodles with chilli oil eggs",
        price:"$22.55",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"Noodles-with-chilli-oil-eggs.jpg",
        tag:"dinner"
    },
    {
        id: 9,
        item: "classic lasagna",
        price:"$23.55",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"classic-lasagna.jpg",
        tag:"dinner"
    },
    {
        id: 10,
        item: "paneer tikka",
        price:"$18.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"paneer-tikka.jpg",
        tag:"dinner"
    },
    {
        id: 11,
        item: "blueberry shake",
        price:"$9.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"blueberry-shake.jpg",
        tag:"shakes"
    },
    {
        id: 12,
        item: "chocolate shake",
        price:"$9.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"chocolate-shake.jpg",
        tag:"shakes"
    },
    {
        id: 13,
        item: "oreo shake",
        price:"$9.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"oreo-shake.jpg",
        tag:"shakes"
    },
    {
        id: 14,
        item: "strawberry shake",
        price:"$9.00",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus velit, possimus voluptates atque consequatur reiciendis!",
        img:"strawberry-shake.jpg",
        tag:"shakes"
    },
]

const dishContainer = document.querySelector(".dish-container");
const buttons=document.querySelectorAll(".menu-btns button")

dishContainer.innerHTML = menu.map((item)=>`
<div class="card flex">
<img src=${item.img} alt="" class="w-[120px] rounded border-4 border-yellow-600">
<div class="card-info">
    <div class="font-bold flex">
        <h1 class="capitalize">${item.item}</h1>
        <h1 class="text-yellow-500">${item.price}</h1>
    </div>
    <p>${item.info}</p>
</div>
</div>`
).join(' ')

function filterItems(tag){
    const filterArr= menu.filter(x=>
        x.tag==tag
        )
        return filterArr
}

const displayItems = (...arr) =>{
    dishContainer.innerHTML = arr.map((item)=>`
        <div class="card flex">
            <img src=${item.img} alt="" class="w-[120px] rounded border-4 border-yellow-600">
            <div class="card-info">
                <div class="font-bold flex">
                    <h1 class="capitalize">${item.item}</h1>
                    <h1 class="text-yellow-500">${item.price}</h1>
                </div>
                <p>${item.info}</p>
            </div>
        </div>`
).join(' ');
}

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn => {btn.classList.remove("active")});
        button.classList.add("active")

        const tag = button.id==='all'? null:button.id;
        const filteredItems = tag? filterItems(tag): menu;
        displayItems(...filteredItems);
    })
})

// below is the another method to handle clicks.

// const all = document.querySelector("#all");
// const dinner = document.querySelector("#dinner");
// const lunch = document.querySelector("#lunch");
// const breakfast = document.querySelector("#breakfast");
// const shakes = document.querySelector("#shakes");

// all.addEventListener("click" , ()=>{
//     displayItems(...menu);
//     all.classList.add("active");
//     lunch.classList.remove("active")
//     dinner.classList.remove("active")
//     shakes.classList.remove("active")
//     breakfast.classList.remove("active")
// })

// dinner.addEventListener("click" , ()=>{
//     const dinnerItems = filterItems("dinner");
//     displayItems(...dinnerItems);
//     dinner.classList.add("active");
//     lunch.classList.remove("active")
//     all.classList.remove("active")
//     shakes.classList.remove("active")
//     breakfast.classList.remove("active")
// })

// lunch.addEventListener("click" , ()=>{
//     const dinnerItems = filterItems("lunch");
//     displayItems(...dinnerItems);
//     lunch.classList.add("active");
//     all.classList.remove("active")
//     dinner.classList.remove("active")
//     shakes.classList.remove("active")
//     breakfast.classList.remove("active")
// })

// shakes.addEventListener("click" , ()=>{
//     const dinnerItems = filterItems("shakes");
//     displayItems(...dinnerItems);
//     shakes.classList.add("active");
//     lunch.classList.remove("active")
//     dinner.classList.remove("active")
//     all.classList.remove("active")
//     breakfast.classList.remove("active")
// })

// breakfast.addEventListener("click" , ()=>{
//     const dinnerItems = filterItems("breakfast");
//     displayItems(...dinnerItems);
//     breakfast.classList.add("active");
//     lunch.classList.remove("active")
//     dinner.classList.remove("active")
//     shakes.classList.remove("active")
//     all.classList.remove("active")
// })
