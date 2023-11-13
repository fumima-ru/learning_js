// 関数
function f1(number) {
  const RESULT = number + 1;
  return RESULT; 
}
console.log(`f1:${f1(1)}`);

function f2(number1,number2,number3) {
  const RESULT = number1 + number2 + number3;
  return RESULT;
}
console.log(`f2:${f2(1, 2, 3)}`);

// 引数のない関数
function f3() {
  console.log('f3:引数のない関数');
  return 3;
}
f3();
console.log(`f3:${f3()}`);

// 戻り値(return)のない関数
function f4() {
  console.log('f4:戻り値(return)のない関数');
}
f4();

// return後の処理は実行されない
function f5() {
  return 5;
  console.log('return後の処理は実行されない');
}
console.log(`f5:${f5()}`);

// returnは複数 記述できる
function f6(number1, number2) {
  if (number1 > 100) {
    return number1;
  }
  return number2;
}
console.log(`f6:${f6(60, 160)}`);

// returnは複数 記述できるが値を返すとその後の処理は実行されない
function f7(number1, number2, number3) {
  if (number1 > 100) {
    return number1;
  } else if (number2 > 150) {
    return number2;
    console.log('値を返すとその後の処理は実行されない');
  } else {
    return number3;
  }
}
console.log(`f7:${f7(70, 170, 270)}`);

// 戻り値を定数に代入する
function f8(number1, number2) {
  const RESULT = number1 * number2;
  return RESULT;
}
const F8_RESULT = f8(8, 10);
console.log(`f8:${F8_RESULT}`);