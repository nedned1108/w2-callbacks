/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/
// 1. accept an array and a cb
// 2. function call the cb for each el of array, passing in the element and its index
// 3. return a boolean indicating whether
// or not exactly one element of the array results in true when passed into the callback.

function one(array, cb) {
  let res = [];
  array.forEach((el, i) => {
    if (cb(el, i)) {
      res.push(el)
    }
  })
  if (res.length === 1) {
    return true;
  }
  return false;
}

let result1 = one(['x', 'y', 'z'], function(el) {
  return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
  return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
  return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
  return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
  return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
  return el.length === idx;
});
console.log(result6);   // true

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = one;
} catch(e) {
  return null;
}
