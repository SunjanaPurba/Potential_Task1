//set-1

1. What is TypeScript and how is it different from JavaScript?
TypeScript is a **superset of JavaScript** that adds **static typing** and advanced features like interfaces, enums, and type aliases.  
- JavaScript is dynamically typed; TypeScript allows catching errors at **compile time**.  
- TypeScript code compiles to plain JavaScript.

2. What are type annotations in TypeScript? Provide an example.
Type annotations explicitly specify a variable’s or function’s type.
```ts
let age: number = 25;

function greet(name: string): string {
    return `Hello, ${name}!`;
}
3. What is the difference between let, const, and var?
Keyword	Scope	Reassignable	Redeclarable
var	Function	Yes	Yes
let	Block	Yes	No
const	Block	No	No

4. What are interfaces in TypeScript? How do they help in defining object shapes? Provide and example.
Interfaces define the shape of objects, specifying their properties and their types.
```ts
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}
5. What does the any type represent in TypeScript? How does it affect type safety?
The any type is a special type that allows you to bypass type checking and treat a value as any type. It is often used when you want to work with values that have dynamic or unknown types.

//set-2
1. Explain the difference between numeric enums and string enums in TypeScript.
Numeric enums are numeric values assigned to each enum member, while string enums are string values assigned to each enum member.
What is reverse mapping in TypeScript enums? Provide an example.

Numeric enums allow mapping value → name.

enum Status { Active = 1, Inactive }
console.log(Status[1]); // "Active"

String enums allow mapping name → value.
3. How do computed members work in TypeScript enums? Give an example.
```ts
enum Colors {
    Red = "red",
    Green = "green",
    Blue = "blue",
    [key: string]: string;
}
4. Can you mix string and numeric values in an enum? What are the implications?
No, mixing numeric and string values in the same enum is not allowed; all members must be of the same type.
5. How do you define optional properties in an interface? Provide an example.
```ts
interface Person {
    name: string;
    age?: number;
    isEmployed?: boolean;
}

//set-3
1. What is the benefit of using strict equality (===) in TypeScript over loose equality (==)?
Strict equality (===) checks for both value and type, while loose equality (==) only checks for value.
2. What is the difference between null and undefined in TypeScript?
Null represents the intentional absence of a value, while undefined indicates a variable has not been assigned a value yet.
3. What are union types in TypeScript? How are they different from interfaces?
Union types allow you to combine multiple types into a single type.
4. What is the difference between void and never in TypeScript? When would you use each?
Void indicates that a function does not return a value, while never indicates that a function will never return a value.
5. How can you use type aliases in TypeScript? Provide an example where a type alias improves code readability.
```ts
type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
};