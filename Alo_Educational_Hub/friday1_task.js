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




