const container = document.querySelector(".container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const slideLenght = rightSlide.querySelectorAll("div").length;

let activeSlide = 0;

leftSlide.style.top = `-${(slideLenght-1) *100}vh`

nnenna("up");

upBtn.addEventListener("click", ()=>nnenna("up"));
downBtn.addEventListener("click", ()=>nnenna("down"));


function nnenna (direction) {


    const slideHeight = container.clientHeight;

    if(direction === "up"){
activeSlide++;
if(activeSlide > slideLenght -1){
    activeSlide = 0;
}
    }
    if(direction === "down"){
        activeSlide--;
        if(activeSlide < 0){
            activeSlide = slideLenght -1;
        }
            }

    rightSlide.style.transform = `translateY(-${activeSlide * slideHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlide * slideHeight}px)`

    setTimeout(() => {
        nnenna(direction)
    }, 2000);
}

