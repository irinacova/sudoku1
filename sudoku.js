const fs =require('fs');
const num = fs.readFileSync('./puzzles.txt','utf-8');
//const ar = num.slice('\n')

//const arr = ar.split('').slice(0,81)
// console.log(arr)
// function read(arr) {
//    for(let i = 0; i < 9; i++){
//     for(let z = 0; i < 9; i++){
      
//     }
  
 
//    }

// }
function read(num) {
  return num.slice('\n')
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

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
