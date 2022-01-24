const btn = document.querySelector(".add")

const bodya = document.body


btn.addEventListener("click",()=> getNote())


function getNote(text = ''){
    const note = document.createElement("div");
    note.classList.add("note")

    note.innerHTML = `
    <div class="tools">
            <div class="tool red"></div>
            <div class="tool blue"></div>
        </div>

        <div class="main hidden"></div>
        <textarea ></textarea>`

       
        const red = document.querySelector(".red");
        const blue = document.querySelector(".blue");
        const main = document.querySelector(".main");
        const textArea = document.querySelector("textarea");
       
       
        red.addEventListener("click", ()=>{
            note.remove()
        })
      



        bodya.appendChild(note) 
       

}

