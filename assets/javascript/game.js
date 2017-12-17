$(document).ready(function () {

    var chosenNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);

    $("#number").html(chosenNumber);

    var totalScore = 0;

    winsCounter = 0;

    lossesCounter = 0;

    $('#wins').html(winsCounter);

    $('#losses').html(lossesCounter);

    function getRandomNumber() {
        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber;
    };

    function winCheck () {
        console.log("total score: " + totalScore);
        console.log("chosen number: " + chosenNumber);
        if (totalScore === chosenNumber) {
            winsCounter++;
            $('#wins').html(winsCounter);
            console.log("wins:" + winsCounter);
            resetGame();
        };
        if (totalScore > chosenNumber) {
            lossesCounter++;
            $('#losses').html(lossesCounter);
            console.log("Losses: " + lossesCounter);
            resetGame();
        };
    };
    function resetGame() {
        chosenNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
        $("#number").html(chosenNumber);
        totalScore = 0;
        $('#score').html(totalScore);
        redValue = getRandomNumber();
        blueValue = getRandomNumber();
        greenValue = getRandomNumber();
        purpleValue = getRandomNumber();
        console.log(redValue, blueValue, greenValue, purpleValue);
    }

    var randomNumber = getRandomNumber();
    var redValue = getRandomNumber();
    var blueValue = getRandomNumber();
    var greenValue = getRandomNumber();
    var purpleValue = getRandomNumber();

    console.log(redValue, blueValue, greenValue, purpleValue);

    $("#score").html(totalScore);

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

//remaining tasks...

//bonus.... duplicates? graphics?

