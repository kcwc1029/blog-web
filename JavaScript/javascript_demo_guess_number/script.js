"use strict";

// TODO: 宣告會用的變數：最高紀錄、當次紀錄、隨機答案
// Math.random() => 產生0-1之間的數
// *20 =>
// Math.trunc() => 無條件捨去
let secretNumber = Math.trunc(Math.random() * 20) + 1; // 取0-19，再加1
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;

// TODO: 取得輸出欄
let message = document.querySelector(".message");
const displayMessage = (result) => {
    message.textContent = result;
};

// TODO: 按下確認鍵
let check = document.querySelector(".check");
check.addEventListener("click", () => {
    // 字串轉整數
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess); // 數值 type

    if (!guess) {
        displayMessage("⛔️ No number!");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");

        // 取得最上面的【你猜呀~】，並顯示答案
        let number = document.querySelector(".number");
        number.textContent = secretNumber;

        // 正確答案的CSS
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        // 更新最高分數紀錄
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
    }
});

// TODO: 按下again
let again = document.querySelector(".again");
again.addEventListener("click", () => {
    // location.reload(); // 重新加載頁面 => 最高紀錄也會不見

    // 重新回歸
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "你猜呀~";
    document.querySelector(".guess").value = "";

    // 處理CSS(回到原本部分)
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
