// 1. What is a for loop in JavaScript?
// Answer: A for loop is used to repeat a block of code multiple times. It consists of an initialization, condition, and increment.

// js
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// This will print numbers 0 to 4 in the console.

// 2. How does an if-else statement work in JavaScript?
// Answer: An if-else statement allows conditional execution of code based on a given condition.

// js
// let num = 10;

// if (num > 5) {
//   console.log("Greater than 5");
// } else {
//   console.log("Less than or equal to 5");
// }
// Since num is 10, it prints "Greater than 5".

// 3. What is the difference between for and while loops?
// Answer:

// A for loop is preferred when the number of iterations is known.

// A while loop runs until a condition becomes false.

// js
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// This will also print numbers 0 to 4.

// 4. How do you check if a number is even or odd using if-else?
// Answer:

// js
// let num = 7;

// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }
// Since 7 is odd, it prints "Odd number".

// 5. What does the break statement do in a loop?
// Answer: The break statement exits the loop immediately.

// js
// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
// This stops at 4 and does not print 5.

// 6. What does the continue statement do in a loop?
// Answer: The continue statement skips the current iteration and moves to the next.

// js
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }
// This skips printing 2 but continues with other numbers.

// 7. How do you write a switch statement instead of multiple if-else conditions?
// Answer:

// js
// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   default:
//     console.log("Regular day");
// }
// If day = "Monday", it prints "Start of the week!".

// 8. How do you iterate over an array using forEach?
// Answer: The forEach method applies a function to each element in an array.

// js
// const numbers = [1, 2, 3, 4];

// numbers.forEach(num => console.log(num * 2));
// This prints 2, 4, 6, 8.

// 9. How do you use a do-while loop?
// Answer: A do-while loop ensures the code runs at least once, even if the condition is false.

// js
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);
// Prints 0, 1, 2.

// 10. How can you check if a variable is null or undefined?
// Answer: You can use an if condition:

// js
// let value;

// if (value === null) {
//   console.log("Value is null");
// } else if (value === undefined) {
//   console.log("Value is undefined");
// } else {
//   console.log("Value exists");
// }
// Since value is not assigned, it prints "Value is undefined".

// I hope this helps! Do you want more questions on arrays, objects, or functions? 🚀

// medium level
// Great choice! Here are 10 medium-level JavaScript questions covering loops, conditions, and practical logic:

// 1. What is the difference between let, const, and var?
// Answer:

// let allows re-assignment but has block scope.

// const is immutable (cannot be re-assigned).

// var is function-scoped but can be reassigned.

// js
// var x = 10; // function-scoped
// let y = 20; // block-scoped
// const z = 30; // cannot be reassigned
// 2. How do you loop through an object using for-in?
// Answer: for-in iterates through keys in an object.

// js
// const user = { name: "John", age: 25 };

// for (let key in user) {
//   console.log(key, user[key]); // Prints: name John, age 25
// }
// 3. How does a for-of loop work in JavaScript?
// Answer: for-of is used to iterate over array elements.

// js
// const nums = [1, 2, 3];

// for (let num of nums) {
//   console.log(num); // Prints: 1, 2, 3
// }
// 4. What happens if an if condition is not met?
// Answer: If the condition is false, the code inside the block is skipped.

// js
// let num = 10;

// if (num < 5) {
//   console.log("Small number");
// } else {
//   console.log("Large number");
// }
// // Prints: "Large number"
// 5. How do you find the sum of an array using a loop?
// Answer:

// js
// const numbers = [2, 5, 8];
// let sum = 0;

// for (let num of numbers) {
//   sum += num;
// }

// console.log(sum); // Prints: 15
// 6. How does return work inside a function?
// Answer: A function stops executing when a return statement is encountered.

// js
// function square(num) {
//   return num * num;
// }

// console.log(square(4)); // Prints: 16
// 7. How do you check if a number is prime using a loop?
// Answer: A prime number is only divisible by 1 and itself.

// js
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(7)); // Prints: true
// 8. What is a ternary operator?
// Answer: A ternary operator is a shorter version of an if-else condition.

// js
// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result); // Prints: "Adult"
// 9. How do you reverse a string using a loop?
// Answer: You can loop through a string backwards.

// js
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("hello")); // Prints: "olleh"
// 10. How do you remove duplicates from an array?
// Answer: Using a loop and a Set.

// js
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers); // Prints: [1, 2, 3, 4, 5]
// These questions are solid practice for real-world scenarios! Want some on arrays, objects, or ES6 features next? 🚀

// 1github.com
// without array concepts
// Got it! Here are 10 medium-level JavaScript questions focusing on loops, conditions, and logic—without arrays:

// 1. How does a for loop work in JavaScript?
// Answer: A for loop repeats code a specific number of times.

// js
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// Prints: 1, 2, 3, 4, 5

