// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!



function addClose() {

  let closure = 'hello world';
  
  return function() {
    return closure;
  }
};

const newClosure = addClose();





// /* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// // ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   const newCounter = counter();
// };
// // Example usage: const newCounter = counter();
// // newCounter(); // 1
// // newCounter(); // 2

let count = () => {
  
  let num = 0;

  return function() {
   return  num += 1;
  }
}

const newCounter = count();

console.log(newCounter()); // 1
console.log(newCounter()); // 2


// // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// };

const counterFactory = () => {
  let num = 0;

  return {
    'increment': function() { 
      return num += 1},
    'decrement': function() { 
      return num -= 1}
  };
}

const up =  counterFactory(); // create new variable for increment
const down =  counterFactory(); // create new variable for decrement



console.log(up.increment());
console.log(up.increment());

console.log(down.decrement());
console.log(down.decrement());