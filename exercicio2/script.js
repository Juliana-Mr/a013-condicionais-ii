let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase()
let nacionalidade2 = nacionalidade.slice(0,-1)

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch(nacionalidade2){
    case "brasileir":
        console.log("A pessoa é do Brasil!")
        break
    case "argentin":
        console.log("A pessoa é da Argentina")
        break
    case "uruguai":
        console.log("A pessoa é do Uruguai!")
        break
    case "chilen":
        console.log("A pessoa é do Chile")
        break
    case "colombian":
        console.log("A pessoa é da Colombia")
        break
    default:
        console.log("Nacionalidade não encontrada")
}
