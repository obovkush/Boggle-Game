//Выбирает случайный кубик и случайную букву
function randomLetter() {
  const cubicsAll = ['ABCDEF',
                     'GHIJKL',
                     'MNOPQR',
                     'STUVWX',
                     'YZABCD',
                     'EFGHIJ',
                     'KLMNOP',
                     'QSTUVW',
                     'XYZABC',
                     'DEFGHI',
                     'JKLMNO',
                     'PQRSTU',
                     'VWXYZA',
                     'EIOUAE',
                     'IOUAEI',
                     'OUAEIO'];
  let i = Math.floor(Math.random() * 16);
  let j = Math.floor(Math.random() * 6);
  return cubicsAll[i][j];
}

//Формирует строку длиной n из случайных букв
function randomString(n) {
  let string = '';
  for(let i = 0; i < n; i++){
    string += randomLetter();
  }
return string;
}

//Формирует массив для поля игры
function createGameField() {
  let gameField = new Array(4).fill('____');
  return gameField.map(el => randomString(4));
}

//Проверяет слово на совпадение в строке
// function testWord(word) {
//   const arr = ['YBYS', 'OREW', 'KSEE', 'LOOK'];
//   if(word.length < 3) return `Слово длиной ${word.length}, длина должна быть не менее 3`
//   const regex = new RegExp(word, 'gi')
//   for(let i = 0; i < arr.length; i++) {
//     if(regex.test(arr[i])) return `Слово найдено в строке ${i + 1}`;
//   }
//   for(let i = 0; i < arr.length; i++)
//   return 'Слово не найдено';
// }
// console.log(testWord('look'));


export { createGameField };
