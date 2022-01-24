var targets = document.querySelectorAll(".target");

targets.forEach(target => {
    target.innerHTML = "0";
    function  updateCounter (){
        var counter = +target.getAttribute("data-target");
       var c = +target.innerText;
var increment = counter/200;

if(c< counter){
counter.innerText = "Math.floor(c + increment)"};
}else{
    counter.innerText = counter;
}



updateCounter();
})








