
// ========= { CHAPTER : 3 VARIABLES FOR NUMBERS } ===========

//  ======== QUESTION : 1 ========
// Declare a variable called age & assign to it your age. Show
// your age in an alert box.

//  Answer :
let age = 18;
alert(`I am ${age} years old`);

//  ======== QUESTION : 2 ========
// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

//  Answer :
let visiter = 0;
visiter++
alert(`You have visit this webpage ${visiter} times`);

//  ======== QUESTION : 3 ========
// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

//  Answer :
let birthYear = 2006;
document.write("My birth year is ", birthYear);
document.write('<br>');
document.write(" Data type of my declare variable is ",typeof birthYear);

//  ======== QUESTION : 4 =========
// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//  Answer :
// a. Visitor’s name;
let visiterName = "Kiran Syed";

// b. Product title
let productTitle = "Bags";

// c. Quantity i.e. how many products a visitor wants to
// order
let quantity = 6;
document.write('<br>');
document.write(`${visiterName} ordered ${quantity} ${productTitle} on KS Clothing store`);