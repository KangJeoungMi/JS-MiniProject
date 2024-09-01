const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0-3
    // getRandomNumber() 함수를 호출하여 무작위 색상 배열 인덱스를 가져온다
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // 웹 페이지의 배경색을 무작위로 선택된 색상으로 변경한다
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}