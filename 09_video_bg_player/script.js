// Author : Priyanshi Agrawal
// Date : 04-01-2024
// Title : background video player

const video = document.querySelector("#video");
const controls = document.querySelectorAll(".controls button");
const cover= document.querySelector("#cover");
video.play();
controls.forEach(button => {
    button.addEventListener("click",()=>{
        if (button.id ==='play') {
            video.play();
            cover.classList.remove("active");
            cover.classList.add("cover")
        }
        else{
            video.pause();
            cover.classList.remove("cover");
            cover.classList.add("active");
        }
    })
})
