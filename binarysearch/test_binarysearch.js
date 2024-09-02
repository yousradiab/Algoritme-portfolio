"use strict";
import {
  binarySearch,
  compare,
  stringcomparefunction,
} from "./binarysearch.js";

const numbers = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
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

console.log(binarySearch("gaardejer", ordliste, stringcomparefunction));
console.log(binarySearch("kørt", ordliste, stringcomparefunction));
console.log(binarySearch(28, numbers, compare));
console.log(binarySearch(23, numbers, compare));
console.log(binarySearch(21, numbers, compare));
