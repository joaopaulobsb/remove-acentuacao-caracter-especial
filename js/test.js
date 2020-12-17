//str = " .João Paulo é.";
//resultado = str.normalize('NFD').trim().replace(/[\u0300-\u036f]/g, "", " ","");

//console.log(resultado);

//Variaveis Globais
    var botao_adicionar = document.querySelector("#adicionar_dados");
    var campo_nome = document.querySelector("input[name='nome']");
    var corpo = document.querySelector("tbody");

//Objetos
function Entrevista(nome) {
    this.nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
    this.nome = nome.replace(/[^\w\-]+/g, ' '); 
    this.nome - nome.trim();
    this.mostrar_dados = function() {
        console.log(this.nome)
    }
    this.criar_linha = function() {
        //criar elementos
        var linha = document.createElement("tr")
        var campo_nome = document.createElement("tb")

        // Cria Nós
        var texto_nome = document.createTextNode(this.nome);
        //Vincluar os nós aos elementos
        campo_nome.appendChild(texto_nome);
        linha.appendChild(campo_nome);

        corpo.appendChild(linha);

    }

};


//Funções
function adicionar_dados(event) {
    event.preventDefault();
    var nome = campo_nome.value;
    nova_entrevista = new Entrevista(campo_nome.value);
    nova_entrevista.criar_linha();
} 



//Rotina Principal
botao_adicionar.addEventListener('click', adicionar_dados); 