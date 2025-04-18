let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let images = document.querySelectorAll("img");
let btn = document.querySelector(".btn");
let scoreyou = document.querySelector(".scoreyou");
let scorecomputer = document.querySelector(".scorecomputer");
let countyou = 0;
let countcomputer = 0;
let number;
let clickpass;
stone.addEventListener("click", () => {
    clickpass = 0;
    return clickpass;
})
paper.addEventListener("click", () => {
    clickpass = 1;
    return clickpass;
})
scissors.addEventListener("click", () => {
    clickpass = 2;
    return clickpass;
})
function randomnumber() {
    number = Math.floor(Math.random() * 3);
    return number;
}
function checkimage() {
    if (clickpass == 0) {
        stone.style.border = "5px solid rgb(255, 0, 0)";
        paper.style.border = "1px solid black";
        scissors.style.border = "1px solid black";
    }
    if (clickpass == 1) {
        stone.style.border = "1px solid black";
        paper.style.border = "5px solid rgb(0, 255, 0)";
        scissors.style.border = "1px solid black";
    }
    if (clickpass == 2) {
        stone.style.border = "1px solid black";
        paper.style.border = "1px solid black";
        scissors.style.border = "5px solid rgb(0, 0, 255)";
    }
}
images.forEach((img) => {
    img.addEventListener("click", () => {
        randomnumber();
        checkimage();
        if (clickpass == number) {
            btn.innerText = "match draw";
            btn.style.backgroundColor = "aqua";
        }
        if (clickpass == 0 && number == 1) {
            btn.innerText = "lose, paper win";
            countcomputer++;
            btn.style.backgroundColor = "khaki";
        }
        if (clickpass == 0 && number == 2) {
            btn.innerText = "win, stone win";
            countyou++;
            btn.style.backgroundColor = "yellow";
        }
        if (clickpass == 1 && number == 0) {
            btn.innerText = "win, paper win";
            countyou++;
            btn.style.backgroundColor = "yellow";
        }
        if (clickpass == 1 && number == 2) {
            btn.innerText = "lose, scissors win";
            countcomputer++;
            btn.style.backgroundColor = "khaki";
        }
        if (clickpass == 2 && number == 0) {
            btn.innerText = "lose, stone win";
            countcomputer++;
            btn.style.backgroundColor = "khaki";
        }
        if (clickpass == 2 && number == 1) {
            btn.innerText = "win, scissors win";
            countyou++;
            btn.style.backgroundColor = "yellow";
        }
        scoreyou.innerText = `${countyou}`;
        scorecomputer.innerText = `${countcomputer}`;
    })
})