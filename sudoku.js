/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
let boardString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89-- ";
function solve(boardString) {
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let fillArr = [];
  let resArrV = [];

  for (let j = 0; j < 81; j += 9) {
    resArrV.push(boardString.split("").splice(j, 9));
  }
  for (let i = 0; i < resArrV.length; i++) {
    numArr.forEach((el) => {
      if (!resArrV[i].includes(el)) {
        fillArr.push(el);
      }
    });
    let f = 0;
    resArrV[i].forEach((element, index) => {
      if (element === "-") {
        resArrV[i][index] = fillArr[f];
        f++;
      }
    });
    //console.log(fillArr);
    fillArr = [];
  }
  return resArrV;
}

//console.log(solve(boardString));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let str = board.flat().join("");
  let strArray = "";
  //let exp = /(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})\D*(\d{9})/;
  //    str.replace(exp,'$1  $2  $3 $4 $5 $6 $7 $8 $9');
  //for (let j = 0; j < 81; j++) {
  for (let j = 0; j < 81; j += 9) {
    strArray += str.slice(j, j+ 9) + '\n' 
  }
  // strArray += str[j]
  //if(j%9===0){
  // strArray += '\n'
  // }
  //}
  console.log(strArray);
}

prettyBoard(solve(boardString));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
