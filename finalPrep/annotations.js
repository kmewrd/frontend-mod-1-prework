// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear - this line declares a function called buildABear with five parameters
function buildABear(name, age, fur, clothes, specialPower) {
// This line declares a variable with the value of a string. The string is interpolated with the value of name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// This line declares a variable with the value of an array. The array contains two variables: name and age.
  var demographics = [name, age];
// This line declares a variable with the value of a string that is concatenated with another variable.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// This line declares a variable that is assigned to an object
  var builtBear = {
// The key or property name basicInfo is assigned to the value of demographics.
    basicInfo: demographics,
// The key clothes is assigned to clothes (which is a parameter of the function).
    clothes: clothes,
// The key exterior is assigned to fur (also a parameter of the function).
    exterior: fur,
// The key cost is assigned to the value of a number, 49.99.
    cost: 49.99,
// The key sayings is assigned to an array. The array contains the greeting and powerSaying variables as well as a string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// The key isCuddly is assigned to a Boolean value of true.
    isCuddly: true,
  };
// This line, which is contained within the function, stops the execution of the function and returns the value of builtBear.
  return builtBear
}
// The function is called and arguments are passed into the function as strings, numbers, and an array.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// The function is called and arguments are passed into the function as strings, numbers, and an array.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz - this line declares a function called fizzBuzz with three parameters.
function fizzBuzz(num1, num2, range) {
// This line creates a for loop where i is initialized to 0, a condition is set where i is less than or equal to the value of range, and i is incremented (adding 1) at each step.
  for (var i = 0; i <= range; i++) {
// This line declares an if statement where if the remainder of the division of i by num1 is exactly equal to 0 AND the remainder of the division of i by num2 is exactly equal to 0,
    if (i % num1 === 0 && i % num2 === 0) {
// the console will log "fizzbuzz".
      console.log('fizzbuzz');
// If the previous condition evalues to false, this line declares that if the remainder of the division of i by num1 is exactly equal to 0,
    } else if (i % num1 === 0) {
// the console will log fizz.
      console.log('fizz');
// If the previous condition evaluates to false, this line declares that if the remainder of the division of i by num2 is exactly equal to 0,
    } else if (i % num2 === 0) {
// the console will log buzz.
      console.log('buzz');
// If none of the above conditions are met,
    } else {
// the console will log the value of i.
      console.log(i);
    }
  }
}
// This line calls the function and passes the values 3, 5, and 100 into the function as arguments.
fizzBuzz(3, 5, 100);
// This line calls the function and passes the values of 5, 8, and 400 into the function as arguments. There was actually a typo where fizzBuzz was returning not defined because the B wasn't capitalized. I fixed it.
fizzBuzz(5, 8, 400);
