const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

const NOME = "Francesca Cerezo";
let tituloProfissional = "Técnica em análise e desenvolvimento de sistemas";
let minhaBio = "Eforçada e resiliente";
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 2;
let diaIngresso = 10;

let dataAtual = new Date(); //DATA ATUAL 
let mesAtual = dataAtual.getMonth() +1; //MES ATUAL
let anoAtual = dataAtual.getFullYear(); //ANO ATUAL
let diaAtual = dataAtual.getDate(); //DIA ATUAL

//CALCULO DE TEMPO RESTANTE DO CURSO
let mesesRestantes = mesFormatura - mesAtual
let diasRestantes = diaFormatura - diaAtual
let anosRestantes = anoFormatura - anoAtual
let tempoRestante = `Anos restantes: ${anosRestantes}, Meses restantes: ${mesesRestantes} Dias restantes: ${diasRestantes}`

let indefinido;
let nulo = null;
let curso ={
    nome : "Análise e desenvolvimentos de sistemas",
    semestre : 3,
    disciplinaAtual : "linguagens de programação"
}

console.log(typeof tituloProfissional);
console.log(typeof minhaBio);
console.log(typeof anoFormatura);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof curso);
console.log(typeof NOME);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio
document.getElementById("anoFormatura").innerText = "Ano de formatura:" + anoFormatura;
document.getElementById("tempoRestanteParaFormatura").innerText = tempoRestante;

//LAÇOS DE REPETIÇÃO

// laço de repetição FOR
let habilidades = ["Esforçada", "Inteligente", "Eloquente", "Engraçada"];
for (let i = 0; i < habilidades.length; i++) {
    document.write(`<p> ${habilidades[i]} </p>`)
};  

// laço de repetição WHILE
let num = prompt("Digite um número par:")
while (num % 2 !==0) {
    num = prompt("Ops, esse número não é par. Tente novamente!");
}

//laço de repetição DO WHILE
do {
    num = prompt("Digite um número par");
} while (num % 2 !==0);