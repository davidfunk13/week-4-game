window.onload = function() {
    
//selects "number" html div.
var chosenNumber = document.getElementById("number")
// writes a random number between 19 and 120 to the div.
chosenNumber.innerHTML = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
};