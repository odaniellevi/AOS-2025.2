import express from 'express';
import tarefasRouter from "./routes/tarefasRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", tarefasRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});