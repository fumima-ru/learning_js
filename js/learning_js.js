// プリントデバッグ

// sort( )メソッド
const MEMBERS_LAST_NAME = [
  'サトウ', 'スズキ', 'タカハシ', 'タナカ', 'ワタナベ', 'イトウ', 'ヤマモト'
];
console.log(MEMBERS_LAST_NAME.sort());

// sort( )メソッドに比較関数を指定する
// 昇順
const NUMBERS_ASC = [5, 2, 9, 1, 7];
NUMBERS_ASC.sort((a, b) => a - b);
console.log(NUMBERS_ASC);

// 降順
const NUMBERS_DES = [5, 2, 9, 1, 7];
NUMBERS_DES.sort((a, b) => b - a);
console.log(NUMBERS_DES);


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
console.log("ランダムな配列:", RANDOM_ARRAY);
console.log("探す値:", TARGET);
console.log(binarySearch(RANDOM_ARRAY, TARGET)); */