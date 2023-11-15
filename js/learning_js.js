// １：アロー関数
const CALC_SUM = (a, b, c) => {
  const result = a + b + c;
  return result;
}
console.log(CALC_SUM(1, 2, 3));


// ２：引数が1つの場合は()を省略できる
const OMITTING_PARENTHESES_1 = (a) => {
  return a + 2;
}
const OMITTING_PARENTHESES_2 = a => {
  return a + 3;
}
console.log(OMITTING_PARENTHESES_1(2));
console.log(OMITTING_PARENTHESES_2(3));


// ３：処理が１行の時は{}とreturnを省略できる
const OMITTING_CURLY_BRACKETS_AND_RETURN_1 = (b) => {
  return b + 4;
}
console.log(OMITTING_CURLY_BRACKETS_AND_RETURN_1(4));

const OMITTING_CURLY_BRACKETS_AND_RETURN_2 = (b) => b + 5;
console.log(OMITTING_CURLY_BRACKETS_AND_RETURN_2(5));


// ４：引数が1つかつ処理が１行なので(),{},returnを省略してみる
const TWO_AND_THREE = c => c + 6;
console.log(TWO_AND_THREE(6));


// ５：console.log
const TEST_5 = d => console.log(d + 7);
TEST_5(7);