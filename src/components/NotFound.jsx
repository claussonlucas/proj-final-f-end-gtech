// NotFound.jsx
// Data: 08/05/2025

import { Link } from "react-router-dom";

export default function NotFound () {

    return (
        <>
            <button><Link to={"/"}>Voltar</Link></button>
            <h2>Página não encontrada.</h2>
        </>
    );
}
