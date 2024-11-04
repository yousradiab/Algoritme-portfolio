function simpleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (current > arr[j]) {
        swapIndex(i, j);
      }
    }
  }
  return arr;

  function swapIndex(indexA, indexB) {
    let swap = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = swap;
  }
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let unsortedArray = [1, 2, 4, 5, 7, 9, 11];

let gentagelse = [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12];
let omvendt = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let random = [1, 8, 9, 4, 6, 7, 2, 5, 3];

let almomstSorted = [1, 2, 4, 4, 5, 3, 6, 7, 8];
let repepetive = [4, 4, 4, 4, 4, 4, 4];
console.log(sortedArray, simpleSort(sortedArray));
console.log(unsortedArray, simpleSort(unsortedArray));
console.log(gentagelse, simpleSort(gentagelse));
console.log(omvendt, simpleSort(omvendt));
console.log(random, simpleSort(random));
console.log(almomstSorted, simpleSort(almomstSorted));
console.log(repepetive, simpleSort(repepetive));
