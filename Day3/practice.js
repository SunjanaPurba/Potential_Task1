let students = ['Sunjana', 'Purba', 'Bob', 'Steve'];
console.log(students[0]);
console.log(students.length);

if (students.length>2){
    console.log("Hello");
}

let fruits = ['mango', 'banana'];
fruits.push('orange' , 'apple');
console.log(fruits); 

//pop method
let fruits1 = ['apple', 'banana', 'orange'];
fruits.pop();
console.log(fruits1);

//shift method
let fruits2 = ['apple', 'banana', 'orange'];
fruits1.shift();
console.log(fruits2);

//unshift method
let fruits3 = ['apple', 'banana', 'orange'];
fruits2.unshift('mango');
console.log(fruits3);

//splice method
let fruits4 = ['apple', 'banana', 'orange'];
fruits3.splice(1, 1);
console.log(fruits4);

//ForEach Method
let fruits5 = ['apple', 'banana', 'orange'];
fruits4.forEach((fruit) => {
    console.log(fruit);
});

//Map Method
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

//Filter Method
let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Find Method
let numbers2 = [1, 2, 3, 4, 5];
let firstEvenNumber = numbers2.find(num => num % 2 === 0);
console.log(firstEvenNumber);

//Some Method
let numbers3 = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers3.some(num => num % 2 === 0);
console.log(hasEvenNumber);

//Every Method
let numbers4 = [2, 4, 6, 8, 10];
let allEvenNumbers = numbers4.every(num => num % 2 === 0);
console.log(allEvenNumbers);

//Sort Method
let numbers5 = [3, 1, 4, 2, 5];
numbers5.sort();
console.log(numbers5);

//Reduce Method
let numbers6 = [1, 2, 3, 4, 5];
let sum = numbers6.reduce((acc, num) => acc + num, 0);
console.log(sum);

