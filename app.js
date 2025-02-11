let amigos = [];

function adicionarAmigo() {
    let inputElement = document.getElementById('amigo'); 
    let nome = inputElement.value.trim(); 

    if(!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        inputElement.value = ''; 
        return;
    }

    amigos.push(nome);

    inputElement.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    
    const listaAmigosElement = document.getElementById('listaAmigos');

    listaAmigosElement.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {

        const listItem = document.createElement('li');

        listItem.textContent = amigos[i];

        listaAmigosElement.appendChild(listItem);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear. Por favor, adicione nomes primeiro.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}