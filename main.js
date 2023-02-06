const form = document.getElementById('form-contato');
const contatos = [];
let linhas= '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaContato();
    contatosAdicionados();
})

function adcionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td><button type="reset"  id="button-reset">X</button></td>`;
    linha += `</tr>`;

    linhas += linha;
        
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
} 

function atualizaContato(){
    const corpoAgenda =document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}





