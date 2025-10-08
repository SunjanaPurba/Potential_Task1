## Set 1

1. **Explain how the ternary operator works in JavaScript with an example.**
   ```js
   let age = 20;
   let result = age >= 18 ? "Adult" : "Minor";
   console.log(result); 
   ```

2. **What are the logical operators in JavaScript? Give examples.**
   ```js
   let a = true, b = false;
   console.log(a && b); // false
   console.log(a || b); // true
   console.log(!a);     // false
   ```

3. **What is the purpose of the `else if` statement?**
   Allows checking multiple conditions:
   ```js
   if (marks >= 90) console.log("A");
   else if (marks >= 70) console.log("B");
   else console.log("C");
   ```

4. **Difference between `if`, `else if`, and `else`**
   ```js
   if (temp > 35) console.log("Hot");
   else if (temp > 25) console.log("Warm");
   else console.log("Cold");
   ```

---

## Set 2

1. **Difference between `for` and `for...of`**
   ```js
   let arr = [10, 20, 30];
   for (let i = 0; i < arr.length; i++) console.log(arr[i]);
   for (let value of arr) console.log(value);
   ```

2. **How does a `for...in` loop behave?**
   ```js
   let person = { name: "John", age: 25 };
   for (let key in person) console.log(key, person[key]);
   ```

3. **Purpose of `break`**
   ```js
   for (let i = 1; i <= 10; i++) {
     if (i === 5) break;
     console.log(i);
   }
   ```

4. **Difference between `while` and `do...while`**
   ```js
   let i = 0;
   while (i < 3) { console.log(i); i++; }

   let j = 0;
   do { console.log(j); j++; } while (j < 3);
   ```

5. **`for...of` example**
   ```js
   for (let char of "Hi") console.log(char);
   ```

---

## Set 3

1. **Function Declaration vs Function Expression**
   ```js
   function greet() { return "Hello"; }
   const sayHi = function() { return "Hi"; };
   ```

2. **Recursive Function Example (Factorial)**
   ```js
   function factorial(n) {
     if (n === 0) return 1;
     return n * factorial(n - 1);
   }
   ```

3. **Default Parameters**
   ```js
   function greet(name = "Guest") {
     console.log(`Hello, ${name}!`);
   }
   greet(); // Hello, Guest!
   ```

4. **Purpose of `return`**
   ```js
   function add(a, b) {
     return a + b;
   }
   ```

---

##  Set 4

5. **When to use `switch-case`**
   ```js
   let day = "Monday";
   switch (day) {
     case "Monday": console.log("Start of week"); break;
     case "Friday": console.log("Weekend soon"); break;
     default: console.log("Midweek");
   }
   ```

6. **`continue` vs `break`**
   ```js
   for (let i = 1; i <= 5; i++) {
     if (i === 3) continue;
     console.log(i);
   }
   ```

7. **Multiple conditions using logical operators**
   ```js
   let age = 25;
   if (age > 18 && age < 60) console.log("Adult");
   ```

---

## Set 5

1. **Check if a number is positive, negative, or zero**
   ```js
   function checkNumber(num) {
     return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
   }
   ```

2. **Check if day is weekday or weekend**
   ```js
   function checkDay(day) {
     day = day.toLowerCase();
     if (day === "saturday" || day === "sunday") return "Weekend";
     else return "Weekday";
   }
   ```

3. **Sum of even numbers in an array**
   ```js
   function sumEven(arr) {
     let sum = 0;
     for (let num of arr) if (num % 2 === 0) sum += num;
     return sum;
   }
   ```

4. **While loop 1–10 with divisibility check**
   ```js
   let i = 1;
   while (i <= 10) {
     let msg = `${i}`;
     if (i % 2 === 0) msg += " Divisible by 2";
     if (i % 3 === 0) msg += " Divisible by 3";
     console.log(msg);
     i++;
   }
   ```

5. **Recursive Fibonacci Function**
   ```js
   function fib(n) {
     if (n <= 1) return n;
     return fib(n - 1) + fib(n - 2);
   }
   ```


