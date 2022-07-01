import React from "react";
import Api from "./Api";
import { FiSearch } from 'react-icons/fi';
import './style.css';


function App() {
  const [cep, setCep] = React.useState('');
  const [dados, setDados] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const inputElement = React.useRef();

  function handleChange({ target }) {
    if(target.value) {
      setCep(target.value);
    } else {
      setCep(null)
    }
  }

  async function fetchCep() {
    const response = await Api.get(`${cep}/json`);
    const data = response.data;
    setDados(data)
  }

  return (
    <div className="container">
      <h1>BUSCAR CEP</h1>
      <div className="content-bg">
        <label htmlFor="cep">CEP</label>
        <div className="button-search">
          <input 
            ref={inputElement}
            id="cep" 
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={handleChange}
            />
          <button onClick={fetchCep}>
            <FiSearch size={25} color="#DCDCDC"/>
          </button>
        </div>
        <ul className="content-cep">
          <li>Logradouro : <span>{dados && dados.logradouro}</span></li>
          <li>Bairro : <span>{dados && dados.bairro}</span></li>
          <li>Localidade : <span>{dados && dados.localidade}</span></li>
          <li>UF : <span>{dados && dados.uf}</span></li>
          <li>DDD: <span>{dados && dados.ddd}</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
