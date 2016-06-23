/****************************************************
 * ASSIGNMENT 2, PART 2
 * *************************************************/

//Part 1 #1
// var x = -15;
// console.log(Math.abs(x));



//Part 1 #2
// var mathSucks = 43.9687;
// console.log(Math.ceil(mathSucks));



//Part 1 #3
// var mathStillSucks = 23.2365;
// console.log(Math.floor(mathStillSucks));



//Part 1 #4
// var userNumber = prompt("Pick 5 numbers and separate them using commas");
// var numArray = userNumber.split(",");
// var x = Math.max.apply(Math, numArray);
// var y = Math.min.apply(Math, numArray);
// console.log("Max: " + x + " / " + "Min: " + y);



//Part 1 #5
// var userNumber = prompt("Pick a number.");
// console.log(Math.sqrt(userNumber));



//Part 2 #6
// var today = new Date();
// console.log(today.toDateString());



// //Part 2 #7 
// var currentDate = new Date();
//     var daysMonth = currentDate.getMonth();
//     if (daysMonth == 0 || daysMonth == 2 || daysMonth == 4 || daysMonth == 6 || daysMonth == 7 || daysMonth == 9 || daysMonth == 11) {
//         console.log("There are 31 days in the current month.");
//     } else if (daysMonth == 1) {
//         console.log("There are 28 or 29 days in the current month.");
//     } else {
//         console.log("There are 30 days in the current month.");
// }



// //Part 2 #8
// var d = new Date();
// var thisMonth = d.getMonth();
// switch (thisMonth){
//     case 0:
//         console.log("January");
//         break;
//     case 1:
//         console.log("February");
//         break;
//     case 2:
//         console.log("March");
//         break;
//     case 3:
//         console.log("April");
//         break;
//     case 4:
//         console.log("May");
//         break;
//     case 5:
//         console.log("June");
//         break;
//     case 6:
//         console.log("July");
//         break;
//     case 7:
//         console.log("August");
//         break;
//     case 8:
//         console.log("September");
//         break;
//     case 9:
//         console.log("November");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("December");
//         break;
// }



// //Part 2 #9
// var today = new Date();
// if (today.getDay() == 0 || today.getDay == 6){
//     console.log("Yes, it's a weekend.");
// } else {
//     console.log("No. It's a weekday.");
// }



// //Part 2 #10
// var today = new Date();
// var todayDay = today.getDay();
// var yesterday = todayDay - 1;
// switch (yesterday){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }



// //Part 2 #11
// var today = new Date();
// if (today.getDay() == 0 || today.getDay() == 6){
//         switch (today.getDay()){
//             case 0 : 
//                 console.log("S");
//                 break;
//             case 6:
//                 console.log("S");
//                 break;
//         }
// } else {
//         switch (today.getDay()){
//             case 1:
//                 console.log("M");
//                 break;
//             case 2:
//                 console.log("T");
//                 break;
//             case 3:
//                 console.log("W");
//                 break;
//             case 4:
//                 console.log("T");
//                 break;
//             case 5:
//                 console.log("F");
//                 break;
//         }
// }



//Part 3 #12
// var x = prompt("Enter a number");
// var y = prompt("Enter another number");
// console.log(Math.max(x,y));



//Part 3 #13
// var students = ["Urusla","Paul","Henry","Tabitha","Lucy"];
// var marks =[80,77,88,95,68];
// var grade = "test";

// for (var x=0;x<5;x++){
//     switch(true){
//         case marks[x] < 60:
//          grade = "F";
//          break;
//         case marks[x] <70:
//          grade = "D";
//          break;
//         case marks[x]<80:
//          grade = "C";
//          break;
//         case marks[x]<90:
//          grade = "B";
//          break;
//         case marks[x]<100:
//          grade = "A";
//          break;
//     }
//     console.log(students[x]+"  "+grade);
// }



//Part 3 #14
// for (var x=1;x<16;x++){
//     if (x%2==0){
//         console.log(x+ "  even");
//     } else {
//         console.log(x+ "  odd");
//     }
// }



