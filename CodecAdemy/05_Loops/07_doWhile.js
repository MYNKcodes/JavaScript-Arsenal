//Do...While Statements

// We’d like a program to simulate part of the cake-baking process. 
//Depending on the recipe, a different number of cups of sugar is required.

// Write your code below
const cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

