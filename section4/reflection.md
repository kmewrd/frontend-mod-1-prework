## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

Not gonna lie, I wasn't very good at sticking to it. I need to buy a timer to hold myself accountable to breaks. I also found myself working longer than necessary because I would force myself to work while tired. (Working full time while trying to finish Mod 0 and Mod 1 Prework.)

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I thought it went well. I did focus a little better than before, unless I was working while tired.

1. What is an Object, and how is it different from an Array in Javascript?

An object is a way of storing complex information. It contains properties in key-value pairs. An array is a way of storing a list of items.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
  ⋅⋅* Array. This is a list of names.
  * List of states and their capitals
  ⋅⋅* Object. A second, key piece of information is being tied to each state. It should be assigned as a property `capital = "Austin"`
  * List of things to pack for vacation
  ⋅⋅* Array. This is a simple list of singular items.
  * Names of all the Instagram accounts I follow
  ⋅⋅* Array. See above; simple list.
  * List of student names and their cohort
  ⋅⋅* Object. A property would tie the second piece of information, the cohort, to each student.
  * Ingredients and amount of each ingredient to bake a cake
  ⋅⋅* Object. A property would tie an amount to each ingredient.
  * All my favorite restaurants
  ⋅⋅* Array. This is a simple list.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

I use a climbing app called Mountain Project. It lists and displays different climbing routes based on location (by state). For each climb, it also stores the name, grade (difficulty), and climbing area where it's found. Here are some examples that I was looking at earlier today, translated into code.

```JavaScript
class Climb {
  constructor(name, grade, area, crag, state, check) {
    this.name = name;
    this.grade = grade;
    this.area = area;
    this.crag = crag;
    this.state = state;
    this.checked = false;
  }
  addCheck() {
    this.checked = true;
  }
}
var topClimb = new Climb("Lowdown", "V4", "Mulletino Boulder", "Horse Pens 40", "Alabama");
var climbToDo = new Climb("Better Than Starbucks", "V6", "Warm Up Area", "Joe's Valley", "Utah");

console.log(topClimb);
console.log(climbToDo);
climbToDo.addCheck();
console.log(climbToDo);
```

1. What questions do you still have about classes and/or Objects?

What are some good YouTube videos to watch that break down classes and objects? I found myself having a little difficulty with these concepts. This next one isn't a question, but I'm also having trouble with using technical language to describe what I'm doing with my code and I'd like some practice with that. Would love some suggestions!
