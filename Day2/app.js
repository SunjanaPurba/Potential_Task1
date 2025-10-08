const a = 10;
const b = 20;
const c = 30;
const d = 40;

if(a < b && c < d){
    console.log("Hello")
}
if(a < b || c < d){
    console.log("Hello")
}

const name = "Lukas"
console.log(name ? name: "Not found")

const name1 = "Lukas"
console.log(name1 ?? "Not found")

const name2 = "Lukas"
console.log(name2 || "Not found")

const e = 10;
const f = 20;
console.log(e  !== b);

const g = 20;
const h = 20;
if(g === h){
    console.log("Hello")
}

let x = 10;
if (x < 5) {
  console.log("x is less than 5");
} else if (x === 10) {
  console.log("x is equal to 10"); 
} else {
  console.log("x is greater than 5");
}

let num = 3;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Three");
}

const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); 
console.log(greet());

function countUp(n, target) {
     if (n > target) {
        return;
    }
    console.log(n);
    countUp(n + 1, target);
}

countUp(1, 5);


