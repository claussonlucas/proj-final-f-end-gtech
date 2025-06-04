// AuthContext.jsx
// data: 04/06/2025

import { createContext, useState } from "react";

export const Context = createContext();

export const AuthContext = ({ children }) => {
    // estado visível para todos os children
    // usada para abrir e fechar modal
    const [modal, setModal] = useState(false);

    return (
        <>
            <Context.Provider value={{ modal, setModal }}>
                {children}
            </Context.Provider>
        </>
    );
}