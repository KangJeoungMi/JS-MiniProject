// 초기 카운트 값 설정
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// forEach() : 배열의 각 요소에 대해 주어진 함수를 실행한다
// 주어진 함수를 한번씩 호출하며, 배열의 각 요소에 대해 작업응ㄹ 수행할 떄 유용하다.
btns.forEach(function (btn){
    // 이벤트 객체 `e` : 클릭이벤트에 대한 정보를 담고 있음
        // e.currentTarget: 이벤트가 바인딩된 요소를 가리킵니다. 여기서는 btn 요소입니다.
        // e.target: 이벤트가 실제로 발생한 요소를 가리킵니다. 이벤트가 버블링될 때 다를 수 있습니다.
        // e.type: 이벤트의 유형을 나타냅니다. 여기서는 "click"입니다.
        // e.preventDefault(): 기본 동작을 막을 수 있는 메소드입니다. 예를 들어, 링크 클릭 시 페이지 이동을 막을 수 있습니다.
        // e.stopPropagation(): 이벤트 버블링을 막을 수 있는 메소드입니다. 부모 요소로 이벤트가 전파되는 것을 막습니다.
    btn.addEventListener("click", function (e){
        // e.currentTarget: 이벤트가 바인딩된 요소를 가리킵니다. 여기서는 btn 요소입니다.
        // clssList : HTML요소의 클래스 속성을 조작하는 데 사용되는 유용한 JS API이다. 
        // 이 API는 클래스의 추가, 제거, 토글, 확인 등의 작업을 수행한다.
        // classList를 사용하면 코드의 가독성을 높이고, 클래스 조작을 더 쉽게 수행한다
        const styles = e.currentTarget.classList; // 클래스 목록들을 가져온다
        if (styles.contains("decrease")) {// decrease라는 클래스가 포함되어 있으면 하나씩 뺀다
            count--;
        } else if(styles.contains("increase")){// increase라는 클래스가 포함되어 있으면 하나씩 더한다
            count++;
        }else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        
        if (count < 0) {
            value.style.color = "red";
        }
        
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});