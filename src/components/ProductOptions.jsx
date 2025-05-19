// ProductOptions.jsx
// Data: 17/05/2025
//import { useState } from "react";
import "../styles/productOptions.css"

export default function ProductOptions ({ options, radius, shape, type }) {
    
    /* FAZER LÓGICA SELEÇÃO DE ITEM E MUDAR COR */

    // Laço para mostrar itens
    let lista = options.map(option =>
        <li
            key={option.id}
            
            className={shape === "square" ? "square" : "circle"}
            style={type === "text" ? {borderRadius: radius} :
                {backgroundColor: option.numero}}>
                {type === "text" ? option.numero : ""}
            </li>
    );

    return (
        <>
            {/* Título */}
            <h5 className="titulo">{type === "text" ? "Tamanho" : "Cor" }</h5>
            
            {/* Mostra lista ul feita com o map */}
            <ul className="listaItens">{lista}</ul>
        </>
    );
}

/*
// tentativa com forEach
let lista = "";
    options.forEach(option =>
        lista += <li>{option}</li>
    );
    //lista = "</ul>";

// tentativa de logica para selecionar 1 item e borda mudar cor
const [estado, setEstado] = useState();
    function handleClick(params) {
        setEstado(!estado);
    }

    onClick={handleClick}
*/