// Exercise 2: Single Number

const singleNumber = function (numbers) {
  // Start coding here
  const collection = {};
  const haveOne = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!collection[numbers[i]]) {
      collection[numbers[i]] = 1;
    } else {
      collection[numbers[i]]++;
    }
  }
  for (let i in collection) {
    if (collection[i] === 1) {
      haveOne.push(parseInt(i));
    }
  }
  return haveOne;
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
