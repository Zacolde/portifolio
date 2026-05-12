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

``// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}``

//LAÇOS DE REPETIÇÃO -------------------------------------------------------------

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

// Colocar e tirar elementos de listas

let projetos =[
  //objeto de index 0
 {nome: "Aplicação de Estacionamento",
 tecnlogias: ["Python", "Tkinter", "Tkinter", "fpdf"],
 conhecimentos: "VsCode, Github, pip, PyInstaller",
 descricao: "Aplicação desktop para gerenciamento de estacionamento"
},
//objeto de index 1
{nome: "Portifólio",
tecnologias: ["Python", "Js", "html"],
conhecimentos: "Github",
descricao: "Criação de portifólio online"
}
]
document.createElement("h2").textContent = projetos[0].nome
console.log(projetos[1].descricao);
console.log(projetos[1].tecnologias[0]);

/* COMANDOS PARA ADICIONAR E RETIRAR ITENS DE LISTAS
push()    → adiciona no FIM
pop()     → remove do FIM
unshift() → adiciona no INÍCIO
shift()   → remove do INÍCIO
indexOf() → encontra o índice de um elemento
splice()  → remove/insere em posição específica */
