import express from 'express';  // Importação correta para ES Modules
import cors from 'cors';         // Importação do CORS

const app = express();          // Agora express será uma função
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "API rodando com sucesso!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
