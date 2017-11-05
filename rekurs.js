  // BEGIN (write your solution here)
  const sequenceSum = (begin, end) => {
    if (end === begin) {
      return begin;
    } else if (begin > end) {
      return NaN;
    }
    else {
      return end + sequenceSum(end - 1);
    }
  }
  console.log(sequenceSum(2, 6));
