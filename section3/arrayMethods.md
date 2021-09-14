## Array Methods

An array method is a function in JavaScript that you can apply to an array. Here are a few common array methods below.

### `pop`

This method removes the **last** element from an array and returns that element. This will change the length of your array. For example, if you had an array containing five elements, it would remove the fifth element and you would be left with four elements. Example below.

```JavaScript
var plants = ["monstera", "pothos", "scindapsus", "aloe", "sansevieria"];

console.log(plants.pop());
// expected output: "sansevieria"

console.log(plants);
// expected output: ["monstera", "pothos", "scindapsus", "aloe", "sansevieria"]

plants.pop();

console.log(plants);
//expected output: ["monstera", "pothos", "scindapsus", "aloe"]
```

### `push`

This method adds one or more elements to the **end** of an array and returns the new length of the array with the element added to it. Example below.

```JavaScript
var animals = ["snakes", "cats", "bats"];

var count = animals.push("lizards");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: ["snakes", "cats", "bats", "lizards"]

animals.push("rats", "dogs", "ravens");
console.log(animals);
// expected output: ["snakes", "cats", "bats", "lizards", "rats", "dogs", "ravens"]]
```

### `shift`

The `shift()` method is similar to `pop()`. It removes the **first** element from an array and returns that element. This will change the length of the array. For example, if you had an array containing three elements, it would remove the first element and you would be left with two remaining elements. Example below.

```JavaScript
var myArray = [4, 5, 6];

var firstElement = myArray.shift();

console.log(myArray);
// expected output: [5, 6]

console.log(firstElement);
// expected output: 4
```

### `unshift`

The `unshift()` method is similar to `push()`. It adds one or more elements to the **beginning** of an array and returns the new length of the array, counting the newly added element. Example below.

```JavaScript
var myArray [8, 9, 10]

console.log(myArray.unshift(11, 12));
// expected output: 5

console.log(myArray);
// expected output: [11, 12, 8, 9, 10]
```
