// Header.jsx
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import imgCar from "../assets/mini-cart.svg";
import logoHeader from "../assets/logo-header.svg"

import "../styles/Header.css";

/* usando o tema lara-light-indigo (App) */

import MenuBar from "./MenuBar";
import BarSearch from "./barSearch";
import Lupa from "./Lupa";
import BotoesConta from "./BotoesConta";

const Header = () => {
    return (
        <>
            <div className="header">
                <Logo image={logoHeader}/>

                <BarSearch />
                <Lupa />

                <BotoesConta />
                <div className="divCarrinho"><img src={imgCar} alt="Imagem Carrinho de Compras" /></div>
            </div>

            <MenuBar />
        </>
    );
}

export default Header;