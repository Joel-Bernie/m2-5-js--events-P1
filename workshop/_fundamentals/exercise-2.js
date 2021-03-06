// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  // Insert missing solution please
  if(arr1.forEach(item => 
    (typeof item !== "string") === true) || arr2.forEach(item => 
      (typeof item !== "string") === true)) {
    return undefined; //doesn't work for some reason
  } else {
  let combined = arr1.concat(arr2);
  let sorted = combined.sort();
  return sorted
  } 
};

// 2. Do a console.log to verify your function.
  console.log(combineArrays([null, 88], [undefined, undefined]));   // this should return undefined but doesn't?
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
