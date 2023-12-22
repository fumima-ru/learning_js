function calculateBMI() {
  // 身長と体重を取得
  const HEIGHT = parseFloat(document.getElementById('height').value);
  const WEIGHT = parseFloat(document.getElementById('weight').value);

  // BMIを計算
  const BMI = WEIGHT / (HEIGHT / 100) ** 2;
  
  // 結果を表示
  document.getElementById('result_display').innerText = BMI.toFixed(2);
};