/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
// 1. accept an array and an optional cb
// 2. if cb is not passed in, return the smallest value in array
// 3. if cb is passed in, return the result of smallest value being passed into cb

function minValueCallback(array, cb) {
  let result = 0;
  if (cb === undefined) {
    let smallest = array[0];  
    array.forEach((el) => {
      if (el < smallest) {
        result = el;
      }
    })
    
  } else {
    let smallest = cb(array[0]);
    array.forEach((el) => {
      if (cb(el) < smallest) {
        result = cb(el);
      }
    })
  }
  return result;
}

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
