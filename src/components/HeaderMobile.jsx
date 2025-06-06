import Logo from "./Logo";

import logoHeader from "../assets/logo-header.svg";
import imgCar from "../assets/mini-cart.svg";

import { useContext, useState } from "react";
import { Context } from "../context/MenuContext";
import "../styles/headerMobile.css";
import BarSearch from "./barSearch";

export default function HeaderMobile () {
    // traz o estado criado no AuthContext
    const { modal, setModal } = useContext(Context);
    //console.log(modal);
    
    /* Estado usado para mostrar ou não a barra de pesquisa */
    const [estado, setEstado] = useState(false);

    function handleClickBarra() {
        setModal(!modal);
        setEstado(false);
    }

    // Se clicar na lupa, altera o estado
    function handleClickLupa() {
        setEstado(!estado);
        setModal(false);
    }

    return (
        <div className="mainHeaderRed">
            <div className="divHeaderRed">
                {/* Botão Barras */}
                <div className="divHeaderRedBarras" onClick={handleClickBarra}
                style={modal ? {color: "var(--primary)"} : {color: "black"}}>
                    <span className="pi pi-bars" style={{fontSize: "1.5rem"}}></span>
                </div>

                <Logo image={logoHeader}/>

                {/* Lupa */}
                <div className="divHeaderRedLupa"
                onClick={handleClickLupa}
                style={estado ? {color: "var(--primary)"} : {color: "black"}}>
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
