function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log("ikke sorteret");
      return false;
    }
  }
  return true;
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let unsortedArray = [1, 2, 4, 5, 7, 9, 11];

let gentagelse = [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12];
let omvendt = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let random = [1, 8, 9, 4, 6, 7, 2, 5, 3];

let almomstSorted = [1, 2, 4, 4, 5, 3, 6, 7, 8];
let repepetive = [4, 4, 4, 4, 4, 4, 4];
console.log(sortedArray, isSorted(sortedArray));
console.log(unsortedArray, isSorted(unsortedArray));
console.log(gentagelse, isSorted(gentagelse));
console.log(omvendt, isSorted(omvendt));
console.log(random, isSorted(random));
console.log(almomstSorted, isSorted(almomstSorted));
console.log(repepetive, isSorted(repepetive));
