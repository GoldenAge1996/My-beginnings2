var toggle = document.querySelector(".toggle");
var hour = document.querySelector(".hour");
var minutes = document.querySelector(".minute");
var time = document.querySelector(".time");
var date = document.querySelector(".date");
var second = document.querySelector(".second");

toggle.addEventListener("click", (e)=> {
var html = document.querySelector("html");
if(html.classList.contains("dark")) {
html.classList.remove("dark");
e.target.innerHTML= "Dark Mode";
} else{
    html.classList.add("dark");
    e.target.innerHTML= "Light Mode";
}

});

function setTime(){
    var time = new Date();
  
    var day = time.getDay();
    var hoursEl = time.getHours();
    var minuteEl = time.getMinutes();
    var secondEl = time.getSeconds();
    var hourForUs = hoursEl % 12;

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hourForUs, 0, 11, 0, 360)}deg)`;
    minutes.style.transform = `translate(-50%, -100%) rotate(${scale(minuteEl, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(secondEl, 0, 59, 0, 360)}deg)`;

    time.innerHTML = `${hourForUs}`;
}


const scale = (num, in_min, in_max, out_min, out_max) => { 
    return (num - in_min) * (out_max - out_min) / (in_max - in_min ) + out_min;
}

setTime();

setInterval(setTime, 1000);