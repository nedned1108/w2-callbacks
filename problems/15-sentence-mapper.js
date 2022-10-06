/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/
// 1. accept a sentence and a cb
// 2. return a new sentence where every word of the original sentence
// become the result of passing the word to the callback.

let sentenceMapper = function (sentence, cb) {
  let array = sentence.split(" ");
  let newArr = array.map((el) => {
    return cb(el);
  })
  return newArr.join(" ");
};

let result1 = sentenceMapper("what is the answer?", function(word) {
  return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!"aeiou".includes(char)) {
          newWord += char;
      }
  }
  return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = sentenceMapper;
} catch (e) {
  return null;
}
