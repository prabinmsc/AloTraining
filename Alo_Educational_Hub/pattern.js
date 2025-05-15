// js
// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }
// This will print:

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// 1. Number Pyramid
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
// 2. Reverse Right-Angled Triangle
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
// 3. Diamond Shape
// js
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "* ".repeat(i));
// }

// for (let i = n - 1; i >= 1; i--) {
//     console.log(" ".repeat(n - i) + "* ".repeat(i));
// }
// Output:

//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
// 4. Hollow Square
// js
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += (i === 1 || i === n || j === 1 || j === n) ? "* " : "  ";
//     }
//     console.log(row);
// }
// Output:

// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 


// js
// let n = 5; 

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }
// Output:

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

// Can you show a different star pattern?
// Absolutely! Here's a pyramid star pattern using for loops in JavaScript:

// js
// let n = 5; 

// for (let i = 1; i <= n; i++) {
//     let row = " ".repeat(n - i); // Add spaces for alignment
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// Output:

//     *    
//    ***   
//   *****  
//  ******* 
// *********

// Can you show a hollow star pyramid pattern?
// Of course! Here’s a hollow star pyramid pattern using for loops in JavaScript:

// js
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = " ".repeat(n - i); // Spaces for alignment
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         if (j === 1 || j === (2 * i - 1) || i === n) {
//             row += "*"; // Stars at the edges and bottom row
//         } else {
//             row += " "; // Empty space inside the pyramid
//         }
//     }
//     console.log(row);
// }
// Output:

//     *    
//    * *   
//   *   *  
//  *     * 
// *********

// Can you show a different star pattern?
// Absolutely! Here's a diamond-shaped star pattern using for loops in JavaScript:

// js
// let n = 5;

// // Upper part of the diamond
// for (let i = 1; i <= n; i++) {
//     let row = " ".repeat(n - i);
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// // Lower part of the diamond
// for (let i = n - 1; i >= 1; i--) {
//     let row = " ".repeat(n - i);
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// Output:

//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *    