const nomes = [];
const telefones = [];
const form = document.getElementById('form-contatos');


form.addEventListener('submit', function(e){
    e.preventDefault();

    addContato();
    atualizarTabela();

    console.log(nomes);
    console.log(telefones);

})

function addContato(){
    const nome = document.getElementById('nome-contato');
    const tel = document.getElementById('tel-contato');
    if(nomes.includes(nome.value) || telefones.includes(tel.value)){
        alert(`o nome: ${nome.value} ou o telefone: ${tel.value} já foram inseridos!`);
    }
    else{
        nomes.push(nome.value);
        telefones.push(tel.value);
    }
    

    nome.value = '';
    tel.value = '';

}

function atualizarTabela(){
    let linhas = '';
    for(let i = 0; i < nomes.length; i++){
        
        let linha = '<tr>';

        linha += `<td>${nomes[i]}</td>
                    <td>${telefones[i]}</td>
                    <td><button class="btn-opcao editar" title="Editar" id="${i}" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngDltsNdW5FUsnFQSDCeAiJTLaNXaOEOYxw&s" alt="editar"></button><button class="btn-opcao excluir" title="Excluir" id="${i}"><img src="https://cdn-icons-png.flaticon.com/512/216/216658.png" alt="excluir"></button></td>`;
        linha += '</tr>';

        linhas += linha;
    }

    let tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;

    adicionarEventosBotoes();
}

function adicionarEventosBotoes() {
    const botoesEditar = document.querySelectorAll('.btn-opcao.editar');
    const botoesExcluir = document.querySelectorAll('.btn-opcao.excluir');

    botoesEditar.forEach(botao => {
        botao.addEventListener('click', function() {
            editarContato(this.id);
            atualizarTabela();
        });
    });

    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', function() {
            deletarContato(this.id);
            atualizarTabela();
        });
    });
}

function deletarContato(id){
    nomes.splice(id, 1);
    telefones.splice(id, 1);
}

function editarContato(id){
    const nome = document.getElementById('nome-contato');
    const tel = document.getElementById('tel-contato');

    nome.value = nomes[id];
    tel.value = telefones[id];
    deletarContato(id);
    atualizarTabela();
}