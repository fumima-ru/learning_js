// プリントデバッグ
console.time('処理時間');


for (let i = 0; i < 100000; i++) {
    if (i % 10000 === 0) {
        console.timeLog('処理時間', i);
    }
}

console.timeEnd('処理時間');
console.log('処理が完了しました。');