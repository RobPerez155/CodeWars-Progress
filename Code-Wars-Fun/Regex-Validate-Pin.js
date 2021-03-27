// Description
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Solution
function validatePIN (pin) {
  // Regex translated
  //  ^ -> Beginning 
  //  \d -> Any Digit (0-9) 
  //  {4} -> Match 4 of the preceding token
  //  $ -> End
  //    The beginning first 4 tokens match any digits 0-9
  if (pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){
    return true
  } else {
    return false
  }
}