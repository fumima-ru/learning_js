// 真偽値(Boolean)とは真(True)または偽(False)を表すデータ型

const NUMBER1 = 10;
const NUMBER2 = 20;
console.log(NUMBER1 < NUMBER2); /* true */
console.log(NUMBER1 > NUMBER2); /* false */

const USER_NAME = 'フミマール';
if (USER_NAME) {
  console.log(`こんにちは${USER_NAME}さん`); /* true */
}

const ADDRESS = '';
// ADDRESSが空の場合は出力しない
if (ADDRESS) { 
  console.log(`こんにちは${ADDRESS}の${USER_NAME}さん`); /* false */
}

// 真偽値以外の型に!を付与すると真偽値に変換される
// (注)console.log(true);は真偽値
console.log(!'フミマール');  /* false */
console.log(!true);         /* false */
console.log(![1, 2, 3]);    /* false */

console.log(!!'フミマール'); /* true */
console.log(!!true);        /* true */
console.log(!![1, 2, 3]);   /* true */


// 真偽値とincludes( )メソッド
/* includes( )メソッドは配列や文字列に特定の要素や部分文字列が含まれているか判定し真偽値を返す */
console.log('【文字列に部分文字列が含まれているか】');
const FLAG_1 = 'フミマール'.includes('ミ');
console.log(FLAG_1); /* true */

const FLAG_2 = 'フミマール'.includes('ア');
console.log(FLAG_2); /* false */


console.log('【配列に指定の要素が含まれているか】');
const ARRAY = [1, 2, 3];

const RESPONSE_1 = ARRAY.includes(3);
console.log(RESPONSE_1); /* true */

const RESPONSE_2 = ARRAY.includes(10);
console.log(RESPONSE_2); /* false */

// 配列の3つ目以降の要素に1が含まれているか
const RESPONSE_3 = ARRAY.includes(1, 2);
console.log(RESPONSE_3); /* false */


console.log('【指定した条件の部分文字列が文字列に含まれているか】');
const STRING_1 = 'あいうえお';

const RESPONSE_4 = STRING_1.includes('あい');
console.log(RESPONSE_4); /* true */

// 配列の2文字以降に'あい'が含まれているか
const RESPONSE_5 = STRING_1.includes('あい', 1);
console.log(RESPONSE_5); /* false */


console.log('【includes( )メソッドは大文字と小文字を区別する】');
const STRING_2 = 'abcd';

const RESPONSE_6 = STRING_2.includes('ab');
console.log(RESPONSE_6); /* true */

const RESPONSE_7 = STRING_2.includes('AB');
console.log(RESPONSE_7); /* false */


// some( )メソッド
// 指定の条件を満たす要素が配列内に１つ以上あるか判定する(true || false)
const NUMBERS = [1, 2, 3, 4, 5];
const HAS_EVEN_NUMBER = NUMBERS.some(number => number % 2 === 0);

if (HAS_EVEN_NUMBER) {
  console.log('配列には偶数が含まれています');
} else {
  console.log('配列には偶数が含まれていません');
}
// コンソール出力結果・・・配列には偶数が含まれています

// 上記のif文を三項演算子を使用し１行で記述
console.log(`配列には${HAS_EVEN_NUMBER ? '偶数が含まれています' : '配列には偶数が含まれていません'}`); 
// コンソール出力結果・・・配列には偶数が含まれています


// navigator.userAgent
// ・ユーザーエージェントを取得する
// ユーザーエージェント
// ・ウェブにアクセスしているソフトウェアやデバイス等をサーバーに伝えるための識別子
// 　(navigatorオブジェクトのuserAgentプロパティに格納されている)
const USER_AGENT_STRING = navigator.userAgent;
// 自身のユーザーエージェントがコンソールに出力される
console.log(`ユーザーエージェント文字列: ${USER_AGENT_STRING}`);

// 利用しているブラウザによって処理を分岐
if (USER_AGENT_STRING.includes('Chrome')) {
  console.log(`Chromeブラウザを利用しています`);
} else if (USER_AGENT_STRING.includes(`Firefox`)) {
  console.log(`Firefoxブラウザを利用しています`);
} else {
  console.log('その他のブラウザを利用しています');
}


// ユーザーエージェント文字列を利用しモバイル向けとPC向けの処理を分岐する
// const 定数名 = [配列].some(仮引数 => 条件);
// const IS_MOBILE・・・真偽値が代入される
// .some();・・・配列の要素を１つずつ仮引数(device)に渡し１つでも条件を満たすものがあればtrueそうでなければfalseを返す
// 条件・・・ユーザーエージェント文字列に仮引数(device)へ渡した要素や部分文字列が含まれているかincludes( )メソッドを使用して判定する

const IS_MOBILE = ['iPhone', 'iPad', 'Android', 'Mobile'].some(device => navigator.userAgent.includes(device));

if (IS_MOBILE) {
  // モバイル向けの処理
} else {
  // PC向けの処理
}