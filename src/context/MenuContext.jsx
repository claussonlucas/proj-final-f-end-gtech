// AuthContext.jsx
// data: 04/06/2025

import { createContext, useState } from "react";

export const Context = createContext();

export const MenuContext = ({ children }) => {
        // InnerWidth: Retorna o tamanho atual da tela
    const [tamanhoTela, setTamanhoTela] = useState(innerWidth);
        
    // Monitora se o tamanho da tela mudou
    window.addEventListener("resize", () => {
    // Altera o estado caso o tamanho mude
    setTamanhoTela(innerWidth);
    });

    // estado visível para todos os children
    // usada para abrir e fechar modal
    const [modal, setModal] = useState(false);

    return (
        <>
            <Context.Provider value={{ tamanhoTela, setTamanhoTela, modal, setModal }}>
                {children}
            </Context.Provider>
        </>
    );
}