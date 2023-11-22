// if文
const PRICE_1 = 30;

if (PRICE_1 >= 50) {
  alert('値段は５０円以上です');
} else if (PRICE_1 >= 10) {
  alert('値段は１０円以上５０円未満です');
} else {
  alert('値段は１０円未満です');
}

const RANDOM_NUMBER_1 = Math.random() * 10;
console.log (`生成された乱数は四捨五入して整数にすると${Math.round(RANDOM_NUMBER_1)}です`);
// １行の場合は{ }を省略できる
if (RANDOM_NUMBER_1 >= 5) console.log(`生成された乱数は5以上10未満で${RANDOM_NUMBER_1}です`);
if (RANDOM_NUMBER_1 < 5) console.log(`生成された乱数は0以上5未満で${RANDOM_NUMBER_1}です`);


// Math.randomメソッド
const RANDOM_NUMBER_2 = Math.random();
console.log(RANDOM_NUMBER_2);

const RANDOM_NUMBER_3 = Math.random() * 10;
console.log(RANDOM_NUMBER_3);

const RANDOM_NUMBER_4 = Math.random() * 10;
console.log(`生成された乱数【${Math.round(RANDOM_NUMBER_4)}】は0以上10以下の整数です`);

const RANDOM_NUMBER_5 = Math.ceil(Math.random() * 10);
console.log(`生成された乱数【${RANDOM_NUMBER_5}】は0以上10以下の整数です`);


// 浮動小数点誤差
console.log(0.1);
console.log(0.2);

// 0.3にはならない
console.log(0.1 + 0.2);

// 0.3になったが・・・(下記に続く)
console.log(((0.1 * 10) + (0.2 * 10)) / 10);

// この場合には誤差が発生(下記に続く)
console.log(((0.14 * 100) + (0.07 * 100)) / 100);

// Math.roundメソッドで解決できた
console.log((Math.round(0.14 * 100) + Math.round(0.07 * 100)) / 100);