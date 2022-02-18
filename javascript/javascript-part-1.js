// --------------------------------------------------------------------

// JAVASCRIPT - PART 1

// --------------------------------------------------------------------

// 1. What is Javascript?
// Javascript is a programming language which makes websites more interactive.

// --------------------------------------------------------------------

// 2. What are three different type of variables?
// ES5
var filmName = "Young Victoria";
console.log(filmName);
// ES6
const releaseYear = 2009;
console.log(releaseYear);
let googleLikes = 0.87;
console.log(googleLikes);

// --------------------------------------------------------------------

// 3. What are the different data types?
// Primitive vs Reference

// Primitive
// String
const petName = "Fluffy";
console.log(petName);
// Integer
const age = 2;
console.log(age);
// Float
const weightKg = 5.7;
console.log(weightKg);
// Boolean
const hatesBaths = true;
console.log(hatesBaths);
// Null
const breed = null;
console.log(breed);
// Undefined
let color;
// let color = undefined;
console.log(color)
// const color;
// Uncaught SyntaxError: Missing initializer in const declaration

// Reference
// Objects
// Arrays
// Functions

// Arrays
// Declare an array
const chocolateBrands = ["cadburys", "mars"];
console.log(chocolateBrands);
// Get an item from the array using index
console.log(chocolateBrands[1])
// Add item to the end of array
chocolateBrands.push("nestle");
console.log(chocolateBrands);
// Remove the first item
chocolateBrands.shift();
console.log(chocolateBrands);
// Insert in the middle of array
chocolateBrands.splice(1, 0, "lindor");
console.log(chocolateBrands);

// --------------------------------------------------------------------

// 4. How do you join variables?
// Concatenation
const myFavourite = "My favourite chocolate brand is " + chocolateBrands[0];
console.log(myFavourite);
// Interpolation
const myLeastFavourite = `My least favourite is ${chocolateBrands[1]}`;
console.log(myLeastFavourite);

// --------------------------------------------------------------------

// 5. How do you create a conditional statement?
// Minimum age to buy alcohol in the UK is 18
const ageAlert = alert("How old are you?");

let ageAnswer = prompt("Enter age");

if (ageAnswer < 18) {
    alert("Sorry you cannot buy alcohol");
} else {
    alert("You can buy alcohol");
}

// Improved answer
const ageAlert = alert("How old are you?");

let ageAnswer = prompt("Enter age");

if (ageAnswer <= 0) {
    alert("Incorrect entry");
} else if (ageAnswer < 18) {
    alert("Sorry you cannot buy alcohol");
} else if (ageAnswer >= 18) {
    alert("You can buy alcohol");
} else {
    alert("Incorrect entry");
}
