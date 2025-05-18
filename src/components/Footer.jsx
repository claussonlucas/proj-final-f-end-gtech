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
// Objetos do DataFooter
import { objOne, objThree, objTwo, titleOne, titleThree, titleTwo } from "../data/DataFooter";

export default function Footer () {
    
    return (
        <footer>
            <div className="divMainAndInfo">
                <div className="divMain">
                    <Logo image={logoFooter} />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat.</p>

                    <div className="logosSocial">
                        <Link to={"https://www.facebook.com/?locale=pt_BR"} target="_blank"><img src={imgFace} alt="Logo Facebook" /></Link>
                        <Link to={"https://www.instagram.com/"} target="_blank"><img src={imgInsta} alt="Logo Instagram" /></Link>
                        <Link to={"https://x.com/?lang=pt"} target="_blank"><img src={imgTwitter} alt="Logo Twitter" /></Link>
                    </div>
                </div>
                
                <div className="twoInfo">
                    <Information title={titleOne} informations={objOne} />
                    <Information title={titleTwo} informations={objTwo} />
                </div>
                <Information title={titleThree} informations={objThree} />
            </div>
            <hr className="hrFooter"/>

            <div className="finalLine"><h5 className="h5Footer">@ 2025 Digital College</h5></div>
        </footer>
    );
}
