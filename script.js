var color=[
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(255,0,255)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(0,255,255)"
]

var square = document.querySelectorAll(".square");
var pickedColor = color[2];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');


colorDisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++) {
    square[i].style.background = color[i];


    square[i].addEventListener("click", function () {

        var clickedColor = this.style.background;
        console.log("hi");

        if (clickedColor === pickedColor) {
            console.log("hello")
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }
        else {
            console.log("bye")
            this.style.background = "#000000";
            messageDisplay.textContent = "Try Again";
        }

    });

}

function changeColor(color) {

    for(var i=0;i<square.length; i++){
        square[i].style.background = color;
    }

}