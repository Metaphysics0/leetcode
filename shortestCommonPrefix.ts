function longestCommonPrefix(words: string[]): any {
  // 1. grab the shortest word in the array

  // 2. iterate over the other words, checking character by character
  // if it's in the index of the shortest word.

  // 3. for every instance that the character is in the index, add it to the result;

  let result = "";

  const shortestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));
  words.splice(words.indexOf(shortestWord), 1);

  return words.map((word) => {
    return shortestWord.split("").map((character, idx) => {
      let shortestWordCharacters = "";
      shortestWordCharacters += character;
      if (word.includes(shortestWordCharacters)) {
        shortestWordCharacters;
      }
      if (shortestWord.length === idx + 1) {
        return shortestWordCharacters;
      }
    });
  });
}
const input = ["flower", "flow", "flight"];
const va = longestCommonPrefix(input);
console.log("V", va);
