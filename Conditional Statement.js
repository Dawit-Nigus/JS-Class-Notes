// Use if to specify a block of code to be executed, 
// if a specified condition is true.
// Use else to specify a block of code to be executed, 
// if the same condition is false
// Use else if to specify a new condition to test, 
// if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

//The if else Statement
time = 20;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

//The Switch Statement
switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }