// Author : Priyanshi Agrawal
// Date : 04-01-2024
// Title : background video player

// selecting elements from document
const video = document.querySelector("#video"); // video 
const controls = document.querySelectorAll(".controls button"); // array of buttons
const cover= document.querySelector("#cover"); // cover

// initually play the video
// when website is loaded this runs
video.play();

// iterating over array of controls button
// handling click event on button
// if button has id == play then play the video and add cover class to cover element
// else pause btn is clicked and add active class to cover
controls.forEach(button => {
    button.addEventListener("click",()=>{

        // play button clicked
        if (button.id ==='play') {

            // play the video
            video.play();
            cover.classList.remove("active");
            cover.classList.add("cover")
        }

        // pause button clicked
        else{

            // pause the video
            video.pause();
            cover.classList.remove("cover");
            cover.classList.add("active");
        }
    })
})
