const toasts = document.getElementById("toasts");
const button = document.getElementById("button");

const messages = [
    "Message one",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five",
]

button.addEventListener("click", ()=> getNotification());

function getNotification(){
const notif = document.createElement("div");
notif.classList.add("toast");

notif.innerText = getRandomMessages();

toasts.appendChild(notif);

setTimeout(()=> notif.remove(), 3000);
}

function getRandomMessages(){
    return messages[Math.floor(Math.random()* messages.length)];
}