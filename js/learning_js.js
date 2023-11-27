// switch文
console.log('【COMING_1】');
const COMING_1 = 'リラックマ';
switch (COMING_1) {
  case 'リラックマ':
    console.log('リラックマが来ました');
    break;
  case 'フミマール':
    console.log('フミマールが来ました');
    break;
  default:
    console.log('お客様が来ました');
    break;
}

// break;を記述しないcaseがある場合
// 該当するcaseからbreak;までの全ての処理
// または該当するcaseから全ての処理が実行される
console.log('【COMING_2】');
const COMING_2 = 'キイロイトリ';
switch (COMING_2) {
  case 'コリラックマ':
    console.log('コリラックマが来ました');
  case 'キイロイトリ':
    console.log('コリラックマかキイロイトリが来ました');
    // break;
  default:
    console.log('お客様も来ました');
    // break;
}

// defaultは省略可
console.log('【COMING_3】');
const COMING_3 = 'チャイロイコグマ';
switch (COMING_3) {
  case 'チャイロイコグマ':
    console.log('チャイロイコグマが来ました');
}

// switch文は厳密等価比較
console.log('【STRING】');
const STRING = '70';
switch (STRING) {
  case 70:
    console.log('数値の70です');
    break;
  case '70':
    console.log('文字列の70です');
    break;
}