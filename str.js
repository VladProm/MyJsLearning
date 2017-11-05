const toUpperCase = str => str.toUpperCase();
const length = str => str.length;
const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let result = 0;
  for (let i = 0; i <= length(str) - 1; i++) {
    if (toUpperCase(str[i]) === str[i]) {
      result = result + 1;
    }
  }
  return result;
  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  //console.log('firstCount =', firstCount);
  const secondCount = bigLettersCount(second);
  //console.log('secondCount =', secondCount);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (secondCount > firstCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};
console.log(compare('AD', 'ad   sd'));

const greaterThan = (first, second) =>
  compare(first, second) === 1;
  //console.log('greaterThan', greaterThan('AD sdA', 'ad sd'));

const lessThan = (first, second) =>
  compare(first, second) === -1;
  //console.log('lessThan', lessThan('AD', 'ad   sd'));

const isEqual = (first, second) =>
  compare(first, second) === 0;
//console.log('isEqual', isEqual('AD', 'ad  sd'));


  console.log(greaterThan('AD', 'ad sd'), 'expect = true');
  console.log(greaterThan('AD', 'Ad sd'), 'expect = false');
  console.log(greaterThan('az', 'ad'), 'expect = false');
  console.log(greaterThan('ASDF', 'QWER'), 'expect = false');


  console.log(lessThan('ghe df', 'dfwe r D'), 'expect = true');
  console.log(lessThan('az', 'ad'), 'expect = false');
  console.log(lessThan('ASDF', 'QWER'), 'expect = false');


  console.log(isEqual('az', 'ad'), 'expect = true');
  console.log(isEqual('az', 'adA'), 'expect = false');
  console.log(isEqual('az', ' ad'), 'expect = false');
