document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
   console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
   document.getElementById('mensagem').addEventListener('click', exibirMensagem);
}
document.getElementById("msg").addEventListener("click", exibirMensagem); 

let exibirMensagem = () => {
    let txt = document.getElementById("texto").value;
    document.getElementById("conteudo").innerHTML = txt;
}


