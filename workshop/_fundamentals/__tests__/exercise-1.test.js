const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["Joel", "Bernstein"])).toBe(13);
  // expect(letterCount(["Joel Bernstein"])).toBe(13); // this fails despite asking to globally remove all empty spaces?
  expect(letterCount(["Hello", "World"])).toBe(10); 
});
