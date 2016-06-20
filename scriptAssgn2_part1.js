/****************************************************
 * ASSIGNMENT 2, PART 2
 * *************************************************/
 
//Step 1
// var userName = prompt("What is your name?");
// alert(userName.length);



//Step 2
// var userName = prompt("What is your name?");
// var pickedNum = prompt("Pick a number");

// while (pickedNum > userName.length) {
//     alert("Pick a smaller number");
//     pickedNum = prompt("Pick a number");
// }
// alert(userName.charAt(pickedNum));



//Step 3
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert("Your name is " + firstName + " " + lastName + ".");



//Step 4
// var text = "The quick brown fox jumped over the lazy dog.";
// alert(text.indexOf("fox"));



//Step 5
// var text = "The quick brown fox jumped over the lazy dog.";
// alert(text.lastIndexOf("fox"));



//Step 6
// var text = "The quick brown fox jumped over the lazy dog";
// var fullName = prompt("What is your full name?");
// alert(text.replace("the lazy dog", fullName));



//Step 7
// var text = "The quick brown fox jumps over the lazy dog";
// var chosenWord = prompt("Pick a word to find in the sentence.");
// while (text.indexOf(chosenWord)<0) {
//     alert("Pick another word");
//     chosenWord = prompt("Pick a word to find in the sentence.");
// }
// alert(text.search(chosenWord));



//Step 8
// var old_string = "The quick brown fox jumps over the lazy dog";
// var new_string = old_string.substr(31,39);
// alert(new_string.toUpperCase());



//Step 9
// var dog = "       THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG       ";
// alert(dog.trim().toLowerCase());



//Step 10
// var dog = "the quick brown fox jumps over the lazy dog";
// alert( dog.charAt(0).toUpperCase() + dog.slice(1));