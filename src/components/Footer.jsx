// Footer.jsx
// Data: 08/05/2025

import Logo from "./Logo";
import "../styles/footer.css"
import logoFooter from "../assets/logo-footer.svg"
import imgFace from "../assets/facebook.svg";
import imgInsta from "../assets/instagram.svg";
import imgTwitter from "../assets/twitter.svg";

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
                            <img src={imgFace} alt="Logo Facebook" />
                            <img src={imgInsta} alt="Logo Instagram" />
                            <img src={imgTwitter} alt="Logo Twitter" />
                        </div>
                    </div>

                    <div className="divInfo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat, commodi numquam voluptates minima rem, dignissimos tempore laboriosam corrupti aperiam velit iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat, commodi numquam voluptates minima rem, dignissimos tempore laboriosam corrupti aperiam velit iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat, commodi numquam voluptates minima rem, dignissimos tempore laboriosam corrupti aperiam velit iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat, commodi numquam voluptates minima rem, dignissimos tempore laboriosam corrupti aperiam velit iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt facere corporis magnam autem sequi perspiciatis incidunt quaerat, commodi numquam voluptates minima rem, dignissimos tempore laboriosam corrupti aperiam velit iste?</p>
                    </div>
                </div>
                <hr />

                <div className="finalLine"><h5>2025 Digital College</h5></div>
            </div>
        </footer>
    );
}
