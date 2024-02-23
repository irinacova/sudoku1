const { log } = require('console');
const fs =require('fs');

const read = (Nikita) => {
const num = fs.readFileSync('./puzzles.txt','utf-8').split('\r\n')
return num[Nikita].split('')
}
// console.log(read(process.argv[2]))
// function func(tab){
// const res = [];
// for (let i = 0; i < 9; i++){
//   const arrItem = [];
//   for (let j = 0; j < 9; j++) {
//     const item = tab.pop();
//     arrItem.push(item)
//   }
//   res.push(arrItem)
//   return res
// }
// }

const tab = read(process.argv[2]);

const SIZE = 9;

    const res = tab.reduce(
        (acc, c) => {
            const lastIndexOfAcc = acc.length - 1;

            const lastItem = acc[lastIndexOfAcc];

            if (lastItem.length == SIZE) {
                acc.push([]);
            }

            const lastItemAfterCheck = acc[acc.length - 1];

            lastItemAfterCheck.push(c);

            return acc;
        },
        [[]]
    );

    console.table(res);
// console.log(tab);
// func(tab)
// console.table();

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
