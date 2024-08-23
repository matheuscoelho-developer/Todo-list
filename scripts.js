const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistDeItens = []


function adicionarNovaTarefa() {
    minhalistDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = null

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhalistDeItens.forEach((item, index) => {        // busca item por item no array
        novaLi = novaLi + `
    <li class="task ${item.concluida && "done"}">
        <img class="mark" width="40" height="40" src="https://img.icons8.com/color/40/ok--v1.png" alt="tarefa-concluida" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img class="mark" width="40" height="40" src="https://img.icons8.com/color/40/close-window.png" alt="fehcar-tarefa" onclick="deletarItem(${index})">
    </li>

    `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhalistDeItens))    // JSON.stringify transforma todos objetos em textos

}

function concluirTarefa(index) {
    minhalistDeItens[index].concluida = !minhalistDeItens[index].concluida        // ! inverte todo o valor que seria a troca de true pra false

    mostrarTarefas()

}

function deletarItem(index) {
    minhalistDeItens.splice(index, 1)             // permite deletar o que estiver no array

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhalistDeItens = JSON.parse(tarefasDoLocalStorage)         // JSON.parse transforma textos em ojetos
    }

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)