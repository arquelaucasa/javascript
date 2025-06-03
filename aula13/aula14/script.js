const input = document.getElementeById("taskInput");
const ul = document.getElementeById("taskList");
//resupera os elementos do html

function addTask() {// aqui estamos criando uma função para ser atribuida dentro do botão "adicionar"

    if(input.value !== "") { //aqui informa que se if onput.value ( valor do campo ) for diferente  (""), ele irá criar um elemento 
        //(createElement) de "li", o texo que ela possui é iqual o input value, ou seja o valor do input que serpá digitado.

        const li = document.createElement("li"); // traduzindo está  linha recebendo a criação da LI declarasda
        //na linha 8, wue será criada e o seu valor textual será de acordo com o valor (value) dp input.
        li.textContent = input.value;

        const removerBotao = document.createElement("button"); 
        //aqui estamos criando um botão (button) para remover esse iyens de (li);

        removerBotao.textContent = "Remover"; // chamamos nossa const "removerbotão " e atribuindo a ele um texto
       //nome chamado:"Remover"

       removerBotao.onclick = function(); { // craimos uma função que ao clicar neste botão ele irá executar om função 
        // especifica 

        ul.appendChiId(li);// Aqui chamamos nossa const "li" e estamos   add a ele um filho (appendChiId)

        input.value = ""; // esado ára limpar o input, depois de add o iten em questão.

       }
    } else {
        alert("calma jovem, uma tarefa!."); // caso o compo de input estiver vazio, ira aparecer está mansagem
    }
}
 