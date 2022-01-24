const lengthEl = document.getElementById("lenght")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const symbolsEl = document.getElementById("symbols")
const numbersEl = document.getElementById("numbers")
const generateEl = document.getElementById("generate")
const clipboard = document.getElementById("clipboard")


generateEl.addEventListener("click", ()=> {
    const length = +lengthEl.value
    console.log(length)
})


const randFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
}



 function getLower (){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}
function getUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}
function getNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}
function getSymbol(){
    const symbols = "!@@$&*()_^$#@#"
    return symbols[Math.floor(Math.random()* symbols.length)]
}
