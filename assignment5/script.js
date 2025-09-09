//  =============== {CHAPTER : 5 MATH EXPRESSIONS } ===============

//  ======== { QUESTION : 1 } ========
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Answer :
let sum1 = 8;
let sum2 = 6;
let sum = sum1 + sum2;
console.log(sum);
document.write(`The sum of 8 and 6 is : ${sum}`);


//  ======== { QUESTION : 2 } ========
// Repeat task1 for subtraction, multiplication, division &
// modulus.

// Answer :
// subtraction
let sub1 = 10;
let sub2 = 4;
let sub = sub1 - sub2;
console.log(sub);
document.write(`<br> The subtraction of 10 and 4 is : ${sub}`);

// multiplication
let mul1 = 6;
let mul2 = 4;
let mul = mul1 * mul2;
console.log(mul);
document.write(`<br> The multiplication of 6 and 4 is : ${mul}`);

// division
let div1 = 20;
let div2 = 5;
let div = div1 / div2;
console.log(div);
document.write(`<br> The division of 20 and 5 is : ${div}`);

// modulus
let mod1 = 36;
let mod2 = 5;
let modulus = mod1 % mod2;
console.log(modulus);
document.write(`<br> The modulus of 36 and 5 is : ${modulus}`);

//  ======== { QUESTION : 3 } ========
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
//    after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
//    value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
//    after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
//    after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// Answer :
// a. Declare a variable.
let name;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<br><br> The Value after declaration is: ", name);

// c. Initialize the variable with some number.
let myNum = 5;
console.log(myNum);

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<br> Initial value is: ", myNum);

// e. Increment the variable.
myNum++
console.log(myNum);

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("<br> The Value after Increment is: ", myNum);

// g. Add 7 to the variable.
let add = myNum + 7;
console.log(add);

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("<br> The Value After Addition is: ", add);

// i. Decrement the variable.
add--
console.log(add);

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<br> The Value After Decrement is: ", add);

// k. Show the remainder after dividing the variable’s value by 3.
let divide = add / 3;
console.log(divide);
document.write("<br> After Divide by 3 is: ", divide);

// l. Output : “The remainder is : 0”.
let modulo = add % 3;
console.log(modulo);
document.write("<br> The Remainder is: ", modulo);


//  ======== { QUESTION : 4 } ========
// 4.Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// Answer
let ticketPrice = 600;
let buyingTicket = 5;
let totalPrice = ticketPrice * buyingTicket;
console.log(totalPrice);

document.write(`<br><br> Total cost of buying
  ${buyingTicket} tickets to a movie is ${totalPrice}PKR`);

  //  ======== { QUESTION : 5 } ========
  //   5. Write a script to display multiplication table of any
  //   number in your browser. E.g

// Answer
for(let i = 1; i<=10; i++){

console.log(`4 x ${i} = `, i*4);
document.write(`<br> 4 x ${i} = `, i*4);

}

//  ======== { QUESTION : 6 } ========
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Answer

// a. Store a Celsius temperature into a variable.
let Celsius = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let Faurenheit = (Celsius * 9/5) + 32;
console.log(Faurenheit,"F");
document.write(`<br> 25C is ${Faurenheit}F`);

// c. Now store a Fahrenheit temperature into a variable.
let F = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
let C = (F - 32) * 5/9;
console.log(C,"C");
document.write(`<br><br>70F is ${C}C`);

//  ======== { QUESTION : 7 } ========
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Answer
// a. Price of item 1
let item1 = 650;

// b. Price of item 2
let item2 = 100;

// c. Ordered quantity of item 1
let quantityItem1 = 3;

// d. Ordered Quantity of item 2
let quantityItem2 = 7;

// e. Shipping charges
let shipCharges = 100;

let totalItem1 = item1 * quantityItem1;
let totalItem2 = item2 * quantityItem2;
let totalAmount = totalItem1 + totalItem2 + shipCharges;
console.log(totalAmount);

let cart = document.createElement('h1').innerHTML = "<br><br> ~~~~ Shopping Cart ~~~~ <br>";
console.log(cart);
document.write(cart);

document.write("<br> Price of item 1 is: ",item1);
document.write("<br> Quantity of item 1 is: ",quantityItem1);
document.write("<br> Price of item 2 is: ",item2);
document.write("<br> Quantity of item 2 is: ",quantityItem2);
document.write("<br> Shipping Charging is: ",shipCharges);

document.write("<br><br> Total cost of your order is = ",totalAmount);

//  ======== { QUESTION : 8 } ========
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Answer
//  Heading
let head = document.createElement('h1').innerHTML = "<br><br> ~~~~ Marks Sheet ~~~~ <br>";
console.log(head);
document.write(head);

//  solution
let totalMarks = 980;
let marksObt = 804;
let percentage = marksObt / totalMarks * 100;
console.log(`${percentage}%`);

document.write(`<br>Total Marks : ${totalMarks}.`);
document.write(`<br>Marks Obtained : ${marksObt}.`);
document.write(`<br>Percentage : ${percentage} %`);
// document.writ<br>e(`${percentage}%`);

//  ======== { QUESTION : 9 } ========
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Answer
// Heading
let heading = document.createElement('h1').innerHTML = "<br><br> ~~~~ Currency In PKR ~~~~ <br>";
console.log(heading);
document.write(heading);

// us dollar convert into PKR
let usDollar = 10;
let convertDollar = usDollar * 104.80;
console.log(convertDollar);
document.write("US dollar in PKR :",convertDollar);

// Saudi riyals convert into PKR
let saudiRyals = 25;
let convertRiyals = saudiRyals * 28;
console.log(convertRiyals);
document.write("<br> Saudi Riyals in PKR :", convertRiyals);

let totalCurrency = convertDollar + convertRiyals; 
console.log(totalCurrency);
document.write(`<br> Total Currency is : ${totalCurrency}`);


//  ======== { QUESTION : 10 } ========
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Answer
// a. Add 5
let add1 = 4;
let add2 = 5;
let add12 =  add1 + add2;
console.log(add12);
document.write(`<br> Add 5 = ${add12}`);

// b. Multiply by 10
let multi = add12 * 10;
console.log(multi);
document.write(`<br> Multiply by 10 = ${multi}`);


// c. Divide the result by 2
let divi = multi / 2;
console.log(divi);
document.write(`<br> Divide by 2 = ${divi}`);

//  ======== { QUESTION : 11 } ========
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Answer
// a. Store the current year in a variable.
let currentYear = 2025;
let cY = 2024;
// b. Store their birth year in a variable.
let birthYear = 2004;
let bY = 2002
// c. Calculate their 2 possible ages based on the stored
let age = currentYear - birthYear;
console.log(age);

let aged = cY - bY;
console.log(aged);

//  for browser
// Heading
let ageCal = document.createElement('h1').innerHTML = "<br><br> ~~~~ Age Calculator ~~~~ <br>";
console.log(ageCal);
document.write(ageCal);

document.write(`<br> Current Year : ${currentYear} <br>
   Birth Year : ${birthYear} <br>
    Your age is : ${age}`);

document.write(`<br> They are either ${age} or ${aged} years old.`);

//  ======== { QUESTION : 12 } ========
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Answer

