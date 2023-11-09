// 定数の値は省略できない
/* const noValue1;
console.log(noValue1); */
// 値を代入
/* noValue1 = 1;
console.log(noValue1); */

// 数値を代入
const number1 = 7;
const number2 = 10;
console.log(number1 + number2);
// 値の再代入
/* number2 = 20; 
console.log(number1 + number2); */

// 文字列
const nickname = 'fumima-ru';
console.log(`ニックネーム：${nickname}`);
// 文字列の値を結合
const introduction = 'ニックネームは';
console.log(introduction + nickname);


// 日付
const currentDate  = new Date();
console.log(currentDate);

// 関数
const greetFunction = () => console.log('こんにちは');
greetFunction();

// 定数を定数に代入
const value1 = 100;
const value2 = value1 + value1;
console.log(value1, value2);

// 定数をまとめて宣言する
const a = 1 , b = 2 , c = 3;
console.log(a, b, c);