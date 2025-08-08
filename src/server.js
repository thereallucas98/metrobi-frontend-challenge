const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const staticPath = path.join(__dirname, "question-3");
// const staticPath = path.join(__dirname, "question-6");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
