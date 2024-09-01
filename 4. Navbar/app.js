// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document .querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }
    // classList.toggle : 클래스가 존재한다면 제거하고 false를 반환, 존재하지 않으면 클래스를 추가하고 true를 반환한다
    links.classList.toggle("show-links");
});