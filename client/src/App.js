import React, { useState } from "react";
import axios from "axios";
import d8 from "./assets/d8.png";
import d12 from "./assets/d12.png";
import d20 from "./assets/d20.png";
import "./App.css";

function App() {
  // Estados (valores que serão atualizados na aplicação)
  const [ladosDado, setLadosDado] = useState(8);
  const [resultado, setResultado] = useState(null);
  const [historicoLancamentos, setHistoricoLancamentos] = useState([]);

  // Função que envia uma solicitação GET para o endpoint da API usando a biblioteca axios.
  // Caso a requisição seja bem sucedida, o state "resultado" e "historicoLancamentos" serão atualizados e exibidos na tela.
  function handleSelecionarDado(lados) { 
    axios.get(`rolar/${lados}`)
      .then(function(res) {
        const resultado = res.data.resultado;
        setResultado(`Resultado: ${resultado}`);
        setHistoricoLancamentos([...historicoLancamentos, resultado]);
      }).catch(function(error) {
        console.error(error);
    });
  }

  // Função que seta o array de histórico de lançamentos para seu valor inicial que é vazio 
  function handleLimparHistorico() {
    setHistoricoLancamentos([]);
  }

  return (
    <div className="app">
      <div className="table">

        <p className="title">Clique em um dos dados para obter um resultado</p>

        <div className="boxDados">
          <img src={d8} alt="dado 8 lados"
          className="btnDado" 
          onClick={() => {setLadosDado(8); handleSelecionarDado(8)}} 
          />
          <img src={d12} alt="dado 12 lados"
          className="btnDado" 
          onClick={() => {setLadosDado(12); handleSelecionarDado(12)}} 
          />
          <img src={d20} alt="dado 20 lados"
          className="btnDado" 
          onClick={() => {setLadosDado(20); handleSelecionarDado(20)}} 
          />
        </div>

        <p className="lados">
          Dado de <strong>{ladosDado} lados</strong> selecionado
        </p>

        {resultado && <p className="resultado">{resultado}</p>} 
        
        {resultado && <div className="boxHistorico">
          {historicoLancamentos.length > 0 && (
            <div className="boxNumeros">
              <p className="titleHistorico">Histórico de lançamentos</p>
              <ul>
                {historicoLancamentos.map((resultado, index) => (
                  <li key={index}>{resultado}-</li>
                ))}
              </ul>
              <button className="btnLimpar" onClick={handleLimparHistorico}>Limpar histórico</button>
            </div>
          )}
          
        </div>}
        
      </div>
    </div>
  );
}

export default App;