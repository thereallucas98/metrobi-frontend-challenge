const generateIntegerArray = require("../utils/generate-integer-array");
const wait = require("../utils/wait");

/**
 * Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
   etc., seconds apart.
 */

console.log(
  "1# QUESTION - Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart."
);

async function printWithIncreasingDelay(items) {
  let delayInSeconds = 1;

  for (const item of items) {
    await wait(delayInSeconds * 1000);
    console.log(`${item} (${delayInSeconds}s after start)`);
    delayInSeconds *= 2;
  }
}

(async () => {
  const items = generateIntegerArray(5, 1, 10, false);
  console.log("Starting...");
  await printWithIncreasingDelay(items);
  console.log("Done.");
})();
