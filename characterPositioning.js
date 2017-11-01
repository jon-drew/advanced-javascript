let str = process.argv[2];
function countLetters (str) {
  let processedStr = str.replace(/\s+/g, '')
  let letterStats = {};
  for (counter = 0; counter < processedStr.length; counter++) {
    if (letterStats.hasOwnProperty(processedStr[counter])) {
      letterStats[processedStr[counter]].push(counter);
    } else {
      letterStats[processedStr[counter]] = [counter];
    }
    } return letterStats;
  }
console.log(countLetters(str));