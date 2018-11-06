// A complete solution for node.js command-line interfaces, inspired by Ruby's commander.
const program = require("commander");

// A beautiful command-line user input prompt for node.js
const prompt = require("prompt");

// Node.js file system async/non-blocking I/O
const readFile = require("./readFile");

program.version("1.0.0").parse(process.argv);

console.log(
  "Welcome to Nick's battleship analytics and move prediction engine!"
);

// const test1Name = "01-no-shots";
// const test2Name = "02-misses";
// const test3Name = "03-misses-and-sunks";
// const test4Name = "04-hits-and-misses";
// const test5Name = "05-directional";
// const test6Name = "06-directional-one-end";
// const test7Name = "07-directional-priority";
// const test8Name = "08-prioritization";
// const test9Name = "09-prioritization-with-directionality";
// const test10Name = "10-mixed-priority";
// const test11Name = "11-combinatorial-prioritization";

prompt.get(["filename"], function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log("file: " + result.filename);
  readFile(result.filename);
});
