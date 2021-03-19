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