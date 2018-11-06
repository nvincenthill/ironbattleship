const writeFile = require("./writeFile");

const processFile = (data, fileName) => {
  console.log("processing the file..");
  let outputData = createOutputGrid(data);
  writeFile(outputData, fileName);
};

const createOutputGrid = data => {
  const validNextMove = "+";
  const invalidNextMove = "-";
  let hitCounter = 0;

  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === "x") {
        hitCounter += 1;
        data[row][col] = invalidNextMove;
        let validMoves = validateOrtho(row, col);
        for (let j = 0; j < validMoves.length; j++) {
          data[validMoves[j][0]][validMoves[j][1]] = validNextMove;
        }
      } else if (data[row][col] === "?" || data[row][col] === "*") {
        data[row][col] = invalidNextMove;
      }
    }
  }

  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === "." && hitCounter !== 0) {
        data[row][col] = invalidNextMove;
      } else {
        if (data[row][col] === ".") {
          data[row][col] = validNextMove;
        }
      }
    }
  }

  return data;
};

validateOrtho = (row, col) => {
  let validMoves = [];
  let top = [row, col - 1];
  let right = [row + 1, col];
  let left = [row - 1, col];
  let bottom = [row, col + 1];

  validMoves.push(top);
  validMoves.push(right);
  validMoves.push(left);
  validMoves.push(bottom);

  return validMoves;
};

checkNeighbors = (row, col) => {};

module.exports = processFile;
