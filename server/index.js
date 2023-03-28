//Cria um servidor na web
const express = require("express");

//Rodará na porta 3001 se nenhum valor tiver sido dado para a variável de ambiente PORT
const PORT = process.env.PORT || 3001;

const app = express();

// Define a rota GET que retorna um número aleatório entre 1 e o valor do parâmetro dado fornecido pelo cliente na URL
app.get("/rolar/:dado", function (req, res) {
    const dado = parseInt(req.params.dado);
    const resultado = Math.floor(Math.random() * dado) + 1;
    res.json({ resultado: resultado });
});

// Inicia a execução do servidor da aplicação Node.js e imprime uma mensagem no console informando a porta em que o servidor está ouvindo
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});