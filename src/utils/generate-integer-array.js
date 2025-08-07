function generateIntegerArray(length, min = 1, max = 100, allowDuplicates = true) {
  if (!allowDuplicates && (max - min + 1) < length) {
    throw new Error('Put more items in the list')
  }

  const result = [];

  while (result.length < length) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (allowDuplicates || !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

module.exports = generateIntegerArray;
