// 一般的なエラーの種類

// 参照エラー (ReferenceError)
console.log(a); /* aが未定義 */

// 型エラー (TypeError)
let b = null;
b.toUpperCase(); /* toUpperCase()メソッドにnullを渡す */

// 構文エラー (SyntaxError)
console.log('c'; /* 括弧が閉じられていない */

// 範囲エラー (RangeError)
let number = 123.456;
let result = number.toFixed(-2); /* toFixed()メソッドに負の値を渡す */