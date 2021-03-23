// Description
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// Solution
function digital_root(n) {
  let sum = n
  let arr = []
  let reducer = (a,b) => parseInt(a) + parseInt(b) //parse will pull the digits out of the string
  
  while (sum > 9) {       // Using a 'while' loop to run code until the sum is less than 9
    arr = sum.toString().split("") // Creating an array of individual digits in our sum 
    sum = arr.reduce(reducer) // Adding up our strings to make a new sum
  }
  return sum
}