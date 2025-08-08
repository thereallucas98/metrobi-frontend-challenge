const generateRandomCarrotTypes = require("../utils/generate-random-carrot-types");
const generateRandomCapacity = require("../utils/generate-random-capacity");
/**
 * 
 * Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold.
Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)
 */

console.log(
  "7# QUESTION - Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold."
);

function getMaxValue(carrotTypes, capacity) {
  const sorted = carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let carrot of sorted) {
    if (remainingCapacity === 0) break;

    if (carrot.kg <= remainingCapacity) {
      totalValue += carrot.price;
      remainingCapacity -= carrot.kg;
    } else {
      let fraction = remainingCapacity / carrot.kg;
      totalValue += carrot.price * fraction;
      remainingCapacity = 0;
    }
  }

  return totalValue;
}

const carrotTypes = generateRandomCarrotTypes();
const capacity = generateRandomCapacity();

console.log(getMaxValue(carrotTypes, capacity));
