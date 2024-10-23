import {
  binarySearchRecursive,
  compare,
  stringcomparefunction,
} from "./binarysearch_recursive.js";
const numbers = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
console.log(binarySearchRecursive(34, numbers, 0, numbers.length - 1, compare));

const ordliste = [
  "aarhus",
  "andedam",
  "andegård",
  "bondefanget",
  "bondegård",
  "børnearbejde",
  "gadefejer",
  "gær",
  "gødning",
  "gaardejer",
  "kalapøjser",
  "kalundborg",
  "kørt",
  "kårde",
  "ålborg",
];
console.log(
  binarySearchRecursive(
    "andegård",
    ordliste,
    0,
    ordliste.length - 1,
    stringcomparefunction
  )
);
