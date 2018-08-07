var color=[
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(255,0,255)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(0,255,255)"

]
var pickedColor = color[2];
var square = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++) {
    square[i].style.background = color[i];


    square[i].addEventListener("click", function () {

        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            alert("right");

        }
        else {
            this.style.background = "#000000";
        }

    });

}