const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/rolar/:dado", function (req, res) {
    const dado = parseInt(req.params.dado);
    const resultado = Math.floor(Math.random() * dado) + 1;
    res.json({ resultado: resultado });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});