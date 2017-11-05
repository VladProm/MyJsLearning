  // BEGIN (write your solution here)
/*  const sequenceSum = (n) => {
    if (n === 1) {
      return 1;
    } else {
      return n + sequenceSum(n - 1);
    }
  }
  console.log(sequenceSum(20));
*/


const sequenceSum = (begin, end) => {
    if (begin === end) {
      return begin;
    } else if (begin > end) {
      return 0/0;
    }
      return (begin + sequenceSum(begin+ 1, end));
  }

/*  const sequenceSum = (begin, end) => {
    if (begin === end) {
      return begin;
    } else if (begin < end) {
      return (end + sequenceSum(begin, end - 1));
    } else if (begin > end) {
      return NaN;
    }
  }
*/
  console.log(sequenceSum(0, 1));
  console.log(typeof(sequenceSum(1, 1)));
  console.log(typeof(sequenceSum(1, 5)));
  console.log(typeof(sequenceSum(2, 6)));
  console.log(typeof(sequenceSum(-1, -1)));
  console.log(typeof(sequenceSum(-5, 4)));
  console.log(typeof(sequenceSum(2, 1)));
  console.log(isNaN(sequenceSum(2, 1)));
  console.log(typeof(sequenceSum(1, -5)));
  console.log(isNaN(sequenceSum(1, -5)));
