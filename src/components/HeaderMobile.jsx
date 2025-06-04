import Logo from "./Logo";

import logoHeader from "../assets/logo-header.svg";
import imgCar from "../assets/mini-cart.svg";
import arrowLeft from "../assets/arrow-left.svg";

import "../styles/headerMobile.css";
import BarSearch from "./barSearch";
import { useState } from "react";

export default function HeaderMobile () {
    /* Estado usado para mostrar ou não a barra de pesquisa */
    const [estado, setEstado] = useState(false);

    // Se clicar na lupa, altera o estado
    function handleClickLupa() {
        setEstado(!estado);
    }

    return (
        <div className="mainHeaderRed">
            <div className="divHeaderRed">
                {/* Barras */}
                <div className="divHeaderRedBarras"><span className="pi pi-bars" style={{fontSize: "1.5rem"}}></span></div>

                <Logo image={logoHeader}/>

                {/* Lupa */}
                <div className="divHeaderRedLupa"
                onClick={handleClickLupa}>
                    <span className="pi pi-search"></span>
                </div>

                {/* Carrinho */}
                <div className="divHeaderRedCar"><img src={imgCar} alt="Imagem Carrinho de Compras" /></div>
            </div>

            {/* Mostra barra se clicar na lupa */}
            {
                estado && <div style={{marginTop: "30px"}}><BarSearch /></div>
            }
            
        </div>
    );
}
