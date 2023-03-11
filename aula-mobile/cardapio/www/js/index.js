var itensCardapio;
var itemAtual = 0;
var imagem;
var preco;
var pizza;
var endereco;
var quantidade;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('esquerda').addEventListener('click', esquerda);
    document.getElementById('direita').addEventListener('click', direita);
    imagem = document.getElementById('imagem');
    preco = document.getElementById('preco');
    pizza = document.getElementById('pizza');
    endereco = document.getElementById('endereco');
    quantidade = document.getElementById('quantidade');
    document.getElementById('enviar').addEventListener('click', enviarPedido);
    carregarItens();
}

function enviarPedido() {
    //especifica o formato JSON para os dados enviados
    cordova.plugin.http.setDataSerializer('json');
    cordova.plugin.http.post('https://pedidos-pizzaria.glitch.me/', {
        pizza: itensCardapio[itemAtual].pizza,
        quantidade: quantidade.value, 
        endereco: endereco.value}, {}, 
        function(response) {
            //verificar se deu certo (status = 200)
            alert(response.status);
        }, function(response) {
            alert(response.error);
        });
}

function direita() {
    if (itemAtual < itensCardapio.length) {
        itemAtual++;
    } else {
        itemAtual = 0;
    }
    atualizarTela();
}

function esquerda() {
    if (itemAtual > 0) {
        itemAtual--;
    } else {
        itemAtual = itensCardapio.length - 1;
    }
    atualizarTela();
}

function carregarItens() {
    cordova.plugin.http.get('https://pedidos-pizzaria.glitch.me/pizzas', {}, {},
     function(response) {
    //Json.parse para transformar o texto em objeto
      itensCardapio = JSON.parse(response.data);
      atualizarTela();
    }, function(response) {
      alert(response.error);
    });
}

function atualizarTela() {
    imagem.style.backgroundImage = itensCardapio[itemAtual].imagem;
    preco.innerHTML = itensCardapio[itemAtual].preco;
    pizza.innerHTML = itensCardapio[itemAtual].pizza;
}

function exibirMensagem() {
    document.getElementById('texto').innerHTML="Boa noite!";
}