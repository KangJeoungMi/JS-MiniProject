// 색상코드에서 사용되는 숫자와 문자인 0~9, A~F를 배열로 정의한다
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// id값 받아오기
const btn = document.getElementById("btn");
// class = "color"를  받아오기
const color = document.querySelector(".color");

// 이벤트리스너
btn.addEventListener('click', function(){ //  클릭했을때 해당 함수가 실행된다
    let hexColor = '#'; // 색상 문자열 초기화한다. 시작은 #이다
    // 반복문을 사용한다
    // 색상코드는 #000000 와 같이 문자가 6개가 필요하므로
    // 6회 반복하면서 `hex`배열에서 랜덤하게 값을 선택하여 문자열에 추가한다
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    console.log(hexColor);
    // .color 클래스가 지정된 HTML 요소에 생성된 색상 코드를 텍스트로 표시한다
    color.textContent = hexColor;
    // 웹 페이지의 배경색을 생성된 헥사 색상으로 변경한다.
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    // floor : 소숫점 이하를 버리고 가장 가까운 정수로 내림한다
    // Math.random() : 난수 반환 랜덤 함수
    // hex.lenght : hex 배열의 길이를 나타낸다. 여기서는 16이다.
    // Math.random() * hex.length : 랜덤으로 생성된 난수에 16을 곱한다
    return Math.floor(Math.random() * hex.length);
}