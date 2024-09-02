"use strict";

function binarySearch(search, values, comfunc) {
  let min = 0;
  let max = values.length - 1;
  let found = false;

  while (!found && min <= max) {
    let middle = Math.floor((min + max) / 2);
    let c = comfunc(search, values[middle]);

    if (c === 0) {
      found = true;
      return values[middle];
    }
    if (c > 0) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
}

function stringcomparefunction(a, b) {
  return a.localeCompare(b);
}

function compare(a, b) {
  return a - b;
}

export { stringcomparefunction, binarySearch, compare };
