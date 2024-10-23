let count = 0;

function binarySearchRecursive(search, values, start, end, comparator) {
  let middle = Math.floor((start + end) / 2);
  count++;
  console.group(`recursion count, ${count}`);
  let c = comparator(search, values[middle]);
  console.log("start:", start);
  console.log("end:", end);
  console.log("middle:", middle);
  console.log("c:", c);
  console.groupEnd();

  if (start <= end) {
    if (c === 0) {
      console.groupEnd();
      count = 0;
      return middle;
    } else if (c > 0) {
      start = middle + 1;
      console.groupEnd();
      return binarySearchRecursive(search, values, start, end, comparator);
    } else if (c < 0) {
      end = middle - 1;
      console.groupEnd();
      return binarySearchRecursive(search, values, start, end, comparator);
    }
  }
  console.groupEnd();
  count = 0;
  return -1;
}

function compare(a, b) {
  return a - b;
}

function stringcomparefunction(a, b) {
  return a.localeCompare(b);
}

export { binarySearchRecursive, compare, stringcomparefunction };
