const express = require("express");
const cors = require("cors");
const scrapeLenovoNotebooks = require("./scraper");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/notebooks/lenovo", async (req, res) => {
  try {
    const notebooks = await scrapeLenovoNotebooks();
    res.json(notebooks);
  } catch (error) {
    res.status(500).json({ error: "Falha ao coletar os dados" });
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
