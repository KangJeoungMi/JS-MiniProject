//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function(){
        questions.forEach(function (item) {
            // console.log(item);
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");

    });
})


// traversing the dom (DOM 탐색)

// const btns = document.querySelector(".question-btn");

// btns.forEach(function (btn) { // forEach는 btns에 있는 각 버튼에 대해 반복작업 수행
//     btn.addEventListener("click", function (e) {
//         // parentElement를 두번 사용하여 버튼의 두단계 상위 부모요소를 찾는다. (.question을 찾음)
//         const question = e.currentTarget.parentElement.parentElement;
//         // classList.toggle 메서드를 사용하여 부모 요소에 show-text라는 클래스를 추가하거나 제거한다
//         question.classList.toggle("show-text");
//     });
// });