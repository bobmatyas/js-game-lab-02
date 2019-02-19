"use strict";

start();

function start() {
  /* CALL THE FUNCTION TO START THE GAME */
  startGame();
}

/* START BATTLE SEQUENCE */

function startCombat(userName) {

  /* INITIAL GAME SETUP */

  let userHealthPoints = 40;
  let grantHealthPoints = 10;
  let grantLivesLeft = 3;
  let grantDefeatCount = 0;
  let defeatMessageEnding = "time";
  
  while (userHealthPoints > 0 && grantHealthPoints > 0 && grantLivesLeft >= 1) {

      /* Chose to attack or quit */

      let attackOrQuit = prompt("Attack or Quit?");
      attackOrQuit = attackOrQuit.toLowerCase();

      /* If attack, run through attack sequence */

      if (attackOrQuit === "attack") {
        userHealthPoints = userHealthPoints - getDamage();
        grantHealthPoints = grantHealthPoints - getDamage();

        if (userHealthPoints > 0) {
            console.log(`${userName} has ${userHealthPoints} health left.`);
        } else if (userHealthPoints <= 0) {
            console.log(
            `
      You have been dealt a fatal blow.
      
      Grant WINS!
      `);
          break;
        }

        if (grantHealthPoints > 0) {
          console.log(`Grant the Mighty Chicken has ${grantHealthPoints} health left.`);
        } else if (grantHealthPoints <= 0) {
          console.log(`Grant has been dealt a fatal blow!`);
          if (grantLivesLeft >= 1) {
            grantLivesLeft -= 1;
            grantHealthPoints = 10;
            grantDefeatCount += 1;
            if (grantDefeatCount > 1) {
              defeatMessageEnding = "times";
            }
          }

          if (grantDefeatCount <= 2) {
            console.log(
              `
          Grant the Mighty Chicken has been defeated ${grantDefeatCount} ${defeatMessageEnding}.
          
          Unfortunately for you, Grant has come back to life!
          `
            );
          } else if (grantDefeatCount === 3) {
            console.log(
              `
          Grant the Mighty Chicken has been defeated 3 times!!! 
          
          YOU WIN!
          `
            );
          }
        }
      } else if (attackOrQuit === "quit") {
        console.log(`You have left the battlefield. Come back when you are ready to fight Grant!`);
        break;
      }
    }
  }


function startGame() {
  let userPlay = prompt("Do you want to play?", "yes or no");
  if (userPlay.toLowerCase() === "yes") {
    let userName = prompt("Enter your name to start the battle:");
    startCombat(userName);
  } else {
      console.log(`Refresh the page when you are ready to play.`);
  }
};

/* GET RANDOM DAMAGE FUNCTION */

function getDamage() {
  let randomHit = Math.floor(((Math.random() * 5) + 1));
  return randomHit;
}