let tarefas = [];
let currentId = 1;

function getAllTarefas() {
    return tarefas;
}

function getTarefaById() {
    return tarefas.find((t) => t.id === Number(id));
}

function createTarefa(data) {
    const novaTarefa = {
        id: currentId++,
        descricao: data.descricao,
        concluida: data.concluida ?? false,
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
}