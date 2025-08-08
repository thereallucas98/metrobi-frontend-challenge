function generateRandomCarrotTypes(maxItems = 10) {
  const numItems = Math.floor(Math.random() * maxItems) + 1;
  const carrotTypes = [];

  for (let i = 0; i < numItems; i++) {
    const kg = Math.floor(Math.random() * 10) + 1;
    const price = Math.floor(Math.random() * 200) + 20;
    carrotTypes.push({ kg, price });
  }

  return carrotTypes;
}

module.exports = generateRandomCarrotTypes;
