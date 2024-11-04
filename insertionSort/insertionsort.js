let count = 0;
function insertionSortShift(arr) {
  //loop til at sortere array ved brug af insertion sort.
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Nuværende element der skal indsættes på korrekt position
    let j = i - 1;

    // Flytter elementer af arr[0..i-1], der er større end key, en position fremad
    while (j >= 0 && arr[j] > key) {
      console.log(`Sammenligner: ${arr[j]} og ${key}`);
      arr[j + 1] = arr[j];
      j = j - 1;
      count++;
    }
    arr[j + 1] = key; //indsætter key på sin rigtige plads
    console.log(`Indsætter: ${key} på position ${j + 1}`);
  }
  console.log("count", count);
}

// let arr = [12, 11, 13, 5, 6];
function prinArrray(arr) {
  console.log(arr.join(" "));
}

export { insertionSortShift, prinArrray };
