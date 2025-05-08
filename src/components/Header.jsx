// Header.jsx
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import imgCar from "../assets/mini-cart.svg";
import "../styles/Header.css";
import logoHeader from "../assets/logo-header.svg"

// estilos para ajustar componentes (talvez CSS)
/* component campo de busca */
/* usando o tema lara-light-indigo (App) */
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import MenuBar from "./MenuBar";

const Header = () => {
    return (
        <>
            <div className="header">
                <Logo image={logoHeader}/>

                <IconField
                    iconPosition="right"
                    className="ml-5 mr-6">
                    <InputIcon className="pi pi-search" />
                    <InputText
                        placeholder="Pesquisar produto..."
                        style={{backgroundColor: "#F5F5F5"}}
                        className="w-30rem"/>
                </IconField>

                <div className="botesConta">
                    <div id="btCadastre"><Link to={"/form"}>Cadastre-se</Link></div>
                    <div id="btEntrar"><Link to={"/"}>Entrar</Link></div>
                </div>
                <div className="divCarrinho"><img src={imgCar} alt="Imagem Carrinho de Compras" /></div>
            </div>

            <MenuBar />
        </>
    );
}

export default Header;


