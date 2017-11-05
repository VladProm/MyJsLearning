//мое решение
/*const smallestDivisor = (num) => {
  const iter = (counter, acc) => {
    if (num === 1) {
      return acc;
    } else if (num%2 === 0) {
      return 2;
    } else if (num%counter === 0) {
      return acc;
    }
    return iter(counter + 1, acc = counter + 1);
  };
  return iter(2, 1);
};
*/

//решение hexlet
const smallestDivisor = (num) => {
const iter = (acc) => {
    // We use 'num / 2' in the condition below, and not 'num'.
    // This is a simple optimization: a number cannot be divided
    // by a number larger than its half.
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
};

console.log(smallestDivisor(1), '1');
console.log(smallestDivisor(3), '3');
console.log(smallestDivisor(4), '2');
console.log(smallestDivisor(8), '2');
console.log(smallestDivisor(9), '3');
console.log(smallestDivisor(17), '17');
console.log(smallestDivisor(15), '3');
console.log(smallestDivisor(121), '11');
