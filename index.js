function isPalindrome(word) {
  //convert the word string to lowercase
  word = word.toLowerCase();

  //loop through to check if its a palindrome
  for (let char =0; char < word.length/2; char++) {
    if (word[char] !== word[word.length -1 -char]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  first declare a function using the function keyword with a parameter to hold our string
  write a loop to check if the string passed in is a palindrome
  write an else statement taht returns false if its not.
*/

/*
  first converted the string to lowercase as peer the instructions.
  the for statement loops through each character of the provided word:
  checking until the condition word.length/2 is met meaning half of the word.
  if the characters do not match thefalse, otherwise the letters match so the function returns true.n its definitely not a palindrome.
  return 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
