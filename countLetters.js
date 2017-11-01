let str = process.argv[2];
function countLetters (str) {
  let processedStr = str.replace(/\s+/g, '')
  let letterStats = {};
  for (letter of processedStr) {
    if (letterStats.hasOwnProperty(letter)) {
      letterStats[letter] += 1;
    } else {
      letterStats[letter] = 1;
    }
  } return letterStats;
}

console.log(countLetters(str));
