// NotFound.jsx
// Data: 08/05/2025

import { Link } from "react-router-dom";
import styled from "styled-components";
import imgNotFound from "../assets/img-not-found.svg";

const Not = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .botao {
        width: 90px;
        height: 40px;
        position: absolute;
        top: 50px;
        left: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-gray-2);
        border-radius: 4px;

        & a {
            color: var(--primary);
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
        }
    }

    .main {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .texto {
        margin-left: 80px;
    
        & h2 {
            color: var(--primary);
        }
    }
`

export default function NotFound () {

    return (
        <Not>
            <div className="botao">
                <div><Link to={"/"}>Voltar</Link></div>
            </div>

            <div className="main">
                <img src={imgNotFound} alt="Imagem Ilustrativa" />
                
                <div className="texto">
                    <h2>Página não encontrada.</h2>
                    <p>Lamentamos o ocorrido. Clique no botão para voltar.</p>
                </div>
            </div>
        </Not>
    );
}
