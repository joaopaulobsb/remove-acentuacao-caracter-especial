// VARIAVEIS GLOBAIS
// VARIAVEIS GLOBAIS nome
var campo_nome = document.querySelector("input[name='nome']");
var botao_adicionar = document.querySelector("#adicionar_dados");
var corpo = document.querySelector("tbody");

// VARIAVEIS GLOBAIS number
var campo_number = document.querySelector("input[name='number']");
var botao_number = document.querySelector("#adicionar_number");
var corpo_number = document.querySelector("tbody[id='tbody_number']");

// LISTENER VARIAVEIS GLOBAIS
botao_adicionar.addEventListener('click', adicionar_dados);
botao_number.addEventListener('click', adicionar_number);
console.log("entrei aqui")

// FUNÇÕES
function adicionar_dados(event) {
    console.log("entrei no adicionar")
    event.preventDefault();
    limpar_dados(campo_nome.value);
    criar_linha();
    limpar_inputs()
}

function limpar_dados(nome) {
    console.log("entrei no limpar");
    this.nome = nome.normalize('NFD').replace(/[\u0300-\u036f]|[^a-zA-Z ]/g, "");
}

function criar_linha() {
    console.log("entrei no criar")

    //criar elementos
    var linha = document.createElement("tr")
    var campo_nome = document.createElement("tb")

    // Cria Nós
    var texto_nome = document.createTextNode(this.nome)
    //Vincluar os nós aos elementos
    campo_nome.appendChild(texto_nome)
    linha.appendChild(campo_nome)
    corpo.appendChild(linha)
}

function adicionar_number(event) {
    console.log("entrei no adicionar number")
    event.preventDefault();
    mostrar_number(campo_number.value);
    criar_linha_number();
    limpar_inputs()
}

function mostrar_number(number) {
    this.number = number; 
}

function criar_linha_number() {
    var linha_number = document.createElement("tr")
    var campo_number = document.createElement("tb")

    var texto_number = document.createTextNode(this.number)
    console.log("number" + texto_number)
    campo_number.appendChild(texto_number)
    linha_number.appendChild(campo_number)
    corpo_number.appendChild(linha_number)
}

function limpar_inputs() {
    campo_nome.value = "";
    campo_number.value = "";
}