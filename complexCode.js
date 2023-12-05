/*
 * Filename: complexCode.js
 * Content: A complex JavaScript code demonstrating various advanced concepts and techniques.
 */

(function() {
  "use strict";

  // Class definition
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getDetails() {
      return `${this.name} is ${this.age} year(s) old.`;
    }

    static compareAges(a, b) {
      return a.age - b.age;
    }
  }

  // Function definition
  function displayWelcome() {
    console.log("Welcome to the complexCode application!");
  }

  displayWelcome();

  // Arrays and higher-order functions
  const people = [
    new Person("Alice", 25),
    new Person("Bob", 30),
    new Person("Charlie", 21),
  ];

  const sortedPeople = people.sort(Person.compareAges);
  console.log("Sorted People (based on age):", sortedPeople.map(p => p.name));

  // Promises and async/await
  function simulateAsyncOperation(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

  async function processAsyncData() {
    console.log("Starting async data processing...");

    const result1 = await simulateAsyncOperation("Processed Data 1", 2000);
    console.log("Received async result 1:", result1);

    const result2 = await simulateAsyncOperation("Processed Data 2", 3000);
    console.log("Received async result 2:", result2);

    console.log("Async data processing complete!");
  }

  processAsyncData();

  // Modules and imports
  import { square, cube } from "./mathUtils.js";
  console.log("Square of 4:", square(4));
  console.log("Cube of 3:", cube(3));

  // Prototypal inheritance
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };

  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.bark = function() {
    console.log(`Woof! I'm a ${this.breed} named ${this.name}.`);
  };

  const dog = new Dog("Max", "Golden Retriever");
  dog.sayHello();
  dog.bark();

  // Error handling
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.error("Error caught:", error.message);
  }

  // Regular Expressions
  const emailAddress = "test@example.com";
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  console.log("Is the email address valid?", emailRegex.test(emailAddress));

  // ... (additional code exceeding 200 lines) ...

})();
