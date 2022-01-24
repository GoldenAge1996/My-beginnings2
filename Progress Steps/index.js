var progress = document.getElementById("progress");
var prev = document.getElementById("prev");
var Next = document.getElementById("Next");
var circles = document.querySelectorAll(".circle");

let currentActive =1;

Next.addEventListener("click", function(){
    currentActive++;
  if(currentActive > circles.length){
      currentActive = circles.length;
  }

 updateBig();
})

prev.addEventListener("click", function(){
    currentActive--;
  if(currentActive < 1){
      currentActive = 1;
  }

 updateBig();
})

function updateBig (){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active")
        }
    });

    var actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length-1)/(circles.length-1)* 100 + "%";

    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        Next.disabled = true;
    }else{
        prev.disabled = false;
        Next.disabled = false;
    }
    
}