/**
 * for文
 */
console.log('【index】');
for (let index = 0; index < 5; index++) {
  console.log(index);
}

console.log('【sum1】');
let sum1 = 7;
for (let i = 1; i < 10; i++) {
  sum1 += i;
}
console.log(sum1);

console.log('【plus】');
let plus = 7;
for (let i = 1; i < 10; i++) {
  plus += i;
  console.log(plus);
}

/**
 * for文 配列
 */
const DAY_OF_WEEK = ['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.'];
for (let i = 0; i < DAY_OF_WEEK.length; i++) {
  console.log(DAY_OF_WEEK[i]);
}

/**
 * for文 カンマ演算子で複数の変数・変化式を記述する
 */
for (let i1 = 1, i2 = 10; i1 <= 10; i1++, i2--) {
  console.log(`${i1},${i2}`);
}
console.log('ループは正常に終了しました');

for (let incrementingValue = 1, decrementingValue = 100; incrementingValue <= 10; incrementingValue++, decrementingValue -= 2) {
  let sum = incrementingValue + decrementingValue;
  // decrementingValueが0未満になったらループを終了する
  if (decrementingValue < 0) {
    break;
  }
  let parity = sum % 2 === 0 ? 'even' : 'odd';
  console.log(`${incrementingValue} + ${decrementingValue} = ${sum} (${parity})`);
}
console.log('ループは正常に終了しました');

/**
 * for文 break文
 */
console.log('【result1】');
let result1 = 0;
for (let i = 1; i <= 10; i++) {
  result1 = i**2;
  if (result1 >= 10) {
    break;
  }
  console.log(result1);
}

console.log('【result2】');
let result2 = 0;
for (let i = 1; i <= 10; i++) {
  result2 = i**2;
  console.log(result2);
  if (result2 >= 10) {
    break;
  }
}

/**
 * for文 continue文
 */
console.log('【number】');
for (let number = 1; number <= 10; number++) {
  if (number % 2 != 0) {
    continue;
  }
  console.log(number);
}

// for_of文
console.log('【for_of文】');
const CHARACTER = ['リラックマ', 'コリラックマ', 'キイロイトリ', 'チャイロイコグマ'];
for (let member of CHARACTER) {
  console.log(member); /* 値を出力 */
}

// for_in文
console.log('【for_in文】');
const OSAKA = {food: 'たこ焼き', amusementPark: 'USJ', sightseeingSpot: 'グリコの看板'};
for (let osakaDescription in OSAKA) {
  console.log(osakaDescription); /* キーを出力 */
  console.log(OSAKA[osakaDescription]); /* 値を出力 */
}