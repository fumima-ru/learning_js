console.log('【f1】');
function f1(flagA) {
  for (let index = 0; index < 10; index++) {
    if (flagA === true) {
      if (index % 2 !== 0) {
        console.log(index);
      } 
    }
  }
}

f1(true);

console.log('【f2】');
function f2(flagB) {
  for (let index = 0; index < 10; index++) {
    if (flagB === false) {
      continue;
    }
    if (index % 2 === 0) {
      continue;
    } 
    console.log(index);
  }
}

f2(true);