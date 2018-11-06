const processFile = require("../processFile");

// unit tests for file processing

// I really wanted to write unit tests but I couldn't figure out quickly how to simulate user responses within the context of the npm prompt package for handling user input.

// My development process was much slower due to not building a testing framework at the start after completing the file I/0. This should have been my priority from the beginning.

// mocha boilerplate

// var assert = require("assert");

// describe("Basic Mocha String Test", function() {
//   it("should return number of characters in a string", function() {
//     assert.equal("Hello".length, 4);
//   });
//   it("should return first character of the string", function() {
//     assert.equal("Hello".charAt(0), "H");
//   });
// });
