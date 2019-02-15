"use strict";

/* INITIAL GAME SETUP */

let userHealthPoints = 40;
let grantHealthPoints = 10;
let grantLivesLeft = 3;
let grantDefeatCount = 0;
let defeatMessageEnding = "time";
let userName;


/* START THE GAME */

function startGame() {
  let userPlay = prompt("Do you want to play?", "yes or no");
  if (userPlay.toLowerCase() === "yes") {
    userName = prompt("Enter your name to start the battle:");
  } else {
    console.log(`Refresh the page and enter your name when you are ready to play`);
  }
  //console.log(userName);
}

//startGame();


/* DAMAGE FUNCTION */

function getDamage() {
  let randomHit = Math.floor(Math.random() * 5 + 1);
  return randomHit;
}

console.log(getDamage());

//   /* START BATTLE SEQUENCE */

//   while (userHealthPoints > 0 && grantHealthPoints > 0 && grantLivesLeft >= 1) {

//     let hitPoints = [1, 2];
//     let randomHitUser = hitPoints[Math.floor(Math.random() * hitPoints.length)];
//     let randomHitGrant = hitPoints[Math.floor(Math.random() * hitPoints.length)];

//     userHealthPoints = userHealthPoints - randomHitUser;
//     grantHealthPoints = grantHealthPoints - randomHitGrant;

//     if (userHealthPoints > 0) {
//       console.log(`${userName} has ${userHealthPoints} health left.`);
//     } else if (userHealthPoints <= 0) {
//       console.log(
//         `
//     You have been dealt a fatal blow.
    
//     Grant WINS!
//     `);
//       break;
//     }

//     if (grantHealthPoints > 0) {
//       console.log(`Grant the Mighty Chicken has ${grantHealthPoints} health left.`);
//     } else if (grantHealthPoints <= 0) {
//       console.log(`Grant has been dealt a fatal blow!`);
//       if (grantLivesLeft >= 1) {
//         grantLivesLeft -= 1;
//         grantHealthPoints = 10;
//         grantDefeatCount += 1;
//         if (grantDefeatCount > 1) {
//           defeatMessageEnding = "times";
//         }
//       }

//       if (grantDefeatCount <= 2) {
//         console.log(
//           `
//         Grant the Mighty Chicken has been defeated ${grantDefeatCount} ${defeatMessageEnding}.
        
//         Grant has come back to life!
//         `
//         );

//       } else if (grantDefeatCount === 3) {
//         console.log(
//           `
//         Grant the Mighty Chicken has been defeated 3 times!!! 
        
//         YOU WIN!
//         `
//         );
//       }
//     }
//   }

