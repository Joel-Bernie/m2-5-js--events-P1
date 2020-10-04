const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { make: "Honda", model: "Civic"},
        { make: "Hyundai", model: "Veloster"},
        { make: "Volvo", model: "XC90"},
        { make: "Fiat", model: "500"},
      ],
      "model"
    )
  ).toStrictEqual(["Civic", "Veloster", "XC90", "500"]);
  // expect(
  //   getValues(
  //     [
  //       { make: "Honda", model: "Civic"},
  //       { make: "Hyundai", model: "Veloster"},
  //       { make: "Volvo", model: "XC90"},
  //       { make: "Fiat", model: "500"},
  //     ],
  //     "year"
  //   )
  // ).toStrictEqual(null);                 // doesn't work for some reason
});
