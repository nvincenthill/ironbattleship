const fs = require("fs");

const writeFile = (outputData, fileName) => {
  console.log("writing the file..");
  const file = fs.createWriteStream(`./output/${fileName}.out`);

  file.on("error", function(err) {
    console.log(error);
  });

  outputData.forEach(function(el) {
    file.write(el.join("") + "\n");
  });

  file.end();
  console.log("Program complete - shutting down...");
};

module.exports = writeFile;
