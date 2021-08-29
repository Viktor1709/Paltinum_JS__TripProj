"use strict"
//console.log("Hello Tom");

//1 Make 3 commits 
// 2 generate a random location


// function randomSelection(newArray) {
//     let randomArray = Math.floor(Math.random() * randomArray.length);
//     return (newArray);

// }



// let arrayLocation = ["Paris", "the garage", "downtown", "Guam"];
// let randDest = randomSelection(arrayLocation)
// console.log(randDest);


// let randomLoc = arrayLocation[Math.floor(Math.random() * arrayLocation.length)];
//console.log(randomLoc);



let arrayLocation = ["Paris", "the garage", "downtown", "Guam"];
let randDest = arrayLocation[Math.random() * arrayLocation.length | 0];
console.log(randDest);

// let mySelection = randomSelection(arrayLocation);
// console.log(mySelection);


// 3 generate a random restaurant
let arrayRestaurant = ["Capital Lunch",
    "Lucy's",
    "Tavern and Grill",
    "Franklin Fish Co."];
let randRestaurant = arrayRestaurant[Math.random() * arrayRestaurant.length | 0];
console.log(randRestaurant);
// for (let i = 0; i < arrayRestaurant.length; i++) {
//     let userInputRest = prompt("Yes or No");

//     let userInputChoice = true;
//     let myUserChoice = "";

//     while (userInputChoice) {
//         myUserChoice = prompt("Yes or No");
//         if (myUserChoice === "Yes") {
//             tripComplete.push(randRestaurant);
//             userInputPassword = false;
//         } else {
//             console.log(randRestaurant);
//         }
//     }
// }
//     if (userInputRest == "No") {
//         console.log(randRestaurant);
//     }
//     else if (userInputRest == "Yes") {
//         tripComplete.push(randRestaurant);
//     }
// }

// 4 generate a random mode of transportation
let arrayTransportation = ["Uber",
    "E-Bikes",
    "Rollerblades",
    "boat"];
let randModeOfTrans = arrayTransportation[Math.random() * arrayTransportation.length | 0];
console.log(randModeOfTrans);
// // 5 generate a random form of entertainment
let arrayEntertain = ["Opera",
    "SkiBall",
    "Zumba",
    "Beer fest"];
let randEntertain = arrayEntertain[Math.random() * arrayEntertain.length | 0];
console.log(randEntertain);

// 6 randomly re-select a destination, restaurant, 
// mode of transportation, and/or form of entertainment 
// if I dont like them


// for (let i = 0; i < arrayRestaurant.length; i++) {
//     let userInputRest = prompt("Yes or No");

//     let userInputChoice = true;
//     let myUserChoice = "";

//     while (userInputChoice) {
//         myUserChoice = prompt("Yes or No");
//         if (myUserChoice === "Yes") {
//             tripComplete.push(randRestaurant);
//             userInputPassword = false;
//         } else {
//             console.log(randRestaurant);
//         }
//     }
// }
//     if (userInputRest == "No") {
//         console.log(randRestaurant);
//     }
//     else if (userInputRest == "Yes") {
//         tripComplete.push(randRestaurant);
//     }
// }

//7 confirm trip as "complete" once selections are made
let tripComplete = []

//display completed trip selection
//console.log(tripComplete)
//keep functions to Single Responsibility

