function calculateBMI() {
  // 身長と体重を取得
  const HEIGHT = parseFloat(document.getElementById('height').value);
  const WEIGHT = parseFloat(document.getElementById('weight').value);

  // BMIを計算
  const BMI = WEIGHT / (HEIGHT / 100) ** 2;
  
  // 結果を表示
  document.getElementById('result_display').innerText = BMI.toFixed(2);
};

// 要素を取得するための代表的なメソッド例

// id名を使用して要素を取得(一意)
document.getElementById('【例】header');
// クラス名を使用して要素を取得(複数)
document.getElementsByClassName('【例】wrapper');
// タグ名を使用して要素を取得(複数,NodeListを返す)
document.getElementsByTagName('【例】span');
// name属性を使用して要素を取得(複数)
document.getElementsByName('【例】name');
// CSSセレクタを使用して要素を取得(一致する最初の要素のみ)
document.querySelector('【例】#header');
// CSSセレクタを使用して要素を取得(複数)
document.querySelectorAll('【例】.flex');