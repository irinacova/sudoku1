const fs =require('fs');



//const arr = ar.split('').slice(0,81)
// console.log(arr)
function read(Nikita) {
  
const num = fs.readFileSync('./puzzles.txt','utf-8').split('\r\n').map((el)=> el.split(','));
return num[Nikita]
  // const z = 
  //  for(let i = 0; i < 15; i++){
  //   for(let z = 0; z < 9; z++){
  //   }
  //  }
}
console.log(read(process.argv[2]))
// function read(num) {
//   return num.slice('\n');
//   //const arr = ar.split('').slice(0,81)
// }

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
