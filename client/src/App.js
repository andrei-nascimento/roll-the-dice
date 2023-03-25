import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ladosDado, setLadosDado] = useState(6);
  const [resultado, setResultado] = useState(null);

  function handleSelecionarDado(lados) { 
    axios.get(`rolar/${lados}`).then(function(res) {
      const resultado = res.data.resultado;
      setResultado(`O resultado da rolagem foi: ${resultado}`);
    }).catch(function(error) {
      console.error(error);
    });
  }

  return (
    <div className="app">
      <div className="table">

        <p className="title">Clique em um dos dados abaixo para obter um resultado</p>

        <div className="boxDados">
          <button className="btnDado" onClick={() => {setLadosDado(6); handleSelecionarDado(6)}}>D6</button>
          <button className="btnDado" onClick={() => {setLadosDado(12); handleSelecionarDado(12)}}>D12</button>
          <button className="btnDado" onClick={() => {setLadosDado(20); handleSelecionarDado(20)}}>D20</button>
        </div>

        <p className="lados">Dado de <strong>{ladosDado} lados</strong> selecionado</p>

        {resultado && <p className="resultado">{resultado}</p>} 
        
      </div>
    </div>
  );
}

export default App;