// 2. What is the purpose of an if-else statement?
// Answer: An if-else statement executes different code based on a condition.

// js
// let age = 18;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible");
// }
// Prints: "Eligible to vote"

// 3. How do you check if a number is positive, negative, or zero?
// Answer:

// js
// let num = -3;

// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// }
// Prints: "Negative number"

// 4. What is a while loop and how does it work?
// Answer: A while loop runs as long as the condition is true.

// js
// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }
// Prints: 1, 2, 3

// 5. What is a do-while loop? How is it different from while?
// Answer: A do-while loop runs at least once, even if the condition is false.

// js
// let i = 0;
// do {
//   console.log("Runs at least once");
// } while (i > 0);
// Prints: "Runs at least once"

// 6. How do you use a switch statement instead of multiple if conditions?
// Answer:

// js
// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   default:
//     console.log("Regular day");
// }
// Prints: "Start of the week!"

// 7. How do you find the sum of numbers from 1 to N using a loop?
// Answer:

// js
// let N = 5;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   sum += i;
// }

// console.log(sum); // Prints: 15
// 8. How can you check if a number is even or odd using JavaScript?
// Answer: Use the modulo operator %.

// js
// let num = 7;

// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }
// Prints: "Odd number"

// 9. How do you reverse a string using a loop?
// Answer: Loop backward through the string.

// js
// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed); // Prints: "olleh"
// 10. How do you find the factorial of a number using a loop?
// Answer: Factorial (n!) is the product of all numbers from 1 to n.

// js
// let n = 5;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }

// console.log(fact); // Prints: 120 (since 5! = 5 × 4 × 3 × 2 × 1)
// That should give you a solid challenge! Want more complex logic-based problems? 🚀

// advance level
// Now we’re stepping into advanced-level JavaScript! Here are 10 challenging technical questions involving loops, conditions, and logic (without arrays):

// 1. How do you find if a number is a palindrome using loops?
// Answer: A palindrome is a number that reads the same forward and backward.

// js
// function isPalindrome(num) {
//   let original = num;
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return original === reversed;
// }

// console.log(isPalindrome(121)); // Prints: true
// console.log(isPalindrome(123)); // Prints: false
// 2. How do you check if a number is an Armstrong number?
// Answer: An Armstrong number is a number where the sum of its digits raised to the power of the number of digits equals the number itself.

// js
// function isArmstrong(num) {
//   let sum = 0;
//   let temp = num;
//   let length = String(num).length; // Get number of digits

//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += Math.pow(digit, length);
//     temp = Math.floor(temp / 10);
//   }

//   return sum === num;
// }

// console.log(isArmstrong(153)); // Prints: true (1³ + 5³ + 3³ = 153)
// console.log(isArmstrong(9474)); // Prints: true
// console.log(isArmstrong(123)); // Prints: false
// 3. How do you generate the Fibonacci series up to N terms?
// Answer: The Fibonacci sequence is generated by adding the two previous terms.

// js
// function fibonacci(n) {
//   let a = 0, b = 1, temp;
  
//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     temp = a + b;
//     a = b;
//     b = temp;
//   }
// }

// fibonacci(10); // Prints: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 4. How do you count the number of digits in a number?
// Answer:

// js
// function countDigits(num) {
//   let count = 0;

//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }

// console.log(countDigits(98765)); // Prints: 5
// 5. How do you check if a number is a power of 2?
// Answer:

// js
// function isPowerOfTwo(num) {
//   if (num < 1) return false;

//   while (num > 1) {
//     if (num % 2 !== 0) return false;
//     num /= 2;
//   }

//   return true;
// }

// console.log(isPowerOfTwo(8)); // Prints: true (8 = 2³)
// console.log(isPowerOfTwo(10)); // Prints: false
// 6. How do you compute the greatest common divisor (GCD) using a loop?
// Answer: The GCD is the largest number that divides both numbers.

// js
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }

//   return a;
// }

// console.log(gcd(56, 98)); // Prints: 14
// 7. How do you generate prime numbers up to N using loops?
// Answer: Prime numbers are only divisible by 1 and themselves.

// js
// function generatePrimes(n) {
//   for (let num = 2; num <= n; num++) {
//     let isPrime = true;
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(num);
//   }
// }

// generatePrimes(20); // Prints: 2, 3, 5, 7, 11, 13, 17, 19
// 8. How do you compute the sum of digits in a number?
// Answer:

// js
// function sumOfDigits(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// console.log(sumOfDigits(987)); // Prints: 24 (9 + 8 + 7)
// 9. How do you convert a decimal number to binary using loops?
// Answer:

// js
// function decimalToBinary(num) {
//   let binary = "";

//   while (num > 0) {
//     binary = (num % 2) + binary;
//     num = Math.floor(num / 2);
//   }

//   return binary;
// }

// console.log(decimalToBinary(10)); // Prints: "1010"
// 10. How do you check if a number is a perfect number?
// Answer: A perfect number is a number equal to the sum of its divisors (excluding itself).

