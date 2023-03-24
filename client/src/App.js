import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/rolar/6")
      .then((res) => res.json())
      .then((data) => setData(data.resultado));
  }, []);

  function handleJogarDado() {
    const dado = 6 //número de lados do dado escolhido
    axios.get(`rolar/${dado}`).then(function(res) {
      const resultado = res.data.resultado;
      alert(`O resultado da rolagem do dado ${dado} foi ${resultado}`);
    }).catch(function(error) {
      console.error(error);
    });
  }



  return (
    <div className="app">
      <div className="table">
        <div className="boxDados">
          <button className="btnDado">D6</button>
          <button className="btnDado">D12</button>
          <button className="btnDado">D20</button>
        </div>
        <p>Dado de <strong>6</strong> lados selecionado</p>
        <div className="line"></div>
        <div className="boxJogar">
          <button className="btnJogar" onClick={handleJogarDado}>Jogar dado</button>
          <p className="resultado">
          Resultado: {!data ? "Loading..." : data}
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;