// FUNÇÃO ----------------------------------------------------------------------------
function nomeAleatorio (parametro1, parametro2){
  return parametro1+parametro2;
}

// FUNÇÃO CLOSURE - função dentro de função 
function meuPeso(peso){
  return function(altura){
    return peso / altura**2
  }
}
let imc = meuPeso(70)
let imc2 = meuPeso(1.65);
//-------------------------------------------------------------------------------------

/* COMANDOS PARA ADICIONAR E RETIRAR ITENS DE LISTAS
push()    → adiciona no FIM
pop()     → remove do FIM
unshift() → adiciona no INÍCIO
shift()   → remove do INÍCIO
indexOf() → encontra o índice de um elemento
splice()  → remove/insere em posição específica */

//--------------------------------------------------------------------------------------

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
//----------------------------------------------------------------------------------------

// QUIZ DE PERFIL (exemplo de if else)
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
//------------------------------------------------------------------------------------------

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

