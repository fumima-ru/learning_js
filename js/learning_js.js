/** 
 * 引数の合計値を返す関数
 * @param prices 関数の仮引数（パラメーター）
 * @returns {number} 関数の戻り値 {型}
 */
function calcSum(...prices) {
  let result = 0;
  for (const VALUE of prices) {
    result += VALUE;
  }
  return result;
}

const RESULT_1 = calcSum(10, 20);
console.log(RESULT_1);
const RESULT_2 = calcSum(100, 200, 300);
console.log(RESULT_2);


// for...of文
for (const VALUE of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  console.log(VALUE);
}


// 残余引数
const REST_ARGUMENTS = (...array) => {
  const RESULT = array;
  console.log(RESULT);
}

REST_ARGUMENTS(11, 12, 13, 14, 15, 16, 17);