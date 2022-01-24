const form = document.getElementById("todos");
const input = document.getElementById("text");
const todosUl = document.getElementById("ull");


form.addEventListener("submit", function (e){
e.preventDefault();
runTodos()
})


function runTodos(todo) {
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }
    if(todo && todo.complete){
        todoEl.classList.add("complete");
    }
    
    if(todoText){
        const todoEl = document.createElement("li");

        
        todoEl.innerText = todoText;

todoEl.addEventListener("click", ()=> {
    todoEl.classList.toggle("complete")
})
todoEl.addEventListener("contextmenu", (e)=> {
    e.preventDefault()
    todoEl.remove()
})
        todosUl.appendChild(todoEl);

        input.value = ''
        
    }
    
}




