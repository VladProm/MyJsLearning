const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const solution = (str) => {
  let str1 = '';
  //console.log ('str =', str);
  //console.log ('str1 =', str1);
  //console.log ('str[0] =', toUpperCase(str[0]));
  for (let i = 0; i <= length(str) - 1; i++) {
   if (i === 0 && str[i] !== " ") {
        str1 = toUpperCase(str[0]);
        console.log ('str1[0] =', str1);
    } else if (str[i] !== " " && str[i-1] === " ") {
      str1 = str1 + str[i];
      //console.log ('str1[i] =', str1);
    } else {
      str1 = str1 + toUpperCase(str[i]);
    }
      //toUpperCase(str1[i]);
      console.log ('str1[i] =', str1);
    }
  return str1;
};
console.log(solution('hello, world!'));
console.log(solution('  many different words inside sentence  '));
