//I didnt quite finish this task

function frequency(array) {
  let sorted = array.sort((a, b) => {
    return a - b;
  });
  // Create two arrays one for frequency and the other for element
  var element = [],
    frequency = [],
    prev;

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== prev) {
      element.push(array[i]);
      frequency.push(1);
    } else {
      frequency[frequency.length - 1]++;
    }
    prev = array[i];
  }

  //Find the second lowest
  let secondMin = Math.min().apply(
    null,
    frequency.filter((n) => n != min)
  );
  console.log([element, frequency]);
}

frequency([3, 4, 2, 5, 5, 6, 4, 3, 4, 2, 2, 1, 1, 1, 100]);
