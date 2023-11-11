// 比較演算子
console.log('==');
console.log('たこ焼き' == 'たこ焼き');
console.log('たこ焼き' == "豚まん");
console.log('');

console.log('!=');
console.log('たこ焼き' != 'たこ焼き');
console.log('たこ焼き' != "豚まん");
console.log('');

console.log('>,>=,<,<=');
console.log(1 > 7);
console.log(1 >= 1);
console.log(1 < 7);
console.log(7 <= 7);
console.log('');

// 等価演算子と厳密等価演算子
console.log('==,!=,===,!==');
console.log(1 == 1);
console.log(1 == '1');
console.log(1 === 1);
console.log(1 === '1');
console.log(1 != 1);
console.log(1 !== 1);
console.log(1 !== '1');
console.log(1 == 1.0);
console.log(1 === 1.0);
console.log('');

// 配列 オブジェクト
console.log('配列');
console.log('・参照先が同じ場合にのみ等しくなる');
const ARRAY1 = [1, 2, 3];
const ARRAY2 = [1, 2, 3];
console.log(ARRAY1 == ARRAY2);

const ARRAY3 = [1, 2, 3];
const ARRAY4 = ARRAY3;
console.log(ARRAY3 == ARRAY4);
console.log(ARRAY3 === ARRAY4);
console.log('');

console.log('配列の中身を変えてみる');
const ARRAY5 = [1, 2, 3];
const ARRAY6 = ARRAY5;
console.log(ARRAY5, ARRAY6);
ARRAY5[2] = 7;
console.log(ARRAY5, ARRAY6);
console.log(ARRAY5 === ARRAY6);

const ARRAY7 = [1, 2, 3];
const ARRAY8 = ARRAY7;
console.log(ARRAY7, ARRAY8);
ARRAY8[2] = 10;
console.log(ARRAY7, ARRAY8);
console.log(ARRAY7 === ARRAY8);
console.log('');

console.log('オブジェクト');
console.log('・参照先が同じ場合にのみ等しくなる');
const OBJECT1 = {number1: 1, number2: 2, number3: 3,};
const OBJECT2 = {number1: 1, number2: 2, number3: 3,};
console.log(OBJECT1 == OBJECT2);

const OBJECT3 = {number1: 1, number2: 2, number3: 3,};
const OBJECT4 = OBJECT3;
console.log(OBJECT3 == OBJECT4);