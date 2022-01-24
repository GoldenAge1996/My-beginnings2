const bodyq = document.body;
const sliders = document.querySelectorAll(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

setActiveSlides();
setBgToBody();

rightBtn.addEventListener("click", ()=> {
    activeSlide++
    if(activeSlide> sliders.length -1){
        activeSlide = 0;
    }
    setActiveSlides();
    setBgToBody();
})

leftBtn.addEventListener("click", ()=> {
    activeSlide--
    if(activeSlide < 0){
        activeSlide = sliders.lenght -1;
    }

    setActiveSlides();
    setBgToBody();
})

function setActiveSlides(){
    sliders.forEach(slider => {
        slider.classList.remove("active");
        sliders[activeSlide].classList.add("active");
    });
}

function setBgToBody() {
    bodyq.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}
