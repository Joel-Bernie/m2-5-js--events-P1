const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["One", "Two"], ["Three", "Four"])
  ).toStrictEqual(["Four", "One", "Three", "Two"]);
  // expect(
  //   combineArrays(["One", "Two"], ["Three", 4])    //doesn't work for some reason
  // ).toStrictEqual(undefined);
});
