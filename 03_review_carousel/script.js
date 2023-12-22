const users=[
    {
        url:"user1.jpeg",
        name:"Priyanshi Agrawal",
        title:"Web Developer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit."
    },
    {
        url:"user2.jpg",
        name:"Atharv Vani",
        title:"Frontend Developer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit."
    },
    {
        url:"user3.jpg",
        name:"Arya Verma",
        title:"Operations Lead",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit."
    },
    {
        url:"user4.jpeg",
        name:"Pranay Nagpure",
        title:"AI/ML Developer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt in dolores repellendus aut natus accusantium. Autem accusamus nemo reprehenderit."
    },
]

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const img=document.querySelector("#user-img");
const username=document.querySelector("#name");
const title=document.querySelector("#title");
const review=document.querySelector("#review");
const len= users.length;
let counter=0;

next.addEventListener("click" , ()=>{
    counter++;
    if(counter<len)
    {
        putValues(counter);
    }
    else if(counter==len)
    {
        counter=0;
        putValues(counter);
    }
})

prev.addEventListener("click",()=>{
    counter--;
    if(counter<len && counter>=0)
    {
        putValues(counter);
    }
    else if(counter<0)
    {
        counter=len-1;
        putValues(counter);
    }
})

function putValues(index){
    username.textContent= users[index].name;
    title.textContent= users[index].title;
    review.textContent= users[index].review;
    img.setAttribute("src", users[index].url);
}