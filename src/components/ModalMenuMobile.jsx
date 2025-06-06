// ModalMenuMobile.jsx
// data: 04/06/2025

import { useContext, useEffect, useState } from "react";
import { Context } from "../context/MenuContext";

import "../styles/modalMenuMobile.css";
import BotoesContaMobile from "./BotoesContaMobile";
import MenuBarMobile from "./MenuBarMobile";


export default function ModalMenuMobile () {
    const { setModal } = useContext(Context);

    // estado que guarda o tamanho da tela
    const [estado, setEstado] = useState(innerWidth);

    // Monitora se o tamanho da tela mudou
    window.addEventListener("resize", () => {
    setEstado(innerWidth); // Altera o estado caso o tamanho mude
    });

    if (estado > 1000) {
        setModal(false);
    }

    // clicar no overlay, fecha o modal
    function handleClickOver() {
        setModal(false);
    }

    return (
        <>
            <div className="overlay" onClick={handleClickOver}>
                <div className="divMenuMob">
                    <h4 className="h4MenuMob">Páginas</h4>
                    <MenuBarMobile />
                    <hr className="lineMenuMob"/>
                    <BotoesContaMobile />
                </div>
            </div>
        </>
    );
}
