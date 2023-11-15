// アロー関数
const F1 = number => number + 1;
console.log(F1(1));


const F2 = (number1, number2, number3) => number1 + number2 + number3;
console.log(F2(1, 2, 3));


const F3 = () => console.log('引数がない場合は()が必要');
F3();


const F4 = () => {
  return 4;
  console.log(`return後の処理は実行されない`);
}
console.log(F4());


const F5 = (number1, number2) => {
  if (number1 > 100) {
    return number1;
  }
  return number2;
}
console.log(F5(70,200));


const F6 = (number1, number2, number3) => {
  if (number1 > 100) {
    return number1;
  } else if (number2 > 150) {
    return number2;
    console.log(`値を返すとその後の処理は実行されない`);
  } else {
    return number3;
  }
}
console.log(F6(70, 170, 270));


const F7 = number => {
  const F8 = 8;
  return number * F8;
}
console.log(F7(7));