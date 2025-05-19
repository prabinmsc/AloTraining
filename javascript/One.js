// 19-05-2025

//block scope and global scope
// Global Scope: This variable is accessible everywhere
let globalVar = "I am global";

function testScope() {
    console.log(globalVar); // Accessible inside the function

    if (true) {
        // Block Scope: This variable exists only inside this block
        let blockVar = "I am block-scoped";
        console.log(blockVar); // Accessible inside the block
    }

    // console.log(blockVar); // Uncommenting this will cause an error: blockVar is not defined outside the block
}

testScope();
console.log(globalVar); // Accessible outside the function
// console.log(blockVar); // Error: blockVar is not defined globally



// ### **Basic Questions**
// 1. Declare a variable `name` and assign it your name. Print it to the console.
// 2. Create a function called `greet` that takes a name as a parameter and returns a greeting message.
// 3. Write a function `addNumbers` that takes two numbers as arguments and returns their sum.
// 4. Declare a variable using `let`, modify its value, and print both the original and modified values.
// 5. What happens when you declare a variable with `var` inside a function? Explain with a short code snippet.



// 1. Declare a variable and print it
let name = "BATMAN";
console.log(name);

// 2. Function to return a greeting message
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("BATMAN"));

// 3. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10));

// 4. Modify a `let` variable
let age = 25;
console.log("Original age:", age);
age = 26;
console.log("Modified age:", age);

// 5. Variable using `var` inside a function
function testVar() {
    var localVar = "I'm inside the function";
    console.log(localVar);
}
testVar();
// console.log(localVar); // Uncommenting this will cause an error: localVar is not defined outside the function






// ### **Intermediate Questions**
// 6. Write a function `multiply` that takes two numbers, multiplies them, and returns the result. Use arrow function syntax.
// 7. Declare a constant variable `PI` and use it in a function to calculate the circumference of a circle given its radius.
// 8. Implement a function `calculateArea` that calculates the area of a rectangle using width and height parameters.
// 9. Create a function `checkEven` that returns `true` if a number is even and `false` otherwise.
// 10. Write a function `swapValues` that swaps two variable values without using a temporary variable.


// 6. Arrow function for multiplication
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 7. Using `PI` in a function
const PI = 3.14159;
function getCircumference(radius) {
    return 2 * PI * radius;
}
console.log(getCircumference(7));

// 8. Function to calculate rectangle area
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));

// 9. Function to check even number
function checkEven(num) {
    return num % 2 === 0;
}
console.log(checkEven(8));

// 10. Swap two values without a temporary variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log("Swapped values:", a, b);










// ### **Advanced Questions**
// 11. Create a function `factorial` that calculates the factorial of a given number using recursion.
// 12. Write a function `isPalindrome` that checks whether a given string is a palindrome.
// 13. Implement a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.
// 14. Define a function `memoizedFactorial` that optimizes the factorial calculation using memoization.
// 15. Write a higher-order function `applyOperation` that takes a function as an argument and applies it to two numbers.




// 11. Recursive function for factorial
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));



function factorial(n) {
    if (n === 0) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

console.log(factorial(5)); // Output: 120


// 12. Function to check palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));

// 13. Function to sort an array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1]));

// 14. Memoized factorial function
const memoizedFactorial = (function () {
    let cache = {};
    return function factorial(n) {
        if (n in cache) return cache[n];
        return cache[n] = (n === 0 ? 1 : n * factorial(n - 1));
    };
})();
console.log(memoizedFactorial(5));

// 15. Higher-order function to apply an operation
function applyOperation(operation, a, b) {
    return operation(a, b);
}
console.log(applyOperation(addNumbers, 3, 7));
console.log(applyOperation(multiply, 4, 2));







