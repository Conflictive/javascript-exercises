const palindromes = function (word) {
  const grammar = [",", ".", "!", " ", "'"]

  wordArray = word.toLowerCase().split("")
  console.log(wordArray)
  
  for (let i = 0; i < wordArray.length; i++) {
    if (grammar.includes(wordArray[i])) {
      wordArray.splice(i, 1);
      i--
    }
  }
  
  word = wordArray.join("")
  reversedWord = wordArray.reverse().join("");
  console.log(word)
  console.log(reversedWord)
  
  return word === reversedWord;
}

// Do not edit below this line
module.exports = palindromes;
