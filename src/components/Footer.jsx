// Footer.jsx
// Data: 08/05/2025

import { Link } from "react-router-dom";
import imgFace from "../assets/facebook.svg";
import imgInsta from "../assets/instagram.svg";
import logoFooter from "../assets/logo-footer.svg";
import imgTwitter from "../assets/twitter.svg";
import "../styles/footer.css";
import Information from "./Information";
import Logo from "./Logo";

/*
<Information>
                            <h4>Informações</h4>
                            <h5>Sobre Drip Store</h5>
                            <h5>Segurança</h5>
                            <h5>Wishlist</h5>
                            <h5>Blog</h5>
                            <h5>Trabalhe conosco</h5>
                            <h5>Meus Pedidos</h5>
                        </Information>
                        <Information>
                            <h4>Categorias</h4>
                            <h5>Calças</h5>
                            <h5>Bonés</h5>
                            <h5>Headphones</h5>
                            <h5>Tênis</h5>
                            
                        </Information>
                        <Information>
                            <h4>Contato</h4>
                            <h5>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</h5>
                            <h5>(85) 3051-3411</h5>
                            
                        </Information>
*/
// var e obj - footer
const titleOne = "titulo1";
const objOne = [
    {
        "text": "Sobre Drip Store",
        "link": "/caminho"
    },
    {
        "text": "Segurança",
        "link": "/caminho"
    },
    {
        "text": "Wishlist",
        "link": "/caminho"
    },
    {
        "text": "Blog",
        "link": "/caminho"
    },
    {
        "text": "Trabalhe conosco",
        "link": "/caminho"
    },
    {
        "text": "Meus Pedidos",
        "link": "/caminho"
    }
];


export default function Footer () {

    return (
        <footer>
            <div className="containerFooter">
                <div className="container">
                    <div className="divMain">
                        <Logo
                            image={logoFooter}
                        />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat.</p>

                        <div className="logosSocial">
                            <Link to={"https://www.facebook.com/?locale=pt_BR"} target="_blank"><img src={imgFace} alt="Logo Facebook" /></Link>
                            <Link to={"https://www.instagram.com/"} target="_blank"><img src={imgInsta} alt="Logo Instagram" /></Link>
                            <Link to={"https://x.com/?lang=pt"} target="_blank"><img src={imgTwitter} alt="Logo Twitter" /></Link>
                        </div>
                    </div>

                    <div className="divInfo">
                        <div className="twoInfo">
                            <Information>
                                <h4>Informações</h4>
                                <h5>Sobre Drip Store</h5>
                                <h5>Segurança</h5>
                                <h5>Wishlist</h5>
                                <h5>Blog</h5>
                                <h5>Trabalhe conosco</h5>
                                <h5>Meus Pedidos</h5>
                            </Information>
                            <Information>
                                <h4>Categorias</h4>
                                <h5>Calças</h5>
                                <h5>Bonés</h5>
                                <h5>Headphones</h5>
                                <h5>Tênis</h5>
                                
                            </Information>
                        </div>
                        <Information>
                            <h4>Contato</h4>
                            <h5>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</h5>
                            <h5>(85) 3051-3411</h5>
                            
                        </Information>
                    </div>
                </div>
                <hr />

                <div className="finalLine"><h5>@ 2025 Digital College</h5></div>
            </div>
        </footer>
    );
}
