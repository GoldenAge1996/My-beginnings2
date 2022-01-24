const lengthEL = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const resultEl = document.getElementById("result")
const generateEl = document.getElementById("generate")
const clipBoard = document.getElementById("clipboard")


const randonFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbols
}

generateEl.addEventListener("click", ()=> {
    const nnenna = +lengthEL.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

resultEl.innerText = generatePassword(hasUpper, hasLower, hasSymbol, hasNumber, nnenna)

})

function generatePassword(upper, lower, symbol, number, nnenna){
    let  generatedPassword = ""
    const someCost = upper + lower + number + symbol;
    const someArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(someCost ===0 ){
        return ""
    }

    for(let i = 0; i < nnenna; i+= someCost){
someArr.forEach(some => {
    const funcName = Object.keys(some)[0]
    generatedPassword += randonFunc[funcName]()
});
    }

    const finalPassword = generatedPassword.slice(0, nnenna)
    return finalPassword
}













function getLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getSymbols(){
    const symbols = "!@#$%^&*()_+"
    return symbols[Math.floor(Math.random() * symbols.length)]
}