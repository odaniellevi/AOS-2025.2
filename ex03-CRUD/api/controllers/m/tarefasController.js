import * as TarefaModel from "../../models/tarefaModel.js";

export function listarTarefas(req, res) {
    res.json(TarefaModel.obterTodasAsTarefas());
}

export function buscarTarefa(req, res) {
    const tarefa = TarefaModel.obterTarefaPorId(req.params.id);
    if (!tarefa) {
        return res.status(404).json({ error: "A tarefa não foi encontrada" });
    }
    res.json(tarefa);
}

export function criarTarefa(req, res) {
    const novaTarefa = TarefaModel.criarTarefa(req.body);
    res.status(201).json(novaTarefa);
}

export function atualizarTarefa(req, res) {
    const tarefaAtualizada = TarefaModel.atualizarTarefa(req.params.id, req.body);
    if (!tarefaAtualizada) {
        return res.status(404).json({ error: "A tarefa não foi encontrada" });
    }
    res.json(tarefaAtualizada);
}

export function deletarTarefa(req, res) {
    const tarefaDeletada = TarefaModel.deletarTarefa(req.params.id);
    if (!tarefaDeletada) {
        return res.status(404).json({ error: "A tarefa não foi encontrada" });
    }
    res.status(204).end();
}