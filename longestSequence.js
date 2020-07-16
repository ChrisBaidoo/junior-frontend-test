function longestSequence(str) {
  if (str.length === 0) {
    //empty string
    return ["", 0];
  }
  let sequenceArray = [];
  let longest = "";
  let sequence = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      //check if first character and next are matching sequence
      if (str[i] === str[i + 1]) {
        sequence += str[i];
      }
    }
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        //check if current and previous are matching sequence and update sequence
        sequence += str[i];
      }
      if (str[i] !== str[i - 1]) {
        //check if current and previous aren't a matching and start new sequence
        sequence = str[i];
      }
      if (sequence.length >= longest.length) {
        //if current sequence and is greater than or equal to previous sequence add to array
        longest = sequence;
        sequenceArray.push(sequence);
      }
    }
  }
  let lng = sequenceArray.length;
  //filter and sort array
  let filt = sequenceArray
    .filter((x) => x.length === sequenceArray[lng - 1].length)
    .sort();
  //return first chacter of the first string and length
  return `{${filt[0][0]}: ${filt[0].length}}`;
}
