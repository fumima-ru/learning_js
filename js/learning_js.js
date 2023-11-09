// 変数の値を省略
let noValue1;
console.log(noValue1);
// 値を代入
noValue1 = 1;
console.log(noValue1);

// 数値を代入
let number1 = 7;
let number2 = 10;
console.log(number1 + number2);
// 値の再代入
number2 = 20; 
console.log(number1 + number2);

// 文字列
let nickname = 'fumima-ru';
console.log(`ニックネーム：${nickname}`);
// 文字列の値を結合
let introduction = 'ニックネームは';
console.log(introduction + nickname);


// 日付
let currentDate  = new Date();
console.log(currentDate);

// 関数
let greetFunction = () => console.log('こんにちは');
greetFunction();

// 変数を変数に代入
let value1 = 100;
let value2 = value1 + value1;
console.log(value1, value2);

// 変数をまとめて宣言する
let a = 1 , b = 2 , c = 3;
console.log(a, b, c);