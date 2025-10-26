const array = [1, 2, 3, 4, 5, 6];
const idx = 7;
const val = 'A';

function modifyArray(array, idx, val) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (!array.length) {
    return [];
  }

  if (idx > array.length) {
    array.push(val);
    return array;
  }

  const output = [];

  for (let i = 0; i < array.length + 1; i++) {
    if (i > idx) {
      output.push(array[i - 1]);
    } else if (i === idx) {
      output.push(val);
    } else {
      output.push(array[i]);
    }
  }

  return output;
}

console.log(modifyArray(array, idx, val));
