const images = document.querySelectorAll(".content");

const lists = document.querySelectorAll(" ul li");


lists.forEach((list,idx) => {
    list.addEventListener("click", ()=>{
        removeImg()
        removeActive()
list.classList.add("active")
images[idx].classList.add("show")

    })
});

function removeImg(){
    images.forEach(image => {
        image.classList.remove("show")
    });
}

function removeActive(){
    lists.forEach(list => {
        list.classList.remove("active")
    });
}