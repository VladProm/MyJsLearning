// BEGIN (write your solution here)
const sumDigits = (num) => {
  let str = String(num);
  let result = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    result = result + Number(str[i]);
    }
  return result;
};
console.log(sumDigits(999999999999));

const addDigits = (num) => {
  let result = num;
  while (result > 9) {
    result = sumDigits(result);
  }
  return result;
};
console.log(addDigits(999999999999));

// END
