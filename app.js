let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === ''){
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
        limparCampo();
    }
}

function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}
