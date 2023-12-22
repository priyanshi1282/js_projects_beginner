// object array to store value of user reviews
const users=[
    { // user 1
        url:"user1.jpeg",
        name:"Priyanshi Agrawal",
        title:"Web Developer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium."
    },
    { // user 2
        url:"user2.jpg",
        name:"Atharv Vani",
        title:"Frontend Developer",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    { // user 3
        url:"user3.jpg",
        name:"Arya Verma",
        title:"Operations Lead",
        review:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    { // user 4
        url:"user4.jpeg",
        name:"Pranay Nagpure",
        title:"AI/ML Developer",
        review:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."
    },
]

// getting all elements from document
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const img=document.querySelector("#user-img");
const username=document.querySelector("#name");
const title=document.querySelector("#title");
const review=document.querySelector("#review");
const len= users.length; // length of user object array
let counter=0; // counter keeps track of current position

// handles click for 'next' button
next.addEventListener("click" , ()=>{
    counter++;
    if(counter<len)
    {
        putValues(counter);
    }
    else if(counter==len) // acts as a infinite loop for array index. ex- 0,1,2,3,0,1,2,3,0,1..........
    {
        counter=0;
        putValues(counter);
    }
})

// handles click for 'previous' button
prev.addEventListener("click",()=>{
    counter--;
    if(counter<len && counter>=0)
    {
        putValues(counter);
    }
    else if(counter<0) // acts as a reverse infinite loop for array index. ex- 3,2,1,0,,3,2,1,0,3,2,......
    {
        counter=len-1;
        putValues(counter);
    }
})

// handles the value to be displyed at current counter index.
function putValues(index){
    username.textContent= users[index].name;
    title.textContent= users[index].title;
    review.textContent= users[index].review;
    img.setAttribute("src", users[index].url);
}