//Part 3 #15
// for (var x=1;x<101;x++){
//     if (x%3==0 && x%5==0){
//         console.log("FizzBuzz");
//     } else if (x%5==0){
//         console.log("Buzz");
//     } else if (x%3==0){
//         console.log("Fizz");
//     } else {
//         console.log(x)
//     }
// }



//Part 4 Hitchhiker's Guide Game
//#1
// var ready = confirm("Are you ready to play?");
// if(ready == true){
//     alert("Awesome! Our hero is waiting!");
// } else {
//     alert("Too bad. We're going to play anyway because our hero desperately needs your help!");
// };


// //#2
//  alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall...");

// //Part 4 #3 and #4
// var direction = prompt("Which direction would you like to head(please enter forward, left, or right).");
// switch (direction) {
//     case 'forward':
//         alert("You walk about 100 yards and safely make your way out of the cave.");
//         break;
//     case 'left':
//         alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//         break;
//     case 'right':
//         alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//         break;
//     default:
//         alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser.");
// };

// //#5 and #6
// var userResponse = prompt ("Please rate this game between 1 and 10");

// if (userResponse <1 || userResponse > 10){
//     userResponse = 10;
// };
// if (userResponse >= 6 && userResponse <= 10) {
//     alert("Thank you, we will continue to make improvements to the game!");
//     } else {
//     alert("Whatever. You weren't very good at this game anyway!");
// };
 
 
 
 // Part 5 -- The "Coin Flip" Game
//  //#1
//  var coinFlip = Math.random();
//  //#2
//  var choice = prompt("Heads or Tails?");
// //#3
// if (coinFlip < 0.5) {
//     var heads = "Heads";
// } else if (coinFlip > 0.5){
//     var tails = "Tails";
// };
// if (heads){
//     if (choice == "Heads"){
//     alert("The flip was heads and you chose heads...you win!");
//     } else if (choice != "Heads") {
//     alert("The flip was heads but you chose tails...you lose!");
//     }
// } else if (tails) {
//     if (choice != "Tails"){
//     alert("The flip was tails but you chose heads...you lose!");
//     } 
//     else if (choice == "Tails"){
//         alert("The flip was tails and you chose tails...you win!");
//     };
// };
// //#8 --> Reworked to for true and false
// var coinFlip = Math.random();
// var choice = prompt("Heads or Tails?");

// if (coinFlip < 0.5) {
//     Math.floor();
//     var heads = true;
// } else if (coinFlip > 0.5){
//     Math.ceil();
//     var tails = true;
// };

// if (heads){
//     if (choice == "Heads"){
//     alert("The flip was heads and you chose heads...you win!");
//     } else if (choice != "Heads") {
//     alert("The flip was heads but you chose tails...you lose!");
//     }
// } else if (tails) {
//     if (choice != "Tails"){
//     alert("The flip was tails but you chose heads...you lose!");
//     } 
//     else if (choice == "Tails"){
//         alert("The flip was tails and you chose tails...you win!");
//     };
// };



// //Part 6 The "Coin Flip" Game Redux
// //#1
// var coinFlip;
// //#2
// for (var x = 0; x<10;x++){
//     //#3
//     coinFlip = Math.random();
//     coinFlip = Math.round(coinFlip);
//         //#4
//     if (coinFlip == 0){
//         console.log("Heads");
//     } else if (coinFlip == 1){
//         console.log("Tails");
//     };
// };



// //Part 7 -- The "Coin Flip Streak" Game
// //#1
// var coinFlip;
// //#2
// do {
//     //#3
//     coinFlip = Math.random();
//     coinFlip = Math.round(coinFlip);
//     //#4
//     if (coinFlip == 0){
//         console.log("Heads");
//     } else if (coinFlip == 1){
//         console.log("Tails");
//         break; //#5
//     }
// } while(coinFlip == 0);
    


//Part 8 -- Looping a Triangle
// for (var y=1;y<8;y++){
//     for (var x=1;x<=y;x++){
//         console.log("#");
//     }
//     console.log("\n");
// }



//Part 9 -- Odd or Even?
// for (var x=0;x<16;x++){
//     if (x%2==0){
//         console.log(x+ " is even");
//     } else {
//         console.log(x+ " is odd");
//     }
// }