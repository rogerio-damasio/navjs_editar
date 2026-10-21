const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send("Rodando no Vercel);
});
module.exports = app; // Importante para Vercel
