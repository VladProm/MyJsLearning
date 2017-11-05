let multiplier = 10;
console.log(multiplier);
const deterministic = num => {
  console.log(multiplier++);
  return num * 10;
};
console.log(deterministic(15));
console.log(multiplier);
console.log(deterministic(20));
console.log(multiplier);
//simple github