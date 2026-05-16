const botao = document.getElementById("modoClaroEscuro");
const resultadoJornada = document.getElementById("resultado-jornada");
//-----------------------------------------------------------------------------------------------

// MODO ESCURO / CLARO

let modoEscuro = false;

function alternarModo() {

    if (modoEscuro === false) {

        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";

        botao.innerText = "☀️ Modo Claro";

        modoEscuro = true;

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        botao.innerText = "🌙 Modo Escuro";

        modoEscuro = false;
    }
}

botao.addEventListener("click", alternarModo);

//---------------------------------------------------------------------------------------------
// HABILIDADES (FOR)

let habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "GitHub",
  "Responsividade",
  "Manipulação do DOM"
];

function renderizarHabilidades() {

    const lista = document.getElementById("listaHabilidades");

    for (let i = 0; i < habilidades.length; i++) {

        let item = document.createElement("li");
        item.innerText = "✅ " + habilidades[i];

        lista.appendChild(item);
    }
}

renderizarHabilidades();

//---------------------------------------------------------------------------------------------
// DADOS PESSOAIS

const NOME = "Francesca Cerezo";
let tituloProfissional = "Técnica em análise e desenvolvimento de sistemas";
let minhaBio = "Garota de programa";
let anoFormatura = 2026;

function calcularTempoRestante() {

    let mesFormatura = 12;
    let diaFormatura = 31;

    let dataAtual = new Date();

    let anosRestantes = anoFormatura - dataAtual.getFullYear();
    let mesesRestantes = mesFormatura - (dataAtual.getMonth() + 1);
    let diasRestantes = diaFormatura - dataAtual.getDate();

    return `Anos restantes: ${anosRestantes}, Meses restantes: ${mesesRestantes}, Dias restantes: ${diasRestantes}`;
}

function mostrarDadosPessoais() {

    document.getElementById("meuNome").innerText = NOME;
    document.getElementById("tituloProfissional").innerText = tituloProfissional;
    document.getElementById("minhaBio").innerText = minhaBio;
    document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
    document.getElementById("tempoRestante").innerText = calcularTempoRestante();
}

mostrarDadosPessoais();

//-----------------------------------------------------------------------------------------------
// JORNADA

function aplicarEstiloJornada(cor) {

    resultadoJornada.style.backgroundColor = cor;
    resultadoJornada.style.padding = "15px";
    resultadoJornada.style.borderRadius = "10px";
    resultadoJornada.style.marginTop = "15px";
    resultadoJornada.style.color = "#333";
}

function mostrarJornada(titulo, texto, cor) {

    resultadoJornada.innerHTML = `
        <strong>${titulo}</strong><br><br>
        ${texto}
    `;

    aplicarEstiloJornada(cor);
}
//
// BOTÕES DA JORNADA

document.getElementById("btn-quemsoueu")
.addEventListener("click", function () {

    mostrarJornada(
        "👤 Quem sou eu",
        "Meu nome é Francesca, sou natural de Divinópolis Minas Gerais. Sou cristã e minha maior aspiração é contribuir para um mundo melhor.",
        "#e8f4fd"
    );
});

document.getElementById("btn-comeco")
.addEventListener("click", function () {

    mostrarJornada(
        "🚀 Como comecei",
        "Minha jornada começou observando meu irmão UX designer e entrando no curso técnico de ADS.",
        "#fde8e8"
    );
});

document.getElementById("btn-estudos")
.addEventListener("click", function () {

    mostrarJornada(
        "📚 O que estou estudando",
        "Estou estudando Front-End, Back-End, HTML, JavaScript e manipulação do DOM.",
        "#f3e8fd"
    );
});

document.getElementById("btn-objetivos")
.addEventListener("click", function () {

    mostrarJornada(
        "🎯 Meus objetivos",
        "Ingressar em Sistemas de Informação e evoluir como desenvolvedora web.",
        "#e8f8f0"
    );
});

document.getElementById("btn-inspiracoes")
.addEventListener("click", function () {

    mostrarJornada(
        "💡 Minhas inspirações",
        "Me inspiro em desenvolvedores criativos e tecnologia que resolve problemas reais.",
        "#fff4d9"
    );
});