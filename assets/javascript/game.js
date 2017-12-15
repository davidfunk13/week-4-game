$(document).ready(function() {
    
//selects "number" html div. Writes a random number between 19 and 120 to the div.
var chosenNumber = $("#number").html(Math.floor((Math.random() * (120 - 19 + 1)) + 19));
//Total score
var totalScore = 0
//Red Crystal random Value
randomRed =  Math.floor((Math.random() * 12) + 1);
//blue crystal random value
randomBlue =  Math.floor((Math.random() * 12) + 1);
//green crystal random value
randomGreen =  Math.floor((Math.random() * 12) + 1);
//purple crystal random value
randomPurple =  Math.floor((Math.random() * 12) + 1);
//button values
var redValue = [randomRed];
var blueValue = [randomBlue];
var greenValue = [randomGreen];
var purpleValue = [randomPurple];

console.log(redValue, blueValue, greenValue, purpleValue);

//button functionality

function red() {
    $('red').val(redValue);
}

});
