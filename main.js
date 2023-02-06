const form = document.getElementById('form-contato');
const contatos = [];
let linhas= '';
let deleteContact = document.getElementById('contact');

form.addEventListener('submit',function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaContato();
    contatosAdicionados();
})

function adcionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');
    contatos.push ((inputNomeContato.value[contatos]));
;
    let linha = `<tr${deleteContact}>`
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += ` <td><button id="button-reset"  type="reset">x</button></td>`;
    linha += `</tr>`;

    linhas += linha;

    

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
} 

function atualizaContato(){
    const corpoAgenda =document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}





