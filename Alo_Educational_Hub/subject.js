// 09-05-2025
//Q1   
// what is synchronous and assynchronous
// In JavaScript (and programming in general), synchronous and asynchronous refer to how tasks are executed.

// Synchronous Execution
// Tasks run one after another in sequence.

// Each task blocks the next one until it completes.

// Used for simple, predictable operations.

// js
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");
// Output:

// Step 1  
// Step 2  
// Step 3  
// Each statement executes immediately and in order.

// Asynchronous Execution
// Tasks don’t wait for each other; some execute in the background.

// Common in network requests, timers, or reading files.

// Uses setTimeout(), Promises, and async/await.

// js
// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2 (delayed)");
// }, 2000);

// console.log("Step 3");
// Output:

// Step 1  
// Step 3  
// Step 2 (after 2 seconds)
// The second task (setTimeout) is delayed, but the program keeps running without waiting.

// Where is Asynchronous Execution Used?
// API calls (fetching data)

// File operations (reading/writing files)

// User interactions (button clicks, animations)

// Timers (setTimeout, setInterval)


//Q2,
// is js is synchronous or assynchronous why explain
// JavaScript is single-threaded, meaning it executes code synchronously by default—one operation at a time, line by line. However, it also has asynchronous capabilities, thanks to mechanisms like callbacks, promises, and async/await.

// Here’s how it works:

// Synchronous Execution: JavaScript runs commands sequentially. If one operation takes time, everything else is paused until it completes.

// js
// console.log("Start");
// console.log("End");
// Output:

// Start
// End
// Asynchronous Execution: JavaScript uses the event loop to handle operations that may take longer, such as fetching data from a server or waiting for user input. These operations are executed later, without blocking the rest of the code.

// js
// console.log("Start");
// setTimeout(() => {
//     console.log("Async Task Completed");
// }, 2000);
// console.log("End");
// Output:

// Start
// End
// Async Task Completed (after 2 seconds)
// Why is JavaScript asynchronous?
// Improves performance: Without blocking execution, JavaScript can continue running other tasks while waiting for longer operations to complete.

// Handles real-world tasks: Web applications often require tasks like fetching data, user interactions, or animations, which benefit from asynchronous execution.

// Event-driven programming: JavaScript heavily relies on events, making asynchronous operations essential for responsive interfaces.

// Since you're familiar with synchronous and asynchronous execution, have you worked with Promises and async/await in React yet? They’re great for handling API calls efficiently!




//Q3,
// what is dom in js


// In JavaScript, DOM stands for Document Object Model. It's a programming interface that represents the structure of an HTML or XML document as a tree of objects.

// Key Concepts of the DOM:
// Document: The HTML document loaded in the browser.

// Object Model: The document is represented as a tree of objects—each HTML element is an object (called a node).

// Access & Manipulation: JavaScript can use the DOM to access, modify, add, or delete elements dynamically.

// Example:
// Given this HTML:

// html
// Copy
// Edit
// <!DOCTYPE html>
// <html>
//   <body>
//     <h1 id="title">Hello World</h1>
//   </body>
// </html>
// You can use JavaScript to interact with it:

// javascript
// Copy
// Edit
// document.getElementById("title").textContent = "Hello DOM!";
// This code finds the element with id="title" and changes its text to "Hello DOM!".





//Q4,
// what is event in js

// In JavaScript, an event is an action or occurrence that happens in the browser, which you can respond to using code.

// Common Examples of Events:
// A user clicks a button (click)

// A user types into a form (input or keydown)

// A page loads (load)

// A form is submitted (submit)

// A mouse moves over an element (mouseover)

// How Events Work:
// You use event listeners to run JavaScript code in response to events.

// Example:
// html
// Copy
// Edit
// <button id="myBtn">Click Me</button>
// <script>
//   document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Button clicked!");
//   });
// </script>
// In this example:

// "click" is the event

// addEventListener() is the method that listens for that event

// The function() is the event handler that runs when the event occurs




//5,
// what is loop , syntax and its uses



// In JavaScript, a loop is used to repeat a block of code multiple times, either a fixed number of times or until a condition is met.

// ✅ Why Use Loops?
// To avoid repeating code manually

// To iterate over arrays or objects

// To perform repeated tasks (e.g., printing numbers, processing lists, etc.)

// 🔁 Common Types of Loops in JavaScript
// 1. for loop
// Used when you know in advance how many times to run the loop.

// Syntax:

// javascript
// Copy
// Edit
// for (initialization; condition; increment) {
//   // code to run
// }
// Example:

// javascript
// Copy
// Edit
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// 2. while loop
// Used when you want to loop as long as a condition is true.

// Syntax:

// javascript
// Copy
// Edit
// while (condition) {
//   // code to run
// }
// Example:

// javascript
// Copy
// Edit
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// 3. do...while loop
// Similar to while, but guarantees the loop runs at least once.

// Syntax:

// javascript
// Copy
// Edit
// do {
//   // code to run
// } while (condition);
// Example:

// javascript
// Copy
// Edit
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// 4. for...of loop
// Used to loop over iterable items like arrays or strings.

// Example:

// javascript
// Copy
// Edit
// let fruits = ["apple", "banana", "cherry"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// 5. for...in loop
// Used to loop over the properties of an object.

// Example:

// javascript
// Copy
// Edit
// let person = {name: "John", age: 30};
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }