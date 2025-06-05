// MenuBar.jsx
// Data: 07/05/2025

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menus = styled.div`
    & nav {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    }
    
    & nav ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        list-style: none;
        margin-top: 130px;
        margin-left: 0px;
        padding-left: 15px;
        & li a {
            display: flex;
            justify-content: start;
            align-items: start;
            color: var(--dark-gray-3);
            font-size: 14px;
            text-decoration: none;
            &:hover, &.active {
                color: var(--primary);
                border-radius: 4px;
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-underline-offset: 5px;
                font-weight: bold;
            }
        }
    }

`;

export default function MenuBarMobile() {
    return (
        <Menus>
            <nav className="menuBar">
                <ul>
                    <li><NavLink to={"/"} className="linkHome">Home</NavLink></li>
                    <li><NavLink to={"/produtos"} className="linkProdutos">Produtos</NavLink></li>
                    <li><NavLink to={"/categorias"} className="linkCategorias">Categorias</NavLink></li>
                    <li><NavLink to={"/pedidos"} className="linkPedidos">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </Menus>
    )
}



