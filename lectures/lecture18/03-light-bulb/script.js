const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOn () {
// the image being shown is off, turn it to on
    if (elem.src === imgOff) {
    elem.src = imgOn;
 }
 else {
    // otherwise turn it off 
    elem.src = imgOff;

 }
};





// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;