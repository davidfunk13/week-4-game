window.onload = function() {
    
//selects "number" html div.
var chosenNumber = document.getElementById("number")
// writes a random number between 19 and 120 to the div.
chosenNumber.innerHTML = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
};
//Red Crystal random Value
redValue =  Math.floor((Math.random() * 12) + 1);
//blue crystal random value
blueValue =  Math.floor((Math.random() * 12) + 1);
//green crystal random value
greenValue =  Math.floor((Math.random() * 12) + 1);
//purple crystal random value
purpleValue =  Math.floor((Math.random() * 12) + 1);
console.log(redValue, blueValue, greenValue, purpleValue);