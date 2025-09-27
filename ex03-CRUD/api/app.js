import express from 'express';
import tarefasRouter from "./routes/tarefasRoutes.js";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao meu servidor Express!</h1><p>A conexão funcionou!</p>');
});

app.use(express.json());
app.use("/api", tarefasRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});