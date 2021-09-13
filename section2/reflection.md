## Section 2 Reflection

### 1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I feel good about asking questions. I might jump to asking them too soon if there’s someone available who I know can answer it quickly. If there's no one immediately available (a phone call away), I'll usually try to puzzle it out myself first. I think that when learning new ideas, my problem is not knowing what question to ask until I encounter a problem.

### 1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

Were there really no directions for how to run a file in node? I didn't notice! It must have been in Section 1 of the prework, because I don't remember needing to Google it. I liked having different resources. Sometimes the information was phrased in a slightly different way and it helped solidify the concepts for me. I found the video about functions, arguments, and parameters especially useful because I was having a hard time understanding by just reading the text! Having it explained out loud and seeing the changes creating different outputs in real time was super helpful.

### 1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a comparison that evaluates to either true or false. A daily life example if whether or not I've had tea this morning. A more technical example would be if a password I've entered to access an account matches the password on file.

### 1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You can add multiple conditions using `if`, `else`, and `else if`. If a statement evaluates to true, a specific block of code is executed. If the statement evaluates to false, that code block is not run and the program reads the `else` or `else if` statement next, evaluates it, and determines whether it should run the next block of code. This can go on for as many lines as it needs to. Yay iteration!

### 1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

You would use the AND and OR operators to determine whether two conditions are met, or whether one of two conditions are met. The operators are && and ||. You can also use if/else if/else statements to check this *before* running a block of code. Example below.

```JavaScript
//This example is to demonstrate what happens when two conditions are met.
var numberOfDogs = 2
var numberOfCats = 1

console.log("Do you have dogs and cats?");

if (numberOfDogs > 0 && numberOfCats > 0) {
  console.log("Yes!");
} else {
  console.log("No.");
}

//This example is to demonstrate what happens when one of two conditions are met.
var numberOfRats = 0
var numberOfSnakes = 3

console.log("Do you have any rats or snakes?");

if (numberOfRats > 0 || numberOfSnakes > 0) {
  console.log("Yes!");
} else {
  console.log("No.");
}
```

### 1. What questions do you still have about `if` statements and/or functions?

I want to know how you provide arguments for a function outside of code, i.e. if we want the user to provide some sort of input that the function responds to. I'm also curious to see what happens if you have more than 2 conditions to meet, let's say 5 or 8. Do you just use `&&` a bunch of times? Is there a way to clean up or simplify this code?
