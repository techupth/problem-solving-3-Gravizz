// Exercise 1: Length of Last Word

const lengthOfLastWord = function (sentence) {
  //Start coding here
  const arrayWord = sentence.split(" ");
  let lastWord;
  for (let i = arrayWord.length - 1; i > 0; i--) {
    if (arrayWord[i] != "") {
      lastWord = arrayWord[i];
      break;
    }
  }
  return lastWord.length;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
