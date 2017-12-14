window.onload = function() {
    
//selects "number" html div.
var chosenNumber = document.getElementById("number")
// writes a random number between 19 and 120 to the div.
chosenNumber.innerHTML = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
};
//Red Crystal random Value
randomRed =  Math.floor((Math.random() * 12) + 1);
//blue crystal random value
randomBlue =  Math.floor((Math.random() * 12) + 1);
//green crystal random value
randomGreen =  Math.floor((Math.random() * 12) + 1);
//purple crystal random value
randomPurple =  Math.floor((Math.random() * 12) + 1);
//empty button values
var crystalValues = [];
//pushes random integer values to an array, to which we will reference the index of the random numbers and assign them to crystal buttons.
crystalValues.push(randomRed, randomGreen, randomBlue, randomPurple);
console.log(crystalValues);
