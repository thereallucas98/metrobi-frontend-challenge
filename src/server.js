const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Caminho absoluto para a pasta onde está o index.html
const staticPath = path.join(__dirname, "question-3");

// Servir arquivos estáticos a partir da pasta correta
app.use(express.static(staticPath));

// Rota para servir o index.html diretamente
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
