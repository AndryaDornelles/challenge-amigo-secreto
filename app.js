let amigos = [];
let atualizarTitulo = document.querySelector('h2');
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    // Verifica se o campo está vazio
    if (nome === ''){
        alert('Por favor, insira um nome');
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
        listarAmigos();
        limparCampo();
    }
}

function listarAmigos() {
    listaAmigos.innerHTML = '';
    // Percorre cada nome no array de amigos
    amigos.forEach(amigo => {
        // Cria um novo elemento de lista para cada amigo
        let itemLista = document.createElement('li');
        // Adiciona o nome do amigo ao texto do elemento li
        itemLista.textContent = amigo;
        // Adiciona o elemento li à lista na página
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length) {
        // Se a lista não estiver vazia, sorteia um amigo aleatório
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        atualizarTitulo.innerHTML = `O amigo secreto é ${amigoSecreto}`;
    } else {
        // Se a lista estiver vazia, exibe uma mensagem na lista
        listaAmigos.innerHTML = 'Lista vazia';
    }
}

function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}
