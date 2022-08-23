// a)
/*const nome = prompt("Qual o seu nome?")

function mostrarNome(nome){
    console.log(`Olá, ${nome}!`);
}*/

// mostrarNome(nome)

// b)
/*function tabuada(number){
    for(let i=0; i <= 10; i++){
        console.log(number*i)
    }
}

tabuada(6)*/

// c)
const pergunta = prompt("Qual o seu nome?")
const nome = (nome) => {
    console.log(`Olá, ${nome}!`);
}

nome(pergunta)

const tabuada = (number) => {
    for(let i=0; i <= 10; i++){
        console.log(number*i)
    }
}

tabuada(6)