// js
// function isPerfectNumber(num) {
//   let sum = 0;

//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === num;
// }

// console.log(isPerfectNumber(6)); // Prints: true (1 + 2 + 3 = 6)
// console.log(isPerfectNumber(28)); // Prints: true
// console.log(isPerfectNumber(12)); // Prints: false
// That was pure logic at its best! If you're looking for complex recursion or optimization-based problems, let me know. 🚀🔥

// more on intermediate level and also functions
// Awesome! Let's dive deeper into intermediate-level JavaScript questions, with a special focus on functions.

// 1. What is the difference between function declaration and function expression?
// Answer: A function declaration is named and hoisted, meaning it can be called before it's defined.

// js
// function greet() {
//   return "Hello!";
// }
// console.log(greet()); // Prints: "Hello!"
// A function expression is assigned to a variable and not hoisted.

// js
// const greet = function() {
//   return "Hello!";
// };
// console.log(greet()); // Prints: "Hello!"
// 2. What is an arrow function and how is it different from regular functions?
// Answer: Arrow functions provide a shorter syntax and do not bind this.

// js
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Prints: 8
// If using a regular function, this can refer to an object’s property, but in an arrow function, it inherits the parent scope.

// 3. How do you pass default parameters in a function?
// Answer: If no argument is passed, the default value is used.

// js
// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }
// console.log(greet()); // Prints: "Hello, Guest!"
// console.log(greet("Alice")); // Prints: "Hello, Alice!"
// 4. How do you use a function to find the factorial of a number?
// Answer:

// js
// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
  
//   let fact = 1;
//   for (let i = 2; i <= n; i++) {
//     fact *= i;
//   }

//   return fact;
// }

// console.log(factorial(5)); // Prints: 120
// 5. How do you return multiple values from a function?
// Answer: Using an object or an array:

// js
// function getInfo() {
//   return { name: "John", age: 30 };
// }

// const info = getInfo();
// console.log(info.name, info.age); // Prints: "John 30"
// 6. How do you use recursion to calculate the sum of numbers from 1 to N?
// Answer: Recursion is when a function calls itself.

// js
// function sum(n) {
//   if (n === 1) return 1;
//   return n + sum(n - 1);
// }

// console.log(sum(5)); // Prints: 15 (5 + 4 + 3 + 2 + 1)
// 7. How do you check whether a number is prime using a function?
// Answer: Prime numbers are divisible only by 1 and themselves.

// js
// function isPrime(n) {
//   if (n < 2) return false;
  
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(7)); // Prints: true
// console.log(isPrime(10)); // Prints: false
// 8. How does the return statement work inside a function?
// Answer: return exits the function and provides a value.

// js
// function square(num) {
//   return num * num;
//   console.log("This will never execute!"); // Unreachable code
// }

// console.log(square(4)); // Prints: 16
// 9. How do closures work in JavaScript?
// Answer: A closure is a function that remembers variables from its parent scope even after execution.

// js
// function outerFunction() {
//   let count = 0;
//   return function innerFunction() {
//     count++;
//     return count;
//   };
// }

// const counter = outerFunction();
// console.log(counter()); // Prints: 1
// console.log(counter()); // Prints: 2 (Closure retains `count`)
// 10. How do you create a function that calculates power (x^y)?
// Answer:

// js
// function power(base, exponent) {
//   let result = 1;

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }

//   return result;
// }

// console.log(power(2, 3)); // Prints: 8 (2³)
// This set covers a range of function-based challenges that will boost your problem-solving skills! Want me to throw in higher-order functions or async concepts next? 🚀🔥

// palindrome
// A palindrome is a word, number, or phrase that reads the same forward and backward. Here’s a simple JavaScript function to check if a string is a palindrome:

// js
// function isPalindrome(str) {
//   let reversed = "";
  
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
  
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // Prints: true
// console.log(isPalindrome("hello")); // Prints: false
// How It Works:
// The function loops through the string backward and stores the reversed version.

// It then compares the original string with the reversed string.

// If they match, it's a palindrome!

// Would you like a number-based palindrome checker too? 🚀

// without function
// If you want to check whether a string is a palindrome without using a function, you can do it directly in a script:

// js
// let str = "madam"; // Change this value to test different strings
// let reversed = "";
// let isPalindrome = true;

// // Reverse the string manually using a loop
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// // Compare original and reversed strings
// if (str !== reversed) {
//   isPalindrome = false;
// }

// console.log(isPalindrome ? "Palindrome" : "Not a palindrome");
// How It Works:
// The original string is stored in str.

// A loop builds the reversed version by iterating backward.

// The original and reversed strings are compared:

// If they match, it prints "Palindrome".

// Otherwise, "Not a palindrome" is displayed.

// Would you like to check numeric palindromes too? 🚀