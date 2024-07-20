function scrabble(word) {
  let length = word.length;
  if (length == 1) {
    return length;
  }

  return length * scrabble(word.substring(0, length - 1)); 
}

const ans = scrabble("card");
console.log(ans)