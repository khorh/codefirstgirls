// --------------------------------------------------------------------

// JAVASCRIPT - PART 2

// --------------------------------------------------------------------

// FOR loop
for (j=0; j<5; j++) {
    console.log("The number is " + j);
}

// Exercise 5.1
// Counting up - Print out all lotto numbers from 1-59
for (i=1; i<60; i++) {
    console.log(i);
}

// Counting down - Print out count down to New Years Day
for (i=10; i>=0; i--) {
    console.log(i);
}

// Addition, subtraction, multiplication and division
// Addition
for (i=0; i<=5; i++) {
    console.log(i+10);
}
// Subtraction
for (i=0; i<=5; i++) {
    console.log(i-10);
}
// Multiplication
for (i=0; i<=5; i++) {
    console.log(i*2);
}
// Division
for (i=0; i<=5; i++) {
    console.log(i/2);
}

// --------------------------------------------------------------------

// Functions

// Example
function product(a, b) {
    return a * b;
}
product(8, 2);

// --------------------------------------------------------------------

// Exercise 5.2 - Functions
function myName() {
    return prompt("what is your name?")
}
 
var name = myName();
 
console.log(name)

// --------------------------------------------------------------------

// Exercise 5.3
// Functions with parameters/arguments
function movieDetails(title, released) {
    return title + " was released on " + released;
}

const movie1 = movieDetails("Eat Love Pray", 2010);
console.log(movie1);

const movie2 = movieDetails("Marry Me", 2022);
console.log(movie2);

// --------------------------------------------------------------------

// Function with parameters/arguments and logic
function verifyDiscount(name, age) {
    if(age < 18) {
        return "Child discount applied for " + name;
    } else {
        return name + " is not eligible for discount";
    };
};

const person1 = verifyDiscount("Kitty", 10);
console.log(person1);

const person2 = verifyDiscount("Betty,", 40);
console.log(person2);


// Exercise 5.4
function shoppingCart (item, cost, balance) {
    if (cost < balance) {
        return "I can afford the " + item;
    } else {
        return "I am going to put down the " + item;
    };
};

const item1 = shoppingCart("H&M dress", 30, 100);
console.log(item1);
const item2 = shoppingCart("Prada bag", 1000, 200);
console.log(item2);

// --------------------------------------------------------------------

// Function Scope
// Global
const employer = "beazley";

function programs(type) {
    return employer + " employs " + type;
}

const type = programs("cfg students");
console.log(type);

// Local
function programs(type) {
    const employer = "beazley";
    return employer + " employs " + type;
}

function products(industry) {
    return employer + " has products in " + industry
}

const industry = products("property");
console.log(industry);
// Uncaught ReferenceError: employer is not defined


// --------------------------------------------------------------------

// Exercise 5.5 - More functions

// 5.5.1 Write a function that reverses a string

function reverseString(myString) {
    // a. Split into each character ['f', 'r', 'i', 'e', 'n', 'd', 's']
    const splitString = myString.split("");

    // b. Reverse the array of items ['s', 'd', 'n', 'e', 'i', 'r', 'f']
    const reverseArray = splitString.reverse();
    
    // c. Join the items in the array sdneirf
    const joinArray = reverseArray.join("");

    // d. Output
    return joinArray;
};

reverseString("friends");

// When you feel more confident...
function reverseString(myString) {
    return myString.split("").reverse().join("");
};

reverseString("friends");

// Resource for string split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Resource for array reverse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// Resource for array join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


// 5.5.2 Write a function that sorts a string in alphabetical order
function azString(myString2) {
    return myString2.split("").sort().join("");
};

azString("family")

// Resource for array sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// 5.5.3 Write a function that loops over an array or Strings and capitalises each one before returning the array
// .toUpperCase
const myString3 = "Life is like a box of chocolates";
console.log(myString3.toUpperCase());

// With a function using a FOR loop
function titleCase(myString3) {
    var words = myString3.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    return words.join(" ");
}

titleCase("Life is like a box of chocolates");

// With function with MAP
const myString3 = "Life is like a box of chocolates";

function capitaliseEachWord(myString3) {
  return myString3.charAt(0).toUpperCase() + myString3.slice(1);
}

const caps = myString3.split(" ").map(capitaliseEachWord).join(" ");
caps;

// Resource for string toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// Resource for string charAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt 
// Resouece for string substring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// Resource for string slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Resource for array map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Resource for string length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length


// 5.5.4 Write a function that console logs the data type of the arugments
// typeof
const myString4 = "I am a string";
console.log(typeof myString4);

// With a function
function dataType(myString4) {
    return(typeof myString4);
}

dataType("I am a string");
dataType(1000);
dataType(true);

// Resource for typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


// 5.5.5 Write a function that returns the length of the longest word in a sentence
function lengthOfLongestWord(sentence) {
    var sentenceSplit = sentence.split(" ");
    var longestWord = 0;
    for(var i = 0; i < sentenceSplit.length; i++){
        if(sentenceSplit[i].length > longestWord){
        longestWord = sentenceSplit[i].length;
        }
    }
    return longestWord;
}
lengthOfLongestWord("Just keep swimming - Finding Nemo");
