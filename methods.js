// Object Methods
const person = {
    firstName: "Dawit",
    lastName: "Nigus",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   In JavaScript, the this keyword refers to an object.
//   Which object depends on how this is being invoked (used or called). 
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


//Accessing Object Methods
objectName.methodName();

//Using Built-In Methods
let message = "Hello world!";
let x = message.toUpperCase();

person.name = function () {
      return (this.firstName + " " + this.lastName).toUpperCase();
    };

//Using Object.values()
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person); 
  