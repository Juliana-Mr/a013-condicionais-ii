const num = +prompt("Digite um número aleatório")

//1) utilizando ifs aninhados

if(num % 2 === 0){
    if(num % 3 === 0){
     console.log("Divisível por 2 ou 3")
    }
}

//COMO SE FAZ UMA OPERAÇÕA DE "OU" 
//DENTRO DOS IFs ANINHADOS?
// do jeito que está só funciona operações de "e"

//2) utilizando operador lógico

if(num % 2 ===0 || num % 3 ===0){
    console.log("O número é divisível por 2 ou 3")
}