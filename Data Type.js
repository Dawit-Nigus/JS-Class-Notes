// JavaScript variables can hold different data types: 
// numbers, strings, objects and more:

let length = 16;                               // Number
let lastName = "NIgus";                      // String
let x = {firstName:"Dawit", lastName:"Nigus"};    // Object 


// Note
// When adding a number and a string, 
// JavaScript will treat the number as a string.
let y = "16" + "Volvo"; 

//JavaScript evaluates expressions from left to right. 
// Different sequences can produce different results:
let u = 16 + 4 + "Volvo";


// JavaScript has dynamic types. 
// This means that the same variable can be used to hold different data types:

let z;           // Now x is undefined
z = 5;           // Now x is a Number
z = "John";      // Now x is a String 

//JavaScript Strings
let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes 

//JavaScript Numbers
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals 
let y2 = 123e5;      // 12300000
let z2 = 123e-5;     // 0.00123 

//JavaScript Booleans
let a = 5;
let b = 5;
let c = 6;
(x == y)       // Returns true
(x == z)       // Returns false 

//JavaScript Arrays
const cars = ["Saab", "Volvo", "BMW"]; 

//JavaScript Objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//The typeof Operator
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string" 
typeof 0              // Returns "number"
typeof 314            // Returns "number"

//Undefined
let car;
