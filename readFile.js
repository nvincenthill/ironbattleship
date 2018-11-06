const fs = require("fs");
const processFile = require("./processFile");

const readFile = fileName => {
  console.log("reading the file..");
  let inputData = [];
  let filePath = `./data/${fileName}`;

  fs.readFile(filePath, function(err, data) {
    if (err) throw err;
    const rawData = data.toString().split("\n");
    for (let i = 0; i < rawData.length - 1; i++) {
      if (i > 1) {
        inputData.push([...rawData[i].split("")]);
      }
    }
    processFile(inputData, fileName);
  });
};

module.exports = readFile;
