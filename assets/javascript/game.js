// Loading the document ready block first - although probaby not needed

$( document ).ready(function() {
    console.log( "ready!" );
});

// Set variables for the game

var wins = 0;
var losses = 0;

var blueCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;
var redCrystal = 0;

var yourCurrentTotal = 0; // The additive score of clicked crystals

var yourTargetTotal = 0; // The random computer pick

// Set the Wins and Losses to display 0 before game starts

wins = 0;
    $("#wins").text(0 + wins);

losses = 0;
    $("#losses").text(0 + losses);

// After game loads, startGame launches the actual game, and is used to reset at the end of each round

var startGame = function(){ // Gets the game set to begin

// Set game to assign random numbers to each of the four crystals (with each set to randomly fall between 1 and 12). These need to remain hidden, so don't write them to the DOM.

blueCrystal = Math.floor((Math.random() * 12) + 1);
greenCrystal = Math.floor((Math.random() * 12) + 1);
yellowCrystal = Math.floor((Math.random() * 12) + 1);
redCrystal = Math.floor((Math.random() * 12) + 1);

// Generate the random number for the yourTargetTotal to fall between 19 and 120, and write that to the DOM.

yourTargetTotal = Math.floor((Math.random() * 120) + 19);
    $("#yourTargetTotal").text(yourTargetTotal);

// Set the yourCurrentTotal to 0 at the start of the game, then set it to begin adding based on clicks

yourCurrentTotal = 0;
    $("#yourCurrentTotal").text(" " + yourCurrentTotal);
    
// Console log all the crystals and the random number to make sure they work!!

console.log(blueCrystal);
console.log(greenCrystal);
console.log(yellowCrystal);
console.log(redCrystal);
console.log(yourTargetTotal);
};

// Start the game by calling the startGame function

    startGame();

// Write the functions to click the crystals and add that value to yourCurrentTotal, then compare that new total with the yourTargetTotal

    $("#blueCrystal").click(function(){
        yourCurrentTotal = yourCurrentTotal + blueCrystal;
        $("#yourCurrentTotal").text(" " + yourCurrentTotal);
        compare();
    });

    $("#greenCrystal").click(function(){
        yourCurrentTotal = yourCurrentTotal + greenCrystal;
        $("#yourCurrentTotal").text(" " + yourCurrentTotal);
        compare();
    });

    $("#yellowCrystal").click(function(){
        yourCurrentTotal = yourCurrentTotal + yellowCrystal;
        $("#yourCurrentTotal").text(" "  + yourCurrentTotal);
        compare();
    });

    $("#redCrystal").click(function(){
        yourCurrentTotal = yourCurrentTotal + redCrystal;
        $("#yourCurrentTotal").text(" " + yourCurrentTotal);
        compare();
    });

// Calculate a win or loss and Write to the DOM - this should overwrite the score of 0 added at the start of the game

var compare = function(){
   
    if(yourCurrentTotal > yourTargetTotal){
        alert("You went over the target.  You lost this round.");
        losses = losses +1;
        $("#losses").text(losses);
        startGame(); // This has to be here to restart the next round
    }

    if (yourCurrentTotal === yourTargetTotal){
        alert("YOU WON!");
        wins = wins +1;
        $("#wins").text(wins);
        startGame(); // This has to be here to restart the next round
    }

};
