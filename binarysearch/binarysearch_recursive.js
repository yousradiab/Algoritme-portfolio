let count = 0;

function binarySearchRecursive(search, values, start, end, comparator) {
  let middle = Math.floor((start + end) / 2);
  count++;
  let c = comparator(search, values[middle]);
  console.log("start:", start);
  console.log("end:", end);
  console.log("middle:", middle);
  console.log("c:", c);

  if (start <= end) {
    if (c === 0) {
      console.log("count", count);
      return middle;
    } else if (c > 0) {
      start = middle + 1;
      return binarySearchRecursive(search, values, start, end, comparator);
    } else if (c < 0) {
      end = middle - 1;
      return binarySearchRecursive(search, values, start, end, comparator);
    }
  }
  console.log("count", count);

  return -1;
}

function compare(a, b) {
  return a - b;
}

// test function
const numbers = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
console.log(binarySearchRecursive(28, numbers, 0, numbers.length - 1, compare));

export { binarySearchRecursive, compare };
