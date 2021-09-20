// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Spongebob Mightypants"
var specialAbility = "jumping roundhouse kick"
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Who lives in a pineapple under the sea? " + heroName + " !"
var catchphrase = `Saving the city one ${specialAbility} at a time.`
console.log(catchphrase);
// Declare two variables - power AND energy - set to integers
var power = 12
var energy = 9
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500
var fullEnergy =  energy + 150
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;
// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Sheldon J. Plankton", "Man Ray", "Dirty Bubble"];
var sidekicks = ["Mermaid Man", "Barnacle Boy", "Gary the Snail"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("DoodleBob");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >= 10) {
console.log(saveTheDay);
  } else{
    console.log("Meh. Hard pass.");
  }
}
var dangerLevel = 55;
var saveTheDay = "We did it!";
var badExcuse = "I've got a bad feeling about this.";

assessSituation(15, saveTheDay, badExcuse);

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';
// assessSituation(99, announcement, excuse) // > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Cthulhu",
  smell: "a thousand open graves",
  weight: 4000,
  citiesDestroyed: ["Washington, DC", "Boston, MA", "Seattle, WA"],
  luckyNumbers: [13, 17, 22],
  address: {
    number: 890,
    street: "Pleasant View Dr",
    state: "Michigan",
    zip: 38104,
  }
}
// console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(powerIncrease) {
    this.powerLevel = this.powerLevel + powerIncrease;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var theDeep = new SuperHero("The Deep", "diving", 40);
var starlight = new SuperHero("Starlight", "energy blast", 25);

console.log(theDeep);
theDeep.sayName();
theDeep.maximizeEnergy();
theDeep.gainPower(100);
console.log(theDeep);
console.log(starlight);

// Reflection
// What parts were most difficult about this exerise?
// I couldn't remember how to interpolate and had to Google it. I was using quotes instead of back ticks. Overall, I think I relied on my notes too heavily.
// What parts felt most comfortable to you?
// Declaring variables, creating classes, printing to the console.
// What skills do you need to continue to practice before starting Mod 1?
// Declaring and calling functions. I kept forgetting the correct number of parentheses and curly brackets. I also tried to call the function before the var and not after the var with a period.
