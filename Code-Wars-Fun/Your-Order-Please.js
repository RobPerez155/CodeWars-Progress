// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){ 
  const wordArray = words.split(' ').sort(function(a,b){ //.split turns our string into an array
    return a.match(/\d/) - b.match(/\d/); // What .sort() is doing is shown below
    // 1 - 2 = -1 ---> 1 should go to the left of 2 -- 1, 2
    // 4 - 1 = 3 ---> 4 should go to the right of 1 -- 1, 4, 2
    // 4 - 2 = 2 ---> 4 should go to the right of 2 -- 1, 2, 4
    // 3 - 2 = 1 ---> 3 should go to the right of 2 -- 1, 2, 3, 4
    // 3 - 4 = -1 ---> 3 should go to the left of 4 -- 1, 2, 3, 4
 })
  const wordString = wordArray.join(' '); // .join ' ' puts the array back into a string w/ spaces
  console.log(wordString)
}

order("is2 Thi1s T4est 3a")
//"Thi1s is2 3a T4est")

// Note: .sort() sorts numbers and letters as ascii number references(http://www.asciitable.com/)
// [1,2,3,4,11,22,33,44].sort() = [1,11,2,22,3,33,4,44]
//Thanks to wibb1 for extra clarification.