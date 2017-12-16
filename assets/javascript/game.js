$(document).ready(function () {

    //selects "number" html div. Writes a random number between 19 and 120 to the div.
    var chosenNumber = $("#number").html(Math.floor((Math.random() * (120 - 19 + 1)) + 19));
    //Total score
    var totalScore = 0;
    console.log(totalScore);


    function getRandomNumber() {
        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber;
    };
    var randomNumber = getRandomNumber();
    console.log(randomNumber);

    //button values
    var redValue = getRandomNumber();
    var blueValue = getRandomNumber();
    var greenValue = getRandomNumber();
    var purpleValue = getRandomNumber();

    console.log(redValue, blueValue, greenValue, purpleValue);

    //print total score to the page
    $("#score").html(totalScore);
    //button functionality



    //add values function
    $('#red').on("click", function () {
        $('red').val(redValue);
        totalScore = totalScore + redValue;
        console.log(redValue, totalScore);
        $('#score').html(totalScore);
     });
     $('#blue').on("click", function () {
        $('blue').val(blueValue);
        totalScore = totalScore + blueValue;
        console.log(blueValue, totalScore);
        $('#score').html(totalScore);
     });
     $('#green').on("click", function () {
        $('green').val(greenValue);
        totalScore = totalScore + greenValue;
        console.log(greenValue, totalScore);
        $('#score').html(totalScore);
     });
     $('#purple').on("click", function () {
        $('purple').val(purpleValue);
        totalScore = totalScore + purpleValue;
        console.log(purpleValue, totalScore);
        $('#score').html(totalScore);
     });});


//psuedocode 

//
// game start, random number on page
//total is zero
//4 random numbers are generated between 1-12
//on click, add that array to the total
    // ie. redValue 