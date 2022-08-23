const pergunta1 = +prompt("Diga um número")
const pergunta2 = +prompt("Diga outro número")

function soma(num1,num2){
    return num1+num2
}
console.log(`${pergunta1} + ${pergunta2} = ${soma(pergunta1,pergunta2)}`)


function subtracao(num1,num2){
    return num1-num2
}
console.log(`${pergunta1} - ${pergunta2} = ${subtracao(pergunta1,pergunta2)}`)


function multi(num1,num2){
    return num1*num2
}
console.log(`${pergunta1} * ${pergunta2} = ${multi(pergunta1,pergunta2)}`)


function divisao(num1,num2){
    return num1/num2
}
console.log(`${pergunta1} / ${pergunta2} = ${divisao(pergunta1,pergunta2)}`)
