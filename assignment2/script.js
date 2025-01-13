
// ============ { CHAPTER : 2, VARIABLES FOR STRING } ================

// QUESTION : 1 
// Declare a variable called username.

// ANSWER :
let userName;

// QUESTION : 2 
// Declare a variable called myName & assign to it a string
// that represents your Full Name.

// ANSWER :
let myName = "Kiran Shahid";
console.log(myName);

// QUESTION : 3 
//    Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// ANSWER :
let message;
message = "Hello World";
alert(`${message}`);

// QUESTION : 4
// Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// ANSWER :
let name = "Kiran Shahid";
alert(`${name}`);

let age = 18;
alert(`${age}`);

let course = "Certified Mobile Application Development";
alert(`${course}`);

// QUESTION : 5
// Write a script to display the following alert using one JS variable:

// ANSWER :
let food = "Pizza";
let fastFood = "";

for(let i = food.length; i > 0; i--){

fastFood += food.slice(0,i) + "\n";

}
alert(fastFood);

// QUESTION : 6
// Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// ANSWER :
let email = "syed@gmail.com";
alert(`My Email Address is : ${email}`);

// QUESTION : 7
// Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// ANSWER :
let book = "A smarter way to learn JavaScript."
alert(`I'm trying to learn from the Book "${book}"`);

// QUESTION : 8
// Write a script to display this in browser through JS

// ANSWER :
let script = "Yah! I can write HTML content through Javascript";
document.write(script);

// QUESTION : 9
// Write a script to display this in browser through JS

// ANSWER :
let place = "i like sawat";
alert(`${place}`);

document.write("\n");
document.write(place);