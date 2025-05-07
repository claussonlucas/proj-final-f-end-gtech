// MenuBar.jsx
// Data: 07/05/2025

import { NavLink } from "react-router-dom";
import "../styles/MenuBar.css";

export default function MenuBar() {
    return (
        <nav>
            <ul>
                <li><NavLink to={"/"} className="linkHome">Home</NavLink></li>
                <li><NavLink to={"/"} className="linkProdutos">Produtos</NavLink></li>
                <li><NavLink to={"/"} className="linkCategorias">Categorias</NavLink></li>
                <li><NavLink to={"/"} className="linkPedidos">Meus Pedidos</NavLink></li>
            </ul>
        </nav>
    )
}

