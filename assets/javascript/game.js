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

    function addValues() {

    }

    $('#red').on("click", function () {
        redAdd = parseInt(redValue) + parseInt(totalScore);
        console.log(redAdd);
        $('#score').html(parseInt(redAdd));
     });
    $('#blue').on("click", function () { console.log(blueValue) });
    $('#green').on("click", function () { console.log(greenValue) });
    $('#purple').on("click", function () { console.log(purpleValue) });
});
