// Lupa.jsx
// Data: 10/05/2025

import { useState } from "react";
import styled from "styled-components";
import BarSearch from "./barSearch";

const DivLupa = styled.div `
    display: block;
    @media screen and (min-width: 1200px) {
    .divLupa {display: none;}
}
`

export default function Lupa () {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    /* <button onClick={handleClick}>pesquisa</button> */
    return (
        <DivLupa>
            <div className="divLupa">
                <span className="pi pi-search" onClick={handleClick}></span>
                
                {show && <p>nada</p>}
            </div>

            <button onClick={handleClick}>
            {show ? 'Esconder Componente' : 'Mostrar Componente'}
            </button>
            
            {/* Renderização condicional do componente */}
            {show && <BarSearch />}


        </DivLupa>
    );
}

// Componente que será mostrado/escondido
/* const Mensagem = () => {
  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h3>Esta é a mensagem do componente!</h3>
      <p>Você clicou no botão para me mostrar.</p>
    </div>
  );
}; */

// Componente principal
//const App = () => {
  // Estado para controlar se o componente deve ser mostrado
  //const [mostrarComponente, setMostrarComponente] = useState(false);

  // Função para alternar o estado
  /* const toggleComponente = () => {
    setMostrarComponente(!mostrarComponente);
  }; */

/*   return (
    <div style={{ padding: '20px' }}>
      <h1>Exemplo React - Mostrar Componente</h1>
      
      
      <button onClick={toggleComponente}>
        {mostrarComponente ? 'Esconder Componente' : 'Mostrar Componente'}
      </button>
      
      
      {mostrarComponente && <BarSearch />}
    </div>
  );
};

export default App; */