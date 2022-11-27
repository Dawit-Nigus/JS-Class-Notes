// JavaScript Loops

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

//For Loop
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }


//For In
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// ForEach()
const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value) {
  txt += value;
}


//While loop
while (i < 10) {
    text += "The number is " + i;
    i++;
  }

// Do While
do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10); 