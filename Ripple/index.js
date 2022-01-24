var ripples = document.querySelectorAll(".ripple");

ripples.forEach(ripple => {
    ripple.addEventListener("click", function (e){
        var x = e.clientX
        var y = e.clientY


        var buttonTop = e.target.offsetTop;
        var buttonLeft = e.target.offsetLeft;

        var xInside = x - buttonLeft;
        var yInside = y - buttonTop;
       
        var spanUp = document.createElement("span");
        spanUp.classList.add("circle");
        spanUp.style.left = xInside + "px";
        spanUp.style.top = yInside + "px";

        this.appendChild(spanUp);
    })
});


//<span class="circle" style="top: 27px;left: 82px"></span>