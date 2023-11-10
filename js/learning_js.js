// 配列
const MEMBERS = ['リラックマ', 'コリラックマ', 'キイロイトリ', 'チャイロイコグマ'];
console.log(MEMBERS);
MEMBERS[4] = 'コウペンちゃん';
console.log(MEMBERS);
MEMBERS[4] = 'フミマール';
console.log(MEMBERS);

// オブジェクト
const MENUS = {curry: 900, udon: 650, pasta: 950};
console.log(MENUS);
MENUS.udon = 700;
console.log(MENUS);

// オブジェクトを要素に持つ配列
const SWEETS = [
  {name: 'ohagi', price: 280, category: "和菓子"},
  {name: 'zenzai', price: 480, category: "和菓子"},
  {name: 'cake', price: 500, category: "洋菓子"},
  {name: 'parfait', price: 1400, category: "洋菓子"}
];
SWEETS[0].price = 300;
console.log(SWEETS);
console.log(SWEETS[2]);
console.log(SWEETS[0].price);
console.log(SWEETS[3].category);

// 配列とfor文
for (let indexNumber = 0; indexNumber < SWEETS.length; indexNumber++) {
  const SWEET = SWEETS[indexNumber];
  console.log(`${SWEET.name}は${SWEET.category}で${SWEET.price}円です`);
}