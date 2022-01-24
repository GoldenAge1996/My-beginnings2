var insert = document.getElementById("insert");
var key = document.querySelector(".key");

window.addEventListener("keydown", function (event){
insert.innerHTML = 
<div class="key">
${event.key}
<small>event.key</small>
</div>
<div class="key">
   ${event.keyCode}
<small>event.keyCode</small>
    </div>
    <div class="key">
       ${event.code}
<small>event.keyValu</small>
        </div>
});