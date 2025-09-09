// ========= { CHAPTER : 4 VARIABLE NAMES: LEGAL & ILLEGAL} ===========

//  ======== QUESTION : 1 ========
//. Declare 3 variables in one statement

//  Answer :
//  1st Method :
let num;
var num1;
var num2; // const doesnot declare & reassign

//  2nd Method :
let birds = "Sparrow";
birds = "Pigeon";
birds = "Eagle";
console.log(birds);

// 3rd Method :
let name = "Kiran";
let goals = "want to be a best";
let currentStatus = "Developer";
console.log(`${name} ${goals} ${currentStatus}`);

//  ======== QUESTION : 2 ========
// Declare 5 legal & 5 illegal variable names.

//  Answer :
//  LEGAL VARIABLES :
//  a variables can start with :
let myName; // camelCase
let $name; // dollar sign
let my_name; // Snake Case
let _my_name; // Snake Case
let MyName; // Pascal Case
let name2; // after variable name you can use a number

//  ILLEGAL VARIABLES :
//  a variables can not start with :
let my Name;    //  space not allowed
let function   // variables name can not start with reserved keyword
let my-name   // not allowed with hyphen
let @my_Name; // not allowed with at the rate
let #my_Name; // not allowed with hash
let 2name;    // variables name can not start with number

//  ======== QUESTION : 3 ========

// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

//  Answer :
// a) A heading stating “Rules for naming JS variables”
let head = (document.getElementById("head").innerHTML =
  "Rules for naming JS variables");

// b) Variable names can only contain ______, ______,
let camelCase = "kiranSyed"; // 1st word written in small letter but 2nd word letter written in capital
let snake_case = "kiran_syed"; // written in small letter & separate each word by underscore
let PascalCase = "KiranSyed"; // both word letter written in capital letter
let $dollar = "$kiran_syed";

let para = document.getElementById("para");
para.innerHTML = `Variable names can only contain <br><br>
camelCase: ${camelCase},<br><br>
snakeCase: ${snake_case},<br><br>
Pascalcase: ${PascalCase},<br><br>
$dollar: ${$dollar}`;

// c) Variables must begin with a ______, ______ or _____.
let smallLetter = "kiranSyed"; // 1st word written in small letter but 2nd word letter written in capital
let under_score = "_kiran_syed"; // written in small letter & separate each word by underscore
let dollar = "$kiran_syed";

let para2 = document.getElementById("para2");
para2.innerHTML = `Variable name must begin with a <br><br>
Small Letter : ${smallLetter},<br><br>
under_score: ${under_score}, <br><br>
$DollarSign: ${dollar}`;

// d) Variable names are case _________
let sensitive = "Sensitive";
let caseSensative = document.getElementById("case");
caseSensative.innerHTML = `Variable names are case ${sensitive}`;

// e) Variable names should not be JS _________
// let keyWords = "Variable names should not be JS"
let key = "keywords";
let keywords = document.getElementById("key");
keywords.innerHTML = key;
