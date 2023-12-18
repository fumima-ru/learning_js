function calculateBMI() {
  // 身長と体重を取得
  const HEIGHT = parseFloat(document.getElementById('height').value);
  const WEIGHT = parseFloat(document.getElementById('weight').value);

  // BMIを計算
  const bmi = WEIGHT / ((HEIGHT / 100) * (HEIGHT / 100));

  // 結果を表示
  document.getElementById('result_display').innerText = bmi.toFixed(2);

  console.log(HEIGHT, typeof(HEIGHT));
  console.log(WEIGHT);
}