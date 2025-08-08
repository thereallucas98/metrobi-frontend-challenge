const generateIntegerArray = require("../utils/generate-integer-array");

/**
 * Write a javascript function that finds the duplicate items in any given array.
 */
function findDuplicates(array) {
  const seen = new Set();
  const duplicates = new Set();

  console.log("LOOKING FOR DUPLICATE ELEMENTS...");

  for (const item of array) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

console.log(
  "1# QUESTION - Write a javascript function that finds the duplicate items in any given array."
);
console.log("\n");
console.log(findDuplicates(generateIntegerArray(10, 1, 5, true)));
console.log(findDuplicates(generateIntegerArray(20, 1, 10, true)));
console.log(findDuplicates(generateIntegerArray(30, 1, 15, true)));
