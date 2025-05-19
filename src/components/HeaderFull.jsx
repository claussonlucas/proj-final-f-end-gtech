// HeaderFull.jsx

import logoHeader from "../assets/logo-header.svg";
import imgCar from "../assets/mini-cart.svg";
import Logo from "./Logo";

import "../styles/Header.css";

/* usando o tema lara-light-indigo (App) */

import BarSearch from "./barSearch";
import BotoesConta from "./BotoesConta";
import MenuBar from "./MenuBar";

const HeaderFull = () => {
    return (
        <>
            <div className="header">
                <Logo image={logoHeader}/>

                <BarSearch />

                {/* Botões cadastrar e entrar */}
                <BotoesConta />

                {/* Carrinho */}
                <div className="divCarrinho"><img src={imgCar} alt="Imagem Carrinho de Compras" /></div>
            </div>

            {/* Menus */}
            <MenuBar />
        </>
    );
}

export default HeaderFull;