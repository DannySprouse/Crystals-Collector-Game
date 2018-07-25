# unit-4-game
CRYSTALS COLLECTOR GAME

Tools:  HTML5, CSS3, Bootstrap4, JavaScript, jQuery

Purpose:  PC gaming; web application guessing game

Responsiveness:  Game has some (limited) responsiveness as it is designed to be played on a desktop or laptop computer; but can also be viewed/played equally well using a horizontal orientation on most iPad and tablet systems

Summary:  The computer generates a random number, which is visible to the player. There are four crystal images that also each get assigned a random (but hidden) number.  The user objective is to click on the four crystal images to reveal their value and attempt to generate a value equal to the computer generated number. If there is an exact match between the random number and the series of crystal clicks, the player wins and a WIN score is added; if the player exceeds the target number, the player loses and a LOSSES score is added. After a win or loss, the game resets, and a new random number target is set for the player, and all four crystal images also receive additional randomly assigned numbers.

Problem:  The task was to create an app to run in browser that features dynamically updating HTML code, JavaScript, jQuery and computer random generation within a specific set range, and storing and adding those numbers and comparing to a random set number.  I needed code for the computer to generate a random number as the baseline (ranging between 19 and 120), then assign a random number to each of the four crystals (ranging between 1 to 12).  Then once the baseline number was matched or exceeded, a win or loss gets recorded to the player total score.

Solution:  Using JavaScript supplemented with the jQuery Library, have computer random generate a number between 19 and 120, then assign each crystal a number between 1 and 12.  As user clicks the crystals, add that score to the users total until it matches or exceeds the target score.  The player will be alerted for a win or loss.

My Technical Approach:  I first built out a basic HTML mockup with some simple CSS styling.  I then coded out the JavaScript and jQuery in the game.js file.  I included instructions on the page how to play.  After setting the jQuery document.ready, I set the variables for the game including wins, losses, four crystal colors, and the two totals.  I used the Math.floor(Math.random) to set values for each of the crystals as well as for the random target number to be generated.  I set the game to start with a score of 0 under both the Wins and Losses, and as a win or loss occurred that number increased by one.  I created functions so that when the user clicked on a crystal, that number was added to the running total for that round, and then compared to the randomly generated target number.  If the crystals total was lower than the target, the player had to select another crystal, if the total matched the target the player scored a win, and if the total exceeded the target the player scored a loss.  Alerts were created to let the player know they had exceeded the target or had matched the target. I then made a few additional CSS adjustments, ensured the game was mobile responsive, and deployed.

Licenses, Credits & Attributions:  Purchased crystals banner graphic license from iStockPhoto May 2018.  Clipart images provided free courtesy of www.openclipart.org, www.classroomclipart.com and www.clipart-library.com. 

Link to Deployed Game: https://dannysprouse.github.io/Crystals-Collector-Game/ 

Copyright ©2018  Danny S. Sprouse  All Rights Reserved
