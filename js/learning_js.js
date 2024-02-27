// エラーの構成要素
function outerFunction() {
  middleFunction();
}

function middleFunction() {
  innerFunction();
}

function innerFunction() {
  console.log(variable); // variableは未定義(ReferenceError)
}

outerFunction();