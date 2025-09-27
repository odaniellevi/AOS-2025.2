let tarefas = [];
let currentId = 1;

function obterTodasAsTarefas() {
    return tarefas;
}

function obterTarefaPorId(id) {
    return tarefas.find((t) => t.id === Number(id));
}

function criarTarefa(data) {
    const novaTarefa = {
        id: currentId++,
        descricao: data.descricao,
        concluida: data.concluida ?? false,
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
}

function atualizarTarefa(id, data) {
    const tarefa = obterTarefaPorId(id);
    if (!tarefa) return null;

    if (data.descricao != undefined) tarefa.descricao = data.descricao;
    if (data.concluida != undefined) tarefa.concluida = data.concluida;

    return tarefa;
}

function deletarTarefa(id) {
    const index = tarefas.findIndex((t) => t.id === Number(id));
    if (index === -1) return false;
    tarefas.splice(index, 1);
    return true;
}

export {
    obterTodasAsTarefas,
    obterTarefaPorId,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa,
};