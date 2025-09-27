import * as TarefasModel from "../../models/tarefaModel.js";

export function listarTarefas(req, res) {
    const tarefa = TarefasModel.getTarefaById(req.params.id);
    if (!tarefa) {
        return res.status(404).json({ error: "A tarefa não foi encontrada"});
    }
    res.json(tarefa);
}