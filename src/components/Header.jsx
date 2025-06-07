// Header.jsx

import "../styles/Header.css";

import HeaderFull from "./HeaderFull";
import HeaderMobile from "./HeaderMobile";
import { useContext } from "react";
import { Context } from "../context/MenuContext";

const Header = () => {
    const { tamanhoTela } = useContext(Context);

    return (
        <>
            {/* Teste de qual compon. renderizar */}
            {
                tamanhoTela > 1000 ?
                <HeaderFull />
                :
                <HeaderMobile />
            }
        </>
    );
}

export default Header;