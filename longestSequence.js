function longestSequence(str) {
  let sequenceArray = [];
  let longest = "";
  let sequence = "";

  if (str.length === 0) {
    return ["", 0];
  }
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === str[i + 1]) {
        sequence += str[i];
      }
    }
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        sequence += str[i];
      }
      if (str[i] !== str[i - 1]) {
        sequence = str[i];
      }
      if (sequence.length >= longest.length) {
        longest = sequence;
        sequenceArray.push(sequence);
      }
    }
  }
  let long = sequenceArray.length;
  let filtered = sequenceArray
    .filter((x) => x.length === sequenceArray[long - 1].length)
    .sort();
  return `{${filtered[0][0]}: ${filtered[0].length}}`;
}

console.log(longestSequence("bcaattmmbbbii"));
