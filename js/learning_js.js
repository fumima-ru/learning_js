// while (条件式) {
  // 繰り返す処理;
  // ・
  // ・
// }

// while文
console.log('【numberToAdd1】');
let numberToAdd1 = 0;
while (numberToAdd1 < 10) {
  console.log(numberToAdd1);
  numberToAdd1++;
}

// while文 break文
console.log('【numberToAdd2】');
let numberToAdd2 = 0;
while (numberToAdd2 < 10) {
  console.log(numberToAdd2);
  numberToAdd2++;
  // 3になったら その旨を出力してbreak;
  if (numberToAdd2 === 3) {
    console.log('0から2までを出力して終了しました');
    break;
  }
}

// while文 continue文
console.log('【numberToAdd3】');
let numberToAdd3 = 0;
while (numberToAdd3 < 10) {
  // 偶数の場合1を足してスキップ
  if (numberToAdd3 % 2 === 0) {
    numberToAdd3++;
    continue;
  }
  console.log(numberToAdd3);
  numberToAdd3++;
}

// while文 配列
console.log('【array[i]】');
let array = [1, 3, 5, 7, 9];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}