// プリントデバッグ
// データをfilter( )メソッドで抽出しconsole.table( )メソッドを使用してコンソールにテーブル形式で出力する

// オブジェクトの配列
const FRUITS = [
	{ name: 'リンゴ', color: '赤' },
	{ name: 'バナナ', color: '黄' },
	{ name: 'メロン', color: '緑' },
	{ name: 'アセロラ', color: '赤' },
	{ name: 'レモン', color: '黄' },
	{ name: 'マスカット', color: '緑' },
	{ name: 'サクランボ', color: '赤' },
	{ name: 'グレープフルーツ', color: '黄' },
	{ name: 'ライム', color: '緑' }
]; 

// フルーツのテーブル
console.table(FRUITS);

// 赤いフルーツのテーブル
const RED_FRUITS = FRUITS.filter(fruit => fruit.color === '赤');
console.table(RED_FRUITS);