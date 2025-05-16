//09/05/2025
// 1, reverse the string "hello"


// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
//   console.log(reversed);
  
// }

// console.log(reversed); // Prints: "olleh




//without array
// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str.charAt(i);
// }

// console.log(reversed); // Output: "olleh"





//reverse string in array


// let words = ["hello", "world", "JavaScript"];
// let reversedWords = [];

// for (let i = 0; i < words.length; i++) {
//   let reversed = "";
  
//   for (let j = words[i].length - 1; j >= 0; j--) {
//     reversed += words[i][j];
//   }
  
//   reversedWords.push(reversed);
// }

// console.log(reversedWords); // Prints: ["olleh", "dlrow", "tpircSavaJ"]







//2, count how many numbers divisible by 5 from 1 -10

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 5 === 0) {
//     count++;
//   }
// }

// console.log(count); // Prints: 2




//3,  check wether the string is palindrome or not


// let str = "madam";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str.charAt(i);
// }

// if (str === reversed) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }





// let str = "madam"; // Change this to test different words
// let reversed = "";

// // Reverse the string manually
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// // Compare original and reversed strings
// console.log(reversed === str ? "Palindrome" : "Not a palindrome");




// let str = "madam"; // Change this to test different words
// let isPalindrome = true;

// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// console.log(isPalindrome ? "Palindrome" : "Not a palindrome");







//4, print the odd number 1 to 30

// for (let i = 1; i <= 30; i += 2) {
//     console.log(i);
//   }



//5,check wether the given number is single double or triple digit


// let num = 245; // Change this value to test different numbers

// if (num >= 0 && num <= 9) {
//   console.log("Single-digit number");
// } else if (num >= 10 && num <= 99) {
//   console.log("Double-digit number");
// } else if (num >= 100 && num <= 999) {
//   console.log("Triple-digit number");
// } else {
//   console.log("Number has more than three digits");
// }







// let num = 245; // Change this number to test different cases
// let numLength = String(num).length; // Convert to string and check length

// if (numLength === 1) {
//   console.log("Single-digit number");
// } else if (numLength === 2) {
//   console.log("Double-digit number");
// } else if (numLength === 3) {
//   console.log("Triple-digit number");
// } else {
//   console.log("Number has more than three digits");
// }




// 16-05-2025

// subject qn

// 1,what are variables and explain its types?
// 2, define Dom 
// 3, difference btwn == and ===
// 4,what is event in js
// 5,Name 5 JavaScript Data Types?




//technical qn 
//1, is Palindrome or not (mom)
// let str = "madam"; // Change this to test different words
// let reversed = "";

// // Reverse the string manually
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// // Compare original and reversed strings
// console.log(reversed === str ? "Palindrome" : "Not a palindrome");





//2, Reverse Right-Angled Triangle
// js
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }
// Output:

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 





//3,// 1. Number Pyramid
// js
// let n = 5; 

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }
// Output:

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 





// 4, check the  results and represent their grade  as Akhil : A+



// const students = [
//   { name: "Prabin", Avgscore: 95 },
//   { name: "Akhil", score: 80 }
// ];

// for (let i = 0; i < students.length; i++) {
//   let grade;
  
//   if (students[i].Avgscore >= 90) {
//     grade = "A+";
//   } else if (students[i].Avgscore >= 80) {
//     grade = "A";
//   } else if (students[i].Avgscore >= 70) {
//     grade = "B";
//   } else if (students[i].Avgscore >= 60) {
//     grade = "C";
//   } else {
//     grade = "F";
//   }
  
//   console.log(`${students[i].name}: ${grade}`);
// }


// output
// Prabin: A+
// Akhil: A




// 5,1, 
// for(let i=0; i>0;i++){console.log(i);
// }
// A) The numbers 0, 1, 2, 3... will be printed.
//  B) The loop will run infinitely.
//   C) The loop will not execute at all. (ans)
//    D) The loop will throw an error.  

// 2,
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i > 0);
//  ans:0





// Here are answers to your JavaScript questions:

// 1. **What are variables and their types?**  
//    Variables are used to store data in JavaScript. There are three types:  
//    - `var`: Function-scoped, can be redeclared and reassigned.  
//    - `let`: Block-scoped, can be reassigned but not redeclared.  
//    - `const`: Block-scoped, cannot be redeclared or reassigned.

// 2. **Define DOM (Document Object Model):**  
//    The DOM is a programming interface for web documents. It represents the structure of an HTML page as a tree, allowing JavaScript to manipulate elements dynamically.

// 3. **Difference between `==` and `===`:**  
//    - `==` checks for equality **without** considering data type (e.g., `5 == "5"` is `true`).  
//    - `===` checks for equality **with** type comparison (e.g., `5 === "5"` is `false`).

// 4. **What is an event in JavaScript?**  
//    An event in JavaScript refers to user interactions with a webpage, such as clicks, keypresses, mouse movements, or form submissions. Events allow JavaScript to execute specific actions when triggered.

// 5. **JavaScript Data Types:**  
//    JavaScript has several data types:  
//    - **Primitive types:** `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.  
//    - **Reference types:** `object`, `array`, `function`.  

// Let me know if you need examples or further explanations! 🚀  
