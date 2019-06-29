// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/



// getLength passes the length of the array into the callback.

const myArr = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  return cb();
}

console.log(getLength(myArr, function () {
  return myArr.length;
}) );


// last passes the last item of the array into the callback.

function last(arr, cb) {
  return cb(arr);
}

console.log(last(myArr, function () {
  return myArr[myArr.length - 1];
}));

// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {

  return cb(x, y);
}

console.log(sumNums(2, 5, function(a, b) {
  return a + b;
}));



  // multiplyNums multiplies two numbers and passes the result to the callback.

  
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiply(a, b) {
  return a * b;
}


console.log(multiplyNums(5, 2, multiply))

// =========================================================================================

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


function contains(item, list, cb) {
  return cb(item, list);
}

const cb = function (item, list) {
  if (list.includes(item)) {
    return true;
  }
    return false;
};

console.log(contains(9, [4, 9, 12, 18], cb)); // true
 

/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  const dupes = [1, 2, 19, 4, 2, 1, 88, 88, 0];
  
  function noDupes(array) {
    return  [...new Set(array)];
  };

  const removeDuplicates = function (array, cb) {
    return cb(array);
};



console.log(removeDuplicates(dupes, noDupes));



