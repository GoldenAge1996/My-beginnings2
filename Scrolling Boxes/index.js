var boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);



function checkBox(){
    var triggerT = window.innerHeight/3*2;
    
    boxes.forEach(box => {
        var boxPoint = box.getBoundingClientRect().top;

        if(boxPoint < triggerT){
            box.classList.add("active");
        }else{
            box.classList.remove("active");
        }
    });
}