// プリントデバッグ
////////////////////////////////////////////////////////////////////////
// sort( )メソッド
const MEMBERS_LAST_NAME = [
  'サトウ', 'スズキ', 'タカハシ', 'タナカ', 'ワタナベ', 'イトウ', 'ヤマモト'
];
console.log(MEMBERS_LAST_NAME.sort());

////////////////////////////////////////////////////////////////////////
// sort( )メソッドに比較関数を指定する

// 昇順
const NUMBERS_ASC = [5, 2, 9, 1, 7];
NUMBERS_ASC.sort((a, b) => a - b);
console.log(NUMBERS_ASC);
// 降順
const NUMBERS_DES = [5, 2, 9, 1, 7];
NUMBERS_DES.sort((a, b) => b - a);
console.log(NUMBERS_DES);

////////////////////////////////////////////////////////////////////////
// sort( )メソッドは破壊的メソッド(元の配列が変更される)
const ORIGIN_ARRAY = [3, 1, 2];
console.log('ソート前：', ORIGIN_ARRAY);

ORIGIN_ARRAY.sort();
console.log('ソート後：', ORIGIN_ARRAY);

////////////////////////////////////////////////////////////////////////
// sort( )メソッドを使用する際のソート前の配列のコピーの作成と管理

// スプレッド演算子を使用する
const ORIGIN_ARRAY_2 = [3, 1, 2];
const SPREAD_OPERATOR_ARRAY = [...ORIGIN_ARRAY_2];

ORIGIN_ARRAY_2.sort(); // ソートする

console.log(ORIGIN_ARRAY_2);
console.log(SPREAD_OPERATOR_ARRAY);

// slice( )メソッドを使用する
const ORIGIN_ARRAY_3 = [3, 1, 2];
const SLICE_METHOD_ARRAY = ORIGIN_ARRAY_3.slice();

ORIGIN_ARRAY_3.sort(); // ソートする

console.log(ORIGIN_ARRAY_3);
console.log(SLICE_METHOD_ARRAY);

////////////////////////////////////////////////////////////////////////
/* 下記のコードでは 比較関数にlocaleCompare( )メソッドを指定し 並べ替えと繰り返しをsort( )メソッドが行っている */

// 文字列の配列 sort( )メソッド localeCompare( )メソッド

// 昇順
const STRINGS_ARRAY_ASC = ['バナナ', 'リンゴ', 'ミカン'];
STRINGS_ARRAY_ASC.sort((a, b) => a.localeCompare(b));
console.log(STRINGS_ARRAY_ASC);

// 降順
const STRINGS_ARRAY_DES = ['バナナ', 'リンゴ', 'ミカン'];
STRINGS_ARRAY_DES.sort((a, b) => b.localeCompare(a));
console.log(STRINGS_ARRAY_DES);


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