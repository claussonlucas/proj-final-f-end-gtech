// ProductOptions.jsx
// Data: 17/05/2025

import "../styles/productOptions.css"

export default function ProductOptions ({ options, radius, shape, type }) {

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
