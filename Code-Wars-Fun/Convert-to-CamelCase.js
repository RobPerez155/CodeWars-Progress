// Description
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Solution
function toCamelCase(str){
  const regEx = /[-_]\w/ig 
  // [-_] -> will match all the underscore and dashes
  // \w -> will match any word characters
  // /ig -> will perform a Global case Insensitive search
  return str.replace(regEx, (match) => { 
    return match[1].toUpperCase() 
    // match                    -> [-s] and [-w] 
    // match[1]                 -> "s" and "w"
    // match[1].toUpperCase()   -> "S" and "W"
  })
}
//Notes:
// https://regexr.com/ -> is an awesome resource for testing/precticing regEx