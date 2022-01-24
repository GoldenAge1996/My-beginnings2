var tags = document.getElementById("tags");
var textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", function(e){
    createTags(e.target.value);
});
 
function createTags(input){
    var tags = input.split(",");
    tagsEl.innerHTML = "";
tags.forEach(tag => {
    var tagEl = document.createElement("span");
    tagEl.classList.add("span");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
    
});
    
}