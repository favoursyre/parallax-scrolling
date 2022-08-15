//I want to learn how to create a parallax scrolling effect

//Declaring the various variables
const parallax = document.getElementById("parallax")

//This listens for scrolling event
window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    console.log(`Offset: ${offset}`)
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})