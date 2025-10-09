//set-1

1. What is difference between push() and unshift()? provide an example
push() adds an element to the end of an array, while unshift() adds an element to the beginning of an array.
```js
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]
```
2. How does splice() work when adding and removing elements at the same time? Provide an example.
splice() changes an array by removing or adding elements at specific indexes.
```js
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 6, 7); // [1, 6, 7, 4, 5]
```
3. How can you use forEach() to print each character in a string? Provide an example.
```js
const str = "Hello";
str.split("").forEach(char => console.log(char));
// H
// e
// l
// l
// o
```
4. Explain how map() work and give an example of multiplying each number in an array by 2.
map() creates a new array by applying a function to each element of an existing array.
```js
const arr = [1, 2, 3];
const newArr = arr.map(num => num * 2); // [2, 4, 6]
```

5. What is the difference between every() and some()? Provide an example.
every() checks if all elements in an array satisfy a condition, while some() checks if at least one element in an array satisfies a condition.
```js
const arr = [1, 2, 3];
console.log(arr.every(num => num > 0)); // true
console.log(arr.some(num => num > 0)); // true
```

//set-2

1. How can you use filter() to get all numbers greater than 5 from an array?
```js
const arr = [1, 2, 3, 4, 5, 6];
const filteredArr = arr.filter(num => num > 5); // [6]
```
2. What does reduce() do and how can it be used to find the sum of numbers in an array?
reduce() executes a reducer function on each element to accumulate a single result.
```js
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => acc + num, 0); // 15
```
3. How can you use find() to get the first odd number from an array?
```js
const arr = [1, 2, 3, 4, 5];
const oddNum = arr.find(num => num % 2 !== 0); // 1
```

4. What is the difference between sort() and reverse()? Provide an example.
sort() sorts an array in ascending order, while reverse() sorts an array in descending order.
```js
const arr = [1, 2, 3, 4, 5];
arr.sort(); // [1, 2, 3, 4, 5]
arr.reverse(); // [5, 4, 3, 2, 1]
```
5. How do you sort an array of strings alphabetically? Then make it desynchronized. Provide an example.
```js
const arr = ["apple", "banana", "cherry", "date"];
arr.sort(); // ["apple", "banana", "cherry", "date"]
arr.reverse(); // ["date", "cherry", "banana", "apple"]
```

//set-3

1. How can you use reduce() to get the highest score from an array of students? Provide an example.
```js
let students = [
  { name: "A", score: 75 },
  { name: "B", score: 88 },
  { name: "C", score: 92 }
];
let highest = students.reduce((max, s) => s.score > max ? s.score : max, 0);
console.log(highest); // 92

```

2. How does some() work with nested objects? Provide an example.
```js
let students = [
  { name: "A", score: 75 },
  { name: "B", score: 88 },
  { name: "C", score: 92 }
];
let hasB = students.some(s => s.name === "B");
console.log(hasB); // true
```
3. Using map(), how can you convert an array of numbers to an array of strings? Provide an example.
```js
let numbers = [1, 2, 3, 4, 5];
let strings = numbers.map(num => num.toString());
console.log(strings); // ["1", "2", "3", "4", "5"]
```
4. How can you use shift() and unshift() to manipulate the first element of an array? Provide an example.
```js
let numbers = [1, 2, 3, 4, 5];
numbers.shift(); // [2, 3, 4, 5]
numbers.unshift(0); // [0, 2, 3, 4, 5]
```
5. What happens when you use pop() on an empty array? Provide an example.
```js
let numbers = [];
numbers.pop(); // []
```