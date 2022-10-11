/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

understand:
recursive
2 adjacent = 12

plan
if arr[0] + [1] === 12
if arr[0] + [1] !== 12
***********************************************************************/


function addToTwelve(arr) {
  debugger
  if (arr.length === 0) {
    return false
  }
  if (arr[0] + arr[1] === 12) {
    return true
  }
  debugger
  return addToTwelve(arr.slice(1))
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
// console.log(addToTwelve([1, 3, 4, 7, 6])); // false
// console.log(addToTwelve([1, 11, 4, 7, 6])); // true
// console.log(addToTwelve([1, 12, 4, 7, 6])); // false
// console.log(addToTwelve([1])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
