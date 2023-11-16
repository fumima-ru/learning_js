/** JSDocコメント(１行の場合) */

// JSDocコメントとは注釈(アノテーション)を追加するためのマークアップ言語

// 関数名については出来るだけテンプレートを使用しJSDocコメントを分かりやすくした方が 関数名を考える手間が減って時短できそう

// 下記は複数行のJSDocコメント
/**
 * 税込みの値段を返す関数
 * @param price 価格
 * @param tax 税率
 */
function calcFunction(price, tax = 0.08) {
  const RESULT = price + price * tax;
  return RESULT;
}

// taxの引数を省略すると初期値の 0.08 が使用される
const RESULT_1 = calcFunction(100);
console.log(RESULT_1);

// taxの引数を指定すると その値が使用される
const RESULT_2 = calcFunction(100, 0.1);
console.log(RESULT_2);