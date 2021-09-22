// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare a function called buildABear with 5 parameters.
function buildABear(name, age, fur, clothes, specialPower) {
// Declare a variable called greeting that is assigned to a string interpolated with the variable name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Declare a variable called demographics that is assigned to an array. The array contains the two parameters name and age.
  var demographics = [name, age];
// Declare a variable called powerSaying that is assigned to a string concatenated with the variable specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Declare a variable called builtBear that is assigned to an object.
  var builtBear = {
// The key or property name basicInfo is assigned to the variable demographics.
    basicInfo: demographics,
// The key clothes is assigned to the parameter clothes.
    clothes: clothes,
// The key exterior is assigned to the parameter fur.
    exterior: fur,
// The key cost is assigned to the number 49.99.
    cost: 49.99,
// The key sayings is assigned to an array. The array contains the variables greeting and powerSaying, as well as a string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// The key isCuddly is assigned to a Boolean value of true.
    isCuddly: true,
  };
// When the function is called, return the value of builtBear.
  return builtBear
}
// Call the buildABear function and pass arguments into the function as strings, a number, and an array.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call the buildABear function and pass arguments into the function as strings, a number, and an array.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declare a function called fizzBuzz with 3 parameters.
function fizzBuzz(num1, num2, range) {
// Declare a for loop where i is initialized to 0, the condition i is less than or equal to the value of range, and i is incremented.
  for (var i = 0; i <= range; i++) {
// Declare an if statement where if the remainder of the division of i by num1 is exactly equal to 0 AND the remainder of the division of i by num2 is exactly equal to 0,
    if (i % num1 === 0 && i % num2 === 0) {
// log "fizzbuzz" to the console.
      console.log('fizzbuzz');
// If false, declare that if the remainder of the division of i by num1 is exactly equal to 0,
    } else if (i % num1 === 0) {
// log "fizz" to the console.
      console.log('fizz');
// If false, declare that if the remainder of the division of i by num2 is exactly equal to 0,
    } else if (i % num2 === 0) {
// log "buzz" to the console.
      console.log('buzz');
// If none of the above conditions are met,
    } else {
// log the value of i to the console.
      console.log(i);
    }
  }
}
// Call the function and pass the arguments 3, 5, and 100.
fizzBuzz(3, 5, 100);
// Call the function and pass the arguments 5, 8, and 400. There was actually a typo where fizzBuzz was returning not defined because the B wasn't capitalized. I fixed it.
fizzBuzz(5, 8, 400);
