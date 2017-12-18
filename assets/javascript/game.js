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
        if (totalScore === chosenNumber) {
            winsCounter++;
            $('#wins').html(winsCounter);
            resetGame();
        };
        if (totalScore > chosenNumber) {
            lossesCounter++;
            $('#losses').html(lossesCounter);
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
    }

    var randomNumber = getRandomNumber();
    var redValue = getRandomNumber();
    var blueValue = getRandomNumber();
    var greenValue = getRandomNumber();
    var purpleValue = getRandomNumber();


    $("#score").html(totalScore);

    $('#red').click(function () {
        $('red').val(redValue);
        totalScore = totalScore + redValue;
        $('#score').html(totalScore);
        winCheck();
    });
    $('#blue').click(function () {
        $('blue').val(blueValue);
        totalScore = totalScore + blueValue;
        $('#score').html(totalScore);
        winCheck();
    });
    $('#green').click(function () {
        $('green').val(greenValue);
        totalScore = totalScore + greenValue;
        $('#score').html(totalScore);
        winCheck();
    });
    $('#purple').click(function () {
        $('purple').val(purpleValue);
        totalScore = totalScore + purpleValue;
        $('#score').html(totalScore);
        winCheck();
    });
});

//remaining tasks...

//bonus.... duplicates? graphics?

