"use strict";
/**
 * 1. Выведите в консоль таблицу умножения
 * пример (частично):
 *   1 2 3 4
 *2 2 4 6 8
 *3 3 6 9 12
 *4 4 8 12 16 
 */

let printRow = [];

function printMultiplicationTable() {
  for (let rows = 1; rows <= 9; rows++) {
    for (let columns = 1; columns <= 9; columns++) {
      printRow.push(rows * columns);
    }
    console.log(printRow.join(' | '));
    printRow = [];
  }
}