// Description:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//  Solution

function expression(number, operation){
  if (!operation) {
   return number 
  } else {
    return operation(number)
  }
}

function zero(operation) {
  return expression(0, operation)
}
function one(operation) {
  return expression(1, operation)
}
function two(operation) {
  return expression(2, operation)
}
function three(operation) {
  return expression(3, operation)
}
function four(operation) {
  return expression(4, operation)
}
function five(operation) {
  return expression(5, operation)
}
function six(operation) {
  return expression(6, operation)
}
function seven(operation) {
  return expression(7, operation)
}
function eight(operation) {
  return expression(8, operation)
}
function nine(operation) {
  return expression(9, operation)
}

function plus(x) {
  return function(y) {
    return y + x
  }
}
function minus(x) {
  return function(y) {
    return y - x
  }
}
function times(x) {
  return function(y) {
    return y * x
  }
}
function dividedBy(x) {
  return function(y) {
    return parseInt(y / x)
  }
}

// Breakdown of Solution
eight(dividedBy(three()))

// EIGHT returns the function EXPRESSION, which takes 8 and an OPERATION since it exists
//              ---      8 /       ---
// EXPRESSION then takes THREE and returns / 3
//            ---      3 !operation      ---
// We have a function called EIGHT & EIGHT takes an argument of DIVIDEDBY which takes and argument of THREE
//                ---      8 / 3      ---
// We then parseInt(8 / 3) and get 2 as our solution