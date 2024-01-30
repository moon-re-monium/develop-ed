// 最終更新　 2024/01/31 2:37

document.addEventListener('DOMContentLoaded', function() {
    const inputNumber = document.getElementById('inputNumber');
    const displayNumber = document.getElementById('displayNumber');
    
    const greenResult = document.getElementById('greenResult');
    const yellowResult = document.getElementById('yellowResult');
    // const workResult = document.getElementById('workResult');
    const redResult = document.getElementById('redResult');
    const resetButton = document.getElementById('resetButton');
    const keypadKeys = document.querySelectorAll('.key');
    
    let lastInputTime = 0;
    const timeoutDuration = 5000; // 5 seconds

    keypadKeys.forEach(key => {
        key.addEventListener('click', function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastInputTime > timeoutDuration) {
                inputNumber.value = '';
            }
            
            const value = key.getAttribute('data-value');
            inputNumber.value += value;
            calculate();
            lastInputTime = currentTime;
        });
    });

    inputNumber.addEventListener('input', calculate);
    resetButton.addEventListener('click', reset);

    function calculate() {
        const number = parseInt(inputNumber.value);
        if (!isNaN(number)) {
            const green = Math.round((number * 0.7 * 10) / 10);
            const yellow = Math.round((number * 0.5 * 10) / 10);
            const red = Math.round((number * 0.3 * 10) / 10);
            // const work = Math.floor((number * 1.1 *10) / 10);
            greenResult.textContent = green.toLocaleString();
            yellowResult.textContent = yellow.toLocaleString();
            redResult.textContent = red.toLocaleString();
            // workResult.textContent = work.toLocaleString();
            displayNumber.textContent = number.toLocaleString();
            

        } else {
            greenResult.textContent = 0;
            yellowResult.textContent = 0;
            redResult.textContent = 0;
            // workResult.textContent = 0;
            displayNumber.textContent = 0;
        }
    }

    function reset() {
        inputNumber.value = '';
        greenResult.textContent = 0;
        yellowResult.textContent = 0;
        redResult.textContent = 0;
        displayNumber.textContent = 0;
    }
});

// 現在時刻取得
function clock() {
var nowTime = new Date(); //  現在日時を得る
var nowHour = nowTime.getHours(); // 時を抜き出す
var nowMin  = nowTime.getMinutes(); // 分を抜き出す
var nowSec  = nowTime.getSeconds(); // 秒を抜き出す
var msg = nowHour + ":" + nowMin + ":" + nowSec;
document.getElementById("nowTime").innerHTML = msg;
}
setInterval('clock()',1000);