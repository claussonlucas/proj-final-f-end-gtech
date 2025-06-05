// Header.jsx

import "../styles/Header.css";

import HeaderFull from "./HeaderFull";
import HeaderMobile from "./HeaderMobile";
import { useState } from "react";

const Header = () => {
    // InnerWidth: Retorna o tamanho atual da tela
    const [estado, setEstado] = useState(innerWidth);
        
    // Monitora se o tamanho da tela mudou
    window.addEventListener("resize", () => {
    // Altera o estado caso o tamanho mude
    setEstado(innerWidth);
    });

    return (
        <>
            {/* Teste de qual compon. renderizar */}
            {
                estado > 1000 ?
                <HeaderFull />
                :
                <HeaderMobile />
            }
        </>
    );
}

export default Header;