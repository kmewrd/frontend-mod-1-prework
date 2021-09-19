/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

};

var goldenRetriever = new Dog();
var germanShepherd = new Dog();

console.log(goldenRetriever);
console.log(germanShepherd);

// Prompt 2: Snack
class Snack {

};

var almonds = new Snack();
var grapes = new Snack();

console.log(almonds);
console.log(grapes);

// Prompt 3: Shirt
class Shirt {

};

var blouse = new Shirt();
var tankTop = new Shirt();

console.log(blouse);
console.log(tankTop);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Canine {
  constructor() {
    this.breed = "Whippet";
    this.age = 2;
    this.color = "tan";
  }
}

var smallDog = new Canine();

console.log(smallDog);
// Prompt 2: Snack
class MidnightSnack {
  constructor() {
    this.color = "green";
    this.type = "grapes";
    this.quantity = 20;
  }
}

var mySnack = new MidnightSnack();

console.log(mySnack);
// Prompt 3: Shirt
class TShirt {
  constructor() {
    this.color = "Black";
    this.size = "small";
    this.fit = "unisex";
  }
}

var myShirt = new TShirt();

console.log(myShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class ShelterDog {
  constructor(breed, age, color) {
    this.breed = breed;
    this.age = age;
    this.color = color;
  }
}

var atlas = new ShelterDog("Mastiff", "adult", "black");
var sage = new ShelterDog("Dalmation", "puppy", "black and white");

console.log(atlas);
console.log(sage);
// Prompt 2: Snack
class MorningSnack {
  constructor(color, type, qty) {
    this.color = color;
    this.type = type;
    this.quantity = qty;
  }
}

var tuesdayMorning = new MorningSnack("brown", "almonds", 15);
var thursdayMorning = new MorningSnack("red", "raspberries", 12);

console.log(tuesdayMorning);
console.log(thursdayMorning);
// Prompt 3: Shirt
class Blouse {
  constructor(color, material, size) {
    this.color = color;
    this.material = material;
    this.size = size;
  }
}

var checkeredBlouse = new Blouse("black and white", "silk", "medium");
var floralBlouse = new Blouse("dark blue", "cotton", "small");

console.log(checkeredBlouse);
console.log(floralBlouse);
