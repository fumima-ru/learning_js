// プリントデバッグ
// console.log()メソッドを使用したプリントデバッグ例
function calcSum(value1, value2) {
  console.log(`引数の値：value1 = ${value1} / value2 = ${value2}`);
  const sum = value1 + value2;
  console.log(`処理の結果：sum = ${sum}`);  
  return sum;
}

const sum = calcSum(1, 2);
console.log(`calcSum関数の戻り値：${sum}`);