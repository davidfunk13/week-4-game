$(document).ready(function () {

    //selects "number" html div. Writes a random number between 19 and 120 to the div.
    var chosenNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    $("#number").html(chosenNumber);
    //Total score
    var totalScore = 0;
    winsCounter = 0;
    lossesCounter = 0;
    //displays wins and losses on the html page
    $('#wins').html(winsCounter);
    $('#losses').html(lossesCounter);
    //global functions
    function getRandomNumber() {
        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber;
    };


//winCheck conditions function. so far, no success. IN PROGRESS
    function winCheck () {
        console.log("total score: " + totalScore);
        console.log("chosen number: " + chosenNumber);
        if (totalScore === chosenNumber) {
            winsCounter++;
            //come back and revise this
            $('#wins').html(winsCounter);
            console.log("wins:" + winsCounter);
            chosenNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
            $("#number").html(chosenNumber);
            totalScore = 0;
            $('#score').html(totalScore);
        };
        if (totalScore > chosenNumber) {
            lossesCounter++;
            //same thing here, revisit.
            $('#losses').html(lossesCounter);
            chosenNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
            $("#number").html(chosenNumber);
            console.log("Losses: " + lossesCounter);
            totalScore = 0;
            $('#score').html(totalScore);
        };
    };

    //declaring randomNumber
    var randomNumber = getRandomNumber();

    //button values
    var redValue = getRandomNumber();
    var blueValue = getRandomNumber();
    var greenValue = getRandomNumber();
    var purpleValue = getRandomNumber();

    //so I can se the values for debugging
    console.log(redValue, blueValue, greenValue, purpleValue);

    //print total score to the page
    $("#score").html(totalScore);

    //button functionality
    $('#red').on("click", function () {
        $('red').val(redValue);
        totalScore = totalScore + redValue;
        console.log(redValue, totalScore);
        $('#score').html(totalScore);
        winCheck();
    });
    $('#blue').on("click", function () {
        $('blue').val(blueValue);
        totalScore = totalScore + blueValue;
        console.log(blueValue, totalScore);
        $('#score').html(totalScore);
        winCheck();
    });
    $('#green').on("click", function () {
        $('green').val(greenValue);
        totalScore = totalScore + greenValue;
        console.log(greenValue, totalScore);
        $('#score').html(totalScore);
        winCheck();
    });
    $('#purple').on("click", function () {
        $('purple').val(purpleValue);
        totalScore = totalScore + purpleValue;
        console.log(purpleValue, totalScore);
        $('#score').html(totalScore);
        winCheck();
    });
});

//psuedocode 

//
// game start, random number on page
//total is zero
//4 random numbers are generated between 1-12
//on click, add that array to the total
// ie. redValue


//remaining tasks...

//1. do game reset on win or lose.
//bonus.... duplicates? graphics?

