// プリントデバッグ

////////////////////////////////////////////////////////////////////////
// オブジェクトの配列を特定のプロパティでソートする
const SIBLINGS = [
  { name: "太郎", age: 20 },
  { name: "花子", age: 22 },
  { name: "健太", age: 18 }
];
SIBLINGS.sort((a, b) => a.age - b.age);
console.log(SIBLINGS);

////////////////////////////////////////////////////////////////////////
// try-catch文
try {
  // 未定義の関数を呼び出し故意にエラーを発生させる
  undefinedFunction();
} catch (error) {
  // エラーをcatchした場合の処理
  console.error('エラーが発生しました:', error.message);
}

console.log('エラー発生後も処理が続行される');

////////////////////////////////////////////////////////////////////////
// throw文とtry-catch文
function validateAge(age) {
  if (typeof age !== 'number' || age < 0) {
    throw new Error('正しい年齢を入力してください');
  }
  return '承認されました';
}

try {
  console.log(validateAge(-15));
} catch (error) {
  console.error('エラーが発生しました:', error.message);
}

try {
  console.log(validateAge(十五));
} catch (error) {
  console.error('エラーが発生しました:', error.message);
}

try {
  console.log(validateAge('十五'));
} catch (error) {
  console.error('エラーが発生しました:', error.message);
}

try {
  console.log(validateAge(15));
} catch (error) {
  console.error('エラーが発生しました:', error.message);
}

////////////////////////////////////////////////////////////////////////
// try-catch-finally文　finallyブロック

// 例外を発生させない
function withoutException() {
  return "withoutExceptionは例外が発生する関数ではありません";
}

// 例外を発生させる
function withException() {
  throw new Error("withExceptionは例外を発生させる関数です");
}

// 例外を発生させない関数を試す
try {
  let withoutExceptionReturnvalue = withoutException();
  console.log("withoutExceptionのtryブロック:", withoutExceptionReturnvalue);
} catch (error) {
  console.error("withoutExceptionのcatchブロック:", error.message);
} finally {
  console.log("withoutExceptionのfinallyブロック: 例外発生の有無にかかわらず処理を行う");
}

// 例外を発生させる関数を試す
try {
  let withExceptionReturnvalue = withException();
  console.log("withExceptionのtryブロック:", withExceptionReturnvalue);
} catch (error) {
  console.error("withExceptionのcatchブロック:", error.message);
} finally {
  console.log("withExceptionのfinallyブロック: 例外発生の有無にかかわらず処理を行う");
}

console.log('エラー発生後も処理は続行されています');


// ※下記のコードを細分化して学んでいますが下記のコードに間違いがあれば都度、修正します

// 2桁のランダムな数値の配列を生成
/* const RANDOM_ARRAY = [12, 5, 34, 22, 8, 41, 18, 91, 30, 55, 67, 49].sort((a, b) => a - b);
console.log(RANDOM_ARRAY); */

// 二分探索関数
/* function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return `ターゲット ${target} は配列の ${mid} 番目にあります。`;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return `ターゲット ${target} は配列に見つかりませんでした。`;
} */

// 使用例
/* const TARGET = 22; // 探す値
console.log('ランダムな配列:', RANDOM_ARRAY);
console.log('探す値:', TARGET);
console.log(binarySearch(RANDOM_ARRAY, TARGET)); */