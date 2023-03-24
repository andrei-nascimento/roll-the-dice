const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Oiiiiiiiiiii" });
});

// O parâmetro 'dado' representa o número máximo de lados do dado a ser rolado
app.get("/rolar/:dado", function (req, res) {
    const dado = parseInt(req.params.dado);
    const resultado = Math.floor(Math.random() * dado) + 1;
    res.json({ resultado: resultado });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});